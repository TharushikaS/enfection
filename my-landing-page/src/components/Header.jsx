import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 h-20 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#00A3E1]">
        LOGO
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center space-x-8">
        <a href="/" className="text-gray-700 hover:text-[#00A3E1] transition-colors">
          Home
        </a>
        <a href="/about" className="text-gray-700 hover:text-[#00A3E1] transition-colors">
          About us
        </a>
        <a href="/services" className="text-gray-700 hover:text-[#00A3E1] transition-colors">
          Services
        </a>
        <a href="/blog" className="text-gray-700 hover:text-[#00A3E1] transition-colors">
          Blog
        </a>
       
        {/* Contact Button */}
        <button className="bg-[#00A3E1] text-white px-6 py-2 rounded hover:bg-[#0083B4] transition-colors">
          Contact us
        </button>
      </nav>
    </header>
  );
};

export default Header;
