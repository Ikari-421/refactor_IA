---
schema: recette-web-jigme/v2
slug: galettes-de-confinement
title: Galettes de confinement
lang: fr
description: "Galettes de confinement : recette française avec farine tout usage, du sel et les épices de votre choix, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- végane
- plat
- farine tout usage
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/galettes-de-confinement.jpg
  alt: Galettes de confinement
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/galettes-de-confinement.md
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
    clears:
    - gluten
    swaps:
    - from: farine
      to: mix farine sans gluten + psyllium
      note: Liant.
    - from: pain
      to: pain sans gluten
      note:
    - from: pâte
      to: pâte sans gluten
      note: Texture différente.
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    note: Déjà sans lait.
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œuf.
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
    note: Déjà sans céleri.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans moutarde.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans mollusques.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans crustacés.
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
    note: Déjà sans lupin.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans arachide.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans sésame.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: 'Galettes de farine, d’eau, de sel et d’épices, cuites à la poêle. Galette désigne en français
  un gâteau plat ou une crêpe de sarrasin. Ici, une improvisation de confinement (peu d’ingrédients),
  pas un plat historique nommé.

  '
fun_facts:
- text: "Sans levure ni œuf, la pâte reste un pain plat ; le repos et le pétrissage font le collant."
  source_name: Usage
  source_url:
- text: "Le mot galette vient de l’idée de « gâteau plat » (ancien norrois / normand), pas du confinement."
  source_name: Wikipedia, Galette
  source_url: https://en.wikipedia.org/wiki/Galette
wines:
- name: Côtes du Rhône
  producer: Domaine Fond Croze
  origin: Tulette, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, herbes — la galette épicée, un rouge simple.
- name: Beaujolais
  producer: Jean-Marc Burgaud
  origin: Lantignié, Beaujolais
  grapes: gamay
  award:
  why: Cerise, peu de bois — pain plat et cumin, tanin léger.
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Maisdon-sur-Sèvre, Muscadet
  grapes: melon de Bourgogne
  award:
  why: Citron — si les épices restent douces, un blanc maigre.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: &id001
    - gluten
    difficulty: 2
    time: &id002
      prep_min: 30
      cook_min: 10
      rest_min: 60
      total_min: 100
    equipment: &id003
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: farine tout usage
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: les épices de votre choix
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un saladier, versez la farine puis l’eau. Salez et ajoutez les épices de votre
      choix (ici du piment en poudre et du cumin en poudre).
    - Mélange. Mélangez le tout avec une spatule, puis travaillez l’appareil à la main pendant 5 à
      10 minutes. Laissez reposer la pâte dans du cellophane ou dans un tupperware pendant
      au moins 1 heure.
    - Finition. Farinez votre plan de travail et coupez des petits morceaux de pâtes que vous allez
      étaler finement. Déposez les disques de pâte dans une poêle très chaude sans ajout de
      matière grasse. Dès que des bulles apparaissent, laissez-les lever puis retournez pour
      cuire la deuxième face. Comptez 15 à 30 secondes de cuisson par galette. Conservez les
      galettes dans une boite ou dans un torchon pour les garder au chaud et conserver l’humidité.
      Vous pouvez maintenant déguster !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un saladier, versez la farine puis l’eau. Salez et ajoutez les épices de votre choix (ici du piment en poudre et du cumin en poudre)."
      - "Mélange. Mélangez le tout avec une spatule, puis travaillez l’appareil à la main pendant 5 à 10 minutes. Laissez reposer la pâte dans du cellophane ou dans un tupperware pendant au moins 1 heure."
      - "Finition. Farinez votre plan de travail et coupez des petits morceaux de pâte que vous allez étaler finement. Déposez les disques de pâte dans une poêle très chaude sans ajout de matière grasse. Dès que des bulles apparaissent, laissez-les lever puis retournez pour cuire la deuxième face. Comptez 15 à 30 secondes de cuisson par galette. Conservez les galettes dans une boite ou dans un torchon pour les garder au chaud et conserver l’humidité."
      pro:
      - "Verser farine puis eau dans un saladier. Saler. Ajouter les épices (piment en poudre, cumin en poudre)."
      - "Mélanger à la spatule. Travailler à la main 5 à 10 minutes. Reposer sous cellophane ou en tupperware au moins 1 heure."
      - "Fariner le plan de travail. Couper de petits morceaux de pâte, étaler finement. Poêle très chaude, sans matière grasse. Dès les bulles, laisser lever, retourner. 15 à 30 secondes par galette. Conserver en boite ou torchon, au chaud, à l’humidité."
      cavernes:
      - "Préparation. Saladier, farine, eau, verser. Sel, épices (piment poudre, cumin poudre), ajouter."
      - "Mélange. Spatule, mélanger. Appareil, main, 5 à 10 min. Pâte, cellophane ou tupperware, reposer minimum 1 heure."
      - "Finition. Plan de travail, fariner. Petits morceaux pâte, couper, étaler finement. Disques pâte, poêle très chaude, zéro matière grasse. Bulles, lever. Deuxième face, retourner. 15 à 30 secondes par galette. Boite ou torchon, chaud, humidité."
    kcal_per_serving: 306
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 306
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - gluten
    difficulty: 2
    time:
      prep_min: 30
      cook_min: 10
      rest_min: 60
      total_min: 100
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: farine tout usage
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 180
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du sel
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: les épices de votre choix
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Dans un saladier, versez la farine puis l’eau. Salez et ajoutez les épices de votre
      choix (ici du piment en poudre et du cumin en poudre).
    - Mélange. Mélangez le tout avec une spatule, puis travaillez l’appareil à la main pendant 5 à
      10 minutes. Laissez reposer la pâte dans du cellophane ou dans un tupperware pendant
      au moins 1 heure.
    - Finition. Farinez votre plan de travail et coupez des petits morceaux de pâtes que vous allez
      étaler finement. Déposez les disques de pâte dans une poêle très chaude sans ajout de
      matière grasse. Dès que des bulles apparaissent, laissez-les lever puis retournez pour
      cuire la deuxième face. Comptez 15 à 30 secondes de cuisson par galette. Conservez les
      galettes dans une boite ou dans un torchon pour les garder au chaud et conserver l’humidité.
      Vous pouvez maintenant déguster !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un saladier, versez la farine puis l’eau. Salez et ajoutez les épices de votre choix (ici du piment en poudre et du cumin en poudre)."
      - "Mélange. Mélangez le tout avec une spatule, puis travaillez l’appareil à la main pendant 5 à 10 minutes. Laissez reposer la pâte dans du cellophane ou dans un tupperware pendant au moins 1 heure."
      - "Finition. Farinez votre plan de travail et coupez des petits morceaux de pâte que vous allez étaler finement. Déposez les disques de pâte dans une poêle très chaude sans ajout de matière grasse. Dès que des bulles apparaissent, laissez-les lever puis retournez pour cuire la deuxième face. Comptez 15 à 30 secondes de cuisson par galette. Conservez les galettes dans une boite ou dans un torchon pour les garder au chaud et conserver l’humidité."
      pro:
      - "Verser farine puis eau dans un saladier. Saler. Ajouter les épices (piment en poudre, cumin en poudre)."
      - "Mélanger à la spatule. Travailler à la main 5 à 10 minutes. Reposer sous cellophane ou en tupperware au moins 1 heure."
      - "Fariner le plan de travail. Couper de petits morceaux de pâte, étaler finement. Poêle très chaude, sans matière grasse. Dès les bulles, laisser lever, retourner. 15 à 30 secondes par galette. Conserver en boite ou torchon, au chaud, à l’humidité."
      cavernes:
      - "Préparation. Saladier, farine, eau, verser. Sel, épices (piment poudre, cumin poudre), ajouter."
      - "Mélange. Spatule, mélanger. Appareil, main, 5 à 10 min. Pâte, cellophane ou tupperware, reposer minimum 1 heure."
      - "Finition. Plan de travail, fariner. Petits morceaux pâte, couper, étaler finement. Disques pâte, poêle très chaude, zéro matière grasse. Bulles, lever. Deuxième face, retourner. 15 à 30 secondes par galette. Boite ou torchon, chaud, humidité."
    kcal_per_serving: 306
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 306
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Galettes de confinement
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/galettes-de-confinement]]

## Ingrédients (4 personnes)

- 350 g de farine tout usage
- 180 g d'eau
-  du sel
-  les épices de votre choix

## Préparation

1. Dans un saladier, versez la farine puis l’eau. Salez et ajoutez les épices de votre choix (ici du piment en poudre et du cumin en poudre).
2. Mélangez le tout avec une spatule, puis travaillez l’appareil à la main pendant 5 à 10 minutes. Laissez reposer la pâte dans du cellophane ou dans un tupperware pendant au moins 1 heure.
3. Farinez votre plan de travail et coupez des petits morceaux de pâtes que vous allez étaler finement. Déposez les disques de pâte dans une poêle très chaude sans ajout de matière grasse. Dès que des bulles apparaissent, laissez-les lever puis retournez pour cuire la deuxième face. Comptez 15 à 30 secondes de cuisson par galette.

 
 

 
 Conservez les galettes dans une boite ou dans un torchon pour les garder au chaud et conserver l’humidité. Vous pouvez maintenant déguster !
