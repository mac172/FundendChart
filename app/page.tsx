"use client";
import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
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
      <div className="absolute top-0 left-0 w-full flex justify-center items-center z-10">
         <NavBar />
      </div>
      <div className="sticky top-0">
        <HeroSection onGetFundedClick={scrollToWhy}/>
      </div>
       <WhySection />
    </div>
  );
}
