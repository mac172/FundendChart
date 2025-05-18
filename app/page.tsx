"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import NavBar from "@/components/navbar";
import Section4 from "@/components/Section4";

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
    <div className="relative">
      {/* Navbar floating over top */}
      <div className="absolute top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      {/* Hero Section, NOT sticky — that breaks scroll calculations */}
      <div className="relative z-0">
        <HeroSection onGetFundedClick={scrollToWhy} />
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
    </div>
  );
}
