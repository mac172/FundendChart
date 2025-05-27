'use client';

import { motion } from 'framer-motion';

export const JoinUs = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0e17] via-[#0f172a] to-[#1e293b] text-white overflow-hidden py-24 px-6 flex items-center justify-center">
      {/* Animated glow background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute -top-40 left-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-3xl opacity-20 -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-15 -z-10"
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-center max-w-2xl relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Join the Future of Prop Trading
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Become a funded trader with access to real capital, elite tools, and a global trading network. No limits. Just performance.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#get-funded"
          className="inline-block px-8 py-3 rounded-lg bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-400/30 transition-all duration-300 hover:bg-cyan-400"
        >
          Get Funded Now
        </motion.a>
      </motion.div>
    </section>
  );
};
