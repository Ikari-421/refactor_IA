---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: brochettes-de-veau
title: Brochettes de veau
lang: fr
description: "Brochettes de veau : recette française avec dés de veau marinés, poivron et oignon, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- veau
- grillade
- été
image:
  url:
  alt: Brochettes de veau
  credit:
source_fiche: ""
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
diet_toggles:
- vegetarien
- vegan
- pesco
allergen_toggles:
- sans_gluten
- sans_lactose
- sans_produits_laitiers
- sans_oeufs
- sans_fruits_a_coque
- sans_celeri
- sans_moutarde
- sans_mollusques
- sans_crustaces
- sans_poisson
- sans_lupin
- sans_soja
- sans_arachides
- sans_sesame
- sans_sulfites
constraint_layers:
  sans_gluten:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans gluten.
  sans_lactose:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lactose.
  sans_produits_laitiers:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans produits laitiers.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œufs.
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans fruits à coque.
  sans_celeri:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri listé. Vérifier un bouillon du commerce.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
  sans_poisson:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans poisson.
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi.
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: 
house_options: []
histoire: "La brochette, viande ou poisson piqué sur une tige, se retrouve autour de la Méditerranée. Ici, veau en dés, marinade huile-citron-herbes, légumes intercalés, grill ou poêle."
fun_facts:
- text: "Le mot vient de la broche : une tige pour tenir la viande au feu."
  source_name: "Wikipedia FR, Brochette"
  source_url: "https://fr.wikipedia.org/wiki/Brochette"
- text: Mariner le veau à l’avance attendrit et parfume sans masquer la viande.
  source_name: "Wikipedia FR, Brochette"
  source_url: "https://fr.wikipedia.org/wiki/Brochette"
- text: "Le veau se cuit rose ; trop longtemps, il sèche sur la broche."
  source_name: "Wikipedia FR, Veau"
  source_url: "https://fr.wikipedia.org/wiki/Veau"
wines:
- name: Bourgogne Pinot Noir
  producer: Joseph Drouhin
  origin: "Beaune, Bourgogne"
  grapes: Pinot noir
  award: 
  why: "Fruit rouge, tanin fin, tient le veau sans l’écraser."
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, poivre, marinade aux herbes."
- name: Chianti Classico
  producer: Fontodi
  origin: "Panzano, Toscane"
  grapes: Sangiovese
  award: 
  why: Acidité vive sur le poivron grillé.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens: []
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 10
      rest_min: 30
      total_min: 60
    equipment:
    - brochettes
    - grill ou poêle
    substitutions:
    - from: veau
      to: dinde
      note: Cuisson un peu plus longue.
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: veau à brochettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivrons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: ail
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: thym
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Mélangez les dés de veau avec l’huile d’olive, le jus de citron, l’ail, le thym, le sel et le poivre. Réservez 30 min au frais."
    - "Montage. Alternez veau, poivron et oignon sur les brochettes."
    - "Cuisson. Faites cuire au grill ou à la poêle vive 8 à 10 min, en tournant. Le veau reste rosé."
    - "Finition. Laissez reposer 3 min, puis rectifiez de sel et d’un filet d’huile d’olive."
    steps_niveaux:
      amateur:
      - "Marinade. Mélangez les dés de veau avec l’huile d’olive, le jus de citron, l’ail, le thym, le sel et le poivre. Réservez 30 min au frais."
      - "Montage. Alternez veau, poivron et oignon sur les brochettes."
      - "Cuisson. Faites cuire au grill ou à la poêle vive 8 à 10 min, en tournant. Le veau reste rosé."
      - "Finition. Laissez reposer 3 min, puis rectifiez de sel et d’un filet d’huile d’olive."
      pro:
      - "Mélanger les dés de veau avec l’huile d’olive, le jus de citron, l’ail, le thym, le sel et le poivre. Réserver 30 min au frais."
      - "Alterner veau, poivron et oignon sur les brochettes."
      - "Cuire au grill ou à la poêle vive 8 à 10 min, en tournant. Le veau reste rosé."
      - "Laisser reposer 3 min. Rectifier de sel et d’un filet d’huile d’olive."
      cavernes:
      - "Marinade. Dés veau, huile d’olive, jus de citron, ail, thym, sel, poivre, mélanger. Réserver 30 min frais."
      - "Montage. Veau, poivron, oignon, alterner brochettes."
      - "Cuisson. Grill ou poêle vive 8 à 10 min, tourner. Veau reste rosé."
      - "Finition. Reposer 3 min. Sel, filet huile d’olive, rectifier."
    kcal_per_serving: 420
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 8
      rest_min: 10
      total_min: 33
    equipment:
    - brochettes
    - grill
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: halloumi
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivrons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: courgettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: thym
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Mélangez le halloumi et les légumes avec l’huile d’olive, le jus de citron et le thym."
    - "Montage. Alternez le halloumi et les légumes sur les brochettes."
    - "Cuisson. Faites cuire au grill 6 à 8 min, jusqu’à ce que le halloumi soit bien marqué."
    steps_niveaux:
      amateur:
      - "Marinade. Mélangez le halloumi et les légumes avec l’huile d’olive, le jus de citron et le thym."
      - "Montage. Alternez le halloumi et les légumes sur les brochettes."
      - "Cuisson. Faites cuire au grill 6 à 8 min, jusqu’à ce que le halloumi soit bien marqué."
      pro:
      - "Mélanger le halloumi et les légumes avec l’huile d’olive, le jus de citron et le thym."
      - "Alterner le halloumi et les légumes sur les brochettes."
      - "Cuire au grill 6 à 8 min, jusqu’à ce que le halloumi soit bien marqué."
      cavernes:
      - "Marinade. Halloumi, légumes, huile d’olive, jus de citron, thym, mélanger."
      - "Montage. Halloumi, légumes, alterner brochettes."
      - "Cuisson. Grill 6 à 8 min. Halloumi bien marqué."
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 8
      rest_min: 20
      total_min: 48
    equipment:
    - brochettes
    - grill
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivrons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: courgettes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: tamari sans gluten
      group: 
      scale: true
      optional: true
      to_taste: false
    - qty: 1
      unit: cac
      item: thym
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Mélangez le tofu ferme pressé avec l’huile d’olive, le jus de citron, le tamari sans gluten et le thym. Laissez mariner 20 min."
    - "Montage. Alternez le tofu et les légumes sur les brochettes."
    - "Cuisson. Faites cuire au grill 8 min, jusqu’à ce que le tofu soit bien marqué."
    steps_niveaux:
      amateur:
      - "Marinade. Mélangez le tofu ferme pressé avec l’huile d’olive, le jus de citron, le tamari sans gluten et le thym. [[mariner|Laissez mariner]] 20 min."
      - "Montage. Alternez le tofu et les légumes sur les brochettes."
      - "Cuisson. Faites cuire au grill 8 min, jusqu’à ce que le tofu soit bien marqué."
      pro:
      - "Mélanger le tofu ferme pressé avec l’huile d’olive, le jus de citron, le tamari sans gluten et le thym. Laisser mariner 20 min."
      - "Alterner le tofu et les légumes sur les brochettes."
      - "Cuire au grill 8 min, jusqu’à ce que le tofu soit bien marqué."
      cavernes:
      - "Marinade. Tofu ferme pressé, huile d’olive, jus de citron, tamari sans gluten, thym, mélanger. Mariner 20 min."
      - "Montage. Tofu, légumes, alterner brochettes."
      - "Cuisson. Grill 8 min. Tofu bien marqué."
    kcal_per_serving: 310
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 8
      rest_min: 15
      total_min: 38
    equipment:
    - brochettes
    - grill
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: cabillaud
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poivrons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: ml
      item: "huile d'olive"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: jus de citron
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: thym
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Marinade. Mélangez les dés de cabillaud avec l’huile d’olive, le jus de citron et le thym. Laissez mariner 15 min."
    - "Montage. Alternez le poisson et les légumes sur les brochettes."
    - "Cuisson. Faites cuire au grill doux 6 à 8 min : le poisson reste nacré."
    steps_niveaux:
      amateur:
      - "Marinade. Mélangez les dés de cabillaud avec l’huile d’olive, le jus de citron et le thym. [[mariner|Laissez mariner]] 15 min."
      - "Montage. Alternez le poisson et les légumes sur les brochettes."
      - "Cuisson. Faites cuire au grill doux 6 à 8 min : le poisson reste nacré."
      pro:
      - "Mélanger les dés de cabillaud avec l’huile d’olive, le jus de citron et le thym. Laisser mariner 15 min."
      - "Alterner le poisson et les légumes sur les brochettes."
      - "Cuire au grill doux 6 à 8 min : le poisson reste nacré."
      cavernes:
      - "Marinade. Dés cabillaud, huile d’olive, jus de citron, thym, mélanger. Mariner 15 min."
      - "Montage. Poisson, légumes, alterner brochettes."
      - "Cuisson. Grill doux 6 à 8 min. Poisson reste nacré."
    kcal_per_serving: 340
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  pesco:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
  vegan:
    mariner:
      terme: "mariner"
      explication: "Vous mettez l’aliment dans l’assaisonnement liquide. Vous mélangez pour tout recouvrir, puis vous attendez, souvent au frais. C’est réussi quand l’aliment a pris le goût de la marinade, sur toute la surface."
      ref: Cuisine/Lexique/mariner.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Viande marinée et grillée : 24 à 48 h au frigo."

---

# Brochettes de veau

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 600 g veau à brochettes
- 2 piece poivrons
- 2 piece oignons
- 40 ml huile d'olive
- 20 ml jus de citron
- 1 gousse ail
- 1 cac thym
- sel (au goût)
- poivre (au goût)

## Préparation

1. Marinade. Mélangez les dés de veau avec l’huile d’olive, le jus de citron, l’ail, le thym, le sel et le poivre. Réservez 30 min au frais.
2. Montage. Alternez veau, poivron et oignon sur les brochettes.
3. Cuisson. Faites cuire au grill ou à la poêle vive 8 à 10 min, en tournant. Le veau reste rosé.
4. Finition. Laissez reposer 3 min, puis rectifiez de sel et d’un filet d’huile d’olive.
