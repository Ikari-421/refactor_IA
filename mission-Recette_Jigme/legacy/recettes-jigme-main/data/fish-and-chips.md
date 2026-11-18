---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
slug: fish-and-chips
title: Fish and chips
lang: fr
description: "Fish and chips : poisson pané, frites, pour 4. Classique britannique. Recette pour 4 personnes, versions maison, doses et geste simples."
cuisine: britannique
category: salé
tags:
- salé
- poisson
- friture
- Royaume-Uni
image:
  url:
  alt: Fish and chips
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri dans cette fiche.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
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
histoire: "Le fish and chips, plat national britannique du XIXe siècle, unit un poisson en pâte (souvent cabillaud ou églefin) et des frites épaisses. Vinaigre de malt, sel. Friture 180 °C. Servir aussitôt."
fun_facts:
- text: Les first shops londoniens datent des années 1860 ; le plat est un emblème ouvrier.
  source_name: "Wikipedia FR, Fish and chips"
  source_url: "https://fr.wikipedia.org/wiki/Fish_and_chips"
- text: La pâte à la bière (beer batter) gonfle et isole le poisson.
  source_name: "Wikipedia EN, Fish and chips"
  source_url: "https://en.wikipedia.org/wiki/Fish_and_chips"
- text: "Un filet sans arêtes, séché, pané au dernier moment."
  source_name: "Wikipedia FR, Cabillaud"
  source_url: "https://fr.wikipedia.org/wiki/Cabillaud"
wines:
- name: Muscadet Sèvre-et-Maine
  producer: "Domaine de l'Ecu"
  origin: "Muscadet, Loire"
  grapes: Melon de Bourgogne
  award: 
  why: "Iode, fruits de mer, friture légère."
- name: Picpoul de Pinet
  producer: Ormarine
  origin: "Thau, Languedoc"
  grapes: Piquepoul
  award: 
  why: "Citron, entrée froide, huile d’olive."
- name: Cidre bouché brut
  producer: Eric Bordelet
  origin: Normandie
  grapes: Pommes à cidre
  award: 
  why: "Pomme, crumble, tarte, chausson."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - poisson
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 30
      rest_min: 0
      total_min: 50
    equipment:
    - friteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: filets de cabillaud
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: bière blonde
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: huile de friture
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Frites. Coupez les pommes de terre en frites, puis faites-les frire dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
    - "Pâte. Préparez une pâte avec la farine et la bière blonde, puis enrobez-en les filets de cabillaud."
    - "Friture. Faites frire 4 min à 180 °C, salez, puis servez avec le citron."
    steps_niveaux:
      amateur:
      - "Frites. Coupez les pommes de terre en frites, puis [[frire|faites-les frire]] dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
      - "Pâte. Préparez une pâte avec la farine et la bière blonde, puis enrobez-en les filets de cabillaud."
      - "Friture. [[frire|Faites frire]] 4 min à 180 °C, salez, puis servez avec le citron."
      pro:
      - "Frites. Couper les pommes de terre en frites, puis frire dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
      - "Pâte. Préparer une pâte avec la farine et la bière blonde, puis enrober les filets de cabillaud."
      - "Friture. Frire 4 min à 180 °C, saler, puis servir avec le citron."
      cavernes:
      - "Frites. Pommes terre, couper frites. Premier bain 150 °C, frire. Second bain 180 °C, frire."
      - "Pâte. Farine, bière blonde, pâte. Filets cabillaud, enrober."
      - "Friture. Frire 4 min 180 °C. Saler. Citron, servir."
    kcal_per_serving: 720
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
    - gluten
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 30
      rest_min: 0
      total_min: 50
    equipment:
    - friteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: halloumi
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: bière blonde
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: huile de friture
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Frites. Coupez les pommes de terre en frites, puis faites-les frire dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
    - "Halloumi. Enrobez le halloumi de pâte à la bière blonde, puis faites-le frire 2 min."
    - "Sel. Poursuivez la friture 4 min à 180 °C, puis salez."
    steps_niveaux:
      amateur:
      - "Frites. Coupez les pommes de terre en frites, puis [[frire|faites-les frire]] dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
      - "Halloumi. Enrobez le halloumi de pâte à la bière blonde, puis faites-le [[frire|frire]] 2 min."
      - "Sel. Poursuivez la friture 4 min à 180 °C, puis salez."
      pro:
      - "Frites. Couper les pommes de terre en frites, puis frire dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
      - "Halloumi. Enrober le halloumi de pâte à la bière blonde, puis frire 2 min."
      - "Sel. Poursuivre la friture 4 min à 180 °C, puis saler."
      cavernes:
      - "Frites. Pommes terre, couper frites. Premier bain 150 °C, frire. Second bain 180 °C, frire."
      - "Halloumi. Halloumi, pâte bière blonde, enrober. Frire 2 min."
      - "Sel. Friture, poursuivre 4 min 180 °C. Saler."
    kcal_per_serving: 680
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
    allergens:
    - gluten
    - soja
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 30
      rest_min: 0
      total_min: 50
    equipment:
    - friteuse
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: tofu ferme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 800
      unit: g
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: bière blonde
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: huile de friture
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Frites. Coupez les pommes de terre en frites, puis faites-les frire dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
    - "Tofu. Enrobez le tofu ferme de pâte, puis faites-le frire 3 min."
    - "Sel. Poursuivez la friture 4 min à 180 °C, puis salez."
    steps_niveaux:
      amateur:
      - "Frites. Coupez les pommes de terre en frites, puis [[frire|faites-les frire]] dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
      - "Tofu. Enrobez le tofu ferme de pâte, puis faites-le [[frire|frire]] 3 min."
      - "Sel. Poursuivez la friture 4 min à 180 °C, puis salez."
      pro:
      - "Frites. Couper les pommes de terre en frites, puis frire dans un premier bain à 150 °C, puis dans un second bain à 180 °C."
      - "Tofu. Enrober le tofu ferme de pâte, puis frire 3 min."
      - "Sel. Poursuivre la friture 4 min à 180 °C, puis saler."
      cavernes:
      - "Frites. Pommes terre, couper frites. Premier bain 150 °C, frire. Second bain 180 °C, frire."
      - "Tofu. Tofu ferme, pâte, enrober. Frire 3 min."
      - "Sel. Friture, poursuivre 4 min 180 °C. Saler."
    kcal_per_serving: 640
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - poisson
    difficulty: 
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 720
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegan:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegetarienne:
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: Le froid ramollit.}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: 24 h, note: "Boîte sèche, à croquer le jour même."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Fish and chips

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 600 g filets de cabillaud
- 800 g pommes de terre
- 150 g farine
- 200 ml bière blonde
- 1000 ml huile de friture
- 1 piece citron

## Préparation

1. Frites. Coupez les pommes de terre en frites, puis faites-les frire dans un premier bain à 150 °C, puis dans un second bain à 180 °C.
2. Pâte. Préparez une pâte avec la farine et la bière blonde, puis enrobez-en les filets de cabillaud.
3. Friture. Faites frire 4 min à 180 °C, salez, puis servez avec le citron.
