const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The block to remove starts at 182 (RIGHT COLUMN: Premium Search Console)
// and ends after the Metrics Grid overlapping the video container (around line 412).
// We'll replace it with the Video Dashboard on the right, and then the Metrics Grid below the flex row.

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
                { label: "Global Uptime", value: "99.99%", desc: "Sourcing Network", icon: '<Zap size={16} className="text-costa-green" />' },
                { label: "Avg. Turnaround", value: "< 4 Hrs", desc: "RFQ Response", icon: '<Clock size={16} className="text-costa-green" />' },
                { label: "Active Suppliers", value: "1,402", desc: "Franchised", icon: '<ArrowUpRight size={16} className="text-costa-green" />' },
                { label: "Quality Pass", value: "100%", desc: "AS6081 Inspected", icon: '<ShieldCheck size={16} className="text-costa-green" />' }
              ].map((metric, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                  className="bg-white border border-gray-100 rounded-2xl p-4 md:p-5 shadow-xl shadow-gray-900/8 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-costa-green/8 border border-costa-green/10" dangerouslySetInnerHTML={{__html: metric.icon}}></div>
                    <p className="text-[8px] text-gray-400 font-bold tracking-[0.15em] uppercase">{metric.label}</p>
                  </div>
                  <p className="font-heading text-2xl font-black text-gray-900 tracking-tight mb-0.5 group-hover:text-costa-green transition-colors">{metric.value}</p>
                  <p className="text-[9px] text-costa-green font-bold tracking-widest uppercase">{metric.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
`;

// Replace from {/* ─── RIGHT COLUMN: Premium Search Console — FLOATING ─── */} to just before </div>\n      </section>\n\n      {/* 1.5 DEEP-TECH HARDWARE LAYER
const regex = /\{\/\* ─── RIGHT COLUMN: Premium Search Console — FLOATING ─── \*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/section>\s*\{\/\* 1\.5 DEEP-TECH)/;
if (regex.test(content)) {
  content = content.replace(regex, rightColumnReplacement);
  // Need to fix the dangerouslySetInnerHTML hack with real components
  content = content.replace(/dangerouslySetInnerHTML=\{\{__html: metric\.icon\}\}><\/div>/g, '>{metric.icon}</div>');
  content = content.replace(/'<Zap size=\{16\} className="text-costa-green" \/>'/g, '<Zap size={16} className="text-costa-green" />');
  content = content.replace(/'<Clock size=\{16\} className="text-costa-green" \/>'/g, '<Clock size={16} className="text-costa-green" />');
  content = content.replace(/'<ArrowUpRight size=\{16\} className="text-costa-green" \/>'/g, '<ArrowUpRight size={16} className="text-costa-green" />');
  content = content.replace(/'<ShieldCheck size=\{16\} className="text-costa-green" \/>'/g, '<ShieldCheck size={16} className="text-costa-green" />');
  
  fs.writeFileSync('src/app/page.tsx', content);
  console.log("Replaced successfully!");
} else {
  console.log("Regex didn't match.");
}
