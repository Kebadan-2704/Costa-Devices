"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-24 right-4 md:bottom-28 md:right-8 z-50 w-12 h-12 bg-bg-primary border border-glass-border flex items-center justify-center rounded-lg text-text-primary shadow-2xl transition-all duration-300 hover:border-costa-green hover:bg-costa-green/5 cursor-pointer group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="text-text-primary group-hover:text-costa-green transition-colors" />
    </button>
  );
}
