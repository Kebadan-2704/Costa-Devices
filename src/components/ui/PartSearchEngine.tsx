"use client";
import { useState, useEffect, useRef } from "react";
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
          <button
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-3 px-4 py-2 bg-bg-secondary hover:bg-bg-tertiary transition-colors rounded-xl border border-glass-border text-sm text-text-muted group"
          >
            <Search size={16} className="text-text-muted group-hover:text-costa-green transition-colors" />
            <span className="w-32 text-left">Search part #...</span>
            <div className="flex items-center gap-1 opacity-70">
              <Command size={12} />
              <span className="font-mono text-xs font-bold">K</span>
            </div>
          </button>
          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-text-secondary">
            <Search size={20} />
          </button>
        </>
      )}

      {/* Command Palette Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] sm:pt-[20vh] px-4 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <div className="relative w-full max-w-2xl bg-bg-primary rounded-2xl shadow-2xl overflow-hidden border border-glass-border animate-in slide-in-from-top-4 duration-300">
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-glass-border">
              {isSearching ? (
                <Loader2 size={20} className="text-costa-green animate-spin shrink-0" />
              ) : (
                <Search size={20} className="text-costa-green shrink-0" />
              )}
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by exact part number, manufacturer, or category..."
                className="flex-1 bg-transparent border-none outline-none text-text-primary placeholder-text-muted font-mono text-sm md:text-base"
              />
              <button onClick={() => setIsOpen(false)} className="p-1 text-text-muted hover:text-red-500 transition-colors bg-bg-secondary rounded-md">
                <X size={16} />
              </button>
            </div>

            {/* Default State */}
            {!query && (
              <div className="p-12 text-center text-text-muted">
                <Package size={48} className="mx-auto mb-4 opacity-20" />
                <p className="font-heading font-medium">Search the Costa Devices Catalog</p>
                <p className="text-xs mt-2 opacity-70">Try searching for &ldquo;FWP-50B&rdquo; or &ldquo;Eaton Bussmann&rdquo;</p>
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
