const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Fix hero padding
content = content.replace(
  'pt-[96px] pb-16 lg:pt-[120px] lg:pb-20',
  'pt-[130px] pb-4 lg:pt-[150px] lg:pb-8'
);

// 2. Fix BOM width
content = content.replace(
  'className="mt-2 w-full max-w-md"',
  'className="mt-2 w-full max-w-lg"'
);

// 3. Client Trust Label Fix
content = content.replace(
  /<div className="absolute top-0 right-6 text-xs font-mono font-bold text-gray-300 tracking-widest uppercase z-10 bg-white px-2 py-2">Client Trust<\/div>\s*<div className="max-w-\[1400px\] mx-auto px-6">\s*<div className="mb-16 border-l-4 border-costa-green pl-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">\s*<div>\s*<h2/,
  `<div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 border-l-4 border-costa-green pl-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="text-xs font-mono font-bold text-gray-400 tracking-widest uppercase mb-4 inline-block bg-gray-50 px-3 py-1 rounded-full border border-gray-100">Client Trust</div>
              <h2`
);

// 4. Interactive 3D Cursor Fix
content = content.replace(
  /<div className="absolute inset-0 z-10 pointer-events-auto">\s*<Microchip3D \/>\s*<\/div>/,
  `<div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 opacity-60 pointer-events-none">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M5 9l7-7 7 7M5 15l7 7 7-7"/></svg>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Drag to Rotate</span>
              </div>
              <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing pointer-events-auto">
                <Microchip3D />
              </div>`
);

// 5. HERO LAYOUT FIX (Remove Search Console, move Video to right)
const rightColumnReplacement = `
            {/* ─── RIGHT COLUMN: Video Dashboard ─── */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 lg:w-[44%] w-full relative mt-12 lg:mt-0"
            >
              {/* Soft shadow glow behind video */}
              <div className="absolute -inset-4 bg-gradient-to-br from-costa-green/20 via-teal-500/10 to-emerald-500/20 rounded-[3rem] blur-3xl opacity-70"></div>
              
              <div className="relative w-full aspect-[4/3] rounded-[2rem] p-2 overflow-hidden border border-white/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] bg-white/40 backdrop-blur-2xl group flex flex-col">
                
                {/* UI Chrome Bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 opacity-90 absolute top-0 left-0 right-0 z-20 pointer-events-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/90 border border-red-500/20 shadow-inner"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 border border-amber-500/20 shadow-inner"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 border border-emerald-500/20 shadow-inner"></div>
                </div>

                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-900 shadow-inner mt-6">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                  >
                    <source src="/videos/Intro.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 pointer-events-none"></div>

                  {/* Live Feed Badge */}
                  <div className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white tracking-[0.2em] uppercase shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                    Live Feed
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Metrics Grid centered below the hero split */}
          <div className="relative z-20 max-w-5xl mx-auto mt-16 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: "Global Uptime", value: "99.99%", desc: "Sourcing Network", icon: <Zap size={16} className="text-costa-green" /> },
                { label: "Avg. Turnaround", value: "< 4 Hrs", desc: "RFQ Response", icon: <Clock size={16} className="text-costa-green" /> },
                { label: "Active Suppliers", value: "1,402", desc: "Franchised", icon: <ArrowUpRight size={16} className="text-costa-green" /> },
                { label: "Quality Pass", value: "100%", desc: "AS6081 Inspected", icon: <ShieldCheck size={16} className="text-costa-green" /> }
              ].map((metric, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                  className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-xl shadow-gray-900/8 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-costa-green/8 border border-costa-green/10">
                      {metric.icon}
                    </div>
                    <p className="text-[8px] text-gray-400 font-bold tracking-[0.15em] uppercase">{metric.label}</p>
                  </div>
                  <p className="font-heading text-2xl font-black text-gray-900 tracking-tight mb-0.5 group-hover:text-costa-green transition-colors">{metric.value}</p>
                  <p className="text-[9px] text-costa-green font-bold tracking-widest uppercase">{metric.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
`;

// Extract from RIGHT COLUMN to the end of the video container metrics grid
const heroLayoutRegex = /\{\/\* ─── RIGHT COLUMN: Premium Search Console — FLOATING ─── \*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/section>\s*\{\/\* 1\.5 DEEP-TECH HARDWARE LAYER)/;

if (heroLayoutRegex.test(content)) {
  content = content.replace(heroLayoutRegex, rightColumnReplacement);
  console.log("Hero layout swapped successfully!");
} else {
  console.log("Failed to match Hero Layout regex!");
}

fs.writeFileSync('src/app/page.tsx', content);
console.log("All fixes applied successfully.");
