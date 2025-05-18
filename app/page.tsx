"use client";
import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";

import { motion, AnimatePresence } from "framer-motion";
import { MarqueTextAnimation } from "@/components/marqueTextAnimation";
import { TextFade } from "@/components/section3/TextFade";
import Lottie from "lottie-react";

import { ContainerText } from "@/components/section3/ContainerText";
import { ContainerContent } from "@/components/section3/ContainerContent";


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
        <ContainerText />
        <ContainerContent />
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
