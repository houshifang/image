import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDir = path.resolve(process.argv[2] || "assets");
const quality = Number(process.env.WEBP_QUALITY || 78);
const maxWidth = Number(process.env.WEBP_MAX_WIDTH || 1200);
const imageExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const images = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      images.push(...(await collectImages(fullPath)));
      continue;
    }

    if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }

  return images;
}

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function compressImage(filePath) {
  const outputPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");
  const before = (await stat(filePath)).size;

  await sharp(filePath)
    .rotate()
    .resize({
      width: maxWidth,
      withoutEnlargement: true
    })
    .webp({
      quality,
      effort: 6
    })
    .toFile(outputPath);

  const after = (await stat(outputPath)).size;
  const saved = before > 0 ? ((1 - after / before) * 100).toFixed(1) : "0.0";

  return {
    filePath,
    outputPath,
    before,
    after,
    saved
  };
}

async function main() {
  const images = await collectImages(sourceDir);

  if (!images.length) {
    console.log(`No png/jpg/jpeg images found in ${sourceDir}`);
    return;
  }

  let beforeTotal = 0;
  let afterTotal = 0;

  for (const image of images) {
    const result = await compressImage(image);
    beforeTotal += result.before;
    afterTotal += result.after;

    console.log(
      `${path.relative(process.cwd(), result.filePath)} -> ${path.relative(process.cwd(), result.outputPath)} ` +
        `(${formatSize(result.before)} -> ${formatSize(result.after)}, saved ${result.saved}%)`
    );
  }

  const totalSaved = beforeTotal > 0 ? ((1 - afterTotal / beforeTotal) * 100).toFixed(1) : "0.0";
  console.log(`Done. ${images.length} images, ${formatSize(beforeTotal)} -> ${formatSize(afterTotal)}, saved ${totalSaved}%.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
