# Admin préprod recettes (dashboard admin.jigme.fr)

## Périmètre
- Préprod uniquement (`recettes-jigme-preprod`). Prod et DNS intouchés.
- Secret dédié `RECETTES_ADMIN_SECRET` (Bearer), même valeur que le dashboard admin. Le repli `ADMIN_API_SECRET` est retiré (v243) : même présent dans l'environnement, il reçoit 401.
- **Pas de base à part** : lecture/écriture des fichiers Markdown Obsidian (`data/*.md`, `materiel/*.md`).

## Contrat v1 (11/11/2026, convenu avec Lien en bio — DECISIONS.md D26)
- **Préfixe** : `https://recettes-jigme-preprod.fly.dev/api/admin/v1/…` (recettes, matériel, lexique, restaurants, meta, health, reapply). **Seul chemin servi** depuis le 11/11/2026 (préprod v201) : l'ancien `/api/admin/…` (alias pendant la migration) répond **410** `{ ok:false, error:"ancien chemin retiré (11/11/2026) : utiliser /api/admin/v1/…" }`.
- **Empreinte** : en v1, `sha` = SHA-256 (hex, 64 car.) du fichier MD complet sur le volume. Présent sur `GET /recipes/<slug>`, `GET /materiel/<id>`, `GET /restaurants/<slug>`, `GET /lexique/<id>` (`notice.sha`, inchangé) et dans la réponse de chaque écriture d'une fiche (nouvelle empreinte, à réutiliser pour l'écriture suivante). `GET /health` v1 ajoute `apiVersion: 1`.
- **`expectedSha`** : accepté sur toutes les écritures d'une fiche (recettes : save, `photo`, `visibility`, `delete` ; matériel : save, `visibility` ; restaurants : toutes actions dont `delete` ; lexique : déjà en place). Différent de l'empreinte actuelle → **409** `{ ok:false, error:"conflit : la fiche a changé depuis la lecture (recharger)" }`, rien n'est écrit. Absent → pas de contrôle (compatibilité), **sauf lexique et action `delete`** (recettes et restaurants) où il est obligatoire (**428** `{ ok:false, error:"empreinte de lecture requise (SHA-256)" }`).
- **Restaurants** : SHA-256 uniquement (le SHA-1 toléré pendant la migration est retiré depuis v201 : un `expectedSha` SHA-1 donne 409).
- **Erreurs** : `{ ok:false, error }` avec 400, 401, 404, 409, 413 (et 428 lexique, 500).
- **Migration terminée** : dashboard admin préprod v58 (commit 1ec2d10) sur `/api/admin/v1/` avec `expectedSha` SHA-256 sur toutes les écritures (confirmé par Lien en bio le 11/11 ~13:05) ; alias et SHA-1 retirés en v201.
- **Tests** : `npm test` (dont `tests/api-snapshot.mjs --check tests/fixtures/api-snapshot-v199.json --with-v1`).

## Éditable
- Recettes : titre, description (120–155 si modifiée), tags, libellés **et doses** (`qty` number|null, `unit` ≤ 20 car.) des ingrédients, textes d'étapes, `servings_base` (> 0) et `servings_unit` (variante par défaut, même nombre d'éléments).
- **Photo** : action `photo` (data URL JPG/PNG/WebP, 8 Mo max) → ré-encodage sharp WebP (héros ~1600 inside + vignette 720 cover) dans le volume live `img/p/<slug>.webp` (+ `img/t/p/`) et le HTML servi ; frontmatter `image.url` → `/img/p/<slug>.webp`, `alt` (titre si vide), `credit` → « Jigmé Théaux » si absent ; patch `og:image` / héros / `rj-data`.
- **Catégorie Sucré/Salé : lecture seule** (jamais modifiée par l'admin).
- **Restaurants** (11/11) : fiches `restaurants/<slug>.md` (volume `restaurants/`), blocs façon newsletter, photos WebP `/img/resto/<slug>/`, patch HTML immédiat. Contrat : `docs/admin-restaurants.md`.
- Matériel : label, aliases, recos (title, url https, review, `image`, `crop`, `mention`, `halo`, `haloColor`, `fx`), création de fiche, réordonnancement.
- À l'enregistrement : contrôle schéma `recette-web-jigme/v2` (sinon refus).

## Rebuild
Pas de rebuild complet à chaque sauvegarde (Playwright SSR, sharp, etc.).
À la sauvegarde : écriture MD + patch HTML (`rj-data`, meta, titre, servings, ingredients) pour effet immédiat en préprod.
Photo : fichiers WebP sur volume + HTML ; resync volume → HTML au démarrage machine.
Au démarrage machine : réapplication des MD édités (`.bak` présents) sur le HTML + copie des images du volume.

Rebuild complet (workspace) :
```
cd /workspace/recettes-jigme
TARGET=preprod node build.mjs
flyctl deploy --remote-only --depot=false --ha=false -a recettes-jigme-preprod
```

## Sources de vérité (plan Obsidian / Git)
| Source | Rôle |
|--------|------|
| **NAS `Cuisine/Recettes/Web`** (schéma v2) | Vérité éditoriale. **L'admin n'écrit JAMAIS sur le NAS** (OK explicite requis pour toute sync). |
| Workspace `data/*.md` | Copie locale pour le build / déploiement image seulement. |
| Workspace `materiel/*.md` | Fiches matériel (affiliés). Branchement build/sync avec Recettes encore à caler. |
| Volume Fly `/var/recettes-live` | Miroir live préprod des mêmes MD (+ `img/p`, `img/t/p` pour photos admin). Premier jet. |
| **Vault Git `Web/` (prochaine étape, plan validé)** | Obsidian + Git : même fichiers MD, préprod d'abord. **Pas d'écriture NAS.** |

## Sécurité
- Refuse de démarrer hors `FLY_APP_NAME=recettes-jigme-preprod`.
- Slugs/ids `[a-z0-9-]+`, URLs https only, pas d'exécution de markdown.
- Le BFF admin refuse toute `RECETTES_API_URL` hors `recettes-jigme-preprod.fly.dev`.

## Soft-delete recettes (préprod, volume seulement)

Fiche déplacée dans `/var/recettes-live/data/.trash/<slug>.md` (conservée, restaurable). Retirée de la projection publique tout de suite (comme `hidden`). Le build lit toujours le workspace (la page HTML peut donc revenir dans l'image), mais au démarrage `refreshVisibility()` relit la corbeille du volume : le proxy public laisse la fiche en 404 et la retire des listes, de l'index et du sitemap. Restore replace le MD et la rend de nouveau visible. **Aucune écriture NAS / fiches Chef.**

### `POST /api/admin/v1/recipes/<slug>` — `{ "action": "delete", "expectedSha": "<sha256 64 hex>" }`

- **200** `{ "ok": true, "slug": "<slug>" }`
- **400** `{ "ok": false, "error": "slug invalide" }`
- **400** `{ "ok": false, "error": "action inconnue (save, photo, visibility, delete)" }` — une action inconnue n'est plus traitée comme un enregistrement. `POST` **sans** champ `action` (ou `"save"`) reste un enregistrement.
- **401** `{ "ok": false, "error": "non autorisé" }`
- **404** `{ "ok": false, "error": "recette introuvable" }`
- **409** `{ "ok": false, "error": "conflit : la fiche a changé depuis la lecture (recharger)" }` — `expectedSha` différent de l'empreinte actuelle, rien n'est écrit.
- **409** `{ "ok": false, "error": "une version est déjà en corbeille pour ce slug" }`
- **428** `{ "ok": false, "error": "empreinte de lecture requise (SHA-256)" }` — `expectedSha` absent ou pas un SHA-256 hex 64 car.

`GET /api/admin/v1/recipes` ajoute `trash: [ { "slug", "title", "sha", "deleted": true } ]` (liste des fiches en corbeille, hors `recipes`).

### `POST /api/admin/v1/recipes/<slug>/restore`

Corps vide ou `{}`.

- **200** `{ "ok": true, "slug": "<slug>" }` — la fiche revient sur le volume, redevient visible en préprod.
- **400** `{ "ok": false, "error": "slug invalide" }`
- **401** `{ "ok": false, "error": "non autorisé" }`
- **404** `{ "ok": false, "error": "recette absente de la corbeille" }`
- **409** `{ "ok": false, "error": "une recette active porte déjà ce slug" }`

## Recos matériel : image, cadrage, effets, publicité, masquage

Champs conservés au GET et au POST (en plus de `title`, `url`, `review`) :

| Champ | Format | Règle |
|---|---|---|
| `image` | data URL JPG/PNG/WebP (8 Mo décodés max) **ou** chemin local `/img/… (webp, jpg, jpeg ou png)` **ou** URL https Amazon autorisée **ou** `""` | Une data URL est ré-encodée en WebP (≤ 1600 px, q78) dans `/img/materiel/<id>/<hash>.webp` (volume + HTML). Une URL distante **autorisée** (domaines Amazon et leurs CDN d'images) est téléchargée puis ré-encodée de la même façon : **pas de hotlink**. Une URL https déjà enregistrée (reprise à l'identique) est conservée. `null`/absent au POST : on **garde** l'image déjà enregistrée. `image: ""` (chaîne vide) : **effacement explicite** — le champ `image` disparaît à la relecture, le cadrage (`crop`) est retiré (il ne s'applique qu'à une image), les pages publiques sont patchées, et le WebP local est supprimé du volume et de sa copie publique s'il n'est plus référencé par aucune reco ni aucune page. |
| `crop` | `{ "x", "y", "zoom" }` | `x` et `y` : 0–100 (%) ; `zoom` : 0,5–3. On accepte aussi `x`, `y`, `zoom` à plat sur la reco (normalisés en `crop` à l'écriture). Absent/null au POST : valeur précédente conservée, sauf si `image: ""` (crop retiré avec l'image). |
| `mention` | `{ "label", "color", "angle", "x", "y" }` | Même modèle que le lien en bio (`effectsEditor` / CP2). `color` `#rrggbb` ; `angle` −45–45 ; `x` −600–600 px ; `y` −60–400 px. Libellés typiques : « Collaboration commerciale », « Lien affilié », « Partenariat », « Publicité ». |
| `halo` | booléen | Halo EN2, comme le lien en bio. |
| `haloColor` | `#rrggbb` | Ignoré si `halo` est faux. Vide / vert d'origine `#9fd36b` = couleur par défaut. |
| `fx` | objet | Aligné sur le lien en bio. Clés autorisées seulement : `ship` `{ text, color, speed }` (CP30, speed 4–30 s), `mark` `{ text, color, x, y }` (CP26, x/y 0–100), `glow` `{ color, speed }` (CP13, speed 1–12 s), `tag` `{ text, color, x }` (CP11, x 0–100). Clé inconnue → 400. Absent/null au POST : valeur précédente conservée. |
| `ad` | booléen | Badge « Publicité » (partenariat marque) sur la carte publique. Absent au POST : valeur précédente conservée. |
| `adLabel` | chaîne (≤ 40) | Libellé du badge. Défaut `"Publicité"` si `ad` est vrai. |
| `hidden` | booléen | Masquage rapide d'une reco, sans la supprimer. `hidden: true` (ou `visible: false`) : absente des pages publiques dès le PATCH HTML, sans rebuild. GET admin la renvoie toujours. `visible: true` = `hidden: false`. |

`POST /api/admin/v1/materiel/<id>` : corps jusqu'à 12 Mo (data URL). `action` absente ou `"save"` = enregistrement ; `"visibility"` inchangé (fiche entière) ; toute autre action → **400** `{ "ok": false, "error": "action inconnue (save, visibility)" }`.

Rendu public : carte `.eq` avec image, cadrage, effets (mêmes CP2/EN2/CP30/CP26/CP13/CP11 que le lien en bio), badge Publicité si `ad`, liens `rel="sponsored nofollow noopener"`. Une reco `hidden` n'apparaît pas.

Erreurs image : **400** format/illisible/chemin ou hôte invalide ; **413** `{ "ok": false, "error": "image trop lourde (8 Mo max)" }` ou `"trop gros"` ; **502**/**504** si le téléchargement Amazon échoue (même messages que ci-dessous).

### `POST /api/admin/v1/materiel/image-candidates`

Bearer obligatoire. Corps : `{ "url": "https://link.amazon/B0flvWedK" }` (tout lien https Amazon autorisé : `link.amazon`, `amzn.to`, `amzlinks.in` (saut intermédiaire de link.amazon), `amazon.fr/dp/…`, etc.).

Suit les redirections, relit la page produit (`og:image`, `twitter:image`, JSON-LD Product, images principales / `hiRes` / variantes). Timeouts courts (8 s). Liste d'hôtes Amazon + CDN d'images uniquement ; DNS revalidé à chaque saut ; adresses privées / loopback refusées (pas de SSRF). Aucune exécution de script.

Succès **200** :

```json
{ "ok": true, "finalUrl": "https://www.amazon.fr/dp/B0FLVWEDK", "asin": "B0FLVWEDK", "candidates": [{ "url": "https://m.media-amazon.com/images/I/….jpg", "width": 1500, "height": 1500 }] }
```

`asin` et `width`/`height` sont omis s'ils sont inconnus. Pour choisir une candidate : la renvoyer dans `recos[].image` du POST save ; le serveur la télécharge et la ré-encode en WebP local (pas de hotlink). En secours, envoyer une data URL (image au choix).

Erreurs :

- **401** `{ "ok": false, "error": "non autorisé" }`
- **400** `{ "ok": false, "error": "url https requise" }` (ou `"url https invalide"`, `"hôte non autorisé (domaines Amazon et leurs images seulement)"`, `"adresse privée refusée"`)
- **502** `{ "ok": false, "error": "Amazon a bloqué la lecture de la page (captcha ou anti-robot). Envoie une image à la place." }`
- **503** `{ "ok": false, "error": "Amazon est temporairement indisponible (HTTP 503). Envoie une image à la place." }`
- **504** `{ "ok": false, "error": "délai dépassé en lisant la page Amazon. Envoie une image à la place." }`
- **502** `{ "ok": false, "error": "aucune image produit trouvée. Envoie une image à la place." }`

