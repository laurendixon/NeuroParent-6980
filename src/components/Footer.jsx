import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">NeuroParent</h4>
            <p className="text-gray-400">
              Supporting parents of neurodivergent children with real-time strategies and guidance.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NeuroParent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;