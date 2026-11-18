// Client d'écriture / lecture admin vers le back commun (préprod : preprod-back-jigme).
// Inactif tant que RJ_WRITES n'est pas exactement « back » (défaut : volume local).
// Ne jamais journaliser ni renvoyer la clé (BACK_RECETTES_WRITE_KEY).

const DEFAULT_BASE = "http://preprod-back-jigme.flycast";

export function writesToBack() {
  return process.env.RJ_WRITES === "back";
}

function redact(text, secret) {
  const s = String(text ?? "");
  if (!secret) return s;
  return s.split(secret).join("[redacted]");
}

export function createBackWriteClient({ fetchImpl = fetch, base, key } = {}) {
  const root = String(base || process.env.BACK_WRITES_BASE || DEFAULT_BASE).replace(/\/+$/, "");
  const secret = key || process.env.BACK_RECETTES_WRITE_KEY || "";

  async function request(method, path, body, { expectedSha, ifMatch, raw } = {}) {
    if (!writesToBack()) {
      throw new Error("écritures back inactives (RJ_WRITES ≠ back)");
    }
    if (!secret) {
      throw new Error("clé d'écriture back absente");
    }
    const headers = {
      Authorization: "Bearer " + secret,
      Accept: "application/json",
    };
    const match = ifMatch || (expectedSha ? `"${expectedSha}"` : undefined);
    if (match) headers["If-Match"] = match;
    const opts = { method, headers, signal: AbortSignal.timeout(20000) };
    if (body !== undefined) {
      headers["Content-Type"] = "application/json";
      opts.body = raw || JSON.stringify(body);
    }
    let res, text;
    try {
      res = await fetchImpl(root + path, opts);
      text = await res.text();
    } catch (e) {
      throw new Error(redact(e.message || "échec réseau vers le back", secret));
    }
    let data;
    try { data = text ? JSON.parse(text) : {}; }
    catch { throw Object.assign(new Error("réponse back invalide (" + res.status + ")"), { backStatus: res.status }); } // statut gardé à part : sendErr inchangé (500)
    if (!res.ok) {
      const err = new Error(redact(data.error || ("erreur back " + res.status), secret));
      err.status = res.status;
      if (data.currentSha) err.currentSha = data.currentSha;
      err.body = data;
      throw err;
    }
    return { status: res.status, data, etag: res.headers.get("etag"), sha: data.sha };
  }

  return {
    enabled: writesToBack,
    request,
    get(path) { return request("GET", path); },
    put(path, body, expectedSha) { return request("PUT", path, body, { expectedSha }); },
    post(path, body, expectedSha) { return request("POST", path, body, { expectedSha }); },
  };
}

/** Correspondance /api/admin/v1/… (ancien écran) → /api/v1/admin/… (back). */
export function mapLegacyAdminPath(p) {
  const s = String(p || "");
  if (s === "/api/admin/recipes" || s.startsWith("/api/admin/recipes?")) {
    return s.replace("/api/admin/recipes", "/api/v1/admin/recettes/recipes");
  }
  const recRest = s.match(/^\/api\/admin\/recipes\/([a-z0-9-]+)\/restore$/);
  if (recRest) return "/api/v1/admin/recettes/recipes/" + recRest[1] + "/restore";
  const rec = s.match(/^\/api\/admin\/recipes\/([a-z0-9-]+)$/);
  if (rec) return "/api/v1/admin/recettes/recipes/" + rec[1];
  if (s === "/api/admin/materiel" || s.startsWith("/api/admin/materiel?")) {
    return s.replace("/api/admin/materiel", "/api/v1/admin/materiel");
  }
  const mat = s.match(/^\/api\/admin\/materiel\/([a-z0-9-]+)$/);
  if (mat) return "/api/v1/admin/materiel/" + mat[1];
  if (s === "/api/admin/lexique" || s.startsWith("/api/admin/lexique?")) {
    return s.replace("/api/admin/lexique", "/api/v1/admin/lexique");
  }
  const lex = s.match(/^\/api\/admin\/lexique\/([a-z0-9-]+)(\/export)?$/);
  if (lex) return "/api/v1/admin/lexique/" + lex[1] + (lex[2] || "");
  return null;
}

/** Adapte les actions de l'ancien écran (save, visibility) au contrat v1 du back. */
export function mapLegacyAdminBody(body) {
  if (!body || typeof body !== "object") return body;
  const a = body.action;
  if (a === "save" || a === "" || a == null) return { ...body, action: "update" };
  if (a === "visibility") {
    const hidden = body.hidden === true;
    return { ...body, action: hidden ? "hide" : "show" };
  }
  return body;
}
