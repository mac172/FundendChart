"use client";
import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import { motion, AnimatePresence } from "framer-motion";
import { MarqueTextAnimation } from "@/components/marqueTextAnimation";
import { TextFade } from "@/components/section3/TextFade";


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
      <div className="sticky top-0">
        <HeroSection onGetFundedClick={scrollToWhy}/>
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
            <h1>DEMO TEXT</h1>
          </div>
          <div className="container-2 h-[60%] w-[47%]  bg-red-700">
          <TextFade
            direction="up"
            staggerChildren={0.1}
            className="h-[100%] w-[100%] bg-amber-500 flex items-center justify-center"
          >
            {/* Add your content here */}
            <span>Trade on forex and market in capital</span>
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
    </div>
  );
}
