import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#E0F2FE] flex items-center relative overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between leading-relaxed">
        {/* Left Content */}
        <div className="max-w-2xl md:w-1/2">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-8">
            <div>
              <span
                className="text-black block mb-2"
                style={{ lineHeight: '' }} 
              >
                Experienced
              </span>
              <span
                className="text-[#00A3E1] block mb-2"
                style={{ lineHeight: '1' }} 
              >
                mobile and web
              </span>
              <span
                className="text-black block mb-2"
                style={{ lineHeight: '1.3' }} 
              >
                applications and website builders measuring.
              </span>
            </div>
          </h1>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed projects.
            We build and develop mobile applications for several top platforms,
            including Android & IOS.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#00A3E1] text-white px-8 py-3 rounded-md hover:bg-[#0083B4] transition-colors">
              Contact us
            </button>
            <button className="border border-[#00A3E1] text-[#00A3E1] px-8 py-3 rounded-md hover:bg-[#00A3E1] hover:text-white transition-colors">
              View more
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="relative">
            {/* Main illustration */}
            <img
              src="/image.png" 
              alt="Developer illustration"
              className="w-full h-auto transform translate-x-10" 
            />
          </div>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E5BE] rounded-full transform translate-x-[-50%] translate-y-[50%] opacity-80"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A3E1] rounded-full transform translate-x-[30%] translate-y-[-30%] opacity-80"></div>
    </div>
  );
};

export default HeroSection;
