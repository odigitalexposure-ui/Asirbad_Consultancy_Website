import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\becb1250-85cf-4512-b589-99260c0d0e78';
const outDir = path.resolve('public/images');

const images = [
  {
    src: path.join(brainDir, 'hero_consultancy_1795429593829.jpg'),
    destWebp: path.join(outDir, 'hero-consultancy.webp'),
    destJpg: path.join(outDir, 'hero-consultancy.jpg'),
  },
  {
    src: path.join(brainDir, 'about_consultancy_1795429615342.jpg'),
    destWebp: path.join(outDir, 'about-consultancy.webp'),
    destJpg: path.join(outDir, 'about-consultancy.jpg'),
  },
  {
    src: path.join(brainDir, 'taxation_services_1795429636740.jpg'),
    destWebp: path.join(outDir, 'taxation-services.webp'),
    destJpg: path.join(outDir, 'taxation-services.jpg'),
  },
  {
    src: path.join(brainDir, 'tax_planning_1795429660046.jpg'),
    destWebp: path.join(outDir, 'tax-planning.webp'),
    destJpg: path.join(outDir, 'tax-planning.jpg'),
  },
];

async function convert() {
  console.log('Converting generated AI images to optimized WebP & copying JPGs...');
  for (const item of images) {
    if (!fs.existsSync(item.src)) {
      console.error(`Source not found: ${item.src}`);
      continue;
    }

    // Convert to optimized WebP
    await sharp(item.src)
      .webp({ quality: 88, effort: 4 })
      .toFile(item.destWebp);
    console.log(`Created WebP: ${item.destWebp}`);

    // Also copy JPG
    fs.copyFileSync(item.src, item.destJpg);
    console.log(`Copied JPG: ${item.destJpg}`);
  }
  console.log('All images converted and placed successfully!');
}

convert().catch(err => {
  console.error(err);
  process.exit(1);
});
