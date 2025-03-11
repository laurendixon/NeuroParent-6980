import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaClipboardList, FaSave } from 'react-icons/fa';

const steps = [
  {
    icon: <FaRegLightbulb className="w-8 h-8" />,
    title: "Select the type of crisis",
    description: "Choose between meltdown, overstimulation, or shutdown."
  },
  {
    icon: <FaClipboardList className="w-8 h-8" />,
    title: "Follow personalized steps",
    description: "Get research-backed strategies tailored to your situation."
  },
  {
    icon: <FaSave className="w-8 h-8" />,
    title: "Track progress",
    description: "Save notes to monitor improvements over time."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;