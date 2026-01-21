import { useEffect, useRef } from 'react';
import './Pricing.css';

const Pricing = () => {
  const scrollContainerRef = useRef(null);
  const professionalCardRef = useRef(null);

  const starSizes = ['small', 'small', 'medium', 'small', 'large', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'small', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'medium', 'small', 'small', 'medium', 'large', 'small', 'medium', 'xlarge', 'small', 'medium', 'large', 'small'];

  const plans = [
    {
      name: 'Starter',
      price: '₱999',
      features: ['3 Projects', '5GB Storage', 'Email Support', 'Basic Features']
    },
    {
      name: 'Basic',
      price: '₱1,499',
      features: ['5 Projects', '10GB Storage', 'Basic Support', 'Core Features', 'Mobile App']
    },
    {
      name: 'Professional',
      price: '₱4,299',
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Features', 'API Access', 'Team Collaboration'],
      popular: true
    },
    {
      name: 'Business',
      price: '₱8,199',
      features: ['Unlimited Projects', '500GB Storage', 'Dedicated Support', 'All Features', 'Custom Integration', 'Advanced Analytics', 'White Label']
    },
    {
      name: 'Enterprise',
      price: '₱16,499',
      features: ['Unlimited Everything', 'Unlimited Storage', '24/7 Support', 'All Features', 'Custom Development', 'SLA Guarantee', 'Dedicated Manager', 'Training Sessions']
    }
  ];

  useEffect(() => {
    if (scrollContainerRef.current && professionalCardRef.current) {
      const container = scrollContainerRef.current;
      const card = professionalCardRef.current;
      const scrollPosition = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Stars Background */}
      <div className="stars-container">
        {starSizes.map((size, i) => (
          <div key={i} className={`diamond-star ${size}`}></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
          <span className="text-primary font-semibold text-sm">FLEXIBLE PLANS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Choose Your Plan</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Select the perfect plan for your business needs
        </p>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 md:p-8 bg-white rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-[500px] border-2 ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
              <div className="mb-6 flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-sm text-gray-500 mt-1 font-medium">/month</span>
              </div>
              <div className="flex-1 overflow-y-auto mb-6 md:mb-8 scrollbar-hidden">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-sm md:text-base text-gray-600 py-3 border-b border-gray-100 last:border-0 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-3 md:py-4 font-bold rounded-lg transition-all duration-300 mt-auto ${
                plan.popular
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div ref={scrollContainerRef} className="lg:hidden overflow-x-auto scrollbar-hidden -mx-4 px-4 pt-6">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {plans.map((plan, index) => (
              <div 
                key={index}
                ref={plan.popular ? professionalCardRef : null}
                className={`relative p-6 bg-white rounded-xl transition-all duration-300 flex flex-col h-[500px] border-2 w-[280px] flex-shrink-0 ${
                  plan.popular 
                    ? 'border-primary shadow-xl mt-6' 
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 text-gray-900">{plan.name}</h3>
                <div className="mb-6 flex flex-col items-center">
                  <span className="text-3xl font-bold text-primary">{plan.price}</span>
                  <span className="text-sm text-gray-500 mt-1 font-medium">/month</span>
                </div>
                <div className="flex-1 overflow-y-auto mb-6 scrollbar-hidden">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 py-3 border-b border-gray-100 last:border-0 flex items-center">
                        <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={`w-full py-3 font-bold rounded-lg transition-all duration-300 mt-auto ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
