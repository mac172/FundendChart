"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AccountCard } from "./AccountCard";
import { ChartCard } from "./ChartCard";

export const AnimatedWords = ({
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
    hidden: { opacity: 0, y: 70 },
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

const cryptoCoins = [
  "/coins/bitcoin.svg",
  "/coins/ethereum.svg",
  "/coins/dogecoin.svg",
  "/coins/solana.svg",
  "/coins/cardano.svg",
];

const FloatingCoin = ({
  src,
  delay,
  side,
  index,
}: {
  src: string;
  delay: number;
  side: "left" | "right";
  index: number;
}) => {
  const offsetX = side === "left" ? -80 - index * 20 : 80 + index * 20;
  const offsetY = Math.random() * 50 - 25; // spread vertically

  const size = Math.random() * 20 + 30;

  return (
    <motion.img
      src={src}
      alt="coin"
      className="absolute z-[5] opacity-80 pointer-events-none"
      initial={{
        x: `${offsetX}px`,
        y: `${offsetY}px`,
        scale: 1,
        rotate: 0,
      }}
      animate={{
        y: [offsetY, offsetY + 10, offsetY - 10, offsetY],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay,
      }}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
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
    <div className="sticky h-screen overflow-hidden bg-black flex items-center justify-center text-white">
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
              radial-gradient(ellipse at top center, #9333ea, transparent 70%),
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
          <div className="absolute inset-0 bg-[url('/planet-overlay.jpeg')] bg-no-repeat bg-center bg-contain opacity-10 pointer-events-none" />
        </div>
      </motion.div>

      {/* 💳 Cards Positioned inside Sphere */}
      <div className="absolute bottom-10 left-10 z-[10]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-lg shadow-purple-400/20 w-52"
        >
          <AccountCard />
        </motion.div>
      </div>
      <div className="absolute bottom-10 right-10 z-[10]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.2, duration: 1 }}
          className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-lg shadow-purple-400/20 w-64"
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
          {/* 💰 Floating Crypto Bubbles */}
          {/* {cryptoCoins.map((coin, idx) => (
            <FloatingCoin
              key={idx}
              src={coin}
              delay={Math.random() * 2}
              side={idx % 2 === 0 ? "left" : "right"}
              index={idx}
            />
          ))} */}

          <div className="text-sm md:text-base max-w-4xl text-center px-5 py-2 border border-[#4ade80]/30 rounded-full bg-[#4ade80]/5 text-[#4ade80] mb-6">
            ✨ Our Capital, Your Success
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
            className="mt-8 px-8 py-3 text-sm md:text-base font-semibold uppercase tracking-wide text-white rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-500 hover:from-purple-600 hover:via-fuchsia-700 hover:to-pink-600 transition-all duration-300 shadow-lg shadow-fuchsia-500/30 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={onGetFundedClick}
          >
            Get Funded Now
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
