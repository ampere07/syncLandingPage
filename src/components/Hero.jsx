const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-primary text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">Welcome to Your Brand</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600">Transform your business with our innovative solutions</p>
        <button className="px-10 py-4 text-lg bg-primary text-white font-semibold rounded-full hover:bg-primary-dark hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
