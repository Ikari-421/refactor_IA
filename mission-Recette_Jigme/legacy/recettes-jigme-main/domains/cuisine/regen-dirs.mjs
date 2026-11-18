// Dossiers de la régénération ciblée, communs au webhook et à l'admin (v234).
// Sans eux, generate-targeted.mjs retombe sur /opt/recettes-content (ni overrides.json ni photos-jigme.json) et réécrit tout le site faux.
import fs from "node:fs";
import path from "node:path";

export function regenDirs({ env = process.env, exists = fs.existsSync, here } = {}) {
  const repo = path.join(here, "..");
  return {
    srcDir: env.RJ_SRC || (exists("/opt/src") ? "/opt/src" : path.join(repo, "src")),
    root: env.RJ_ROOT || (exists("/opt/generate-targeted.mjs") ? "/opt" : repo),
  };
}
