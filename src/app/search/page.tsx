"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, Filter, ShieldCheck, Download, Package, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Mock data tailored to the search query or a fallback
  const mockResults = [
    {
      mfg: "Texas Instruments",
      part: query || "TMS320F28335PGFA",
      desc: "32-bit Microcontroller, 150MHz, 512KB Flash, 176-LQFP",
      stock: "1,200",
      leadTime: "Immediate",
      dc: "2021+",
      verified: true,
      price: "$14.50"
    },
    {
      mfg: "NXP",
      part: query ? `${query}-ALT` : "MK64FN1M0VLQ12",
      desc: "Kinetis K64, 32-bit MCU, ARM Cortex-M4, 120MHz",
      stock: "450",
      leadTime: "2 Days",
      dc: "2019",
      verified: true,
      price: "$18.25"
    },
    {
      mfg: "STMicroelectronics",
      part: query ? `${query}-PRO` : "STM32F407VGT6",
      desc: "Mainstream ARM Cortex-M4 MCU with DSP and FPU",
      stock: "Contact for Stock",
      leadTime: "5-7 Days",
      dc: "Mixed",
      verified: false,
      price: "Request"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#fafafa] text-gray-900">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-2">
                Search Results
              </h1>
              <p className="text-gray-500 font-medium">
                Showing availability for <span className="text-costa-green font-bold">"{query}"</span> across 50+ global nodes.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 shadow-sm hover:border-costa-green hover:text-costa-green transition-colors">
                <Filter size={16} /> Filters
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 shadow-sm hover:border-costa-green hover:text-costa-green transition-colors">
                <Download size={16} /> Export CSV
              </button>
            </div>
          </div>

          {/* Active Search Bar in Header */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              defaultValue={query}
              placeholder="Search part number..."
              className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-gray-900 shadow-sm focus:border-costa-green focus:ring-1 focus:ring-costa-green outline-none transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-costa-green text-white px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#15964f]">
              Search
            </button>
          </div>
        </div>

        {/* Data Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 font-bold text-xs text-gray-500 uppercase tracking-widest">Manufacturer</th>
                  <th className="py-4 px-6 font-bold text-xs text-gray-500 uppercase tracking-widest">Part Number</th>
                  <th className="py-4 px-6 font-bold text-xs text-gray-500 uppercase tracking-widest">Global Stock</th>
                  <th className="py-4 px-6 font-bold text-xs text-gray-500 uppercase tracking-widest">Lead Time</th>
                  <th className="py-4 px-6 font-bold text-xs text-gray-500 uppercase tracking-widest">Status</th>
                  <th className="py-4 px-6 font-bold text-xs text-gray-500 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockResults.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors group">
                    <td className="py-5 px-6">
                      <span className="font-bold text-sm text-gray-900">{item.mfg}</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="font-mono font-bold text-costa-green">{item.part}</span>
                      <p className="text-xs text-gray-400 mt-1 truncate max-w-[200px]" title={item.desc}>{item.desc}</p>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        <Package size={16} className={item.stock !== "Contact for Stock" ? "text-emerald-500" : "text-amber-500"} />
                        <span className="font-bold text-sm text-gray-700">{item.stock}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-gray-400" />
                        <span className="text-sm font-medium text-gray-600">{item.leadTime}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      {item.verified ? (
                        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-emerald-100">
                          <ShieldCheck size={14} /> AS6081 Verified
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-gray-200">
                          Unverified Source
                        </div>
                      )}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <Link 
                        href={`/request-quote?part=${encodeURIComponent(item.part)}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-costa-green transition-colors shadow-sm group-hover:shadow-md"
                      >
                        Request Quote <ArrowRight size={14} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center text-gray-500">Loading search...</div>}>
      <SearchResults />
    </Suspense>
  );
}
