// Intercepte /api/admin/v1/{recipes,materiel,lexique} quand RJ_WRITES=back.
// Les chemins et les formes de réponse Admin · jigme.fr restent les mêmes.
// Restaurants, image-candidates, health, meta, reapply, push-obsidian : hors périmètre.

import { writesToBack, createBackWriteClient, mapLegacyAdminBody } from "./back-write-client.mjs";

export { writesToBack };

// v234 : le proxy ne régénère plus rien. Quand RJ_WRITES=back, la page publique est refaite uniquement par le webhook
// de l'outbox du back (/api/v1/webhooks/cuisine), une régénération à la fois ; brouillons et fiches masquées n'émettent rien.

async function callBack(method, path, body, { expectedSha, ifMatch } = {}) {
  const client = createBackWriteClient();
  return client.request(method, path, body, { expectedSha, ifMatch });
}

function sendOut(send, res, out, shape) {
  const headers = {};
  if (out.etag) headers.ETag = out.etag;
  else if (out.sha || (shape && shape.sha)) headers.ETag = `"${out.sha || shape.sha}"`;
  const payload = shape || out.data;
  if (payload && out.sha && payload.sha == null) payload.sha = out.sha;
  send(res, out.status || 200, payload, headers);
  return true;
}

function fail(send, res, e) {
  if (e.status === 409) {
    send(res, 409, { ok: false, error: e.message || "conflit : la fiche a changé depuis la lecture (recharger)", currentSha: e.currentSha });
    return true;
  }
  const body = e.body && typeof e.body === "object" ? e.body : { ok: false, error: e.message || "Erreur serveur" };
  send(res, e.status || 500, body);
  return true;
}

function asFiche(data) {
  const src = (data && (data.fiche || data.materiel || data)) || {};
  const fiche = { ...src };
  if (data && data.bodyMarkdown && fiche.bodyMarkdown == null) fiche.bodyMarkdown = data.bodyMarkdown;
  return fiche;
}

function asNotice(data) {
  const src = (data && (data.notice || data)) || {};
  const notice = { ...src };
  if (data && data.bodyMarkdown && notice.bodyMarkdown == null) notice.bodyMarkdown = data.bodyMarkdown;
  return notice;
}

const NOTE = "écrit sur le back commun ; page publique refaite par le webhook de l'outbox. NAS non touché. Volume local non modifié.";

/**
 * @returns {Promise<boolean>} true si la requête a été traitée.
 */
export async function proxyLegacyAdmin(req, res, ctx) {
  if (!writesToBack()) return false;
  const { p, url, send, readJson } = ctx;
  const ifMatch = req.headers && req.headers["if-match"];

  try {
    if (req.method === "GET" && p === "/api/admin/lexique") {
      const q = url.search || "";
      const out = await callBack("GET", "/api/v1/admin/lexique" + q);
      const d = out.data || {};
      return sendOut(send, res, out, {
        ok: true,
        notices: d.notices || d.items || [],
        trash: d.trash || d.trashed || [],
        scope: "Lexique préprod (back commun). Export Obsidian manuel ; écriture NAS désactivée par défaut.",
        obsidian: { nasWriteEnabled: false, path: "Cuisine/Lexique/<id>.md" },
        sha: out.sha,
      });
    }
    if (req.method === "POST" && p === "/api/admin/lexique") {
      const b = await readJson(req, 64 * 1024);
      if (b.action !== "create") { send(res, 400, { ok: false, error: "action invalide (create)" }); return true; }
      const out = await callBack("POST", "/api/v1/admin/lexique", { ...b, action: "create" }, { ifMatch });
      return sendOut(send, res, out, { ok: true, notice: asNotice(out.data), sha: out.sha });
    }
    {
      const m = p.match(/^\/api\/admin\/lexique\/([a-z0-9-]+)(\/export|\/restore|\/push-obsidian)?$/);
      if (m) {
        if (m[2] === "/push-obsidian") return false; // inchangé (NAS local, désactivé)
        if (req.method === "GET" && (!m[2] || m[2] === "/export")) {
          const path = "/api/v1/admin/lexique/" + m[1] + (m[2] || "");
          const out = await callBack("GET", path);
          if (m[2] === "/export") return sendOut(send, res, out, { ok: true, ...out.data, sha: out.sha || out.data.sha });
          return sendOut(send, res, out, { ok: true, notice: asNotice(out.data), sha: out.sha });
        }
        if (req.method === "POST") {
          const b = await readJson(req, 64 * 1024);
          if (m[2] === "/restore") {
            const out = await callBack("POST", "/api/v1/admin/lexique/" + m[1] + "/restore", { ...b, action: "restore" }, { ifMatch });
            return sendOut(send, res, out, { ok: true, notice: asNotice(out.data), sha: out.sha });
          }
          const mapped = mapLegacyAdminBody(b);
          const out = await callBack("POST", "/api/v1/admin/lexique/" + m[1], mapped, { expectedSha: b.expectedSha, ifMatch });
          if (b.action === "visibility") return sendOut(send, res, out, { ok: true, notice: asNotice(out.data), hidden: b.hidden, sha: out.sha });
          if (b.action === "delete") return sendOut(send, res, out, { ok: true, ...(out.data || {}), sha: out.sha });
          if (b.action === "import-markdown") return sendOut(send, res, out, { ok: true, notice: asNotice(out.data), sha: out.sha });
          return sendOut(send, res, out, { ok: true, notice: asNotice(out.data), sha: out.sha, note: NOTE });
        }
      }
    }

    if (req.method === "GET" && p === "/api/admin/recipes") {
      const q = url.search || "";
      const out = await callBack("GET", "/api/v1/admin/recettes/recipes" + q);
      const d = out.data || {};
      let trash = d.trash || d.trashed;
      if (!trash) {
        try {
          const t = await callBack("GET", "/api/v1/admin/recettes/recipes?deleted=1&limit=all");
          trash = (t.data && (t.data.trash || t.data.trashed || t.data.recipes || t.data.items)) || [];
        } catch { trash = []; }
      }
      return sendOut(send, res, out, { ok: true, recipes: d.recipes || d.items || [], total: d.total, trash, sha: out.sha });
    }
    {
      const mRest = p.match(/^\/api\/admin\/recipes\/([a-z0-9-]+)\/restore$/);
      if (mRest && req.method === "POST") {
        const b = await readJson(req).catch(() => ({}));
        const out = await callBack("POST", "/api/v1/admin/recettes/recipes/" + mRest[1] + "/restore", { ...b, action: "restore" }, { ifMatch });
        return sendOut(send, res, out, { ok: true, slug: mRest[1], recipe: out.data && out.data.recipe, sha: out.sha });
      }
      const m = p.match(/^\/api\/admin\/recipes\/([a-z0-9-]+)$/);
      if (m && req.method === "GET") {
        const out = await callBack("GET", "/api/v1/admin/recettes/recipes/" + m[1]);
        return sendOut(send, res, out, { ok: true, recipe: (out.data && out.data.recipe) || out.data, sha: out.sha || (out.data && out.data.sha) });
      }
      if (m && req.method === "POST") {
        const b = await readJson(req, 12 * 1024 * 1024);
        const mapped = mapLegacyAdminBody(b);
        const out = await callBack("POST", "/api/v1/admin/recettes/recipes/" + m[1], mapped, { expectedSha: b.expectedSha, ifMatch });
        if (b.action === "visibility") return sendOut(send, res, out, { ok: true, hidden: b.hidden, sha: out.sha, recipe: out.data && out.data.recipe });
        if (b.action === "delete") return sendOut(send, res, out, { ok: true, slug: m[1], ...(out.data || {}), sha: out.sha });
        return sendOut(send, res, out, { ok: true, slug: m[1], sha: out.sha, recipe: out.data && out.data.recipe, note: NOTE, mode: "back" });
      }
    }

    if (req.method === "GET" && p === "/api/admin/materiel") {
      const q = url.search || "";
      const out = await callBack("GET", "/api/v1/admin/materiel" + q);
      const d = out.data || {};
      return sendOut(send, res, out, { ok: true, materiel: d.materiel || d.items || [], sha: out.sha });
    }
    if (req.method === "POST" && p === "/api/admin/materiel/image-candidates") return false;
    {
      const m = p.match(/^\/api\/admin\/materiel\/([a-z0-9-]+)$/);
      if (m && req.method === "GET") {
        const out = await callBack("GET", "/api/v1/admin/materiel/" + m[1]);
        return sendOut(send, res, out, { ok: true, fiche: asFiche(out.data), sha: out.sha || (out.data && out.data.sha) });
      }
      if (m && req.method === "POST") {
        const b = await readJson(req, 12 * 1024 * 1024);
        const mapped = mapLegacyAdminBody(b);
        const out = await callBack("POST", "/api/v1/admin/materiel/" + m[1], mapped, { expectedSha: b.expectedSha, ifMatch });
        if (b.action === "visibility") return sendOut(send, res, out, { ok: true, hidden: b.hidden, sha: out.sha, fiche: asFiche(out.data) });
        return sendOut(send, res, out, { ok: true, id: m[1], sha: out.sha, fiche: asFiche(out.data), note: NOTE });
      }
    }
    if (req.method === "POST" && p === "/api/admin/materiel") {
      const b = await readJson(req, 12 * 1024 * 1024);
      const out = await callBack("POST", "/api/v1/admin/materiel", { ...b, action: "create" }, { ifMatch });
      return sendOut(send, res, out, { ok: true, id, sha: out.sha, fiche: asFiche(out.data), note: NOTE });
    }
  } catch (e) {
    return fail(send, res, e);
  }
  return false;
}
