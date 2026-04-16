const fs = require('fs');
const path = require('path');

const brands = [
  'Eaton', 'Eaton Bussmann', 'ABB', 'Schneider', 
  'Littelfuse', 'Mersen', 'Cooper Power', 'HPS', 'SNC'
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

brands.forEach(brand => {
  const filename = brand.toLowerCase().replace(/ /g, '-') + '.svg';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="200" height="60">
    <rect width="200" height="60" fill="transparent" />
    <text x="100" y="38" font-family="'Space Grotesk', sans-serif" font-weight="bold" font-size="28" fill="#B0B0B0" text-anchor="middle" letter-spacing="1.5">${brand}</text>
  </svg>`;
  fs.writeFileSync(path.join(dir, filename), svg);
});

console.log('Logos generated.');
