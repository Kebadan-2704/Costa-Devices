"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Activity, Cpu, Box, Database, Zap } from "lucide-react";

const DATA_STREAMS = [
  {
    category: "Microcontrollers",
    icon: <Cpu size={16} />,
    leadTime: "24-40 Weeks",
    trend: "down",
    priceChange: "-2.4%",
    availability: "High",
  },
  {
    category: "FPGAs",
    icon: <Database size={16} />,
    leadTime: "30-52 Weeks",
    trend: "up",
    priceChange: "+5.1%",
    availability: "Constrained",
  },
  {
    category: "Power ICs",
    icon: <Zap size={16} />,
    leadTime: "12-24 Weeks",
    trend: "stable",
    priceChange: "0.0%",
    availability: "Stable",
  },
  {
    category: "Passives (MLCC)",
    icon: <Box size={16} />,
    leadTime: "8-16 Weeks",
    trend: "down",
    priceChange: "-4.8%",
    availability: "Surplus",
  },
];

export default function MarketIntelligence() {
  const [pulse, setPulse] = useState(false);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] shadow-[0_32px_80px_-12px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center shadow-lg shadow-gray-900/20">
            <Activity size={18} className="text-white" />
          </div>
          <div>
            <h3 className="font-black text-gray-900 text-sm tracking-widest uppercase">Live Market Data</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className={`w-1.5 h-1.5 rounded-full ${pulse ? 'bg-amber-400' : 'bg-costa-green'} transition-colors duration-300`}></span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                {pulse ? 'Updating Database...' : 'Global Availability Synced'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-4 gap-4 mb-4 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden md:grid">
          <div className="col-span-1">Commodity</div>
          <div className="col-span-1">Avg Lead Time</div>
          <div className="col-span-1">Price Trend</div>
          <div className="col-span-1">Availability</div>
        </div>

        <div className="flex flex-col gap-3">
          {DATA_STREAMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group"
            >
              {/* Category */}
              <div className="col-span-1 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-100 text-gray-500 group-hover:text-costa-green transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-sm text-gray-900">{item.category}</span>
              </div>

              {/* Lead Time */}
              <div className="col-span-1 flex items-center gap-2">
                <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest">Lead Time:</span>
                <span className="text-sm font-medium text-gray-600">{item.leadTime}</span>
              </div>

              {/* Price Trend */}
              <div className="col-span-1 flex items-center gap-2">
                <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trend:</span>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${
                  item.trend === 'down' ? 'bg-emerald-50 text-emerald-600' :
                  item.trend === 'up' ? 'bg-red-50 text-red-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.trend === 'down' && <TrendingDown size={14} />}
                  {item.trend === 'up' && <TrendingUp size={14} />}
                  {item.trend === 'stable' && <Minus size={14} />}
                  {item.priceChange}
                </div>
              </div>

              {/* Availability */}
              <div className="col-span-1 flex items-center gap-2">
                <span className="md:hidden text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status:</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((bar) => (
                      <div key={bar} className={`w-1 h-3 rounded-full ${
                        item.availability === 'High' || item.availability === 'Surplus' 
                          ? 'bg-costa-green' 
                          : item.availability === 'Stable'
                            ? (bar <= 2 ? 'bg-amber-400' : 'bg-gray-200')
                            : (bar <= 1 ? 'bg-red-500' : 'bg-gray-200')
                      }`} />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{item.availability}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
