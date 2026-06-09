const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The block to extract:
//           {/* Metrics Grid centered below the hero split */}
//           <div className="relative z-20 max-w-5xl mx-auto mt-16 px-4">
//             ...
//           </div>
const metricsRegex = /\s*\{\/\* Metrics Grid centered below the hero split \*\/\}\s*<div className="relative z-20 max-w-5xl mx-auto mt-16 px-4">\s*<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">\s*\{\[\s*\{\s*label:[\s\S]*?\}\)\}\s*<\/div>\s*<\/div>/;

const match = content.match(metricsRegex);
if (!match) {
    console.error("Could not find metrics block");
    process.exit(1);
}

let metricsBlock = match[0];

// Remove it from its current location
content = content.replace(metricsBlock, '');

// Clean up the metricsBlock to fit nicely under the video
// It's currently wrapped in <div className="relative z-20 max-w-5xl mx-auto mt-16 px-4">
// Let's strip the outer div and just use the inner grid, with w-full and mt-4 or mt-6
const gridContentRegex = /(<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">[\s\S]*?\}\)\}\s*<\/div>)/;
const gridMatch = metricsBlock.match(gridContentRegex);

let newMetricsHtml = gridMatch ? gridMatch[1] : '';

// Adjust grid classes for the right column
newMetricsHtml = newMetricsHtml.replace(
    'className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"',
    'className="relative z-20 grid grid-cols-2 lg:grid-cols-4 gap-3 w-full mt-4"'
);

// We want to insert this newMetricsHtml right after the video dashboard closing div
// inside the right column motion.div

const rightColumnEndRegex = /(<\/div>\s*)(<\/motion\.div>\s*<\/div>\s*\{\/\* Metrics Grid centered below the hero split \*\/\})/;
// Wait, since we removed the metrics block, the right column end looks like:
//               </div>
//             </motion.div>
//           </div>

const replaceTarget = /<\/div>\s*<\/motion\.div>\s*<\/div>\s*<\/div>\s*\{\/\* 2\. ENTERPRISE LOGO TICKER \*\/\}/;
// Let's just find the closing tag of the Right Column.
const insertionPoint = /((?:\s*<\/div>\s*){2})<\/motion\.div>/;

// A safer way: replace `</div>\n            </motion.div>\n          </div>\n\n\n        </div>`
const videoEndMarker = `                  </div>\n                </div>\n              </div>\n            </motion.div>\n          </div>`;
// Wait, the video wrapper has:
//               <div className="relative w-full aspect-[4/3] rounded-[2rem] p-2 ...">
//                 ...
//                 <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-900 shadow-inner mt-6">
//                   ...
//                 </div>
//               </div>
//             </motion.div>

content = content.replace(
    /(\s*\{\/\* Live Feed Badge \*\/\}\s*<div[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/,
    `$1\n\n              {/* Metrics Grid moved below video */}\n              ${newMetricsHtml}`
);

fs.writeFileSync('src/app/page.tsx', content);
console.log("Metrics moved!");
