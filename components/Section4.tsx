'use client'; // This directive is for Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';
import GLTFScene from './ui/glass-card';

const Section4 = () => {
  return (
    // Main container with background gradient (adjust colors as needed)
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden flex items-center justify-center p-8">

      {/* Content container to control max width and add padding */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Section: Text and Buttons */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Stop losing your own money, join us and start earning!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Join our platform today and start your journey towards financial freedom.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="px-8 py-3 bg-green-500 text-gray-900 font-semibold rounded-md flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Us</span>
              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
            <motion.button
              className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Free trial
            </motion.button>
          </div>
        </motion.div>

        {/* Right Section: Repeating Text and Visual Placeholder */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end h-96 lg:h-auto">
          {/* Repeating Text - Positioned Absolutely */}
          <div className="absolute inset-0 flex flex-col items-center justify-center lg:items-end lg:justify-center">
            
            {[...Array(6)].map((_, index) => (
              
              <motion.div
                key={index}
                className="text-6xl md:text-8xl font-bold text-green-500 opacity-30" // Adjust text size and color/opacity
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
                style={{ transform: `translateY(${index * 20}px)` }} // Adjust vertical spacing
              >
                Start Earning
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 top-20 flex items-center justify-center z-40 overflow-visible">
             <GLTFScene />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section4;
