# refacto-agents : dépôt d'outillage

Outillage (agents, skills, commandes, hooks) pour reconstruire une app legacy vibe codée avec une stack propre. Ce dépôt ne contient aucune app.

## Où lire

- `docs/cadrage.md` : document de conception de référence. Il fait foi.
- `docs/plan.md` : plan par incréments. Chaque incrément est testé sur une app legacy réelle avant le suivant.

## Règles de travail

- Ne pas construire un incrément avant que le plan le décrive. Ne pas sauter d'incrément.
- Modifier le cadrage avant d'écrire le code qui le contredit, pas après.
- Toute décision non triviale (choix de lib, écart au cadrage, contournement) donne un ADR dans `docs/adr/`.
- Un agent seulement si un contexte isolé est nécessaire (cadrage §2).
- Le legacy d'une mission n'est jamais modifié.

## Conventions

- Documents en français. Noms de fichiers et identifiants en ASCII, en minuscules, avec tirets.
- `docs/` : documents de conception de l'outillage. `plugins/` et `.claude/` : configuration et code distribué. Ne pas mélanger les deux.
- Les livrables produits pour une app (inventaire, spécifications, PV) vont dans le dépôt de mission, jamais ici.
