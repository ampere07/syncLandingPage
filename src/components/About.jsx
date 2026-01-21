const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-[#1a0b2e]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Orbital Animation */}
        <div className="relative w-full max-w-xl mx-auto mb-16 h-[500px]">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="text-center bg-[#2d1b4e] rounded-full w-40 h-40 flex flex-col items-center justify-center border-2 border-purple-500/30">
              <div className="text-5xl font-bold text-white mb-1">20k+</div>
              <div className="text-sm text-gray-300">Specialists</div>
            </div>
          </div>

          {/* Inner Orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-purple-500/30 rounded-full animate-[spin_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_20s_linear_infinite_reverse]">
              <span className="text-3xl">👨‍💼</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_20s_linear_infinite_reverse]">
              <span className="text-3xl">👩‍💻</span>
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_20s_linear_infinite_reverse]">
              <span className="text-3xl">👨‍🔬</span>
            </div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_20s_linear_infinite_reverse]">
              <span className="text-3xl">👩‍🎨</span>
            </div>
          </div>

          {/* Outer Orbit */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-purple-400/20 rounded-full animate-[spin_30s_linear_infinite_reverse]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_30s_linear_infinite]">
              <span className="text-2xl">👨‍🏫</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_30s_linear_infinite]">
              <span className="text-2xl">👩‍⚕️</span>
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_30s_linear_infinite]">
              <span className="text-2xl">👨‍🚀</span>
            </div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-xl border-2 border-white/20 animate-[spin_30s_linear_infinite]">
              <span className="text-2xl">👩‍🔧</span>
            </div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Us</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          We are dedicated to delivering exceptional solutions that drive success. 
          Our team combines expertise with innovation to create products that exceed expectations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary-light mb-2">10+</h3>
            <p className="text-lg text-gray-300">Years Experience</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary-light mb-2">500+</h3>
            <p className="text-lg text-gray-300">Clients Served</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary-light mb-2">98%</h3>
            <p className="text-lg text-gray-300">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
