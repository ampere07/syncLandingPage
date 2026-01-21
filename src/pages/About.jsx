const About = () => {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark">About Us</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          We are dedicated to delivering exceptional solutions that drive success. 
          Our team combines expertise with innovation to create products that exceed expectations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary mb-2">10+</h3>
            <p className="text-lg text-gray-600">Years Experience</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary mb-2">500+</h3>
            <p className="text-lg text-gray-600">Clients Served</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary mb-2">98%</h3>
            <p className="text-lg text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
