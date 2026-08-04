"use client";

import { motion, useReducedMotion } from "framer-motion";

interface GsapTimelineProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Lightweight timeline wrapper that staggers children on scroll.
 * Replaces the previous GSAP-dependent implementation with Framer Motion.
 */
export default function GsapTimeline({ children, className = "" }: GsapTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.12,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
