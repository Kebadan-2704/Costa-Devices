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
  const [count, setCount] = useState(value); // Start at final value for SSR
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    // Reset to 0 on client for animation
    setCount(0);

    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const startTime = performance.now();
      const animate = (currentTime: number) => {
        const elapsed = (currentTime - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(eased * value);
        if (progress < 1) requestAnimationFrame(animate);
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

    // Fallback: always start after 3s
    const timer = setTimeout(startAnimation, 3000);

    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}
