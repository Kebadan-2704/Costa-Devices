"use client";

import React from "react";
import Marquee from "@/components/ui/Marquee";
import { CheckCircle2, Globe, TrendingUp, Zap } from "lucide-react";

const LIVE_EVENTS = [
  { icon: <Zap size={12} className="text-amber-500" />, text: "Just Sourced: 15,000x STM32F4 in Munich, DE", time: "2m ago" },
  { icon: <CheckCircle2 size={12} className="text-costa-green" />, text: "RFQ Fulfilled: 2,500x Texas Instruments DSPs", time: "5m ago" },
  { icon: <Globe size={12} className="text-blue-500" />, text: "New Supplier Onboarded: Shenzhen, CN (Tier-1)", time: "12m ago" },
  { icon: <TrendingUp size={12} className="text-emerald-500" />, text: "Market Alert: FPGA Lead Times Dropping 15%", time: "18m ago" },
  { icon: <Zap size={12} className="text-amber-500" />, text: "AOG Response: 50x Obsolete Connectors shipped to CDG", time: "22m ago" },
];

export default function ActivityTicker() {
  const [events, setEvents] = React.useState(LIVE_EVENTS);

  React.useEffect(() => {
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

    const generateLocalEvent = () => {
      const randomEvent = PENDING_EVENTS[Math.floor(Math.random() * PENDING_EVENTS.length)];
      
      let icon = <Globe size={12} className="text-blue-500" />;
      if (randomEvent.type === "fulfilled") icon = <CheckCircle2 size={12} className="text-costa-green" />;
      else if (randomEvent.type === "alert") icon = <TrendingUp size={12} className="text-emerald-500" />;
      else if (randomEvent.type === "sourced") icon = <Zap size={12} className="text-amber-500" />;
      
      const newEvent = {
        icon,
        text: randomEvent.text,
        time: "Just now"
      };
      
      setEvents((prev) => {
        const agedEvents = prev.map(e => ({
          ...e,
          time: e.time === "Just now" ? "1m ago" : e.time
        }));
        return [newEvent, ...agedEvents].slice(0, 15);
      });
    };
    
    // Generate a new local event every 15 seconds
    const intervalId = setInterval(generateLocalEvent, 15000);
    // Generate one immediately on mount after 2 seconds
    setTimeout(generateLocalEvent, 2000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-white text-gray-900 border-t border-gray-100 flex items-center h-[52px] shadow-[0_-4px_10px_rgba(0,0,0,0.03)] pointer-events-auto z-[101]">
      <div className="h-full flex items-center px-4 flex-shrink-0 relative z-10 bg-white shadow-[4px_0_10px_rgba(0,0,0,0.03)] border-r border-gray-100">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 bg-costa-green rounded-full animate-pulse mr-2"></span>
          <span className="text-[10px] font-black tracking-widest uppercase text-gray-800">Live Feed</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
        
        <Marquee speed="slowest" direction="left" className="overflow-y-hidden">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-center mx-8 gap-4">
              <span className="flex-shrink-0">{event.icon}</span>
              <span className="text-[11px] font-black tracking-[0.15em] text-gray-900 uppercase whitespace-nowrap drop-shadow-sm">
                {event.text}
              </span>
              <span className="text-[9px] text-gray-400 font-bold ml-1">
                {event.time}
              </span>
              {/* Bold vertical line separator */}
              <div className="w-[3px] h-4 bg-gray-200 rounded-full ml-8"></div>
            </div>
          ))}
        </Marquee>
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}
