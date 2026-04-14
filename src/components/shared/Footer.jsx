
import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { GiThunderBlade } from 'react-icons/gi';

const Footer = () => {
          return (
                  <footer className="bg-[#295c4a] text-white py-12">
      <div className="max-w-5xl mx-auto text-center px-4">
        
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h3 className="mb-3 text-lg">Social Links</h3>
        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-white text-black p-2 rounded-full cursor-pointer">
            <GiThunderBlade size={20} />
          </div>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer">
            <FaFacebook size={20} />
          </div>
          <div className="bg-white text-black p-2 rounded-full cursor-pointer">
            <BsTwitter size={20} />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-400 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
          );
};

export default Footer;