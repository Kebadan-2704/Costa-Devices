"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Package, Server, Cpu, Globe, ArrowRight, X } from "lucide-react";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Handle Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleSelect = (href: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSelect(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[999] bg-white/30 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden pointer-events-auto flex flex-col max-h-[70vh]"
            >
              {/* Search Header */}
              <form onSubmit={handleSearch} className="relative flex items-center px-6 py-4 border-b border-gray-100">
                <Search size={20} className="text-gray-400" />
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search parts, services, or type a command..."
                  className="flex-1 bg-transparent border-none outline-none px-4 text-lg text-gray-900 placeholder:text-gray-400"
                />
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-gray-200 px-2 py-1 rounded bg-gray-50">ESC</span>
                  <button type="button" onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                    <X size={16} />
                  </button>
                </div>
              </form>

              {/* Suggestions Body */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6">
                
                {/* Inventory Search */}
                {query && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 px-4 mb-2">Part Inventory</div>
                    <button 
                      onClick={() => handleSelect(`/search?q=${encodeURIComponent(query)}`)}
                      className="w-full flex items-center justify-between p-4 hover:bg-[#fafafa] rounded-2xl group transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-costa-green/10 flex items-center justify-center text-costa-green group-hover:scale-110 transition-transform">
                          <Package size={18} />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-gray-900">Search globally for "{query}"</div>
                          <div className="text-xs text-gray-500">Check live pricing and availability</div>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 group-hover:text-costa-green group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>
                )}

                {/* Quick Links */}
                {!query && (
                  <>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 px-4 mb-2">Quick Actions</div>
                      <div className="grid gap-1">
                        <button onClick={() => handleSelect('/request-quote')} className="w-full flex items-center justify-between p-4 hover:bg-[#fafafa] rounded-2xl group transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-costa-green group-hover:text-white transition-colors">
                              <Search size={18} />
                            </div>
                            <div className="text-left">
                              <div className="font-bold text-gray-900">Submit BOM Payload</div>
                              <div className="text-xs text-gray-500">Upload your CSV for algorithmic matching</div>
                            </div>
                          </div>
                        </button>
                        <button onClick={() => handleSelect('/services')} className="w-full flex items-center justify-between p-4 hover:bg-[#fafafa] rounded-2xl group transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-costa-green group-hover:text-white transition-colors">
                              <Globe size={18} />
                            </div>
                            <div className="text-left">
                              <div className="font-bold text-gray-900">Calculate ROI</div>
                              <div className="text-xs text-gray-500">Use our interactive supply chain calculator</div>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400 px-4 mb-2">Divisions</div>
                      <div className="grid gap-1">
                        <button onClick={() => handleSelect('/active-components')} className="w-full flex items-center justify-between p-4 hover:bg-[#fafafa] rounded-2xl group transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-costa-green/5 border border-costa-green/20 flex items-center justify-center text-costa-green">
                              <Cpu size={18} />
                            </div>
                            <div className="font-bold text-gray-900">Electronics Components</div>
                          </div>
                        </button>
                        <button onClick={() => handleSelect('/passive-components')} className="w-full flex items-center justify-between p-4 hover:bg-[#fafafa] rounded-2xl group transition-all">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#0D6B3D]/5 border border-[#0D6B3D]/20 flex items-center justify-center text-[#0D6B3D]">
                              <Server size={18} />
                            </div>
                            <div className="font-bold text-gray-900">Electrical & Renewables</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                )}
                
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
