# Deux lectures des étapes (habitué / débutant) — spécification v1 (03/11/2026)

Statut : conception + essai avec Chef. Rien n'est écrit sur le NAS ni dans le code du site (v113 en cours).

## 1. Lexique commun : `Cuisine/Recettes/Web/_LEXIQUE.yaml`

Le nom commence par `_` comme `_SCHEMA.md` : il n'est pas pris pour une fiche. YAML pur (pas de frontmatter).

```yaml
schema: lexique-jigme/v1
termes:
  - id: monter-en-neige          # kebab ASCII, unique, stable (clé du balisage)
    terme: monter en neige        # forme de base affichée en titre d'infobulle
    formes: [montez en neige, monter les blancs en neige, montez les blancs, blancs montés]
    categorie: geste              # geste | cuisson | decoupe | ustensile | etat
    explication: >-
      Battre des blancs d'œufs avec un fouet ou un batteur jusqu'à ce qu'ils
      deviennent une mousse blanche et ferme…  (2 à 5 phrases, sans aucun mot du lexique)
    voir: [blanchir]              # facultatif : autres id liés
```

Règles :
- `id` : minuscules, chiffres, tirets, sans accent. Jamais renommé une fois publié.
- `formes` : toutes les formes qu'on trouvera dans le texte habitué (impératif, participe, pluriel). Sert à vérifier et à baliser automatiquement plus tard.
- `explication` : très simple, concrète (quoi, avec quoi, comment savoir que c'est bon, piège à éviter). Elle ne doit utiliser aucun autre terme du lexique, et ne donne aucune dose.

## 2. Champ des étapes : `variants.{clé}.steps_lectures`

Les `steps` (liste de strings) restent **inchangés** : ils sont lus par le site actuel, le JSON-LD (`HowToStep`) et la logique des titres. On ajoute une liste parallèle, de même longueur :

```yaml
steps:
  - "Blancs. Montez les blancs fermes, puis pochez-les 2 min."
steps_lectures:
  - habitue: "Blancs. [[monter-en-neige|Montez les blancs]] fermes, puis [[pocher|pochez-les]] 2 min."
    debutant: "Blancs. Dans un grand saladier propre, battez les blancs au fouet…, puis faites-les cuire 2 min dans du lait qui frémit…"
```

- `habitue`, une fois les balises retirées (`[[id|forme]]` → `forme`, `[[id]]` → terme du lexique), doit être **égal** à `steps[i]`.
- `debutant` : même titre court + point en tête (même `HowToStep.name`), puis le geste expliqué en phrases complètes, **sans balise ni jargon** (aucune forme du lexique).
- Les deux versions gardent les **mêmes doses, températures et durées** que `steps[i]`, sans en ajouter. Les quantités restent dans le YAML des ingrédients, qui ne change pas. La version débutant peut ajouter des repères visuels (« quand ça fait des petites bulles sur le bord »), pas de nouveaux chiffres de dose.
- Un bloc avec `inherit` hérite de `steps_lectures` comme de `steps`. Les couches allergènes ne touchent pas les étapes.
- Si `steps_lectures` est absent, le site affiche `steps` comme aujourd'hui, sans bascule.

## 3. Balisage dans le texte habitué

- `[[id]]` : affiche `terme` tel quel.
- `[[id|forme affichée]]` : affiche la forme (conjuguée, au pluriel…). Exemple : `[[reserver|Réservez]]`.
- Chaque `id` balisé doit exister dans `_LEXIQUE.yaml`, et la forme affichée doit figurer dans `formes` ou être égale à `terme` (à la casse près).
- Pas de balise imbriquée ni de balise dans le titre court. On balise la première occurrence d'un terme dans chaque étape.

## 4. Affichage prévu (pour plus tard, pas dans la v113)

- Mode **débutant par défaut**. Un bouton « Habitué / Débutant » bascule toutes les étapes d'un coup (choix mémorisé en localStorage, aussi en mode cuisine).
- En mode habitué, les termes balisés sont soulignés en pointillé ; un toucher ouvre une infobulle (terme + explication) avec le bouton de bascule.
- Mode cuisine, PDF, image et JSON-LD : le JSON-LD garde `steps` (texte habitué sans balise).

## 5. Contrôles (script d'essai `deux-lectures-essai/verif.py`)

1. `len(steps_lectures) == len(steps)` ; habitué sans balise == `steps[i]`.
2. Chaque `[[id]]` existe dans le lexique ; forme affichée dans `formes`/`terme`.
3. Les nombres (doses, °C, min, h) du débutant == ceux de `steps[i]` (même ensemble).
4. Débutant : aucune balise, aucune forme du lexique, et aucun mot d'une liste noire de jargon (voir le script).
5. Explications du lexique : aucune autre forme du lexique dedans.
