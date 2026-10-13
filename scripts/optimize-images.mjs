import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("./public/images");

async function optimize() {
  const files = fs.readdirSync(IMAGES_DIR).filter((f) => f.endsWith(".webp"));

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    const initialSize = fs.statSync(filePath).size;
    const buffer = fs.readFileSync(filePath);

    const image = sharp(buffer);
    const metadata = await image.metadata();

    // Resize hero image & gallery to max 800px width with quality 75
    // Perfect for mobile & retina display up to 400px container width (savings > 50%)
    const targetWidth = Math.min(metadata.width || 800, 800);
    const optimizedBuffer = await sharp(buffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();

    fs.writeFileSync(filePath, optimizedBuffer);
    const newSize = fs.statSync(filePath).size;
    console.log(
      `${file}: ${(initialSize / 1024).toFixed(1)} KiB -> ${(newSize / 1024).toFixed(1)} KiB (saved ${(((initialSize - newSize) / initialSize) * 100).toFixed(1)}%)`
    );
  }
}

optimize().catch(console.error);
