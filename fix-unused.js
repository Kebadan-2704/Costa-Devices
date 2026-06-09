const fs = require('fs');
const path = require('path');

const filesToFix = [
  { path: 'src/app/active-components/page.tsx', remove: ['Image'] },
  { path: 'src/app/api/og/route.tsx', remove: ['e'] },
  { path: 'src/app/blog/[id]/page.tsx', remove: ['User'] },
  { path: 'src/app/case-studies/[id]/page.tsx', remove: ['BarChart3'] },
  { path: 'src/app/case-studies/page.tsx', remove: ['BarChart3', 'Clock', 'DollarSign'] },
  { path: 'src/app/company/page.tsx', remove: ['Mail', 'MapPin', 'ExternalLink', 'Image', 'COMPANY', 'TEAM', 'i'] },
  { path: 'src/app/contact/page.tsx', remove: ['ArrowRight', 'error'] },
  { path: 'src/app/developers/page.tsx', remove: ['motion', 'nodeSnippet'] },
  { path: 'src/app/page.tsx', remove: ['Image', 'Cpu', 'ArrowUp', 'MagneticWrapper', 'wordAnimation', 'textY', 'textOpacity'] },
  { path: 'src/app/passive-components/page.tsx', remove: ['Image', 'BRANDS'] },
  { path: 'src/app/privacy/page.tsx', remove: ['Link', 'COMPANY'] },
  { path: 'src/app/request-quote/page.tsx', remove: ['useEffect', 'Search'] },
  { path: 'src/components/animations/Hero3DScene.tsx', remove: ['COSTA_GREEN', 'COSTA_GREEN_LIGHT', 'COSTA_GREEN_GLOW'] },
  { path: 'src/components/animations/MagneticButton.tsx', remove: ['type'] },
  { path: 'src/components/layout/Navbar.tsx', remove: ['PartSearchEngine'] },
  { path: 'src/components/ui/AnimatedNumber.tsx', remove: ['duration'] },
  { path: 'src/components/ui/BOMUploadZone.tsx', remove: ['CheckCircle2'] },
  { path: 'src/components/ui/PartSearchEngine.tsx', remove: ['useCallback'] },
  { path: 'src/components/ui/ThemeToggle.tsx', remove: ['theme'] },
  { path: 'src/components/ui/WorldMap.tsx', remove: ['MapPin'] },
  { path: 'src/hooks/useLocalStorage.ts', remove: ['useEffect'] },
  { path: 'src/utils/audio.ts', remove: ['e'] }
];

filesToFix.forEach(({ path: p, remove }) => {
  const fullPath = path.join(__dirname, p);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    remove.forEach(v => {
      // Very naive removal of unused imports or assignments
      const reImport = new RegExp(`(\\b${v}\\b\\s*,?\\s*)`, 'g');
      content = content.replace(reImport, '');
    });
    // Clean up empty braces from imports
    content = content.replace(/import\s*\{\s*\}\s*from\s*['"][^'"]+['"];?/g, '');
    content = content.replace(/import\s*,\s*\{\s*\}\s*from\s*['"][^'"]+['"];?/g, 'import ');
    // Remove lingering commas
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/\{\s*,/g, '{');
    content = content.replace(/,\s*\}/g, '}');
    
    fs.writeFileSync(fullPath, content);
  }
});

console.log("Cleanup attempted.");
