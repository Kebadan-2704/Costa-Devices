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
    // Generate AI Events endlessly using the provided API
    const fetchAITickerEvent = async () => {
      try {
        const promptText = "Generate exactly one short, realistic supply chain alert for an electronics sourcing company. Like: 'RFQ Fulfilled: 2,500x Texas Instruments DSPs' or 'Market Alert: Lead Times Dropping'. Return ONLY the message string, no quotes or intro.";
        const encodedPrompt = encodeURIComponent(promptText);
        const res = await fetch(`https://chatbot.codexapi.workers.dev/?prompt=${encodedPrompt}&model=gpt-5.1`);
        const data = await res.json();
        
        if (data && data.answer) {
          const newText = data.answer.replace(/["*]/g, '').trim();
          
          // Assign a random icon based on keywords or randomly
          const isPositive = newText.toLowerCase().includes('fulfilled') || newText.toLowerCase().includes('passed');
          const isAlert = newText.toLowerCase().includes('alert') || newText.toLowerCase().includes('dropping');
          
          let icon = <Globe size={12} className="text-blue-500" />;
          if (isPositive) icon = <CheckCircle2 size={12} className="text-costa-green" />;
          else if (isAlert) icon = <TrendingUp size={12} className="text-emerald-500" />;
          else icon = <Zap size={12} className="text-amber-500" />;
          
          const newEvent = {
            icon,
            text: newText,
            time: "Just now"
          };
          
          setEvents((prev) => {
            // Age the previous events slightly
            const agedEvents = prev.map(e => ({
              ...e,
              time: e.time === "Just now" ? "1m ago" : e.time
            }));
            return [newEvent, ...agedEvents].slice(0, 15);
          });
        }
      } catch (err) {
        console.error("Failed to generate AI ticker event:", err);
      }
    };
    
    // Fetch a new AI generated event every 15 seconds
    const intervalId = setInterval(fetchAITickerEvent, 15000);
    // Fetch one immediately on mount after 2 seconds to not block UI load
    setTimeout(fetchAITickerEvent, 2000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-white text-gray-900 border-b border-gray-100 flex items-center h-11 relative shadow-sm pointer-events-auto z-40">
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
            <div key={idx} className="flex items-center mx-6 gap-2">
              <span className="flex-shrink-0">{event.icon}</span>
              <span className="text-[10px] font-black tracking-widest text-gray-900 uppercase whitespace-nowrap drop-shadow-sm">
                {event.text}
              </span>
              <span className="text-[9px] text-gray-400 font-bold ml-1">
                {event.time}
              </span>
              {/* Separator dot */}
              <span className="w-1 h-1 bg-gray-300 rounded-full ml-6"></span>
            </div>
          ))}
        </Marquee>
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </div>
  );
}
