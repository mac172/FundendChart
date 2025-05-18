"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";

import { motion, AnimatePresence } from "framer-motion";
import { MarqueTextAnimation } from "@/components/marqueTextAnimation";
import { TextFade } from "@/components/section3/TextFade";
import Lottie from "lottie-react";

import { ContainerText } from "@/components/section3/ContainerText";
import { ContainerContent } from "@/components/section3/ContainerContent";


import NavBar from "@/components/navbar";

import Section4 from "@/components/Section4";
import SectionCarousel from "@/components/Section5";

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
      <div className="absolute top-0 left-0 w-full flex justify-center items-center z-10">
         <NavBar />
      </div>


      {/* Hero Section, NOT sticky — that breaks scroll calculations */}
      <div className="relative z-0">
        <HeroSection onGetFundedClick={scrollToWhy}  />
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

      {/* Why Section */}
      <div
        ref={whyRef}
        className="relative min-h-screen h-[130%] overflow-hidden"
      >
        <WhySection />
      </div>

      {/* Section4, with scroll-friendly layout */}
      <div className="relative min-h-screen">
        <Section4 />
      </div>

      {/* Section5, with scroll-friendly layout */}
      <div className="">
        <SectionCarousel />
      </div>
    </div>
  );
}
