import React from 'react';
import { Star, RefreshCw } from 'lucide-react';

const NewsletterSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative bg-[#E0F2FE] py-28">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-20">
        <Star size={40} className="text-yellow-400 fill-yellow-400" />
      </div>
      <div className="absolute top-16 right-16">
        <RefreshCw size={32} className="text-indigo-400" />
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-15">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
            Lorem Ipsum is simply dummy<br />
            text of the printing.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 max-w-md px-6 py-3 rounded-lg border border-gray-200 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00A3E1]"
            required
            />

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;