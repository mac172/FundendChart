"use client";
import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";

import { motion, AnimatePresence } from "framer-motion";
import { MarqueTextAnimation } from "@/components/marqueTextAnimation";
import { TextFade } from "@/components/section3/TextFade";


import NavBar from "@/components/navbar";


export default function Home() {
  const whyRef = useRef<HTMLDivElement>(null);
  const [showWhy, setShowWhy] = useState(false);
  const [showWhyCount, setShowWhyCount] = useState(0);

  const scrollToWhy = () => {
    if (whyRef.current) {
      setShowWhy(true);
      setShowWhyCount((prev) => prev + 1);
      whyRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div>

      {/* Hero Section */}

      <div className="absolute top-0 left-0 w-full flex justify-center items-center z-10">
         <NavBar />
      </div>

      <div className="sticky top-0">
        <HeroSection onGetFundedClick={scrollToWhy} />
      </div>

      {/* Section 2 */}
      <div className="w-full h-screen">
        <WhySection />
      </div>
      {/* Section 3 */}
      <div className="relative w-full h-screen bg-black">
        {/* head-text section */}
        <div className="head-text">
          <MarqueTextAnimation
            text="Swipe free for 28 pairs and all metals!"
          />
        </div>

        <div className="section-2 h-[90%] gap-[1rem] flex items-center justify-center bg-black">
          <div className="container-1 h-[60%] w-[47%]  bg-red-600">
            <video src="/section3Graph"></video>
          </div>

          <div className="container-2 h-[80%] w-[47%]  ">
            <TextFade
              direction="up"
              staggerChildren={0.1}
              className="h-[100%] w-[100%] flex-col p-[2rem] text-[20px] items-center justify-cener"
            >
              <motion.div
                className="w-fit mb-[1rem]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
              >
                <div className="inline-flex  px-4 py-2 rounded-full bg-gray-800 border border-gray-700 shadow-lg shadow-blue-500/20 ">
                  <span className="text-gray-200 uppercase text-sm font-semibold tracking-wide">
                    What is FXology?
                  </span>
                </div>
              </motion.div>
              {/* Add your content here */}
              <div className="mb-[1rem]">
                <span className="text-[2rem]">Trade on forex and other</span>
                <span className="text-[2rem]">market in capital</span>
                <span className="text-[2rem]">upto 640,000 USD!</span>
              </div>

              <div className="mb-[1rem]">
                <span>We provide unique trading programs for Forex traders, based </span>
                <span>upon which we search for the best options to work together with.</span>
                <span>We provide you with Training accounts that you can use to trade</span>
                <span>and earn commission without the risk of losing your own funds!</span>
              </div>

              <div className="">
                <span>You are presented with a choice of the widest variety of</span>
                <span>training programs on the market - it is up to you to choose</span>
                <span>based on your experience and preference. Whether you are a </span>
                <span>rookie, advanced or experienced trader, we are certain</span>
                <span>that you will find the most perfectly suited progrma</span>
              </div>
            </TextFade>
          </div>
        </div>

      </div>
      {/* <motion.div
        ref={whyRef}
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <WhySection />
      </motion.div> */}

       <WhySection />

    </div>
  );
}
