import { Cloud, Server } from 'lucide-react';
import './About.css';

/**
 * Positions a logo on a circular orbit using percentage-based coordinates.
 * @param {number} rPct - Ring radius as a percentage of the container's half-width (0–50)
 * @param {number} deg  - Angle in degrees, 0 = top (12 o'clock), clockwise
 * @param {number} size - Logo circle size in px
 */
const orbitStyle = (rPct, deg, size = 48) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  const cx = rPct * Math.cos(rad);
  const cy = rPct * Math.sin(rad);
  return {
    position: 'absolute',
    left: `calc(${50 + cx}% - ${size / 2}px)`,
    top: `calc(${50 + cy}% - ${size / 2}px)`,
    width: `${size}px`,
    height: `${size}px`,
  };
};

/**
 * Ring border circle centered in the container.
 * @param {number} rPct - radius as a percentage of the container's half-width
 */
const ringStyle = (rPct) => ({
  position: 'absolute',
  left: `${50 - rPct}%`,
  top: `${50 - rPct}%`,
  width: `${rPct * 2}%`,
  height: `${rPct * 2}%`,
  borderRadius: '50%',
  pointerEvents: 'none',
});

const LogoBubble = ({ icon: Icon, style, delay = '0s' }) => (
  <div
    className="orbit-icon-animate"
    style={{
      ...style,
      animationDelay: delay,
      position: 'absolute',
    }}
  >
    <div className="w-full h-full rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20 p-[5px] z-10 transition-transform duration-300 hover:scale-110 hover:border-primary/45 cursor-pointer">
      <Icon className="w-6 h-6 text-primary" />
    </div>
  </div>
);

const About = () => {
  const starSizes = ['small', 'small', 'medium', 'small', 'large', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'small', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'medium', 'small', 'small', 'medium', 'large', 'small', 'medium', 'xlarge', 'small', 'medium', 'large', 'small'];

  // Ring radii as % of container half-width (container is square, half-width = 50%)
  // R1=18.75 → 37.5% of container, R2=33 → 66%, R3=45.5 → 91%
  const R1 = 18.75;
  const R2 = 33;
  const R3 = 45.5;

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Stars Background */}
      <div className="stars-container">
        {starSizes.map((size, i) => (
          <div key={i} className={`diamond-star ${size}`}></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center w-full relative z-10 px-4 sm:px-6">

        {/* Responsive Orbital Diagram — square container scales with viewport */}
        <div
          className="relative mx-auto mb-12"
          style={{ width: 'min(520px, 92vw)', height: 'min(520px, 92vw)' }}
        >
          {/* Orbit ring borders */}
          <div className="absolute border-2 border-primary/20 orbit-ring-animate" style={{ ...ringStyle(R1), animationDelay: '0.1s' }} />
          <div className="absolute border-2 border-primary/15 orbit-ring-animate" style={{ ...ringStyle(R2), animationDelay: '0.2s' }} />
          <div className="absolute border-2 border-primary/10 orbit-ring-animate" style={{ ...ringStyle(R3), animationDelay: '0.3s' }} />

          {/* Center Circle */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2 z-20 center-circle-animate" style={{ left: '50%', top: '50%', animationDelay: '0.2s' }}>
            <div
              className="bg-gradient-to-br from-primary to-primary-dark rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white"
              style={{ width: 'min(110px, 20vw)', height: 'min(110px, 20vw)' }}
            >
              <div className="text-white font-bold" style={{ fontSize: 'min(1.5rem, 4vw)' }}>SYNC</div>
            </div>
          </div>

          {/* Inner ring — icons 1–3, alternating */}
          <LogoBubble icon={Cloud} style={orbitStyle(R1, 0)} delay="0.4s" />
          <LogoBubble icon={Server} style={orbitStyle(R1, 120)} delay="0.5s" />
          <LogoBubble icon={Cloud} style={orbitStyle(R1, 240)} delay="0.6s" />

          {/* Middle ring — icons 4–6, alternating */}
          <LogoBubble icon={Server} style={orbitStyle(R2, 60)} delay="0.7s" />
          <LogoBubble icon={Cloud} style={orbitStyle(R2, 180)} delay="0.8s" />
          <LogoBubble icon={Server} style={orbitStyle(R2, 300)} delay="0.9s" />

          {/* Outer ring — icons 7–9, alternating */}
          <LogoBubble icon={Cloud} style={orbitStyle(R3, 0)} delay="1.0s" />
          <LogoBubble icon={Server} style={orbitStyle(R3, 120)} delay="1.1s" />
          <LogoBubble icon={Cloud} style={orbitStyle(R3, 240)} delay="1.2s" />
        </div>

        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
          <span className="text-primary font-semibold text-sm">WHO WE ARE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Our Billing Company</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
          We build billing systems that simplify payments, automate invoices, and manage customer accounts efficiently. Our company delivers reliable, scalable solutions designed for modern businesses that need smart billing tools and clear reporting.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          From automated reconciliation and subscription management to robust analytics and customer self-service, we help businesses reduce manual work and improve cash flow. Our platform is built for agility, security, and seamless integration across sales channels.
        </p>
      </div>
    </section>
  );
};

export default About;
