"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Globe, X } from "lucide-react";

const COMPANY_FACTS = [
  { title: "AS6081 Certified", text: "Rigorous counterfeit mitigation protocols", icon: "shield" },
  { title: "Global Reach", text: "Offices in Dubai, India, HK, and Israel", icon: "globe" },
  { title: "Fast Turnaround", text: "Average response time under 4 hours", icon: "clock" },
  { title: "Trusted Partner", text: "15+ years of mission-critical distribution", icon: "award" }
];

export default function ActivityTicker() {
  const [activeFact, setActiveFact] = useState<{ title: string; text: string; icon: string; id: number } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let currentIndex = 0;

    const showNextFact = () => {
      const fact = COMPANY_FACTS[currentIndex % COMPANY_FACTS.length];
      setActiveFact({ ...fact, id: Date.now() });
      currentIndex++;
      
      // Auto dismiss after 6 seconds
      setTimeout(() => {
        setActiveFact(null);
      }, 6000);
    };

    // Show first fact after 2 seconds
    const initialTimeout = setTimeout(showNextFact, 2000);
    
    // Then show a new fact every 25 seconds
    const interval = setInterval(showNextFact, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[100] pointer-events-none flex flex-col justify-end">
      <AnimatePresence mode="wait">
        {activeFact && (
          <motion.div
            key={activeFact.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="pointer-events-auto relative flex items-start gap-3.5 p-4 pr-10 w-full max-w-[340px] bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] group"
          >
            {/* Animated Left Border Line */}
            <div className="absolute left-0 top-3 bottom-3 w-[3px] rounded-r-full bg-gradient-to-b from-costa-green to-emerald-300" />
            
            {/* Icon Container */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-costa-green/10 text-costa-green shrink-0 mt-0.5">
              {activeFact.icon === "shield" ? <ShieldCheck size={16} /> : 
               activeFact.icon === "clock" ? <Clock size={16} /> : 
               activeFact.icon === "award" ? <Award size={16} /> : 
               <Globe size={16} />}
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-0.5 pt-0.5">
              <span className="text-[13px] font-bold text-gray-900 tracking-tight leading-snug">
                {activeFact.title}
              </span>
              <span className="text-[12px] font-medium text-gray-500 leading-snug">
                {activeFact.text}
              </span>
              
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[10px] font-bold text-costa-green uppercase tracking-widest">
                  Costa Devices Fact
                </span>
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveFact(null)}
              className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
