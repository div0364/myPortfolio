import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 py-16 px-4 sm:px-8 lg:px-16 text-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-gray-200 opacity-40 -z-10"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16 text-gray-800">Contact Me</h2>
        <motion.div
          className="max-w-md sm:max-w-lg lg:max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-lg font-medium">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-lg font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2 text-lg font-medium">Message</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                rows="6"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center bg-gray-700 text-white p-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
