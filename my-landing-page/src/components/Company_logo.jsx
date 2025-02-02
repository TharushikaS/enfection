const CompanyLogos = () => {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-center text-gray-900 text-lg font-bold mb-4">
            You will be in good Company
          </h1>
  
          {/* Logos Container */}
          <div className="flex flex-wrap justify-center items-center gap-20 md:gap-25">
            {/* Benoshop Logo */}
            <img
              src="/beneoshop.png"
              alt="Benoshop"
              className="h-50 md:h-50 opacity-100 "
            />
            
            {/* Caspio Logo */}
            <img
              src="/caspio.png"
              alt="Caspio"
              className="h-50 md:h-50 opacity-100"
            />
            
            {/* HyperGrid Logo */}
            <img
              src="/HyperGrid.png"
              alt="MogoSense"
              className="h-50 md:h-50 opacity-100 "
            />
            
            {/* Leo Trippi Logo */}
            <img
              src="/leotrippi.png"
              alt="Leo Trippi"
              className="h-50 md:h-50 opacity-100"
            />
          </div>
        </div>
      </section>
    );
};

export default CompanyLogos;
