"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ValueProposition from "@/components/ValueProposition";
import NavBar from "@/components/navbar";
import Section4 from "@/components/Section4";
import SuggestedCarousel from "@/components/Section5";
import ProgramTiers from "@/components/ProgramTiers";
import Certificate3D from "@/components/ui/certificate3D";
import { JoinUs } from "@/components/JoinUs";
import Footer from "@/components/Footer";

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
        <HeroSection onGetFundedClick={scrollToWhy} />
      </div>


      {/* Section 2 */}
      <div className="w-full h-screen" id="why">
        <WhySection />
      </div>
      {/* Section 3 */}
      <div className="relative w-full h-screen bg-black">
       <ValueProposition />
      </div>

      {/* Section4, with scroll-friendly layout */}
      <div className="relative min-h-screen">
        <Section4 />
      </div>

      {/* Section5, with scroll-friendly layout */}
      <div className="">
        <SuggestedCarousel loading={true} />
      </div>

      <div>
        <ProgramTiers />
      </div>

      <div className="">  
        <Certificate3D imageUrl="/certificate.png" />
      </div>

      <div className="z-10">
        <JoinUs />
      </div>

      <div className="p-12">
        <Footer />
      </div>
     
    </div>
  );
}
