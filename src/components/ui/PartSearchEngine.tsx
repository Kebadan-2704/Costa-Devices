"use client";
import { useState, useEffect, useRef } from "react";
import { Search, Command, X, ArrowRight, Package, Loader2 } from "lucide-react";
import { PART_CATALOG } from "@/lib/constants";
import Link from "next/link";

export default function PartSearchEngine() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle with Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Simulated search delay for premium feel
  useEffect(() => {
    if (query) {
      setIsSearching(true);
      const timer = setTimeout(() => setIsSearching(false), 300);
      return () => clearTimeout(timer);
    }
  }, [query]);

  const results = query
    ? PART_CATALOG.filter(
        (p) =>
          p.partNumber.toLowerCase().includes(query.toLowerCase()) ||
          p.manufacturer.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Trigger Button (Navbar) */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-xl border border-slate-200 dark:border-slate-700/50 text-sm text-slate-500 group"
      >
        <Search size={16} className="text-slate-400 group-hover:text-[#059669] transition-colors" />
        <span className="w-32 text-left">Search part #...</span>
        <div className="flex items-center gap-1 opacity-70">
          <Command size={12} />
          <span className="font-mono text-xs font-bold">K</span>
        </div>
      </button>

      {/* Mobile Icon Only */}
      <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-slate-600 dark:text-slate-300">
        <Search size={20} />
      </button>

      {/* Command Palette Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] sm:pt-[20vh] px-4 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 animate-in slide-in-from-top-4 duration-300">
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-200 dark:border-slate-800">
              {isSearching ? (
                <Loader2 size={20} className="text-[#059669] animate-spin shrink-0" />
              ) : (
                <Search size={20} className="text-[#059669] shrink-0" />
              )}
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by exact part number, manufacturer, or category..."
                className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 font-mono text-sm md:text-base"
              />
              <button onClick={() => setIsOpen(false)} className="p-1 text-slate-400 hover:text-red-500 transition-colors bg-slate-100 dark:bg-slate-800 rounded-md">
                <X size={16} />
              </button>
            </div>

            {/* Default State */}
            {!query && (
              <div className="p-12 text-center text-slate-500">
                <Package size={48} className="mx-auto mb-4 opacity-20" />
                <p className="font-heading font-medium">Search the Costa Devices Catalog</p>
                <p className="text-xs mt-2 opacity-70">Try searching for "FWP-50B" or "Eaton Bussmann"</p>
              </div>
            )}

            {/* Results */}
            {query && (
              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                {results.length > 0 ? (
                  <div className="p-2 space-y-1">
                    {results.map((part) => (
                      <Link
                        href={`/request-quote?part=${part.partNumber}`}
                        key={part.id}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 group transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/50">
                            <Package size={18} className="text-[#059669]" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-slate-900 dark:text-white">{part.partNumber}</span>
                              {part.inStock ? (
                                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-[#059669] dark:bg-[#059669]/20">In Stock</span>
                              ) : (
                                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Backordered</span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{part.manufacturer} • {part.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-[#059669] opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                          RFQ <ArrowRight size={14} />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center text-slate-500">
                    <p>No components found for "<span className="font-bold text-slate-900 dark:text-white">{query}</span>"</p>
                    <p className="text-xs mt-2 opacity-70">If it's not cataloged, we can still source it through our Global Network.</p>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="inline-block mt-4 text-xs font-bold text-[#059669] hover:underline">
                      Request Custom Sourcing
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
