const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      features: ['5 Projects', '10GB Storage', 'Basic Support', 'Core Features']
    },
    {
      name: 'Professional',
      price: '$79',
      features: ['Unlimited Projects', '100GB Storage', 'Priority Support', 'Advanced Features', 'API Access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      features: ['Unlimited Projects', 'Unlimited Storage', 'Dedicated Support', 'All Features', 'Custom Integration', 'SLA Guarantee']
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary-dark">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 bg-white rounded-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular 
                  ? 'border-primary scale-105 shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 py-2 border-b border-gray-200 last:border-0">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
