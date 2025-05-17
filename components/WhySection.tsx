"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { AnimatedWords } from "./HeroSection";

const features = [
  {
    title: "Zero Reward Denials",
    description: "Trade with peace of mind.",
    icon: "🛡️",
  },
  {
    title: "Your Favorite Platforms",
    description: "MetaTrader5.",
    icon: "⚙️",
  },
  {
    title: "Flexible Reward Cycles",
    description: "The choice is yours.",
    icon: "💬",
  },
  {
    title: "We Grow Together",
    description: "We are in this together.",
    icon: "🤝",
  },
];

export default function WhySection() {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <AnimatePresence>
      <motion.section
        ref={ref}
        initial={{
          opacity: 0,
          scale: 0.8,
          rotateX: -35,
          filter: "blur(20px)",
          visibility: "hidden",
        }}
        animate={
          visible
            ? {
                opacity: 1,
                scale: 1,
                rotateX: 0,
                filter: "blur(0px)",
                visibility: "visible",
              }
            : {}
        }
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-screen py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Aurora background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 60% 20%, rgba(147, 51, 234, 0.2), transparent 70%),
                radial-gradient(circle at 30% 80%, rgba(168, 85, 247, 0.15), transparent 60%)`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* Animated planet SVG */}
        <motion.img
          src="/stars.svg"
          alt="Planet Outline"
          initial={{ opacity: 0, scale: 0.8, rotate: 30 }}
          animate={
            visible
              ? {
                  opacity: 0.2,
                  scale: 1,
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 10, 0],
                }
              : {}
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-[-150px] w-[600px] h-[600px] pointer-events-none z-0"
          style={{
            transformOrigin: "center",
            filter: "drop-shadow(0 0 30px rgba(147, 51, 234, 0.4))",
          }}
        />

        {/* Title */}
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {visible && <AnimatedWords text="Why Choose Us?" delay={0.6} />}
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {visible && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                We make funding easy and profitable for traders who want to grow
                without limits.{" "}
              </motion.span>
            )}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, rotateY: -15, scale: 0.9 }}
              animate={
                visible ? { opacity: 1, y: 0, rotateY: 0, scale: 1 } : {}
              }
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: 3,
                boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)",
              }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-left text-white shadow-lg w-72 flex flex-col items-center justify-center mx-auto"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-100">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
