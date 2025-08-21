// Generates og-image.png from og-image.svg using sharp
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  try {
    const root = __dirname + '/..';
    const svgPath = path.join(root, 'og-image.svg');
    const outPath = path.join(root, 'og-image.png');

    if (!fs.existsSync(svgPath)) {
      throw new Error('og-image.svg not found at project root');
    }

    const buffer = fs.readFileSync(svgPath);
    await sharp(buffer, { density: 300 })
      .png({ quality: 90 })
      .toFile(outPath);

    console.log('Generated:', outPath);
  } catch (err) {
    console.error('OG image export failed:', err.message);
    process.exit(1);
  }
})();
