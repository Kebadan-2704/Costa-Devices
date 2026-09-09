"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, X, ExternalLink, Clock, ShieldCheck, Download } from "lucide-react";
import Link from "next/link";
import { BRANDS, DISTRIBUTOR_BRANDS, MANUFACTURERS } from "@/lib/constants";

// --- Types ---
type BrandCard = {
  name: string;
  logo?: string;
  products?: string;
  description?: string;
  category: string;
};

// --- Local Logo Map from /images/linecard/ folder ---
const LINE_CARD_LOGOS: Record<string, string> = {
  "ABB": "/images/linecard/ABB.jpg",
  "ABRACON": "/images/linecard/Abracon.png",
  "AIRBORN": "/images/linecard/AirBorn.png",
  "ALLEGRO": "/images/linecard/allegro.jpg",
  "ALTERA": "/images/linecard/altera.jpg",
  "AMPHENOL": "/images/linecard/Amphenol.png",
  "ANALOG DEVICES": "/images/linecard/analog devices.jpg",
  "APTIV": "/images/linecard/Aptiv.png",
  "ATHER": "/images/linecard/Ather.png",
  "ATMEL": "/images/linecard/Atmel.png",
  "BOURNS": "/images/linecard/Bourns.jpg",
  "BROADCOM": "/images/linecard/Broadcom.png",
  "CHEMI-CON": "/images/linecard/Chemi-Con.png",
  "COILCRAFT": "/images/linecard/Colicraft.png",
  "COOPER POWER": "/images/linecard/Copper Power.jpg",
  "DANFOSS": "/images/linecard/Danfoss.jpg",
  "DBWAVE": "/images/linecard/DBwave.png",
  "DELTA": "/images/linecard/Delta.png",
  "DIODES INCORPORATED": "/images/linecard/Diodes Inc.png",
  "EATON": "/images/linecard/Eaton.png",
  "EATON BUSSMANN": "/images/linecard/Eaton Bussmann.png",
  "FUJITSU": "/images/linecard/Fujitsu.jpg",
  "GIGADEVICE": "/images/linecard/GigaDevice.png",
  "GLENAIR": "/images/linecard/Glenair.jpg",
  "HONEYWELL": "/images/linecard/Honeywell.jpg",
  "HPS": "/images/linecard/HPS.png",
  "INFINEON": "/images/linecard/Infineon.png",
  "INTEL": "/images/linecard/download.jpg",
  "JST": "/images/linecard/JST.jpg",
  "KEL": "/images/linecard/Kel.png",
  "KEMET": "/images/linecard/KEMET.png",
  "KOA": "/images/linecard/KOA.png",
  "KNOWLES": "/images/linecard/Knowles.jpg",
  "KYOCERA": "/images/linecard/Kyocera.png",
  "LITTELFUSE": "/images/linecard/Littelfuse.png",
  "MACRONIX": "/images/linecard/Macronix.png",
  "MERSEN": "/images/linecard/Mersen.jpg",
  "MICRON": "/images/linecard/Micron.jpg",
  "MOLEX": "/images/linecard/Molex.jpg",
  "MOSCHIP": "/images/linecard/Moschip.png",
  "MURATA": "/images/linecard/Murata.png",
  "NEC": "/images/linecard/NEC.png",
  "NEXPERIA": "/images/linecard/Nexperia.png",
  "NICHICON": "/images/linecard/Nichicon.png",
  "NVIDIA": "/images/linecard/NVIDIA.png",
  "NXP": "/images/linecard/NXP.jpg",
  "OHMITE": "/images/linecard/Ohmite.jpg",
  "OMRON": "/images/linecard/Omron.png",
  "ONSEMI": "/images/linecard/onsemi.jpg",
  "OSRAM": "/images/linecard/OSRAM.png",
  "PANASONIC": "/images/linecard/Panasonic.png",
  "PHOENIX CONTACT": "/images/linecard/Phoenix Contact.jpg",
  "PKC GROUP": "/images/linecard/PKC Group.jpg",
  "PULSE": "/images/linecard/Pulse.png",
  "QUALCOMM": "/images/linecard/Qualcomm.png",
  "QUANTIC EVANS": "/images/linecard/Quantic Evans.jpg",
  "QUECTEL": "/images/linecard/Quectel.jpg",
  "RENESAS": "/images/linecard/Renesas.png",
  "SAWNICS": "/images/linecard/Sawnics.jpg",
  "SCHNEIDER": "/images/linecard/Schneider.jpg",
  "SEMTECH": "/images/linecard/Semtech.jpg",
  "SENSATA TECHNOLOGIES": "/images/linecard/Sensata.png",
  "SIEMENS": "/images/linecard/Siemens.png",
  "SK HYNIX": "/images/linecard/SK hynix.jpg",
  "SKYWORKS": "/images/linecard/Skyworks.jpg",
  "SNC": "/images/linecard/SNC.jpg",
  "STMICROELECTRONICS": "/images/linecard/STMicroelectronics.jpg",
  "SUMITOMO": "/images/linecard/Sumitomo.png",
  "SUNLORD": "/images/linecard/Sunlord.jpg",
  "TAIYO YUDEN": "/images/linecard/Taiyo Yuden.png",
  "TDK": "/images/linecard/TDK.png",
  "TE CONNECTIVITY": "/images/linecard/TE Connectivity.jpg",
  "TEXAS INSTRUMENTS": "/images/linecard/Texas Instruments.jpg",
  "TOSHIBA": "/images/linecard/Toshiba.jpg",
  "TSMC": "/images/linecard/tsmc.png",
  "VISHAY": "/images/linecard/Vishay.png",
  "WALSIN": "/images/linecard/Walsin.jpg",
  "WINBOND": "/images/linecard/Winbond.png",
  "XILINX": "/images/linecard/Xilinx.png",
  "XP POWER": "/images/linecard/XP Power.png",
  "YAGEO": "/images/linecard/yageo.jpg",
};

const CATEGORY_MAP: Record<string, string> = {
  "ABB": "Power & Automation", "SCHNEIDER": "Power & Automation", "SIEMENS": "Power & Automation",
  "DANFOSS": "Power & Automation", "EATON": "Power & Automation", "EATON BUSSMANN": "Power & Automation",
  "OMRON": "Power & Automation", "HONEYWELL": "Power & Automation", "COOPER POWER": "Power & Automation",
  "HPS": "Power & Automation", "SNC": "Power & Automation",
  "TDK": "Passive Components", "YAGEO": "Passive Components", "MURATA": "Passive Components",
  "VISHAY": "Passive Components", "KEMET": "Passive Components", "COILCRAFT": "Passive Components",
  "WALSIN": "Passive Components", "BOURNS": "Passive Components", "NICHICON": "Passive Components",
  "ROYAL OHM": "Passive Components", "KOA": "Passive Components", "OHMITE": "Passive Components",
  "TAIYO YUDEN": "Passive Components", "SUNLORD": "Passive Components", "CHEMI-CON": "Passive Components",
  "PULSE": "Passive Components",
  "TE CONNECTIVITY": "Interconnect", "MOLEX": "Interconnect", "AMPHENOL": "Interconnect",
  "JST": "Interconnect", "PHOENIX CONTACT": "Interconnect", "GLENAIR": "Interconnect",
  "KEL": "Interconnect", "APTIV": "Interconnect",
};

// Resolve logo — only use local Line card folder logos
const resolveLogo = (name: string): string | undefined => {
  const key = name.toUpperCase();
  return LINE_CARD_LOGOS[key];
};

// --- Brand Logo Component ---
const BrandLogo = ({ brand }: { brand: BrandCard }) => {
  const [imgError, setImgError] = useState(false);

  if (!brand.logo || imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center p-4">
        <span className="text-[11px] sm:text-[13px] font-bold tracking-tight leading-tight text-center text-slate-500 line-clamp-2">
          {brand.name}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 min-w-0 min-h-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brand.logo}
        alt={brand.name}
        onError={() => setImgError(true)}
        className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300 opacity-80 group-hover:opacity-100"
      />
    </div>
  );
};

// --- Main Page ---
export default function LineCardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<BrandCard | null>(null);

  // Merge and deduplicate all manufacturers
  const allBrands = useMemo(() => {
    const brandMap = new Map<string, BrandCard>();
    const getCat = (name: string) => CATEGORY_MAP[name.toUpperCase()] || "Semiconductors";

    BRANDS.forEach((b) => {
      brandMap.set(b.name.toUpperCase(), {
        name: b.name,
        logo: resolveLogo(b.name) || b.image || b.logo,
        products: b.products,
        description: b.description,
        category: getCat(b.name),
      });
    });

    const addSimple = (name: string) => {
      const key = name.toUpperCase();
      if (!brandMap.has(key)) {
        brandMap.set(key, { name, logo: resolveLogo(name), category: getCat(name) });
      } else if (!brandMap.get(key)!.logo) {
        brandMap.get(key)!.logo = resolveLogo(name);
      }
    };

    DISTRIBUTOR_BRANDS.forEach(addSimple);
    MANUFACTURERS.forEach(addSimple);

    return Array.from(brandMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Filter
  const filteredBrands = useMemo(() => {
    if (!searchQuery.trim()) return allBrands;
    return allBrands.filter((b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allBrands, searchQuery]);

  const totalCount = allBrands.length;

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-text-secondary">
      {/* Hero Banner */}
      <section className="pt-36 pb-14 bg-[#0c1220] relative overflow-hidden">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} />
        {/* Glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-costa-green/8 blur-[100px]" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <h1 className="font-heading text-[clamp(1.6rem,3.5vw,2.6rem)] font-black leading-[1.15] tracking-tight text-white mb-3">
            Costa Devices is an Authorized Distributor of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-costa-green to-emerald-400">
              World-Leading Manufacturers
            </span>
          </h1>
          <p className="text-gray-400 text-sm max-w-lg mx-auto leading-relaxed mb-8">
            {totalCount}+ manufacturers sourced globally. Guaranteed authentic parts with AS6081 protocols.
          </p>

          {/* Search & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <div className="relative w-full sm:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by manufacturer name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl text-white placeholder-gray-500 text-sm font-medium focus:ring-2 focus:ring-costa-green/40 focus:border-costa-green/50 transition-all"
              />
            </div>
            
            <button 
              onClick={() => alert('PDF generation coming soon')}
              className="flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-xl text-white text-sm font-semibold transition-all w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Authorized Line Card Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1300px] mx-auto px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-[#0c1220] mb-3 tracking-tight">
            Authorized Line Card
          </h2>
          <p className="text-center text-sm text-gray-500 mb-10 max-w-lg mx-auto">
            Browse our complete list of authorized manufacturer partnerships
          </p>

          {filteredBrands.length === 0 ? (
            <div className="py-20 text-center bg-white border border-gray-200/60 rounded-2xl shadow-sm">
              <Search className="h-10 w-10 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-bold text-gray-700 mb-1">No manufacturers found</p>
              <p className="text-gray-400 text-sm">Try adjusting your search term.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4"
            >
              <AnimatePresence>
                {filteredBrands.map((brand, idx) => (
                  <motion.div
                    key={brand.name}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: Math.min(idx * 0.015, 0.5) }}
                    onClick={() => setSelectedBrand(brand)}
                    className="group cursor-pointer bg-white border border-gray-200/60 rounded-xl overflow-hidden transition-all duration-300 hover:border-costa-green/40 hover:shadow-[0_4px_20px_rgba(26,175,93,0.08)] aspect-[2/1] flex items-center justify-center"
                  >
                    <BrandLogo brand={brand} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-12 bg-white border-y border-gray-200/60">
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-costa-green">{totalCount}+</div>
            <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">Manufacturers</div>
          </div>
          <div>
            <div className="text-3xl font-black text-costa-green">4</div>
            <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">Global Offices</div>
          </div>
          <div>
            <div className="text-3xl font-black text-costa-green">5400+</div>
            <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">In-Stock SKUs</div>
          </div>
          <div>
            <div className="text-3xl font-black text-costa-green">99.8%</div>
            <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">Quality Rate</div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0c1220] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Can&apos;t find what you need?
          </h3>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-md mx-auto">
            Our procurement team can source from any manufacturer worldwide.
            Submit your requirements and receive a quote within hours.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 bg-costa-green text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-costa-green/90 transition-all shadow-lg shadow-costa-green/20 hover:shadow-costa-green/30 hover:-translate-y-0.5"
          >
            Request a Quote <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedBrand && (
          <React.Fragment>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBrand(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 z-[101] overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  {selectedBrand.logo ? (
                    <div className="w-14 h-14 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selectedBrand.logo} alt={selectedBrand.name} className="max-w-full max-h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-costa-green/5 rounded-lg border border-costa-green/20 flex items-center justify-center font-black text-xl text-costa-green">
                      {selectedBrand.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg font-black text-gray-900">{selectedBrand.name}</h2>
                    <span className="text-xs font-semibold text-costa-green">{selectedBrand.category}</span>
                  </div>
                </div>
                <button onClick={() => setSelectedBrand(null)} className="p-3 -mr-2 -mt-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close modal">
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 overflow-y-auto space-y-5">
                {selectedBrand.description && (
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">About</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{selectedBrand.description}</p>
                  </div>
                )}

                {selectedBrand.products && (
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Products</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedBrand.products.split(",").map((p) => (
                        <span key={p} className="px-2.5 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                          {p.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                  <div className="bg-costa-green/5 rounded-lg p-3 border border-costa-green/10">
                    <Clock size={16} className="text-costa-green mb-1.5" />
                    <div className="text-sm font-bold text-gray-800">Spot Sourcing</div>
                    <div className="text-xs text-gray-400">4-6 Hours SLA</div>
                  </div>
                  <div className="bg-costa-green/5 rounded-lg p-3 border border-costa-green/10">
                    <ShieldCheck size={16} className="text-costa-green mb-1.5" />
                    <div className="text-sm font-bold text-gray-800">Quality Control</div>
                    <div className="text-xs text-gray-400">AS6081 Tested</div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-gray-100 bg-gray-50">
                <Link
                  href={`/request-quote?manufacturer=${encodeURIComponent(selectedBrand.name)}`}
                  className="flex items-center justify-center gap-2 w-full bg-costa-green text-white py-3 rounded-xl font-bold text-sm hover:bg-costa-green/90 transition-colors shadow-md shadow-costa-green/20"
                >
                  Request Quote for {selectedBrand.name} <ExternalLink size={14} />
                </Link>
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
}
