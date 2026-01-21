import { Wifi, Globe, Server, Cloud, Radio, Network } from 'lucide-react';
import './About.css';

const About = () => {
  const starSizes = ['small', 'small', 'medium', 'small', 'large', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'small', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'medium', 'small', 'small', 'medium', 'large', 'small', 'medium', 'xlarge', 'small', 'medium', 'large', 'small'];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Stars Background */}
      <div className="stars-container">
        {starSizes.map((size, i) => (
          <div key={i} className={`diamond-star ${size}`}></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center w-full relative z-10">
        {/* Orbital Animation */}
        <div className="relative w-full max-w-xl mx-auto mb-16 h-[400px] md:h-[500px] overflow-visible">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="text-center bg-gradient-to-br from-primary to-primary-dark rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center shadow-2xl border-4 border-white">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">20k+</div>
              <div className="text-xs md:text-sm text-white/90 font-medium">Specialists</div>
            </div>
          </div>

          {/* Inner Orbit Ring (Static) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 border-2 border-primary/20 rounded-full">
            <div className="absolute top-[15%] right-[15%] translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20">
                <Wifi className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>

            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20">
                <Globe className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>

            <div className="absolute bottom-[15%] left-[15%] -translate-x-1/2 translate-y-1/2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20">
                <Server className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Outer Orbit Ring (Static) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[400px] md:h-[400px] border-2 border-primary/10 rounded-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20">
                <Cloud className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
            </div>

            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20">
                <Radio className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-2 border-primary/20">
                <Network className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
            </div>
          </div>
        </div>

        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
          <span className="text-primary font-semibold text-sm">WHO WE ARE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Our Company</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed px-4">
          We are dedicated to delivering exceptional solutions that drive success. 
          Our team combines expertise with innovation to create products that exceed expectations.
        </p>
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 px-4 max-w-4xl mx-auto">
          <div className="p-4 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-3">10+</h3>
            <p className="text-xs md:text-base text-gray-600 font-medium">Years Experience</p>
          </div>
          <div className="p-4 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-3">500+</h3>
            <p className="text-xs md:text-base text-gray-600 font-medium">Clients Served</p>
          </div>
          <div className="p-4 md:p-8 bg-white rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-3">98%</h3>
            <p className="text-xs md:text-base text-gray-600 font-medium">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
