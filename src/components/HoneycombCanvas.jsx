import { useEffect, useRef } from 'react';

const HoneycombCanvas = () => {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    let animationFrameId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const addRipple = (x, y) => {
      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.max(width, height) * 0.9,
        speed: 700, // px per second
        startTime: Date.now(),
      });
    };

    const handleParentClick = (e) => {
      // Do not trigger background ripple if clicking on interactive form inputs or buttons
      if (
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'A' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        return;
      }

      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addRipple(x, y);
    };

    parent.addEventListener('click', handleParentClick);

    // Hexagon dimensions
    const R = 32; // radius of hexagon
    const H_WIDTH = R * Math.sqrt(3); // ~55px
    const H_HEIGHT = R * 1.5; // 48px

    // Draw a single hexagon
    const drawHexagon = (cx, cy) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * 60 - 30) * Math.PI / 180;
        const x = cx + R * Math.cos(angle);
        const y = cy + R * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();
      
      // Update active ripples
      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        const elapsed = (now - ripple.startTime) / 1000;
        ripple.radius = elapsed * ripple.speed;
        return ripple.radius < ripple.maxRadius;
      });

      const activeRipples = ripplesRef.current;

      // Draw the grid
      const cols = Math.ceil(width / H_WIDTH) + 1;
      const rows = Math.ceil(height / H_HEIGHT) + 2;

      for (let r = -1; r < rows; r++) {
        const cy = r * H_HEIGHT;
        const isOdd = r % 2 !== 0;
        const xOffset = isOdd ? H_WIDTH / 2 : 0;

        for (let c = -1; c < cols; c++) {
          const cx = c * H_WIDTH + xOffset;

          // Calculate fill opacity based on ripples
          let fillOpacity = 0;

          for (const ripple of activeRipples) {
            const dx = cx - ripple.x;
            const dy = cy - ripple.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // How close is the hexagon center to the ripple wave front
            const waveWidth = 120; // width of the ripple wave
            const age = (now - ripple.startTime) / 1000;
            const fade = Math.max(0, 1 - ripple.radius / ripple.maxRadius);
            
            if (dist < ripple.radius && dist > ripple.radius - waveWidth) {
              const intensity = (dist - (ripple.radius - waveWidth)) / waveWidth;
              // Smooth peak intensity
              const factor = Math.sin(intensity * Math.PI);
              fillOpacity = Math.max(fillOpacity, factor * 0.35 * fade);
            }
          }

          // Draw outline
          drawHexagon(cx, cy);
          ctx.strokeStyle = 'rgba(124, 58, 237, 0.18)'; // match index.css honeycomb opacity
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw fill if active
          if (fillOpacity > 0) {
            ctx.fillStyle = `rgba(124, 58, 237, ${fillOpacity})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      parent.removeEventListener('click', handleParentClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default HoneycombCanvas;
