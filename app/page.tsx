"use client";
import { useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import { motion, AnimatePresence } from "framer-motion";


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
      <div className="sticky top-0">
        <HeroSection onGetFundedClick={scrollToWhy}/>
      </div>
       <WhySection />
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
