"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccountCard } from "./AccountCard";
import { ChartCard } from "./ChartCard";

const AnimatedWords = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const words = text.split(" ");
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };
  const word = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block mr-2">
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function HeroSection({
  onGetFundedClick,
}: {
  onGetFundedClick: () => void;
}) {
  const [showText, setShowText] = useState(false);
  const [showAurora, setShowAurora] = useState(false);
  const [starDelay, setStarDelay] = useState(0);

  useEffect(() => {
    setStarDelay(Math.random() * -30); // random delay for star scroll
    const timeout = setTimeout(() => {
      setShowText(true);
      setShowAurora(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black flex items-center justify-center text-white">
      {/* 🎨 Aurora Overlay */}
      <motion.div
        className="absolute inset-0 z-[1] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
          rotate: [0, 0.5, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 80%, rgba(169, 85, 247, 0.29), transparent 70%),
              radial-gradient(circle at 30% 20%, rgba(226, 133, 220, 0.34), transparent 60%)`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* 🌌 Starfield */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[url('/stars.svg')] bg-repeat opacity-90 animate-scroll-stars"
          style={{ animationDelay: `${starDelay}s` }}
        />
      </div>

      {/* 🌠 Aurora Glow */}
      {showAurora && (
        <motion.div
          className="absolute top-0 left-0 w-full h-[300px] z-2 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
          style={{
            backgroundImage: `
              radial-gradient(ellipse at top center, rgba(147, 51, 234, 0.6), transparent 70%),
              linear-gradient(to bottom, rgba(168, 85, 247, 0.3), transparent 100%)`,
          }}
        />
      )}

      {/* 🔵 Glowing Sphere (rotating wrapper) */}
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-[-650px] left-1/2 w-[1500px] h-[850px] rounded-t-full -translate-x-1/2 z-[20] origin-bottom animate-spin-slow"
      >
        <div className="w-full h-full rounded-t-full bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.4),_transparent_80%)] border-t-[2px] border-purple-400/50 shadow-[0_-20px_120px_rgba(168,85,247,0.6)] relative">
          <div className="absolute inset-0 bg-[url('/planet-outline.svg')] bg-no-repeat bg-center bg-contain opacity-10 pointer-events-none" />
        </div>
      </motion.div>

      {/* 💳 Cards Positioned inside Sphere */}
      <div className="absolute bottom-10 left-10 z-[10]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-lg shadow-purple-400/20"
        >
          <AccountCard />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 z-[10]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.2, duration: 1 }}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-lg shadow-purple-400/20"
        >
          <ChartCard />
        </motion.div>
      </div>

      {/* ☄️ Meteor Beam */}
      <AnimatePresence>
        {!showText && (
          <motion.div
            className="absolute top-0 left-1/2 w-[6px] h-[500px] bg-gradient-to-b from-pink-500 via-yellow-400 to-yellow-200 shadow-[0_0_30px_#facc15,0_0_60px_#f472b6] -translate-x-1/2 z-2"
            initial={{ y: "-100%", opacity: 1 }}
            animate={{ y: "100px", opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
          >
            <div className="absolute top-full left-1/2 w-3 h-3 bg-gradient-to-b from-yellow-300 via-pink-500 to-transparent rounded-full opacity-70 animate-ping -translate-x-1/2" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📝 Hero Content */}
      {showText && (
        <motion.div
          className="relative z-30 text-center translate-y-[-20%]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 shadow-lg shadow-blue-500/20 mb-6">
            <div className="w-5 h-5 flex items-center justify-center text-blue-400 text-lg mr-2">
              ✨
            </div>
            <span className="text-gray-200 uppercase text-sm font-semibold tracking-wide">
              OUR CAPITAL YOUR SUCCESS
            </span>
          </div>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-2 relative py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <div>
              <AnimatedWords text="We Fund. You Trade." delay={1} />
            </div>
            <div>
              <AnimatedWords text="Your Profit." delay={1.5} />
            </div>
          </h1>

          {/* 🔘 CTA */}
            <motion.button
              className="mt-8 px-6 py-3 text-sm font-semibold uppercase bg-purple-600 hover:bg-purple-700 transition rounded-full shadow-md shadow-purple-400/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetFundedClick}
            >
              Get Funded Now
            </motion.button>
        </motion.div>
      )}
    </div>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function HeroSection() {
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setShowText(true), 4000); // Delay text until beam completes
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="relative h-screen overflow-hidden bg-gradient-radial from-gray-900 via-black to-black flex items-center justify-center text-white">
//       {/* Planet / Sphere */}
//       <motion.div
//         initial={{ y: '100%', opacity: 0 }}
//         animate={{ y: '0', opacity: 1 }}
//         transition={{ duration: 2, ease: 'easeInOut' }}
//         className="absolute bottom-[-650px] left-1/2 w-[1500px] h-[850px] bg-gradient-radial from-indigo-400 via-indigo-800 to-black rounded-t-full -translate-x-1/2 shadow-[inset_0_30px_60px_rgba(0,0,0,0.5)] z-1 border-t-2 border-indigo-300"
//       />

//       {/* Meteor Beam */}
// <AnimatePresence>
//   {!showText && (
//     <motion.div
//       className="absolute top-0 left-1/2 w-[6px] h-[500px] bg-gradient-to-b from-pink-500 via-yellow-400 to-yellow-200 shadow-[0_0_30px_#facc15,0_0_60px_#f472b6] -translate-x-1/2 z-[-1]"
//       initial={{ y: '-100%', opacity: 1 }}
//       animate={{ y: '100px', opacity: 0 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 2, ease: 'easeInOut', delay: 2 }}
//     >
//       {/* Particles at the end of the beam */}
//       <div className="absolute top-full left-1/2 w-3 h-3 bg-gradient-to-b from-yellow-300 via-pink-500 to-transparent rounded-full opacity-70 animate-ping -translate-x-1/2" />
//     </motion.div>
//   )}
// </AnimatePresence>

//       {/* Hero Text */}
//       <AnimatePresence>
//         {showText && (
//           <motion.div
//             className="relative z-20 text-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
//           >
//             <h1 className="text-5xl font-bold mb-4">Welcome to Nova</h1>
//             <p className="text-lg text-gray-300">Your gateway to the cosmos.</p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
