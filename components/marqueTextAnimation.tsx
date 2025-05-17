// import { motion, useTransform, useScroll } from "framer-motion";

// export const MarqueTextAnimation = () => {
//     const { scrollYProgress } = useScroll();
    
//     // Transform scrollYProgress (0 to 1) to x position (100% to -100%)
//     const x = useTransform(scrollYProgress, [0, 9], ["100%", "-790%"]);

//     return (
//         <div className="relative w-[100%] h-[100vh] bg-gray-900 text-white overflow-hidden">
//             <motion.h1 
//                 className="font-bold text-[78px] whitespace-nowrap"
//                 style={{ x }}
//             >
//                 Swipe free for 28 pairs and all metals!
//             </motion.h1>
//         </div>
//     );
// }

'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export function MarqueTextAnimation({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split('');
 
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center bg-gray-700">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cn(
            'text-xl sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]',
            className
          )}
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}