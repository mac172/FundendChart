"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const features = [
  {
    title: "Instant Funding",
    description: "Skip the evaluation. Get access to capital immediately and start trading right away.",
    icon: "🚀",
  },
  {
    title: "Profit Split",
    description: "Earn up to 90% of the profits. The better you trade, the more you keep.",
    icon: "💸",
  },
  {
    title: "No Risk to You",
    description: "Your losses are covered. We take the risk so you can focus on trading.",
    icon: "🛡️",
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

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We make funding easy and profitable for traders who want to grow without limits.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60, rotateY: -15, scale: 0.9 }}
              animate={
                visible
                  ? { opacity: 1, y: 0, rotateY: 0, scale: 1 }
                  : {}
              }
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-left shadow-lg hover:shadow-purple-400/30 transition hover:scale-[1.02]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-100">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
