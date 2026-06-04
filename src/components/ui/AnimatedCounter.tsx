"use client";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ value, suffix = "", decimals = 0, duration = 2, className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0); // Start at 0 on client
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setCount(eased * value);
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value); // ensure final value is exact
        }
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(el);

    // Fallback: always start after 3s if observer fails
    const timer = setTimeout(startAnimation, 3000);

    return () => { 
      observer.disconnect(); 
      clearTimeout(timer);
      // We don't reset hasAnimated here, so it only animates once per full mount cycle.
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}
