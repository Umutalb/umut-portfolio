// Generates og-image.png from og-image.svg using sharp
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  try {
    const root = __dirname + '/..';
    const ogDir = path.join(root, 'assets', 'og');
    const svgPath = path.join(ogDir, 'og-image.svg');
    const outPath = path.join(ogDir, 'og-image.png');

    if (!fs.existsSync(ogDir)) {
      fs.mkdirSync(ogDir, { recursive: true });
    }
    if (!fs.existsSync(svgPath)) {
      throw new Error('assets/og/og-image.svg not found');
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
