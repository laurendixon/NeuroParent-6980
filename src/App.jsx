import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaLock, FaRegLightbulb } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { MdOutlinePersonalInjury } from 'react-icons/md';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;