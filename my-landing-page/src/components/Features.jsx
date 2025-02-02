import React from 'react';
import { Smartphone, Monitor, Glasses } from 'lucide-react';

const ContentBlock = ({ align, icon: Icon, iconBg, titleColor, subtitle, description, image }) => {
  return (
    <div className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 mb-24`}>
      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 flex items-center justify-center rounded-full ${iconBg}`}>
            <Icon size={20} className="text-white" />
          </div>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <h3 className="mb-4 text-4xl font-medium leading-relaxed">
        <span className="text-[#00A3E1] font-bold">Lorem Ipsum</span> <span className="text-black font-bold ">is simply dummy text of the printing.</span>
        </h3>
        <p className="text-gray-600 leading-relaxed">
        KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web application developers
        measuring dozens of completed projects. We build and develop mobile applications for several top platforms,
        including Android & iOS.
        </p>


      </div>

      {/* Image */}
      <div className="w-full md:w-2/3">
        <img src={image} alt="Feature" className="w-full h-auto" />
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-6">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's
          </p>
        </div>

        {/* Content Blocks */}
        <ContentBlock
          align="left"   // First container: Text left, Image right
          icon={Smartphone}
          iconBg="bg-green-500"  
          titleColor="text-green-500"
          subtitle="Lorem Ipsum is simply dummy text"
          image="/image1.jpg"  
        />

        <ContentBlock
          align="right"  // Second container: Text right, Image left
          icon={Monitor}
          iconBg="bg-[#00A3E1]"
          titleColor="text-[#00A3E1]"
          subtitle="Lorem Ipsum is simply dummy text"
          image="/image2.png"  
        />

        <ContentBlock
          align="left"  // Third container: Text left, Image right
          icon={Glasses}
          iconBg="bg-[#7B2EFF]"
          titleColor="text-[#7B2EFF]"
          subtitle="Lorem Ipsum is simply dummy text"
          image="/image3.png"  
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
