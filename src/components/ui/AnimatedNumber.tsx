"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedNumber({
  value,
  duration = 2000, // 2 seconds
}: {
  value: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [motionValue, inView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        // format numbers > 1000 with commas, keeping 1 decimal place if input is float
        const isFloat = value % 1 !== 0;
        ref.current.textContent = isFloat
          ? latest.toFixed(1)
          : Intl.NumberFormat("en-US").format(latest.toFixed(0));
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
}
