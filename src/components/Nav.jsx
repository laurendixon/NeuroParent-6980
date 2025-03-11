import React from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a 
              href="https://neuroparent.app" 
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xl font-semibold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                NeuroParent
              </span>
              <span className="ml-2 text-sm bg-rose-500 text-white px-2 py-0.5 rounded font-bold">
                Beta
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="https://go.neuroparent.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-primary-700 transition-colors"
            >
              Launch App
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;