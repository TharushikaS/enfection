import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-lg font-bold text-blue-600">LOGO</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-gray-500 mt-2">@Lorem</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">About Us</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Lorem</a></li>
              <li><a href="#" className="hover:text-gray-900">Portfolio</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum is simply dummy text of the printing.
            </p>
            <p className="text-gray-600 mt-2">+998 88077 960</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-4">
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <Icon 
                size={16} 
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              />
            </a>
          ))}
        </div>

        {/* Divider Line */}
        <div className="mt-12 border-t border-gray-300"></div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          Copyright © 2024 Lorem All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;