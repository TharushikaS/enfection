const CallToAction = () => {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Light Card */}
            <div className="bg-gray-50 p-8 md:p-12 rounded-2xl text-center h-[380px]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Lorem Ipsum is simply<br />dummy text.
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web 
                applications and website builders measuring dozens of completed 
                projects. We build and develop mobile applications for several top 
                platforms, including Android & iOS.
              </p>
              <button className="px-8 py-3 bg-[#0EA5E9] text-white rounded-md hover:bg-[#2563eb] transition-colors">
                View More
              </button>
            </div>
  
            {/* Blue Card */}
            <div className="bg-[#0EA5E9] p-8 md:p-12 rounded-2xl text-center relative h-[380px]">
              {/* Notification Bell Icon */}
              <div className="absolute -top-4 -right-4">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M30 12.5C30 9.84784 28.9464 7.3043 27.0711 5.42893C25.1957 3.55357 22.6522 2.5 20 2.5C17.3478 2.5 14.8043 3.55357 12.9289 5.42893C11.0536 7.3043 10 9.84784 10 12.5C10 23.75 5 27.5 5 27.5H35C35 27.5 30 23.75 30 12.5Z" 
                    stroke="#FF4D4D" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M22.8875 33.75C22.5422 34.3962 22.0364 34.9385 21.4235 35.3225C20.8106 35.7065 20.1114 35.9185 19.3987 35.9384C18.686 35.9583 17.9773 35.7855 17.3451 35.436C16.713 35.0865 16.1784 34.5729 15.7988 33.75" 
                    stroke="#FF4D4D" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
  
              <h3 className="text-2xl font-bold text-white mb-4">
                Lorem Ipsum is simply<br />dummy text.
              </h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web 
                applications and website builders measuring dozens of completed 
                projects. We build and develop mobile applications for several top 
                platforms, including Android & iOS.
              </p>
              <button className="px-8 py-3 bg-white text-[#0EA5E9] rounded-md hover:bg-gray-50 transition-colors">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CallToAction;
  