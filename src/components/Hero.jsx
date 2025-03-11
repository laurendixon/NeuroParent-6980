import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/pexels-anete-lusina-5240422.jpg';
import { useNavigate } from "react-router-dom";


const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

<div 
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    filter: 'brightness(0.7)',
  }}
/>;

      <div className="absolute inset-0 bg-black/30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real-Time Support for Parents of Neurodivergent Kids
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Practical strategies for meltdowns, overstimulation, and emotional regulation—just when you need them.
          </p>
          <motion.button
            onClick={() => window.location.href = "https://go.neuroparent.app"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-700 transition-colors"
          >
            Get Early Access
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;