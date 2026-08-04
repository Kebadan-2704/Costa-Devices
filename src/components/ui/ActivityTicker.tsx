"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Globe, TrendingUp, Zap, X } from "lucide-react";

const PENDING_EVENTS = [
  { text: "Just Sourced: 4,000x NXP Processors in Taiwan", type: "sourced" },
  { text: "RFQ Fulfilled: 1,200x Analog Devices ADCs", type: "fulfilled" },
  { text: "Market Alert: Automotive MCU Shortage Easing", type: "alert" },
  { text: "New Supplier Onboarded: Tokyo, JP (AS6081)", type: "supplier" },
  { text: "AOG Response: 120x Mil-Spec Relays shipped to LHR", type: "sourced" },
  { text: "Quality Lab: 50,000x Capacitors Passed Inspection", type: "fulfilled" },
  { text: "Just Sourced: 8,500x Broadcom Switches in USA", type: "sourced" },
  { text: "Market Alert: Copper Prices Impacting Lead Times", type: "alert" },
  { text: "RFQ Fulfilled: 300x Xilinx FPGAs Delivered", type: "fulfilled" }
];

export default function ActivityTicker() {
  const [activeEvent, setActiveEvent] = useState<{ text: string; type: string; id: number } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const showNextEvent = () => {
      const randomEvent = PENDING_EVENTS[Math.floor(Math.random() * PENDING_EVENTS.length)];
      setActiveEvent({ ...randomEvent, id: Date.now() });
      
      // Auto dismiss after 6 seconds
      setTimeout(() => {
        setActiveEvent(null);
      }, 6000);
    };

    // Show first event after 2 seconds
    const initialTimeout = setTimeout(showNextEvent, 2000);
    
    // Then show a new event every 25 seconds
    const interval = setInterval(showNextEvent, 25000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[100] pointer-events-none flex flex-col justify-end">
      <AnimatePresence mode="wait">
        {activeEvent && (
          <motion.div
            key={activeEvent.id}
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
              {activeEvent.type === "fulfilled" ? <CheckCircle2 size={16} /> : 
               activeEvent.type === "alert" ? <TrendingUp size={16} className="text-purple-500" /> : 
               activeEvent.type === "sourced" ? <Zap size={16} className="text-amber-500 animate-pulse" /> : 
               <Globe size={16} className="text-blue-500" />}
            </div>
            
            {/* Content */}
            <div className="flex flex-col gap-0.5 pt-0.5">
              <span className="text-[13px] font-bold text-gray-900 tracking-tight leading-snug">
                {activeEvent.text.split(": ")[0]}
              </span>
              <span className="text-[12px] font-medium text-gray-500 leading-snug">
                {activeEvent.text.split(": ").slice(1).join(": ")}
              </span>
              
              <div className="flex items-center gap-1.5 mt-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-costa-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-costa-green"></span>
                </span>
                <span className="text-[10px] font-bold text-costa-green uppercase tracking-widest">
                  Live Update
                </span>
              </div>
            </div>
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveEvent(null)}
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
