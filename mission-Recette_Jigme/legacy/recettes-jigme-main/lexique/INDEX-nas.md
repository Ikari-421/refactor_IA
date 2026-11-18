---
schema: lexique-jigme/v1
id: _index
---

# Lexique culinaire (source Obsidian)

Petite base éditable : un fichier Markdown par identifiant, sous `Cuisine/Lexique/`. Ce n’est pas une recette. Ce n’est pas le dossier `Recettes/Web/`.

## Schéma (`schema: lexique-jigme/v1`)

Chaque notice porte : `id`, `terme`, `sens`, `categorie`, `formes`, `explication` (texte publié unique, vouvoiement), `references`.

L’`id` est stable (minuscules, tirets, sans accents). Ne pas le renommer à la légère : les fiches Web pointent dessus via `lexique_local.*.<id>.ref`.

## Notices actuelles (pilotes)

al-dente, bain-marie, blanchir, brunoise, chalumeau, chemiser, deglacer, delayer, dessecher, egrainer, emulsion, filtrer, foncer, frire, hors-du-feu, infuser, julienne, mariner, mijoter, monder, monter-en-neige, napper, panade, raper, reduire.

Pas de notice `blanchir-légumes` : le `blanchir` des pilotes est celui des jaunes avec sucre.

## Limites

L’admin préprod (admin.jigme.fr → Recettes → Lexique) et le pont box `scripts/lexique-sync` synchronisent ce dossier avec le site préprod. Un conflit des deux côtés bloque l’écriture ; résoudre à la main puis relancer. Les fiches `creme-brulee` et `tagliatelles-carbonara` portent une copie locale (`lexique_local.*.explication`) alignée sur la notice centrale, plus un `ref` vers ce fichier : projection provisoire, pas une seconde source éditoriale.
