import heroImage from "../../assets/undraw_logistics_8vri.svg"; 

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#EEF7FF] via-white to-[#F5FAFF] py-16 md:py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#CFE5FF] rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#CFE5FF] rounded-full opacity-20 translate-x-16 translate-y-16"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#3B82F6] bg-[#E0F2FE] rounded-full mb-4">
            Welcome to StockPilot
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Smarter <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">Inventory Control</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            <strong className="text-[#3B82F6]">StockPilot</strong> helps you manage, track, and optimize your inventory in real-time — 
            so you never run out of what matters most.
          </p>

          <p className="mt-4 text-base text-gray-500 leading-relaxed">
            Streamline procurement, reduce waste, and forecast demand with intelligent analytics tailored for your business.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-medium rounded-lg hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="px-8 py-3.5 border-2 border-[#3B82F6] text-[#3B82F6] font-medium rounded-lg hover:bg-[#E0F2FE] transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {[
              { value: "99.9%", label: "Stock Accuracy" },
              { value: "500+", label: "Products Tracked" },
              { value: "24/7", label: "System Uptime" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-gray-800">{stat.value}</h2>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative">
            <img
              src={heroImage}
              alt="Inventory management dashboard illustration"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="p-3 bg-[#E0F2FE] rounded-full text-[#3B82F6]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">Trusted by</p>
                  <p className="text-base font-bold text-gray-800">Top Retail Businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
