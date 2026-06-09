const fs = require('fs');

const filePath = 'src/app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace the heading using a non-greedy regex
const headingRegex = /<h1 className="font-heading text-\[clamp\(3rem,5\.5vw,5\.2rem\)\][\s\S]*?<\/h1>/;

const newHeading = `<h1 className="font-heading text-[clamp(3rem,5.5vw,5.2rem)] font-black leading-[1.0] tracking-tight text-[#0f172a] mb-6">
                {['Mission-Critical'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                {['Component'].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-4 text-costa-green"
                  >
                    {word}
                  </motion.span>
                ))}
                <br />
                <span className="relative inline-block mt-1">
                  <motion.span
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    Distribution.
                  </motion.span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-costa-green to-emerald-400 rounded-full origin-left"
                  />
                </span>
              </h1>`;

if (headingRegex.test(content)) {
  content = content.replace(headingRegex, newHeading);
  console.log('Heading match found and replaced.');
} else {
  console.log('Heading regex failed to match.');
}

// 2. Extract Premium Search Console Block
const searchRegex = /\{\/\* ─── RIGHT COLUMN: Premium Search Console — FLOATING ─── \*\/\}[\s\S]*?(?=<\/div>\s*\{\/\* Floating Video Container \*\/)/;
const searchMatch = content.match(searchRegex);
let searchBlock = searchMatch ? searchMatch[0] : '';

// 3. Extract Floating Video Container Block
const videoRegex = /\{\/\* Floating Video Container \*\/\}[\s\S]*?(?=<\/div>\s*<\/section>\s*\{\/\* 1\.5 DEEP-TECH HARDWARE LAYER)/;
const videoMatch = content.match(videoRegex);
let videoBlock = videoMatch ? videoMatch[0] : '';

if (searchBlock && videoBlock) {
  // Replace Premium Search with modified Video Block
  const modifiedVideoBlock = `            {/* ─── RIGHT COLUMN: Video — FLOATING ─── */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 lg:w-[44%] w-full relative mt-12 lg:mt-0"
            >
              {/* Soft shadow glow behind video */}
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
              </div>
            </motion.div>
          `;

  // Place Premium Search Block below
  const modifiedSearchBlock = `          {/* Premium Search Console — Centered Below */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
` + searchBlock.replace('flex-shrink-0 lg:w-[44%] w-full relative', 'w-full relative') + `
          {/* Metrics Grid overlapping the search console */}
            <div className="relative z-20 max-w-5xl mx-auto mt-12 px-4">
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
          </motion.div>`;

  content = content.replace(searchBlock, modifiedVideoBlock);
  content = content.replace(videoBlock, modifiedSearchBlock);
  fs.writeFileSync(filePath, content);
  console.log('Swap successful!');
} else {
  console.log('Could not match layout blocks.');
}
