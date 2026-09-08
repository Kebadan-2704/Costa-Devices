"use client";

import React, { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, X, ExternalLink, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { BRANDS, DISTRIBUTOR_BRANDS, MANUFACTURERS } from "@/lib/constants";

// --- Data Types & Constants ---
type BrandCard = {
  name: string;
  logo?: string;
  products?: string;
  description?: string;
  category: string;
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const CATEGORIES = ["All Categories", "Semiconductors", "Passive Components", "Interconnect", "Power & Automation"];

// Local Logo Mapping — verified local files
const LOGO_MAP: Record<string, string> = {
  "ABB": "/images/ABB.png",
  "DIODES INCORPORATED": "/images/DIODE INC.png",
  "DIODES INC": "/images/DIODE INC.png",
  "DANFOSS": "/images/Danfoss.jpg",
  "KEMET": "/images/KEMET.jpg",
  "MCC": "/images/Mcc.png",
  "MICRO COMMERCIAL COMPONENTS": "/images/Mcc.png",
  "NEXPERIA": "/images/Nexperia.png",
  "NVIDIA": "/images/Nvidia.png",
  "PANASONIC": "/images/Panasonic.png",
  "PHOENIX CONTACT": "/images/Phoenix Contact.png",
  "ROYAL OHM": "/images/ROYAL OHM.png",
  "SCHNEIDER": "/images/Schneider.png",
  "SIEMENS": "/images/Siemens.png",
  "TDK": "/images/TDK.png",
  "TE CONNECTIVITY": "/images/Te Conectivity.jpg",
  "VISHAY": "/images/Vishay.png",
  "YAGEO": "/images/Yageo.jpg",
  "ALLEGRO": "/images/allegro.png",
  "ALTERA": "/images/altera.jpg",
  "ANALOG DEVICES": "/images/analog devices.jpg",
  "BROADCOM": "/images/broadcom.png",
  "COILCRAFT": "/images/colicraft.png",
  "COOPER POWER": "/images/cooper power.png",
  "NXP": "/images/download.jpg",
  "EATON BUSSMANN": "/images/eaton bussman.png",
  "EATON": "/images/eaton.png",
  "HPS": "/images/hps.png",
  "INTEL": "/images/intel.png",
  "LITTELFUSE": "/images/littlelfuse.png",
  "MERSEN": "/images/mersen.png",
  "MXIC": "/images/mxic.png",
  "MACRONIX": "/images/mxic.png",
  "NEC": "/images/nec.png",
  "OMRON": "/images/omron.png",
  "OSRAM": "/images/osram.png",
  "PULSE": "/images/pulse.png",
  "QUALCOMM": "/images/qualcomm.png",
  "QUANTIC EVANS": "/images/quantic evans.jpg",
  "ROHM": "/images/rohm.png",
  "ROHM SEMICONDUCTOR": "/images/rohm.png",
  "SEMTECH": "/images/semtech.jpg",
  "SNC": "/images/snc.jpg",
  "TEXAS INSTRUMENTS": "/images/texas Instrument.png",
  "TSMC": "/images/tsmc.jpg",
  "WALSIN": "/images/walsin.png",
  "WINBOND": "/images/windbond.png",
  "XILINX": "/images/xilinx.png",
};

// Clearbit domain mapping for brands without local logos
const CLEARBIT_DOMAINS: Record<string, string> = {
  "ABRACON": "abracon.com",
  "AIRBORN": "airborn.com",
  "AMPHENOL": "amphenol.com",
  "APTIV": "aptiv.com",
  "ATHER": "atherenergy.com",
  "ATMEL": "microchip.com",
  "BIOSENSE WEBSTER": "jnjmedtech.com",
  "BOURNS": "bourns.com",
  "CAVLI WIRELESS": "cavliwireless.com",
  "CHEMI-CON": "chemi-con.co.jp",
  "CORECENTRIC SOLUTIONS": "corecentricparts.com",
  "DBWAVE": "dbwave.com",
  "DELTA": "deltaww.com",
  "DIALOG": "renesas.com",
  "DIALOG SEMICONDUCTOR": "renesas.com",
  "DIOTEC": "diotec.com",
  "DIOTEC SEMICONDUCTOR": "diotec.com",
  "FAIRCHILD": "onsemi.com",
  "FAIRCHILD SEMICONDUCTOR": "onsemi.com",
  "FOXCONN": "foxconn.com",
  "FUJITSU": "fujitsu.com",
  "GIGADEVICE": "gigadevice.com",
  "GLENAIR": "glenair.com",
  "HONEYWELL": "honeywell.com",
  "HP INDIGO": "hp.com",
  "INFINEON": "infineon.com",
  "IODE CORP": "iode.com",
  "JST": "jst-mfg.com",
  "KAYNES TECHNOLOGY": "kaynes.com",
  "KEL": "kel.jp",
  "KNOWLES": "knowles.com",
  "KOA": "koaglobal.com",
  "KOA SPEER ACTIVE COMPONENTS": "koaglobal.com",
  "KYOCERA": "kyocera.com",
  "LITE-ON": "liteon.com",
  "LITEON": "liteon.com",
  "MICRON": "micron.com",
  "MOLEX": "molex.com",
  "MOSCHIP": "moschip.com",
  "MURATA": "murata.com",
  "NICHICON": "nichicon.co.jp",
  "OHMITE": "ohmite.com",
  "OLA": "olaelectric.com",
  "ONSEMI": "onsemi.com",
  "PKC GROUP": "pkcgroup.com",
  "QUECTEL": "quectel.com",
  "RENESAS": "renesas.com",
  "SAWNICS": "sawnics.com",
  "SENSATA": "sensata.com",
  "SENSATA TECHNOLOGIES": "sensata.com",
  "SK HYNIX": "skhynix.com",
  "SKYWORKS": "skyworksinc.com",
  "STMICROELECTRONICS": "st.com",
  "SUMITOMO": "sumitomo.com",
  "SUNLORD": "sunlordinc.com",
  "TAIYO YUDEN": "yuden.co.jp",
  "TOSHIBA": "toshiba.com",
  "UNO MINDA": "unominda.com",
  "XP POWER": "xppower.com",
};

const CATEGORY_MAP: Record<string, string> = {
  "ABB": "Power & Automation", "SCHNEIDER": "Power & Automation", "SIEMENS": "Power & Automation",
  "DANFOSS": "Power & Automation", "EATON": "Power & Automation", "EATON BUSSMANN": "Power & Automation",
  "OMRON": "Power & Automation", "HONEYWELL": "Power & Automation",
  "TDK": "Passive Components", "YAGEO": "Passive Components", "MURATA": "Passive Components",
  "VISHAY": "Passive Components", "KEMET": "Passive Components", "COILCRAFT": "Passive Components",
  "WALSIN": "Passive Components", "BOURNS": "Passive Components", "NICHICON": "Passive Components",
  "ROYAL OHM": "Passive Components", "KOA": "Passive Components", "OHMITE": "Passive Components",
  "TAIYO YUDEN": "Passive Components", "SUNLORD": "Passive Components",
  "TE CONNECTIVITY": "Interconnect", "MOLEX": "Interconnect", "AMPHENOL": "Interconnect",
  "JST": "Interconnect", "PHOENIX CONTACT": "Interconnect", "GLENAIR": "Interconnect",
  "KEL": "Interconnect",
};

// Helper to resolve logo for a brand name
const resolveLogo = (name: string): string | undefined => {
  const key = name.toUpperCase();
  if (LOGO_MAP[key]) return LOGO_MAP[key];
  if (CLEARBIT_DOMAINS[key]) return `https://logo.clearbit.com/${CLEARBIT_DOMAINS[key]}?size=200`;
  return undefined;
};

// Generate a consistent brand color from the name
const getBrandColor = (name: string) => {
  const colors = [
    { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
    { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
    { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
    { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
    { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
    { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
    { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
    { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200" },
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

// --- Components ---

// Spotlight Hover Card
const SpotlightCard = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      ref={divRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group cursor-pointer bg-[#f8fafc] border border-gray-200/80 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-costa-green/50 hover:shadow-lg aspect-[2.2/1] flex items-center justify-center"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, rgba(26, 175, 93, 0.07), transparent 50%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

// Bulletproof Brand Logo — text always renders first, image overlays on successful load
const BrandLogo = ({ brand }: { brand: BrandCard }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const brandColor = getBrandColor(brand.name);

  return (
    <div className="w-full h-full flex items-center justify-center p-3 relative z-20">
      {/* Layer 1: ALWAYS render text fallback */}
      {(!brand.logo || imgError || !imgLoaded) && (
        <span className={`text-[13px] sm:text-[15px] font-extrabold tracking-tight leading-tight text-center ${brandColor.text} line-clamp-2 absolute`}>
          {brand.name}
        </span>
      )}

      {/* Layer 2: Image — hidden until loaded, covers text on success */}
      {brand.logo && !imgError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={brand.logo}
          alt=""
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          loading="lazy"
          className={`max-h-[60%] max-w-[75%] object-contain transition-all duration-500 mix-blend-multiply ${
            imgLoaded
              ? "opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
              : "opacity-0 absolute"
          }`}
        />
      )}
    </div>
  );
};

// --- Main Page ---
export default function LineCardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string>("All");
  const [activeCategory, setActiveCategory] = useState("All Categories");
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
    return allBrands.filter((b) => {
      const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All Categories" || b.category === activeCategory;
      const firstChar = b.name.charAt(0).toUpperCase();
      const matchesLetter =
        activeLetter === "All" ||
        (activeLetter === "#" ? !ALPHABET.includes(firstChar) : firstChar === activeLetter);
      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [allBrands, searchQuery, activeCategory, activeLetter]);

  // Stats
  const totalCount = allBrands.length;
  const withLogos = allBrands.filter((b) => b.logo).length;

  return (
    <div className="min-h-screen bg-white text-text-secondary pb-24">
      {/* Hero Section — Dark, authoritative, like UnikeyIC */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0c1220]">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        {/* Subtle glow */}
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-costa-green/10 blur-[120px]" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-black leading-[1.1] tracking-tight text-white mb-5">
                Costa Devices is an Authorized Distributor of
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-costa-green to-emerald-400">
                  World-Leading Manufacturers
                </span>
              </h1>
              <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed mb-8">
                {totalCount}+ manufacturers sourced globally. Guaranteed authentic parts with AS6081
                counterfeit mitigation protocols.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search manufacturers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-gray-500 font-semibold focus:ring-2 focus:ring-costa-green/30 focus:border-costa-green/50 transition-all"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Control Center */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto">
          {/* Categories */}
          <div className="px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar border-b border-gray-100">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-[#0c1220] text-white shadow-md"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* A-Z Rolodex */}
          <div className="px-6 py-2.5 flex items-center gap-0.5 overflow-x-auto no-scrollbar">
            {["All", "#", ...ALPHABET].map((letter) => {
              const hasBrands =
                letter === "All" ||
                allBrands.some((b) => {
                  const matchesCat = activeCategory === "All Categories" || b.category === activeCategory;
                  const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase());
                  if (!matchesCat || !matchesSearch) return false;
                  const firstChar = b.name.charAt(0).toUpperCase();
                  if (letter === "#") return !ALPHABET.includes(firstChar);
                  return firstChar === letter;
                });

              return (
                <button
                  key={letter}
                  onClick={() => hasBrands && setActiveLetter(letter)}
                  disabled={!hasBrands}
                  className={`
                    flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold transition-all
                    ${
                      !hasBrands
                        ? "text-gray-300 cursor-not-allowed"
                        : activeLetter === letter
                        ? "bg-costa-green text-white shadow-sm"
                        : "text-gray-500 hover:bg-gray-100 hover:text-costa-green"
                    }
                  `}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Authorized Line Card Section */}
      <section className="py-10 bg-[#f0f4f8]">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center text-2xl font-black text-[#0c1220] mb-8 tracking-tight">
            Authorized Line Card
          </h2>

          {filteredBrands.length === 0 ? (
            <div className="py-16 text-center bg-white border border-gray-200 rounded-2xl">
              <p className="text-lg font-bold text-gray-800 mb-1">No manufacturers found</p>
              <p className="text-gray-400 text-sm">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4"
            >
              <AnimatePresence>
                {filteredBrands.map((brand) => (
                  <SpotlightCard key={brand.name} onClick={() => setSelectedBrand(brand)}>
                    <BrandLogo brand={brand} />
                  </SpotlightCard>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="py-16 bg-[#0c1220] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-black text-white mb-4">
            Can&apos;t find what you need?
          </h3>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            Our procurement team can source from any manufacturer worldwide.
            Submit your requirements and receive a quote within hours.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 bg-costa-green text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-costa-green/90 transition-colors shadow-lg shadow-costa-green/20"
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
                    <div className="w-12 h-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={selectedBrand.logo} alt={selectedBrand.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 ${getBrandColor(selectedBrand.name).bg} rounded-lg border ${getBrandColor(selectedBrand.name).border} flex items-center justify-center font-black text-lg ${getBrandColor(selectedBrand.name).text}`}>
                      {selectedBrand.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h2 className="text-lg font-black text-gray-900">{selectedBrand.name}</h2>
                    <span className="text-xs font-semibold text-costa-green">{selectedBrand.category}</span>
                  </div>
                </div>
                <button onClick={() => setSelectedBrand(null)} className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
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
