"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Search, Command, X, ArrowRight, Package, Loader2 } from "lucide-react";
import { PART_CATALOG } from "@/lib/constants";
import Link from "next/link";

export default function PartSearchEngine({ variant = "default" }: { variant?: "default" | "hero" }) {
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

  // Click-outside handler for desktop inline search
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen || variant === "hero") return;
    const handleClickOutside = (e: MouseEvent) => {
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, variant]);

  const results = query
    ? PART_CATALOG.filter(
        (p) =>
          p.partNumber.toLowerCase().includes(query.toLowerCase()) ||
          p.manufacturer.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Trigger Button */}
      {variant === "hero" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full max-w-3xl flex items-center justify-between gap-4 px-6 md:px-8 py-5 md:py-6 bg-bg-primary hover:bg-bg-secondary transition-all shadow-xl hover:shadow-[0_0_40px_rgba(13,107,61,0.1)] rounded-xl border border-glass-border group focus:outline-none focus:border-costa-green"
        >
          <div className="flex items-center gap-4 flex-1">
            <Search size={28} className="text-text-muted group-hover:text-costa-green transition-colors shrink-0" />
            <span className="text-text-muted text-lg md:text-xl font-mono text-left w-full">Search part number, spec, or category...</span>
          </div>
          <div className="hidden md:flex items-center gap-2 bg-bg-secondary px-3 py-1.5 rounded-lg border border-glass-border">
            <Command size={14} className="text-text-muted" />
            <span className="font-mono text-sm font-bold text-text-muted">K</span>
          </div>
        </button>
      ) : (
        <>
          <div ref={desktopSearchRef} className="hidden md:block relative z-[150]">
            <div className={`flex items-center gap-2 px-3 py-1.5 text-sm transition-all duration-300 rounded-full border ${isOpen ? 'w-80 bg-white border-glass-border shadow-xl' : 'w-48 bg-transparent border-transparent hover:text-costa-green text-text-muted'}`}>
              <Search size={16} className={isOpen ? "text-costa-green shrink-0" : "shrink-0"} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (!isOpen) setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
                placeholder="Search part #..."
                className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder-text-muted/60 font-medium min-w-0"
              />
              {!isOpen && (
                <div className="flex items-center gap-0.5 opacity-50 text-[10px] shrink-0">
                  <Command size={10} />
                  <span className="font-mono font-bold">K</span>
                </div>
              )}
              {isOpen && (
                <button onClick={() => { setIsOpen(false); setQuery(""); }} className="p-0.5 text-text-muted hover:text-red-500 rounded shrink-0">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Dropdown Results for Desktop Navbar */}
            {isOpen && (
              <div className="absolute top-[calc(100%+12px)] right-0 w-[400px] bg-white rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.12)] border border-black/5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {query ? (
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
                    {results.length > 0 ? (
                      <>
                        <p className="px-3 py-2 font-mono text-[10px] text-text-muted uppercase tracking-widest">{results.length} result{results.length !== 1 ? 's' : ''} found</p>
                        {results.map((part) => (
                          <Link
                            href={`/request-quote?part=${part.partNumber}`}
                            key={part.id}
                            onClick={() => { setIsOpen(false); setQuery(""); }}
                            className="flex items-center justify-between p-3 rounded-xl hover:bg-black/5 group transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-costa-green/10 flex items-center justify-center shrink-0">
                                <Package size={14} className="text-costa-green" />
                              </div>
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-mono font-bold text-text-primary text-sm truncate">{part.partNumber}</span>
                                </div>
                                <p className="text-[10px] text-text-muted mt-0.5 truncate">{part.manufacturer} • {part.category}</p>
                              </div>
                            </div>
                            <ArrowRight size={14} className="text-costa-green opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 shrink-0" />
                          </Link>
                        ))}
                      </>
                    ) : (
                      <div className="p-8 text-center text-text-muted">
                        <p className="text-sm">No components found for &ldquo;<span className="font-bold text-text-primary">{query}</span>&rdquo;</p>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="inline-block mt-3 text-xs font-bold text-costa-green hover:underline">
                          Request Custom Sourcing
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 bg-black/5">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3">Suggested Searches</p>
                    <div className="flex flex-wrap gap-2">
                      <span onClick={() => setQuery("FWP-50B")} className="text-[10px] font-mono font-bold bg-white text-text-secondary px-2.5 py-1.5 rounded-full border border-black/5 cursor-pointer hover:border-costa-green hover:text-costa-green transition-colors">FWP-50B</span>
                      <span onClick={() => setQuery("Eaton")} className="text-[10px] font-mono font-bold bg-white text-text-secondary px-2.5 py-1.5 rounded-full border border-black/5 cursor-pointer hover:border-costa-green hover:text-costa-green transition-colors">Eaton Bussmann</span>
                      <span onClick={() => setQuery("IGBT")} className="text-[10px] font-mono font-bold bg-white text-text-secondary px-2.5 py-1.5 rounded-full border border-black/5 cursor-pointer hover:border-costa-green hover:text-costa-green transition-colors">IGBT</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-text-secondary hover:text-costa-green transition-colors">
            <Search size={20} />
          </button>
        </>
      )}

      {/* Command Palette Overlay */}
      {isOpen && (
        <div className={`fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4 animate-in fade-in duration-300 ${variant === 'default' ? 'md:hidden' : ''}`}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.15)] overflow-hidden border border-black/5 animate-in slide-in-from-top-8 duration-500 ease-out">
            {/* Input Header */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-black/5 bg-white/50">
              {isSearching ? (
                <Loader2 size={24} className="text-costa-green animate-spin shrink-0" />
              ) : (
                <Search size={24} className="text-costa-green shrink-0" />
              )}
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by exact part number, manufacturer, or category..."
                className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder-text-muted/60 font-mono text-base md:text-lg tracking-tight"
              />
              <button onClick={() => setIsOpen(false)} className="p-1.5 text-text-muted hover:text-white hover:bg-red-500 transition-colors rounded-lg border border-transparent hover:border-red-600">
                <X size={18} />
              </button>
            </div>

            {/* Default State */}
            {!query && (
              <div className="p-16 text-center text-text-muted relative overflow-hidden bg-white/30">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,175,93,0.05),transparent_50%)] pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-costa-green/5 border border-costa-green/10 flex items-center justify-center">
                    <Search size={28} className="text-costa-green opacity-80" />
                  </div>
                  <h3 className="font-heading text-2xl font-black tracking-tight text-text-primary mb-3">Costa Global Catalog</h3>
                  <p className="text-sm font-medium opacity-80 text-text-secondary">Search across millions of verified components</p>
                  
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-black/5 text-text-secondary px-3 py-1.5 rounded-full border border-black/5">FWP-50B</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-black/5 text-text-secondary px-3 py-1.5 rounded-full border border-black/5">Eaton Bussmann</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-black/5 text-text-secondary px-3 py-1.5 rounded-full border border-black/5">IGBT Modules</span>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            {query && (
              <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                {results.length > 0 ? (
                  <div className="p-2 space-y-1">
                    <p className="px-3 py-2 font-mono text-[10px] text-text-muted uppercase tracking-widest">{results.length} result{results.length !== 1 ? 's' : ''} found</p>
                    {results.map((part) => (
                      <Link
                        href={`/request-quote?part=${part.partNumber}`}
                        key={part.id}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-bg-secondary group transition-colors border border-transparent hover:border-glass-border"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-costa-green/10 flex items-center justify-center border border-costa-green/20">
                            <Package size={18} className="text-costa-green" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-text-primary">{part.partNumber}</span>
                              {part.inStock ? (
                                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-costa-green/10 text-costa-green border border-costa-green/20">In Stock</span>
                              ) : (
                                <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">Backordered</span>
                              )}
                            </div>
                            <p className="text-xs text-text-muted mt-1">{part.manufacturer} • {part.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-costa-green opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                          RFQ <ArrowRight size={14} />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center text-text-muted">
                    <p>No components found for &ldquo;<span className="font-bold text-text-primary">{query}</span>&rdquo;</p>
                    <p className="text-xs mt-2 opacity-70">If it&apos;s not cataloged, we can still source it through our Global Network.</p>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="inline-block mt-4 text-xs font-bold text-costa-green hover:underline">
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
