import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "This app has been a game-changer for our family. The real-time support during meltdowns has made such a difference.",
    author: "Sarah M.",
    role: "Parent of 2"
  },
  {
    quote: "Finally, practical strategies that actually work. The personalized approach makes all the difference.",
    author: "Michael R.",
    role: "Father of a neurodivergent child"
  },
  {
    quote: "The tracking feature helped us identify patterns we never noticed before. It's been invaluable.",
    author: "Emma L.",
    role: "Mother & Advocate"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50"
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-gray-900">
            Join a growing community of parents navigating neurodivergence with confidence
          </h3>
          <a
            href="https://discord.gg/pms29fcYuv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-700 transition-colors"
          >
            Join us on Discord
          </a>
          <p className="mt-4 text-sm text-gray-600">
            🔒 GDPR & privacy compliant
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;