# Schéma `recette-web-jigme/v2` — champs optionnels ajoutés (octobre 2026)

Aucune documentation complète du schéma v2 n'existait dans ce dépôt : ce fichier ne décrit que les ajouts.
Les fiches source restent sur le NAS (`Cuisine/Recettes/Web`), en lecture seule pour le site.

## `conservation` (optionnel, au niveau racine de la fiche)

```yaml
conservation:
  frigo:
    duree: 3 jours              # texte libre
    contenant: Boîte hermétique
    note: …
  congelation:
    possible: true              # false → « Ne se congèle pas. »
    duree: 3 mois
    decongelation: Une nuit au réfrigérateur
    note: …
  temperature_ambiante:
    duree: 2 h
    note: …
  rechauffage: À feu doux…      # texte (ou liste de textes)
  restes: [ "…", "…" ]          # idées pour les restes
  anti_gaspi: [ "…" ]
  a_verifier: …                 # lu mais jamais affiché (note de relecture)
```

Rendu : encadré « Conservation et anti-gaspi » dans l'onglet Extra. Chaque sous-partie vide est masquée ;
l'encadré entier est masqué si tout est vide ou si le champ est absent.

## Minuteurs dans les étapes (optionnel)

Par défaut, les durées sont détectées dans le texte (« 12 min », « 1 h 30 », « 45 secondes »,
« 10 à 12 min » → 12 min avec choix « ou 10 min » ; durées < 5 s ignorées). Une étape peut aussi être un objet :

```yaml
steps:
  - text: Laisser reposer la pâte.
    minuteur: 1800        # secondes, ou texte « 30 min », ou liste ; alias : timer, timer_s, timer_min
```

Le champ explicite remplace la détection pour cette étape.
