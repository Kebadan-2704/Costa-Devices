const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Video Width Increase
content = content.replace(
  /className="flex-shrink-0 lg:w-\[44%\] w-full relative mt-12 lg:mt-0"/,
  'className="flex-shrink-0 lg:w-[50%] w-full relative mt-12 lg:mt-0"'
);

// 2. Left Column Width Adjust
content = content.replace(
  /className="flex flex-col items-start text-left flex-shrink-0 lg:w-\[52%\]"/,
  'className="flex flex-col items-start text-left flex-shrink-0 lg:w-[45%]"'
);

// 3. Subtitle Replacement
content = content.replace(
  /Direct access to 1B\+ verified components\. Avoid line-downs and secure obsolete parts globally with our algorithmic sourcing infrastructure\./,
  'Securing obsolete, Active & Passive electronic components, heavy electrical, active high-voltage components, Aerospace, and Industrial infrastructure. Sub-24h dispatch.'
);

// 4. Headline Replacement
const oldHeadline = /<h1 className="font-heading text-\[clamp\(3rem,5\.5vw,5\.2rem\)\] font-black leading-\[1\.0\] tracking-tight text-\[#0f172a\] mb-6">[\s\S]*?<\/h1>/;

const newHeadline = `<h1 className="font-heading text-[clamp(3rem,5.5vw,5.2rem)] font-black leading-[1.0] tracking-tight text-[#0f172a] mb-6">
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Mission-Critical
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                >
                  Component
                </motion.span>
                <br />
                <span className="relative inline-block mt-1">
                  <motion.span
                    initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-costa-green"
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

content = content.replace(oldHeadline, newHeadline);

fs.writeFileSync('src/app/page.tsx', content);
console.log("Text and widths updated!");
