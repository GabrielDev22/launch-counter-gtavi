/**
 * Converts all JPG/PNG images in public/assets/gta-world/ to WebP.
 * Run once: node scripts/convert-to-webp.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = join(__dirname, '..', 'public', 'assets', 'gta-world');

async function convertAll() {
  const files = await readdir(SOURCE_DIR);
  const targets = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${targets.length} image(s) to convert...\n`);

  for (const file of targets) {
    const inputPath  = join(SOURCE_DIR, file);
    const outputName = basename(file, extname(file)) + '.webp';
    const outputPath = join(SOURCE_DIR, outputName);

    const { size: originalSize } = await stat(inputPath);

    await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(outputPath);

    const { size: webpSize } = await stat(outputPath);
    const saved = (((originalSize - webpSize) / originalSize) * 100).toFixed(1);

    console.log(`✓ ${file} → ${outputName}  (${(originalSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB, -${saved}%)`);
  }

  console.log('\nConversión completada.');
}

convertAll().catch(err => { console.error(err); process.exit(1); });
