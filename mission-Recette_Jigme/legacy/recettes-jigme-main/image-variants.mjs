// Variantes d'une photo de fiche (vignettes, AVIF, 800w, formats sociaux, Pinterest, recompression).
// Un seul jeu de réglages pour build.mjs et la régénération ciblée (generate-targeted.mjs) : mêmes octets des deux côtés.
// u = URL logique de la photo (/img/p/<slug>.webp), sl = slug, md = métadonnées sharp de l'original.

// Vignettes des tuiles (clé : URL de la photo)
export const thumbSpecs = (u) => [
  { key: "t720", url: "/img/t" + u.slice(4), fn: (i) => i.resize({ width: 720, height: 720, fit: "cover", withoutEnlargement: true }).webp({ quality: 74 }) },
  { key: "t360", url: "/img/t360" + u.slice(4), fn: (i) => i.resize({ width: 360, height: 360, fit: "cover", withoutEnlargement: true }).webp({ quality: 70 }) },
];

// Recompression des photos > 150 Ko : qualité décroissante jusqu'à ≤ 150 Ko (jamais plus gros que l'original)
export const RECOMP_MAX = 150 * 1024;
export const RECOMP_QUALITIES = [72, 64, 56];
export const recompFn = (q) => (i) => i.webp({ quality: q, effort: 5 });

// AVIF (tuiles 360/720, héros 640/1040), héros 800w, formats sociaux (JSON-LD 1:1, 4:3, 16:9 ; Open Graph 16:9)
export const variantSpecs = (sl, md) => [
  { key: "t360", url: `/img/a/360/${sl}.avif`, fn: (i) => i.resize({ width: 360, height: 360, fit: "cover", withoutEnlargement: true }).avif({ quality: 48, effort: 3 }) },
  { key: "t720", url: `/img/a/720/${sl}.avif`, fn: (i) => i.resize({ width: 720, height: 720, fit: "cover", withoutEnlargement: true }).avif({ quality: 48, effort: 3 }) },
  { key: "h640", url: `/img/a/h640/${sl}.avif`, fn: (i) => i.resize({ width: 640, withoutEnlargement: true }).avif({ quality: 50, effort: 3 }) },
  { key: "h1040", url: `/img/a/h1040/${sl}.avif`, fn: (i) => i.resize({ width: 1040, withoutEnlargement: true }).avif({ quality: 50, effort: 3 }) },
  ...(md.width > 800 ? [{ key: "w800", url: `/img/w800/${sl}.webp`, fn: (i) => i.resize({ width: 800 }).webp({ quality: 72, effort: 5 }) }] : []),
  { key: "s11", url: `/img/s/${sl}-1x1.webp`, fn: (i) => i.resize(700, 700, { fit: "cover" }).webp({ quality: 64 }) },
  { key: "s43", url: `/img/s/${sl}-4x3.webp`, fn: (i) => i.resize(900, 675, { fit: "cover" }).webp({ quality: 64 }) },
  { key: "s169", url: `/img/s/${sl}-16x9.jpg`, fn: (i) => i.resize(1200, 675, { fit: "cover" }).jpeg({ quality: 70, mozjpeg: true }) },
];

// Pinterest 2:3 : photo entière sur fond flouté de la même photo
export const pinUrl = (sl) => `/img/s/${sl}-2x3.jpg`;
export async function pinToFile(sharp, src, out) {
  const fg = await sharp(src).resize({ width: 800, height: 1200, fit: "inside" }).toBuffer();
  await sharp(src).resize(800, 1200, { fit: "cover" }).blur(28).modulate({ brightness: 0.88 }).composite([{ input: fg, gravity: "centre" }]).jpeg({ quality: 68, mozjpeg: true }).toFile(out);
}

export const avifOf = (W) => ({ 360: W.t360, 720: W.t720, h640: W.h640, h1040: W.h1040, w800: W.w800 });
export const socOf = (sl, W) => ({ ld: [W.s11, W.s43, W.s169], og: { url: W.s169, w: 1200, h: 675, type: "image/jpeg" }, pin: { url: pinUrl(sl), w: 800, h: 1200, type: "image/jpeg" } });
