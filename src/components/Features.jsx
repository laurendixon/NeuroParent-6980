import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaLock } from 'react-icons/fa';
import { MdOutlinePersonalInjury } from 'react-icons/md';

const features = [
  {
    icon: <FaBrain className="w-8 h-8" />,
    title: "Crisis Mode",
    description: "Step-by-step guidance for meltdowns, sensory overload, and shutdowns."
  },
  {
    icon: <MdOutlinePersonalInjury className="w-8 h-8" />,
    title: "Personalized Strategies",
    description: "Adjusts recommendations based on location, intensity, and context."
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: "Quick Notes & Tracking",
    description: "Save what worked (or didn't) and identify behavior patterns over time."
  },
  {
    icon: <FaLock className="w-8 h-8" />,
    title: "Privacy First",
    description: "No ads, no tracking—your data remains yours."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://go.neuroparent.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-secondary-700 transition-colors"
          >
            See How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;