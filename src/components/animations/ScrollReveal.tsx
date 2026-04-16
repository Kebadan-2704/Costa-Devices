"use client";
import { useRef, useEffect } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark as ready for animation (hides element)
    el.classList.add("sr-hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay then reveal
          setTimeout(() => {
            el.classList.remove("sr-hidden");
            el.classList.add("sr-visible");
          }, delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    observer.observe(el);

    // Safety fallback - always show after 2s
    const fallback = setTimeout(() => {
      el.classList.remove("sr-hidden");
      el.classList.add("sr-visible");
    }, 2000 + delay * 1000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className} data-sr-direction={direction}>
      {children}
    </div>
  );
}
