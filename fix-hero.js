const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove Premium Search Console
const searchConsoleRegex = /\{\/\* ─── RIGHT COLUMN: Premium Search Console — FLOATING ─── \*\/\}[\s\S]*?(?=\{\/\* Floating Video Container \*\/)/;
content = content.replace(searchConsoleRegex, '');

// 2. Modify Video Container to sit in the Right Column
const videoRegex = /\{\/\* Floating Video Container \*\/\}[\s\S]*?className=\"mt-24 relative max-w-6xl mx-auto\"[\s\S]*?>([\s\S]*?)(?=\s*<\/motion\.div>\s*<\/section>)/;
const videoMatch = content.match(videoRegex);

if (videoMatch) {
  const newRightColumn = `            {/* ─── RIGHT COLUMN: Video Dashboard ─── */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 lg:w-[44%] w-full relative mt-12 lg:mt-0"
            >
${videoMatch[1]}
            </motion.div>`;

  content = content.replace(videoMatch[0], '');
  // Insert newRightColumn before the closing tags of the hero grid
  content = content.replace(/(\s*<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* 1\.5 DEEP-TECH HARDWARE LAYER)/, '\n' + newRightColumn + '$1');
  
  fs.writeFileSync('src/app/page.tsx', content);
  console.log('Successfully moved video to right and removed search console');
} else {
  console.log('Failed to match video container');
}
