import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

const jobs = [
  {
    input: "src/assets/hero-bg.jpg",
    output: "src/assets/hero-bg.webp",
    width: 1920,
    quality: 78,
  },
  {
    input: "src/assets/project-1.png",
    output: "src/assets/project-1.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/project-2.png",
    output: "src/assets/project-2.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/project-3.png",
    output: "src/assets/project-3.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/project-4.jpg",
    output: "src/assets/project-4.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/avatar.png",
    output: "src/assets/avatar.webp",
    width: 960,
    quality: 82,
  },
  {
    input: "src/assets/project-gym.webp",
    output: "src/assets/project-gym.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/project-advogados.webp",
    output: "src/assets/project-advogados.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/project-academias.webp",
    output: "src/assets/project-academias.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/project-advogados.webp",
    output: "public/images/hero-landing-page-advogados.webp",
    width: 1536,
    quality: 82,
  },
  {
    input: "src/assets/project-advogados.webp",
    output: "public/images/landing-page-advogados.webp",
    width: 1280,
    quality: 82,
  },
  {
    input: "src/assets/project-academias.webp",
    output: "public/images/hero-landing-page-academias.webp",
    width: 1536,
    quality: 82,
  },
  {
    input: "src/assets/project-academias.webp",
    output: "public/images/landing-page-academias.webp",
    width: 1280,
    quality: 82,
  },
  ...["dentistas", "clinicas-medicas", "psicologos", "veterinarias", "saloes", "imobiliarias", "arquitetos", "fotografos", "contadores", "tatuagem"].flatMap((id) => [
    {
      input: `src/assets/project-${id}.webp`,
      output: `src/assets/project-${id}.webp`,
      width: 1280,
      quality: 82,
    },
    {
      input: `src/assets/project-${id}.webp`,
      output: `public/images/hero-landing-page-${id}.webp`,
      width: 1536,
      quality: 82,
    },
    {
      input: `src/assets/project-${id}.webp`,
      output: `public/images/landing-page-${id}.webp`,
      width: 1280,
      quality: 82,
    },
  ]),
  {
    input: "public/logo.png",
    output: "public/logo.png",
    width: 760,
    quality: 90,
    format: "png",
  },
  {
    input: "public/favicon.png",
    output: "public/favicon.png",
    width: 200,
    quality: 90,
    format: "png",
  },
];

for (const job of jobs) {
  const inputPath = path.join(root, job.input);
  const outputPath = path.join(root, job.output);
  await mkdir(path.dirname(outputPath), { recursive: true });

  let pipeline = sharp(inputPath).rotate().resize({
    width: job.width,
    withoutEnlargement: true,
  });

  if (job.format === "png") {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.webp({ quality: job.quality, effort: 6 });
  }

  await pipeline.toFile(outputPath + ".tmp");
  const { rename } = await import("node:fs/promises");
  await rename(outputPath + ".tmp", outputPath);

  const { stat } = await import("node:fs/promises");
  const inStat = await stat(inputPath);
  const outStat = await stat(outputPath);
  console.log(
    `${job.output}: ${Math.round(inStat.size / 1024)}KB -> ${Math.round(outStat.size / 1024)}KB`,
  );
}
