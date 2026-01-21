const Features = () => {
  const features = [
    { title: 'Fast Performance', description: 'Lightning-fast load times and seamless user experience' },
    { title: 'Secure Platform', description: 'Enterprise-grade security to protect your data' },
    { title: 'Easy Integration', description: 'Connect with your existing tools effortlessly' },
    { title: 'Analytics Dashboard', description: 'Comprehensive insights to drive decision-making' },
    { title: '24/7 Support', description: 'Expert assistance whenever you need it' },
    { title: 'Scalable Solutions', description: 'Grow without limits as your business expands' }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary-dark">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-dark">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
