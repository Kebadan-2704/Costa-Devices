"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_MESSAGES = [
  "Initializing...",
  "Loading modules...",
  "Verifying...",
  "Connecting...",
  "Ready"
];

export default function Preloader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(pathname !== "/");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (pathname === "/") {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setMessageIndex(0);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => Math.min(prev + 1, BOOT_MESSAGES.length - 1));
    }, 200);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Brutalist Architectural Grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.2]"
            style={{
              backgroundImage: "linear-gradient(#1AAF5D 1px, transparent 1px), linear-gradient(90deg, #1AAF5D 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

          {/* Active Scanner Line */}
          <motion.div 
            className="absolute left-0 right-0 h-[2px] bg-costa-green shadow-[0_0_15px_#1AAF5D] z-0"
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 1.2, ease: "linear" }}
          />

          {/* Large Corner Hardware Marks */}
          <div className="absolute top-12 left-12 w-16 h-16 border-t-[3px] border-l-[3px] border-black/80 z-10" />
          <div className="absolute top-12 right-12 w-16 h-16 border-t-[3px] border-r-[3px] border-black/80 z-10" />
          <div className="absolute bottom-12 left-12 w-16 h-16 border-b-[3px] border-l-[3px] border-black/80 z-10" />
          <div className="absolute bottom-12 right-12 w-16 h-16 border-b-[3px] border-r-[3px] border-black/80 z-10" />

          {/* Main Content Block */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-3xl px-12 bg-[#FAFAFA]/95 backdrop-blur-md py-16 border border-black/10 shadow-2xl">
            
            <motion.div 
              initial={{ scale: 0.9, filter: "blur(5px)", opacity: 0 }}
              animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative h-28 w-[350px] md:h-40 md:w-[500px] mb-16"
            >
              <Image 
                src="/logos/logo.png" 
                alt="Costa Devices Logo" 
                fill sizes="150px"
                className="object-contain object-center"
                priority
              />
            </motion.div>

            <div className="w-full relative">
              {/* Header Info */}
              <div className="flex justify-between items-center w-full text-sm md:text-sm font-black tracking-widest uppercase text-black/80 mb-3 border-b border-black/10 pb-3">
                <span className="flex items-center gap-2 text-costa-green">
                  <span className="w-2.5 h-2.5 bg-costa-green animate-pulse rounded-full" />
                  SYSTEM ONLINE
                </span>
                <span>{BOOT_MESSAGES[messageIndex]}</span>
              </div>

              {/* Thick Brutalist Progress Bar */}
              <div className="w-full h-3 md:h-4 bg-black/5 relative overflow-hidden border border-black/20">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-costa-green"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1, ease: "circOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
