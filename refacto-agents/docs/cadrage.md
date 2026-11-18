# Refacto-IA-SLOP — Document de cadrage

> Document de référence du dépôt. À placer dans `refacto-ia-slop/docs/cadrage.md`.
> Il fait foi pour la construction des agents, skills, commandes et hooks.

---

## 1. Objectif

- Outiller Claude Code pour **reconstruire** une app vibe codée (legacy) avec une stack propre.
- Ce n'est pas un refacto au sens strict : le legacy n'est jamais modifié, il sert de **source d'analyse** et d'**oracle** pour les tests.
- Le dépôt doit fonctionner pour **n'importe quelle app legacy web** : aucun agent ne présuppose une stack.
- Objectif secondaire : apprendre à créer et utiliser les skills, subagents, slash commands, hooks, plugins et la marketplace de Claude Code.

---

## 2. Principes directeurs

- **Reprendre les étapes de réalisation d'un projet ESN**, sans reproduire l'organisation humaine (pas de PMO, de comités…). Règle : pas de livrable, pas d'agent.
- **Un agent seulement si un contexte isolé est nécessaire.** Les phases où l'humain valide chaque gate tournent dans la session principale avec des skills et des commandes.
- **Conception en cycle en V, réalisation en agile** (sprints feature par feature).
- **Les agents communiquent par des documents** versionnés dans le dépôt de mission, pas par la mémoire d'une conversation.
- **Validation humaine à chaque gate** : fin de phase → recette humaine → retours → itération.
- **Chaque niveau du V écrit ses tests à la descente** et les exécute à la remontée. Les tests découlent des specs, pas du code.
- **Celui qui écrit les tests n'est pas celui qui écrit le code** : agents testeur et dev séparés.
- **Un contexte agent par feature** : comme une discussion dédiée par feature.
- **Chaque feature est testée et documentée**. Les décisions sont tracées dans un journal (ADR).
- **Le choix de stack est proposé à partir de l'audit**, puis tranché par l'humain à la gate.
- **Construction incrémentale** : chaque incrément est testé sur une app legacy réelle avant le suivant (§9).

---

## 3. Le cycle en V

### 3.1 Vue d'ensemble

```
MOA   — rétro-ingénierie / étude métier  ─────────────────────────  recette E2E (oracle) — MOA + MOE
 MOE  — spécifications (SDD)  ──────────────────────────────────┘
  Archi — architecture et choix de stack  ──────────────  tests d'intégration (TI) — Archi
   Dev 1 — découpage épics / features  ────────────  tests unitaires (TU) + revue — testeur
                      Dev 2 — réalisation feature par feature (dev)
```

- Chaque niveau **valide en remontée ce qu'il a produit en descente**.
- La pointe du V (Dev 2) tourne en boucle agile : une feature à la fois.
- **Écart au V classique** : validation MOE et recette MOA sont fusionnées en un seul niveau E2E rejoué contre l'oracle legacy. Les deux comparent l'app à l'attendu fonctionnel ; sans humain distinct de chaque côté, la distinction ne tient plus. À rouvrir si un V complet est exigé (§10).

### 3.2 Rôles, livrables et tests

| Niveau | Porté par | Descente : produit | Descente : tests écrits | Remontée : exécute / livre |
|---|---|---|---|---|
| **MOA** | Session principale + skill `retro-ingenierie` | Inventaire fonctionnel (écrans, parcours, rôles), captures, HAR | Scénarios de recette (`.feature`) | PV de recette E2E |
| **MOE** | Session principale + skill `specification` | Une spec par domaine fonctionnel | Critères d'acceptation (repris dans les fiches feature) | (fusionné avec la recette) |
| **Architecte** | Session principale + skill `architecture` | DAT : inventaire technique, architecture cible, choix de stack, stratégie TI | Stratégie de TI (section du DAT) | Rapport TI |
| **Dev 1** | Skill `decoupage-backlog` puis agent **testeur** | Backlog épics / features, fiches feature (STD incluse) | TU de chaque feature (avant le code) | Rapport TU + revue de code |
| **Dev 2** | Agent **dev** | Code de la feature, doc de la feature, ADR si décision | — | Feature qui passe ses TU |

- « Architecte » remplace le terme « BA » : en ESN, BA désigne le Business Analyst, un rôle fonctionnel.
- Il n'y a pas d'agent QA séparé : les tests sont répartis entre les niveaux du V.
- Les rapports de remontée (TU, TI, recette) suivent un template de PV unique.

### 3.3 Gates

- Une gate entre chaque phase, validée par l'humain.
- L'état des gates est tenu dans `etat-mission.md` (dépôt de mission).
- Un **hook** refuse le démarrage d'une phase si la gate précédente n'est pas validée. Le contrôle n'est pas recodé dans chaque commande.

---

## 4. Phase MOA : rétro-ingénierie

### 4.1 Exploration dynamique (Playwright MCP)

- Parcourir l'app legacy en fonctionnement :
  - lister les écrans, formulaires, parcours, rôles
  - prendre des captures d'écran de référence
  - capturer le trafic réseau (HAR), qui donne les contrats d'API et le modèle de données réellement utilisés
- Transformer les parcours observés en **scénarios Gherkin** (`.feature`).
- Ces scénarios sont **rejoués en recette contre la nouvelle app**. L'ancienne app sert d'oracle.

### 4.2 Analyse statique

- Routes, composants, schéma BDD et migrations, variables d'environnement, appels à des services externes.
- Nécessaire en complément de Playwright, qui ne voit ni les branches conditionnelles, ni les rôles inaccessibles, ni les cas limites.

### 4.3 Prérequis

- L'app legacy doit tourner, en local ou sur une URL, avec un backend accessible.
- **Toujours sur une copie de la base de données** : l'agent cliquera sur « supprimer ».
- La base doit pouvoir être réinitialisée en une commande, pour rejouer les scénarios de façon reproductible.

---

## 5. Boucle feature (réalisation agile)

- **Un contexte agent par feature**, lancé par `/feature F-XXX`.
- Entrée unique : la **fiche feature autosuffisante** (`docs/04-backlog/features/F-XXX.md`) :
  - extrait de spec
  - STD (section de la fiche, pas un document séparé)
  - critères d'acceptation
  - TU à faire passer
  - ADR applicables
  - critères de fin
- Si l'agent dev doit aller chercher de l'information ailleurs, la fiche est incomplète : on la corrige, on ne contourne pas.
- Déroulé :
  1. L'agent testeur écrit les TU à partir de la fiche
  2. L'agent dev implémente jusqu'à ce que les TU passent
  3. L'agent testeur fait la revue de code
  4. L'agent dev documente la feature et écrit un ADR si une décision a été prise

---

## 6. Journal de décision (ADR)

- Format standard ADR : un fichier par décision dans `docs/adr/`.
- Contenu : contexte, décision, alternatives écartées, conséquences.
- Tout agent qui prend une décision non triviale (choix de lib, écart à la spec, contournement) écrit un ADR.

---

## 7. Anomalies et boucle de retour

- Toute anomalie remontée en TU, TI ou recette est **qualifiée** avant d'être corrigée :

| Cause | Niveau de retour |
|---|---|
| Bug de réalisation | Dev 2 (agent dev) |
| Erreur de découpage / STD | Dev 1 (skill `decoupage-backlog`) |
| Erreur d'architecture | Architecte |
| Spec fausse ou incomplète | MOE |
| Besoin mal compris | MOA |

- Une fiche d'anomalie par cas dans `docs/anomalies/`.
- But : ne pas faire corriger du code par l'agent dev quand l'erreur est dans la spec.
- Au départ : un template de fiche et la commande `/anomalie`. Un skill dédié seulement si la qualification manuelle devient répétitive.

---

## 8. Structure des dépôts

### 8.1 Séparation outillage / mission

- **Dépôt d'outillage** (`refacto-ia-slop`) : agents, skills, commandes, hooks. Distribué comme plugin via une marketplace. Ne contient aucune app.
- **Dépôt de mission** : un par app legacy. Initialisé par `/init-mission`.
- Pendant la construction (incréments 1 à 7), l'outillage vit dans le `.claude/` du dépôt de mission. Il est extrait en plugin à l'incrément 8.

### 8.2 Dépôt d'outillage

```
refacto-ia-slop/
├── .claude-plugin/
│   └── marketplace.json          # catalogue des plugins du dépôt
├── plugins/
│   └── cycle-v/
│       ├── .claude-plugin/
│       │   └── plugin.json
│       ├── agents/               # uniquement là où un contexte isolé est nécessaire
│       │   ├── testeur.md            # TU + revue (Dev 1)
│       │   └── dev.md                # réalisation (Dev 2)
│       ├── skills/               # savoir-faire + templates de livrables
│       │   ├── retro-ingenierie/     # inventaire fonctionnel, .feature
│       │   ├── specification/        # spec par domaine, critères d'acceptation
│       │   ├── architecture/         # DAT (inventaire technique, choix de stack, stratégie TI)
│       │   ├── decoupage-backlog/    # épics, fiches feature avec STD
│       │   └── adr/
│       ├── templates/            # fiche anomalie, PV
│       ├── commands/
│       │   ├── init-mission.md
│       │   ├── phase.md              # /phase <moa|moe|archi|decoupage|remontee>
│       │   ├── feature.md            # une feature = un contexte
│       │   └── anomalie.md
│       ├── hooks/
│       │   └── hooks.json            # legacy/ en lecture seule, contrôle des gates
│       └── .mcp.json             # Playwright MCP
├── docs/
│   └── cadrage.md                # ce document
└── evals/                        # app de référence pour mesurer les agents
```

### 8.3 Dépôt de mission

```
mission-<nom>/
├── .claude/                      # outillage pendant la construction (avant packaging)
├── legacy/                       # app vibe codée, lecture seule (hook)
├── docs/
│   ├── 01-moa/                   # inventaire fonctionnel, scénarios .feature, captures, HAR
│   ├── 02-moe/                   # une spec par domaine fonctionnel
│   ├── 03-architecture/          # dat.md
│   ├── 04-backlog/
│   │   ├── epics/
│   │   └── features/             # F-001.md… fiches autosuffisantes
│   ├── adr/                      # journal de décision
│   ├── anomalies/                # fiches qualifiées
│   └── pv/                       # rapports TU, TI, recette
├── app/                          # nouvelle app (TU et TI vivent avec le code)
├── tests/recette/                # E2E rejoués contre legacy ET app
├── etat-mission.md               # phase en cours, statut des gates
└── CLAUDE.md                     # conventions de la mission, pointeurs vers docs/
```

### 8.4 Correspondance avec les concepts Claude Code

| Besoin | Concept |
|---|---|
| Isolation tests / code dans la boucle feature | Subagents (`agents/`) |
| Savoir-faire, templates de livrables | Skills (`skills/`) |
| Lancement des phases, features, anomalies | Slash commands (`commands/`) |
| Garde-fous (legacy en lecture seule, contrôle des gates, lint/tests après écriture) | Hooks (`hooks/`) |
| Exploration de l'app legacy | MCP Playwright (`.mcp.json`) |
| Distribution | Plugin + marketplace |

---

## 9. Plan de construction incrémental

- Chaque incrément livre quelque chose d'utilisable, testé sur l'app legacy cible avant de passer au suivant.
- Jusqu'à l'incrément 6, on travaille sur **un seul parcours** de l'app (ex. : connexion, ou CRUD d'une entité). On élargit à l'incrément 7.
- Les concepts Claude Code s'apprennent au fil des incréments, pas après.

| # | Objectif | Livrable | Concept appris | Critère de fin |
|---|---|---|---|---|
| 0 | Préparer la cible | Petite app legacy web avec backend, en local sur copie de BDD ; dépôt de mission créé à la main | — | L'app tourne et la BDD se réinitialise en une commande |
| 1 | Prouver l'oracle | Playwright MCP configuré ; un parcours exploré → un `.feature` → un test E2E (playwright-bdd ou cucumber) | MCP | Le scénario passe au vert contre le legacy, deux fois de suite |
| 2 | Protéger le legacy | Hook `PreToolUse` bloquant Edit/Write et les commandes Bash qui écrivent dans `legacy/` | Hook | Une tentative d'écriture dans `legacy/` est refusée |
| 3 | Rétro-ingénierie | Skill `retro-ingenierie` : exploration + analyse statique + template d'inventaire fonctionnel | Skill | Sur le parcours, le skill produit inventaire et `.feature` sans guidage |
| 4 | Spec + DAT | Skills `specification` et `architecture`, commande `/phase`, `etat-mission.md`, hook de gate | Slash command, hook de contrôle | Spec et DAT existent pour le parcours, stack tranchée à la gate |
| 5 | Une fiche feature | Skill `decoupage-backlog` produisant une seule fiche autosuffisante | Skill avec template | Relue, la fiche suffit pour savoir quoi coder |
| 6 | Boucle feature | Agents testeur et dev, commande `/feature` | Subagents | TU au vert, et le `.feature` de l'incrément 1 passe contre la nouvelle app |
| 7 | Élargir | Tous les parcours, plusieurs features, TI ; template d'anomalie et `/anomalie` dès la première anomalie | — | Recette E2E complète au vert contre legacy et nouvelle app |
| 8 | Packager | Extraction du `.claude/` vers le dépôt d'outillage, `/init-mission`, marketplace | Plugin, marketplace | Plugin installé dans une deuxième mission vide, fonctionnel |
| 9 | Évaluer | Pipeline rejoué sur l'app de l'incrément 0, figée comme référence dans `evals/` | — | Une modification d'agent peut être comparée à la précédente |

- L'incrément 1 vient en premier : s'il échoue, l'approche par oracle est à revoir avant d'investir dans le reste.
- Le packaging (8) vient tard pour ne pas déboguer le plugin en même temps que les prompts. Coût : déplacer les chemins une fois.

---

## 10. Points ouverts

- **Périmètre des types d'app** : tranché, **web d'abord**. Mobile, desktop et CLI sont hors périmètre ; pour eux, la rétro-ingénierie reposerait sur la seule analyse statique et la recette contre l'oracle ne serait plus automatisable telle quelle.
- **Fusion validation / recette** (§3.1) : à confirmer si l'école ou l'ESN attend un V complet. Sinon, rétablir un niveau de validation MOE distinct.
- **Évaluation des agents** : le V vérifie qu'une app livrée est conforme. Pour savoir si une modification d'agent améliore ou dégrade le résultat, il faut rejouer le pipeline sur une même app de référence (`evals/`). Modalités à définir à l'incrément 9.
- **Templates de livrables** : à définir incrément par incrément. Partir des templates existants (BMAD Method : PRD, architecture, stories shardées ; GitHub Spec Kit) et les adapter, plutôt que de les écrire de zéro.
- **Nom du plugin** : `cycle-v` provisoire.
