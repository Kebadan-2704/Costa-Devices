const fs = require('fs');

const pageFile = 'src/app/page.tsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

// 1. Remove underline from Distribution
pageContent = pageContent.replace(
  /<motion\.span\s+initial=\{\{ scaleX: 0 \}\}\s+animate=\{\{ scaleX: 1 \}\}\s+transition=\{\{ delay: 1\.0, duration: 0\.8, ease: \[0\.16, 1, 0\.3, 1\] \}\}\s+className="absolute -bottom-1 left-0 right-0 h-\[6px\] bg-gradient-to-r from-costa-green to-emerald-400 rounded-full origin-left"\s+\/>/g,
  ''
);

// 2. Video container redesign
const oldVideoContainer = `{/* Soft shadow glow behind video */}
              <div className="absolute -inset-2 bg-gradient-to-r from-costa-green/20 via-teal-500/15 to-emerald-500/20 rounded-[2.5rem] blur-2xl opacity-60"></div>
              
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] bg-gray-900 group">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10"></div>

                {/* Live Feed Badge */}
                <div className="absolute top-5 left-5 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                  Live Feed
                </div>
              </div>`;

const newVideoContainer = `{/* Soft shadow glow behind video */}
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
              </div>`;

pageContent = pageContent.replace(oldVideoContainer, newVideoContainer);


// 3. Search console replacing the right column stuff entirely
const parts = pageContent.split('{/* Premium Search Console — Centered Below */}');
if (parts.length > 1) {
    const endParts = parts[1].split('{/* 1.5 DEEP-TECH HARDWARE LAYER (Market Intel & 3D Microchip) */}');
    
    const newSearchConsole = `
          {/* Sleek Omnibox Search Console */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="mt-16 relative max-w-5xl mx-auto z-20 pb-20"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-costa-green/10 via-teal-400/5 to-emerald-500/10 rounded-[3rem] blur-2xl opacity-60 pointer-events-none"></div>
            
            <div className="relative bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(26,175,93,0.05)] p-3 md:p-4 flex flex-col gap-4">
              
              {/* Top Row: Search Input + Button */}
              <div className="flex flex-col md:flex-row items-center gap-3 w-full">
                <form
                  onSubmit={handleSearch}
                  className="relative flex-1 flex items-center bg-white border border-gray-100 rounded-xl px-5 py-4 focus-within:border-costa-green focus-within:shadow-[0_0_0_4px_rgba(26,175,93,0.08)] transition-all duration-300 w-full group"
                >
                  <Search size={20} className="text-gray-400 mr-4 flex-shrink-0 group-focus-within:text-costa-green transition-colors" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter part number, manufacturer, or keyword..." 
                    className="flex-1 bg-transparent border-none outline-none text-[#0f172a] text-lg placeholder:text-[#94a3b8] font-semibold"
                  />
                  
                  {/* Internal Status Indicator */}
                  <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-md border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-costa-green animate-pulse"></span>
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">1,402 Suppliers</span>
                  </div>
                </form>

                <button
                  type="button"
                  onClick={handleSearch}
                  className="w-full md:w-auto flex items-center justify-center gap-2.5 bg-costa-green text-white py-4 px-8 rounded-xl font-bold tracking-widest uppercase hover:bg-emerald-500 transition-all shadow-[0_8px_20px_rgba(26,175,93,0.3)] hover:shadow-[0_12px_25px_rgba(26,175,93,0.4)] whitespace-nowrap flex-shrink-0"
                >
                  Scan Global
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Bottom Row: Trending Tags & Micro Stats */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-2">
                {/* Trending Tags */}
                <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-2">Trending:</span>
                  {[
                    { label: 'Microcontrollers', count: '2.4M+' },
                    { label: 'FPGAs', count: '180K+' },
                    { label: 'Connectors', count: '4.1M+' },
                  ].map((tag) => (
                    <button
                      key={tag.label}
                      onClick={() => router.push(\`/search?q=\${tag.label}\`)}
                      className="group flex items-center gap-1.5 px-3 py-1 bg-white/50 border border-gray-100/80 rounded-full hover:bg-costa-green/5 hover:border-costa-green/30 cursor-pointer transition-all duration-200"
                    >
                      <span className="text-[11px] font-semibold text-[#64748b] group-hover:text-costa-green transition-colors">{tag.label}</span>
                    </button>
                  ))}
                </div>

                {/* Inline Stats */}
                <div className="flex items-center gap-6 text-right w-full lg:w-auto justify-end">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-costa-green" />
                    <span className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase"><span className="text-[#0f172a]">&lt; 4h</span> RFQ</span>
                  </div>
                  <div className="hidden sm:block w-px h-3 bg-gray-200"></div>
                  <div className="flex items-center gap-1.5">
                    <Zap size={12} className="text-costa-green" />
                    <span className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase"><span className="text-[#0f172a]">99.99%</span> Uptime</span>
                  </div>
                  <div className="hidden sm:block w-px h-3 bg-gray-200"></div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-costa-green" />
                    <span className="text-[10px] font-bold text-[#64748b] tracking-wider uppercase"><span className="text-[#0f172a]">100%</span> Quality</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
      </section>

      {/* 1.5 DEEP-TECH HARDWARE LAYER (Market Intel & 3D Microchip) */}`;
      
      pageContent = parts[0] + newSearchConsole + endParts[1];
}

fs.writeFileSync(pageFile, pageContent);
console.log("page.tsx redesigned successfully!");
