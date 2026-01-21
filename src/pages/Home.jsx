import { useState, useEffect } from 'react';
import { Zap, Shield, Link2, BarChart3, HeadphonesIcon, TrendingUp } from 'lucide-react';
import image1 from '../assets/11.png';
import image2 from '../assets/demo.png';
import image3 from '../assets/MonitoringSystem.png';
import './Home.css';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [image1, image2, image3];

  const features = [
    { title: 'Fast Performance', description: 'Lightning-fast load times and seamless user experience', icon: Zap },
    { title: 'Secure Platform', description: 'Enterprise-grade security to protect your data', icon: Shield },
    { title: 'Easy Integration', description: 'Connect with your existing tools effortlessly', icon: Link2 },
    { title: 'Analytics Dashboard', description: 'Comprehensive insights to drive decision-making', icon: BarChart3 },
    { title: '24/7 Support', description: 'Expert assistance whenever you need it', icon: HeadphonesIcon },
    { title: 'Scalable Solutions', description: 'Grow without limits as your business expands', icon: TrendingUp }
  ];

  const starSizes = ['small', 'small', 'medium', 'small', 'large', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'small', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'medium', 'small', 'small', 'medium', 'large', 'small', 'medium', 'xlarge', 'small', 'medium', 'large', 'small'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getImageStyle = (index) => {
    const position = (index - currentIndex + images.length) % images.length;
    
    if (position === 0) {
      return {
        transform: 'translateX(-80%) rotateY(-25deg) scale(0.85)',
        zIndex: 1,
        opacity: 0.7
      };
    } else if (position === 1) {
      return {
        transform: 'translateX(0) rotateY(0deg) scale(1)',
        zIndex: 10,
        opacity: 1
      };
    } else {
      return {
        transform: 'translateX(80%) rotateY(25deg) scale(0.85)',
        zIndex: 1,
        opacity: 0.7
      };
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 py-20 pt-24 md:pt-20 relative overflow-hidden">
        {/* Stars Background */}
        <div className="stars-container">
          {starSizes.map((size, i) => (
            <div key={i} className={`diamond-star ${size}`}></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold text-sm">ENTERPRISE SOLUTIONS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                Transform Your Business
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">
                Streamline operations and drive growth with our comprehensive business solutions. 
                Built for enterprises that demand excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Enterprise Clients</div>
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
            
            <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2">
              <div className="relative flex items-center justify-center w-full h-[300px] sm:h-[350px] md:h-[400px]" style={{ perspective: '1000px' }}>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-in-out"
                    style={getImageStyle(index)}
                  >
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 object-cover rounded-xl shadow-2xl border-4 border-white"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">OUR CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">Enterprise-Grade Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
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
