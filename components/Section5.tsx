'use client'; // This directive is for Next.js App Router

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Using next/image for optimized images

// Define the data for each step
const steps = [
  {
    step: 1,
    label: '[ STEP 1 ]',
    title: 'Choose A Program',
    description: 'Choose a program that suits your needs the best. Simply fill in a short form and pay the fee. You will instantly receive your login details, that will enable you to login to our training platform for traders.',
    // Replace with the actual image path for Step 1's visual
    image: '/placeholders/step1-visual.png', // <<< REPLACE THIS WITH YOUR ACTUAL IMAGE PATH
    alt: 'Choose Program Visual',
  },
  {
    step: 2,
    label: 'STEP 2',
    title: 'Training phases',
    description: 'Your task at this stage is to fulfill the requirements of the given program in the training phase of our programs. Complying with the rules and advice will teach you the correct way of handling risk and advancing your understanding further at the same time it gives us insight into whether you are ready for real-life trading.',
     // Replace with the actual image path for Step 2's visual
    image: '/placeholders/step2-visual.png', // <<< REPLACE THIS WITH YOUR ACTUAL IMAGE PATH
    alt: 'Training Phases Visual',
  },
  {
    step: 3,
    label: 'STEP 3',
    title: 'Co-operation',
    description: 'When you manage to successfully complete our training program, we are then set to cooperate with you and you then become an Facilogy trader, receive a FCF trading account, where you can start trading and are entitled to earn commission up to 50-90% - we pay for any losses.',
     // Replace with the actual image path for Step 3's visual
    image: '/placeholders/step3-visual.png', // <<< REPLACE THIS WITH YOUR ACTUAL IMAGE PATH
    alt: 'Co-operation Visual',
  },
];

// Animation variants for fade effect
const fadeVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const SectionCarousel = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalTime = 5000; // Time for each step (in milliseconds)

  // Effect to handle the progress bar and step change
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + (100 / (intervalTime / 100)); // Increment progress based on intervalTime
        } else {
          // Move to the next step and reset progress
          setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
          return 0;
        }
      });
    }, 100); // Update progress every 100ms

    // Clear interval on component unmount
    return () => clearInterval(progressInterval);
  }, [currentStepIndex]); // Restart interval when step changes

  const currentStep = steps[currentStepIndex];

  return (
    <section className="relative w-full py-16 overflow-hidden bg-gray-950 text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20"
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '20px 20px',
           }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">How does it works?</h2>
          <p className="text-lg text-gray-400">Your pathway to professional trading</p>
        </div>

        {/* Carousel Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Image/Visual Placeholder */}
          <motion.div
            key={currentStep.step} // Key for AnimatePresence
            className="w-full lg:w-1/2 flex justify-center items-center"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeVariants}
          >
            {/*
              <<< THIS IS A PLACEHOLDER >>>
              To get the look from your design, you need to replace this entire div
              with your actual image component or a custom component that renders
              the complex visual element for each step.

              If you have the visual as image files, replace the <Image> component's
              src with the correct path for each step in the 'steps' array above.

              If it's a custom 3D component or graphic, place that component here
              instead of the <Image>.
            */}
            <div className="w-full max-w-md h-64 md:h-80 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-400 text-xl overflow-hidden">
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={currentStep.step} // Key for AnimatePresence
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.5 }}
                       className="w-full h-full flex items-center justify-center" // Ensure inner div fills container
                    >
                       {/* Placeholder Image - Replace with your actual visual */}
                       <Image
                          src={currentStep.image} // This should be the path to your actual visual asset
                          alt={currentStep.alt}
                          width={600} // Adjust based on your actual image size and desired display
                          height={400} // Adjust based on your actual image size and desired display
                          objectFit="contain" // Use 'contain' or 'cover' as needed
                          className="rounded-lg"
                       />
                    </motion.div>
                 </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Section: Step Content and Progress */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Step Indicators */}
            <div className="flex justify-between mb-8">
              {steps.map((step, index) => (
                <div key={step.step} className="flex flex-col items-center flex-grow mx-2"> {/* Added flex-grow and margin for spacing */}
                  <motion.div
                    className={`text-lg font-semibold ${
                      index === currentStepIndex ? 'text-green-400' : 'text-gray-600'
                    }`}
                     animate={{ color: index === currentStepIndex ? '#4ADE80' : '#4B5563' }} // Animate color
                     transition={{ duration: 0.5 }}
                  >
                    {step.label}
                  </motion.div>
                  {/* Progress Line */}
                  {index === currentStepIndex && (
                    <motion.div
                      className="h-1 bg-green-400 mt-2 rounded-full w-full" // Ensure progress line takes full width
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: 'linear' }} // Linear transition for smooth filling
                    />
                  )}
                   {/* Placeholder for progress line for inactive steps */}
                   {index !== currentStepIndex && (
                       <div className="h-1 bg-gray-700 mt-2 w-full rounded-full"></div>
                   )}
                </div>
              ))}
            </div>

            {/* Step Title and Description */}
            <AnimatePresence mode="wait"> {/* Use mode="wait" to complete exit animation before starting new enter animation */}
              <motion.div
                key={currentStep.step} // Key for AnimatePresence
                initial="initial"
                animate="animate"
                exit="exit"
                variants={fadeVariants}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentStep.title}</h3>
                <p className="text-gray-300">{currentStep.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCarousel;
