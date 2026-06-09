"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown, Clock, ShieldCheck } from "lucide-react";

export default function ROIWidget() {
  const [spend, setSpend] = useState<number>(500000);
  const [savings, setSavings] = useState<number>(0);
  
  // Assuming average 18% savings on procurement costs via algorithmic sourcing
  useEffect(() => {
    setSavings(spend * 0.18);
  }, [spend]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpend(Number(e.target.value));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="bg-gray-900 p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-costa-green/20 rounded-full blur-[80px]" />
        <div className="relative z-10 flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
            <Calculator className="text-costa-green" />
          </div>
          <h3 className="font-heading text-2xl font-bold">ROI Calculator</h3>
        </div>
        <p className="relative z-10 text-gray-400 font-medium">
          Estimate your supply chain savings by utilizing Costa Devices' algorithmic sourcing and consolidated procurement.
        </p>
      </div>

      <div className="p-8">
        <div className="mb-10">
          <label className="flex justify-between items-center mb-4">
            <span className="font-bold text-gray-700 text-sm uppercase tracking-widest">Annual Component Spend</span>
            <span className="font-mono text-xl font-bold text-gray-900">{formatCurrency(spend)}</span>
          </label>
          <input 
            type="range" 
            min="50000" 
            max="5000000" 
            step="50000" 
            value={spend} 
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-costa-green"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
            <span>$50k</span>
            <span>$5M+</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
            <TrendingDown className="text-costa-green mb-3" size={24} />
            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Estimated Savings</div>
            <motion.div 
              key={savings}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl font-black text-gray-900"
            >
              {formatCurrency(savings)}
            </motion.div>
          </div>
          <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
            <Clock className="text-blue-500 mb-3" size={24} />
            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Time Saved</div>
            <div className="text-2xl font-black text-gray-900">14 Days</div>
          </div>
          <div className="bg-[#fafafa] p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
            <ShieldCheck className="text-emerald-500 mb-3" size={24} />
            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Risk Reduced</div>
            <div className="text-2xl font-black text-gray-900">99.9%</div>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center">
          *Savings based on our average 18% BOM cost reduction across 500+ enterprise clients.
        </p>
      </div>
    </div>
  );
}
