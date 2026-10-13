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

    // Resize hero image & gallery to max 1200px width with quality 80
    const targetWidth = Math.min(metadata.width || 1200, 1200);
    const optimizedBuffer = await sharp(buffer)
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();

    fs.writeFileSync(filePath, optimizedBuffer);
    const newSize = fs.statSync(filePath).size;
    console.log(
      `${file}: ${(initialSize / 1024).toFixed(1)} KiB -> ${(newSize / 1024).toFixed(1)} KiB (saved ${(((initialSize - newSize) / initialSize) * 100).toFixed(1)}%)`
    );
  }
}

optimize().catch(console.error);
