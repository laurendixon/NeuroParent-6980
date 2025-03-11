import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What is NeuroParent?",
    answer: "NeuroParent is a real-time support app for parents of neurodivergent children, providing instant strategies for managing meltdowns, overstimulation, and emotional regulation challenges."
  },
  {
    question: "How does the app work?",
    answer: "When you encounter a challenging situation, simply select the type of crisis, and we'll provide personalized, research-backed strategies based on your specific context and needs."
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. We prioritize your privacy and don't share any personal information. Your data is encrypted and stored securely, with no third-party tracking or advertisements."
  },
  {
    question: "Can I use NeuroParent on multiple devices?",
    answer: "Yes, NeuroParent is accessible across all your devices, allowing you to access support whenever and wherever you need it."
  },
  {
    question: "How do I get started?",
    answer: "Simply click the 'Launch App' button to create your account and begin accessing personalized support strategies immediately."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Frequently Asked Questions
        </motion.h1>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 p-6 bg-white rounded-xl shadow-sm"
            >
              <h2 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;