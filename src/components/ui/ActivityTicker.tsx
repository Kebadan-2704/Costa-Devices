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
  { icon: <CheckCircle2 size={12} className="text-costa-green" />, text: "QA Passed: 10,000x Microchip AS6081 Batch", time: "31m ago" },
];

// Placeholder for your future backend API or WebSocket URL
// You can set this in your .env.local file: NEXT_PUBLIC_TICKER_API_URL=wss://api.costadevices.com/ticker
const API_URL = process.env.NEXT_PUBLIC_TICKER_API_URL || null;

export default function ActivityTicker() {
  const [events, setEvents] = React.useState(LIVE_EVENTS);

  React.useEffect(() => {
    // If no API URL is provided, we just use the fallback LIVE_EVENTS array.
    if (!API_URL) return;

    // ==========================================
    // OPTION 1: Polling a REST API (Uncomment to use)
    // ==========================================
    /*
    const fetchEvents = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        // Assuming your API returns an array of events
        setEvents(data);
      } catch (err) {
        console.error("Failed to fetch ticker events:", err);
      }
    };
    
    // Fetch immediately, then every 30 seconds
    fetchEvents();
    const intervalId = setInterval(fetchEvents, 30000);
    return () => clearInterval(intervalId);
    */

    // ==========================================
    // OPTION 2: WebSocket for true real-time (Uncomment to use)
    // ==========================================
    /*
    const ws = new WebSocket(API_URL);
    
    ws.onmessage = (event) => {
      const newEvent = JSON.parse(event.data);
      // Prepend the new event and keep a maximum of 20 items in the ticker
      setEvents((prevEvents) => [newEvent, ...prevEvents].slice(0, 20));
    };

    ws.onerror = (error) => console.error("Ticker WebSocket Error:", error);

    return () => ws.close();
    */
  }, []);

  return (
    <div className="w-full bg-[#0f172a] text-white border-b border-white/10 flex items-center h-9 relative z-40">
      <div className="bg-costa-green text-black font-black text-[9px] tracking-widest uppercase h-full flex items-center px-4 flex-shrink-0 relative z-10 border-r border-black/10">
        <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse mr-2"></span>
        Live Feed
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0f172a] to-transparent z-10"></div>
        
        <Marquee speed="slow" direction="left" className="overflow-y-hidden">
          {events.map((event, idx) => (
            <div key={idx} className="flex items-center mx-6 gap-2">
              <span className="flex-shrink-0">{event.icon}</span>
              <span className="text-[10px] font-medium tracking-wide text-gray-200 uppercase whitespace-nowrap">
                {event.text}
              </span>
              <span className="text-[9px] text-gray-500 font-bold ml-1">
                {event.time}
              </span>
              {/* Separator dot */}
              <span className="w-1 h-1 bg-white/20 rounded-full ml-6"></span>
            </div>
          ))}
        </Marquee>
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0f172a] to-transparent z-10"></div>
      </div>
    </div>
  );
}
