"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";

export default function GlobalSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 w-full"
    >
      <div className="relative flex-1 flex items-center bg-white border border-gray-200 rounded-full px-4 py-2.5 focus-within:border-costa-green focus-within:shadow-[0_0_0_3px_rgba(26,175,93,0.08)] transition-all duration-300 group">
        <Search size={16} className="text-gray-400 mr-3 flex-shrink-0 group-focus-within:text-costa-green transition-colors" />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter part number, manufacturer, or keyword..." 
          className="flex-1 bg-transparent border-none outline-none text-[#0f172a] text-sm placeholder:text-[#94a3b8] font-medium min-w-0"
        />
        
        {/* Supplier count badge */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-full border border-gray-100 ml-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-costa-green animate-pulse"></span>
          <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase whitespace-nowrap">1,402 Suppliers</span>
        </div>
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 bg-costa-green text-white py-2.5 px-5 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-emerald-500 transition-all shadow-[0_4px_12px_rgba(26,175,93,0.3)] hover:shadow-[0_6px_16px_rgba(26,175,93,0.4)] whitespace-nowrap shrink-0"
      >
        Scan Global
        <ArrowRight size={14} />
      </button>
    </form>
  );
}
