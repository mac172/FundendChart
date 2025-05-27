"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { cn } from "@/lib/utils";

const articles = [
  {
    title: "Choose A Program",
    desc: "Choose a program that suits your needs the best. Simply fill in a short form and pay the fee...",
    image: "/step1.png",
  },
  {
    title: "Training Phase",
    desc: "Your task at this stage is to fulfill the requirements...",
    image: "/step2.jpg",
  },
  {
    title: "Co-operation",
    desc: "Once you have completed the training phase...",
    image: "/step3.png",
  },
];

export default function SuggestedCarousel({ loading }: { loading: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (!loading) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 5000);
    return () => clearInterval(intervalRef.current!);
  }, [loading]);

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -100 || velocity < -500) {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    } else if (offset > 100 || velocity > 500) {
      setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    }
  };

  return (
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative w-full min-h-[90vh] flex items-center justify-center px-6 py-20 text-white overflow-hidden z-0 bg-[linear-gradient(to_bottom_right,_#0a0a0a,_#000000)]"
      >
        {/* 🔆 Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#1a1a1a,_#000000)]" />

        {/* 🌟 Soft Neon Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-lime-400/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Optional Noise */}
        <div className="absolute inset-0 noise bg-repeat opacity-10 z-20 pointer-events-none" />
        <motion.div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px", "0px 0px"], // move diagonally by one grid size
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        {/* Content Box */}
        <div className="relative max-w-5xl w-full z-30">
          <div className="text-center mb-14">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-lime-400 via-teal-300 to-lime-400 bg-[length:200%_200%] bg-clip-text text-transparent"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              How Does it Work?
            </motion.h2>

            <p className="text-gray-300 text-lg">
              Your pathway to professional trading
            </p>
          </div>

          <div className="relative overflow-hidden border border-gray-700/60 rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl p-6 md:p-10 z-30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={articles[currentIndex].image}
                    alt={`Step ${currentIndex + 1}`}
                    className="rounded-xl object-cover max-w-md w-full h-96 shadow-lg"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/400x250?text=Image+Not+Found")
                    }
                  />
                </AnimatePresence>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl sm:text-2xl text-lime-400 font-semibold mb-4">
                      Step {currentIndex + 1}
                    </h3>
                    <p className="text-white text-md sm:text-lg mb-4">
                      {articles[currentIndex].title}
                    </p>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-lime-300 transition"
                    >
                      {articles[currentIndex].desc}
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="flex justify-center items-center mt-6 space-x-2 w-full">
              {articles.map((_, idx) => (
                <div
                  key={idx}
                  className="relative h-1 bg-gray-700/60 rounded-full w-full overflow-hidden"
                >
                  <motion.div
                    key={
                      currentIndex === idx
                        ? `progress-${idx}-${Date.now()}`
                        : `static-${idx}`
                    }
                    initial={{ width: 0 }}
                    animate={{ width: currentIndex === idx ? "100%" : "0%" }}
                    transition={{
                      duration: currentIndex === idx ? 5 : 0,
                      ease: "linear",
                    }}
                    className="absolute h-full bg-lime-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
  );
}
