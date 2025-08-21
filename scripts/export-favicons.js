// Generate PNG favicons from ua-logo.svg using sharp
// Usage: npm run favicons

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

(async () => {
  try {
    const root = __dirname + path.sep + '..';
    const svgPath = path.join(root, 'ua-logo.svg');
    if (!fs.existsSync(svgPath)) {
      console.error('ua-logo.svg not found at project root.');
      process.exit(1);
    }

  const out16 = path.join(root, 'favicon-16x16.png');
  const out32 = path.join(root, 'favicon-32x32.png');
  const out48 = path.join(root, 'favicon-48x48.png');
  const out64 = path.join(root, 'favicon-64x64.png');
  const out512 = path.join(root, 'favicon-512x512.png');
  const apple = path.join(root, 'apple-touch-icon.png');

  // No SVG/ICO copy; PNG-only export per request

    // Render square canvas with transparent bg
    const svgBuffer = fs.readFileSync(svgPath);

    await sharp(svgBuffer, { density: 300 })
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out16);

    await sharp(svgBuffer, { density: 300 })
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out32);

    await sharp(svgBuffer, { density: 300 })
      .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out48);

    await sharp(svgBuffer, { density: 300 })
      .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out64);

    await sharp(svgBuffer, { density: 300 })
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(out512);


    await sharp(svgBuffer, { density: 300 })
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(apple);

    console.log('Favicons generated:');
    console.log(' -', out16);
    console.log(' -', out32);
    console.log(' -', out48);
    console.log(' -', out64);
    console.log(' -', out512);
    console.log(' -', apple);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
