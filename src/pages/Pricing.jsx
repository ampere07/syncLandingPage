import './Pricing.css';

const Pricing = () => {
  const starSizes = ['small', 'small', 'medium', 'small', 'large', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'small', 'medium', 'small', 'xlarge', 'medium', 'small', 'large', 'medium', 'small', 'small', 'medium', 'large', 'small', 'medium', 'xlarge', 'small', 'medium', 'large', 'small'];

  const plans = [
    {
      name: 'Standard',
      price: '₱@',
      billing: '/customer',
      features: ['Standard billing system only']
    },
    {
      name: 'Premium',
      price: '₱5',
      billing: '/customer',
      features: ['Standard billing system', 'Extended configurations', 'Monitoring', 'Work order', 'Rebates', 'Discounts', 'Inventory', 'SMS blast', 'OSP commission', 'Reports'],
      popular: true
    },
    {
      name: 'Premium Plus',
      price: 'Add-on pricing',
      billing: '',
      features: ['Playstore', 'App Store', 'Extended Monitoring', 'Agent', 'Multi Tenant']
    }
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 bg-white rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col border-2 ${plan.popular
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
                {plan.billing && (
                  <span className="text-sm text-gray-500 mt-1 font-medium">{plan.billing}</span>
                )}
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
              <button className={`w-full py-3 md:py-4 font-bold rounded-lg transition-all duration-300 mt-auto ${plan.popular
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
