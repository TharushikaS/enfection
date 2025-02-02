import React from 'react';
import { Monitor, Tag, Smartphone, Glasses } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Icon Container */}
      <div className={`p-4 rounded-2xl ${bgColor}`}>
        <Icon size={28} className="text-gray-700" />
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Application",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#F3F1FF]"
    },
    {
      icon: Tag,
      title: "SEO",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#E8FFE3]"
    },
    {
      icon: Glasses,
      title: "AR/VR Solutions",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#E8F3FF]"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Lorem Ipsum is simply",
      bgColor: "bg-[#FFE8E8]"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>

      {/* Horizontal Line After Section */}
      <hr className="mt-12 border-gray-300" />
    </div>
  );
};

export default ServicesSection;
