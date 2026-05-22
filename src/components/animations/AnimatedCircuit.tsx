"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedCircuit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + i * 0.3;
      return {
        pathLength: 1,
        opacity: 0.15,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.5 }
        }
      };
    }
  };

  const pulse: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.3;
      return {
        scale: [0, 1.5, 1],
        opacity: [0, 0.4, 0.2],
        transition: {
          delay,
          duration: 1,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 3 + i
        }
      };
    }
  };

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
      {/* Container for circuit traces, centered behind the hero typography */}
      <svg className="w-[150%] h-[150%] md:w-full md:h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <motion.g stroke="#0A8B46" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          
          {/* Main vertical bus line 1 */}
          <motion.path d="M 800,1000 L 800,600 L 500,300 L 500,0" variants={draw} custom={0} initial="hidden" animate="visible" />
          <motion.circle cx="500" cy="300" r="6" fill="#0A8B46" variants={pulse} custom={1} initial="hidden" animate="visible" />
          
          {/* Main vertical bus line 2 */}
          <motion.path d="M 900,1000 L 900,700 L 700,500 L 700,100 L 600,0" variants={draw} custom={1} initial="hidden" animate="visible" />
          <motion.circle cx="700" cy="500" r="8" fill="#0A8B46" variants={pulse} custom={2} initial="hidden" animate="visible" />

          {/* Horizontal branching */}
          <motion.path d="M 800,800 L 600,800 L 450,650 L 200,650" variants={draw} custom={2} initial="hidden" animate="visible" />
          <motion.circle cx="600" cy="800" r="4" fill="#0A8B46" variants={pulse} custom={3} initial="hidden" animate="visible" />
          <motion.circle cx="450" cy="650" r="5" fill="#0A8B46" variants={pulse} custom={4} initial="hidden" animate="visible" />

          {/* Diagonal high-speed traces */}
          <motion.path d="M 1000,900 L 850,750 L 850,550 L 650,350 L 650,150" variants={draw} custom={3} initial="hidden" animate="visible" />
          <motion.circle cx="850" cy="550" r="4" fill="#0A8B46" variants={pulse} custom={2.5} initial="hidden" animate="visible" />

          {/* Micro traces */}
          <motion.path d="M 700,300 L 800,300 L 850,250" strokeWidth="0.75" variants={draw} custom={4} initial="hidden" animate="visible" />
          <motion.path d="M 500,150 L 400,150 L 350,100" strokeWidth="0.75" variants={draw} custom={4.5} initial="hidden" animate="visible" />
          <motion.path d="M 900,600 L 950,600" strokeWidth="0.75" variants={draw} custom={5} initial="hidden" animate="visible" />
          
          {/* CPU / MCU Outline Abstraction */}
          <motion.rect x="650" y="450" width="100" height="100" rx="8" strokeWidth="1" variants={draw} custom={2.5} initial="hidden" animate="visible" />
          <motion.rect x="660" y="460" width="80" height="80" rx="4" strokeWidth="0.5" variants={draw} custom={3} initial="hidden" animate="visible" />
          
          {/* CPU Pins */}
          <motion.path d="M 640,470 L 650,470 M 640,490 L 650,490 M 640,510 L 650,510 M 640,530 L 650,530" strokeWidth="1" variants={draw} custom={3.5} initial="hidden" animate="visible" />
          <motion.path d="M 750,470 L 760,470 M 750,490 L 760,490 M 750,510 L 760,510 M 750,530 L 760,530" strokeWidth="1" variants={draw} custom={3.5} initial="hidden" animate="visible" />

        </motion.g>
      </svg>
    </div>
  );
}
