import { Zap, Shield, Link2, BarChart3, HeadphonesIcon, TrendingUp } from 'lucide-react';
import HoneycombCanvas from '../components/HoneycombCanvas';
import laptopImage from '../assets/LAPTOP.png';
import mobileImage from '../assets/MOBILE.png';
import './Home.css';

const Home = () => {
  const features = [
    { title: 'Fast Performance', description: 'Lightning-fast load times and seamless user experience', icon: Zap },
    { title: 'Secure Platform', description: 'Enterprise-grade security to protect your data', icon: Shield },
    { title: 'Easy Integration', description: 'Connect with your existing tools effortlessly', icon: Link2 },
    { title: 'Analytics Dashboard', description: 'Comprehensive insights to drive decision-making', icon: BarChart3 },
    { title: '24/7 Support', description: 'Expert assistance whenever you need it', icon: HeadphonesIcon },
    { title: 'Scalable Solutions', description: 'Grow without limits as your business expands', icon: TrendingUp }
  ];

  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-20 pt-24 md:pt-20 relative overflow-hidden"
      >
        <HoneycombCanvas />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-primary font-semibold text-sm">ENTERPRISE SOLUTIONS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Transform Your Business
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Streamline operations and drive growth with our comprehensive business solutions.
                Built for enterprises that demand excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div>
                  <div className="text-3xl font-bold text-primary">38k+</div>
                  <div className="text-sm text-gray-600">Client Subscribers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full max-w-[600px] sm:max-w-[700px] lg:max-w-[800px] aspect-[4/3] sm:aspect-[1.3] flex items-center justify-center">
                {/* Laptop: positioned on the left and bottom */}
                <img
                  src={laptopImage}
                  alt="Laptop"
                  className="absolute left-0 bottom-4 w-[90%] h-auto object-contain z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                />
                {/* Mobile: on the right side, overlapping, and positioned lower (downwards) */}
                <img
                  src={mobileImage}
                  alt="Mobile"
                  className="absolute right-0 bottom-0 w-[35%] h-auto object-contain z-20 drop-shadow-[0_25px_45px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-primary font-semibold text-sm">OUR CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Enterprise-Grade Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Powerful tools designed for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {/* Hexagon Ripple Elements */}
                      <div className="absolute inset-0 bg-primary/30 clip-hexagon hex-ripple"></div>
                      <div className="absolute inset-0 bg-primary/20 clip-hexagon hex-ripple delay-1"></div>

                      {/* The Hexagon Border Layer */}
                      <div className="absolute inset-0 bg-primary/20 transition-colors duration-300 group-hover:bg-primary clip-hexagon"></div>

                      {/* The Hexagon Inner/Fill Layer */}
                      <div className="absolute inset-[2px] bg-white group-hover:bg-primary transition-colors duration-300 clip-hexagon flex items-center justify-center overflow-hidden">
                        {/* Icon */}
                        <Icon className="relative w-8 h-8 text-primary group-hover:text-white transition-colors duration-300 z-10" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{feature.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed text-center">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
