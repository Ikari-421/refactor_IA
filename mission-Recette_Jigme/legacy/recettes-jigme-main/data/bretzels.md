---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: bretzels
title: Bretzels
lang: fr
description: "Bretzels : recette alsacienne de pain en nœud, bain d’eau et bicarbonate, pour 4 personnes. Facile à suivre à la maison."
cuisine: alsacienne
category: salé
tags:
- salé
- pain
- Alsace
- levure
image:
  url:
  alt: Bretzels
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
    swaps:
    - from: farine de blé
      to: mix pain sans gluten
      note: Hydratation à ajuster.
    note: "Farine de blé : mix pain sans gluten, texture différente."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps:
    - from: œuf
      to: lait
      note: Dorure sans œuf.
    note: "Dorure lait ou eau, pas d’œuf."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Sel en grains seulement, pas de graines de sésame."
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: 
house_options: []
histoire: "Le bretzel est un pain en nœud, lié à l’Alsace et au monde germanique. La croûte brune vient d’un bain alcalin avant four. Sel en grains sur la croûte encore humide."
fun_facts:
- text: La forme en nœud est ancienne ; on la trouve déjà au Moyen Âge dans le monde germanique.
  source_name: "Wikipedia FR, Bretzel"
  source_url: "https://fr.wikipedia.org/wiki/Bretzel"
- text: Le bain d’eau chaude au bicarbonate (ou à la lessive de soude en boulangerie) donne la croûte.
  source_name: "Wikipedia FR, Bretzel"
  source_url: "https://fr.wikipedia.org/wiki/Bretzel"
- text: "En Alsace, le bretzel se mange nature, au beurre ou avec de la bière."
  source_name: "Wikipedia FR, Bretzel"
  source_url: "https://fr.wikipedia.org/wiki/Bretzel"
wines:
- name: Riesling Alsace
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Riesling
  award: 
  why: "Sec, agrumes, sel de la croûte."
- name: Pinot Blanc
  producer: Trimbach
  origin: "Ribeauvillé, Alsace"
  grapes: Pinot blanc
  award: 
  why: "Souple, pain et beurre, sans sucrer."
- name: Sylvaner
  producer: Ostertag
  origin: "Epfig, Alsace"
  grapes: Sylvaner
  award: 
  why: "Léger, floral, accord goûter alsacien."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 3
    time:
      prep_min: 30
      cook_min: 20
      rest_min: 90
      total_min: 140
    equipment:
    - robot pâtissier
    - casserole
    - plaque
    - four
    substitutions:
    - from: levure sèche
      to: 20 g levure fraîche
      note: Même pâte.
    scale_note: La levure ne se multiplie pas linéairement au-delà de 8 pièces.
    ingredients:
    - qty: 500
      unit: g
      item: farine de blé T65
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: eau tiède
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sel
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: levure de boulanger sèche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: bicarbonate de soude alimentaire
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group: 
      scale: false
      optional: true
      to_taste: false
    - qty: 10
      unit: g
      item: gros sel
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Pâte. Mélangez la farine de blé T65, le sel, la levure, l’eau tiède et le beurre doux. Pétrissez 10 min, puis laissez lever 1 h."
    - "Façonnage. Divisez la pâte en 8, roulez des boudins et formez le nœud."
    - "Bain. Plongez chaque pièce 20 s dans l’eau frémissante additionnée de bicarbonate de soude alimentaire."
    - "Dorure. Dorez au besoin avec l’œuf battu, parsemez de gros sel, puis enfournez 18 à 20 min à 210 °C."
    - "Finition. Laissez refroidir sur une grille."
    steps_niveaux:
      amateur:
      - "Pâte. Mélangez la farine de blé T65, le sel, la levure, l’eau tiède et le beurre doux. Pétrissez 10 min, puis laissez lever 1 h."
      - "Façonnage. Divisez la pâte en 8, roulez des boudins et formez le nœud."
      - "Bain. Plongez chaque pièce 20 s dans l’eau frémissante additionnée de bicarbonate de soude alimentaire."
      - "Dorure. Dorez au besoin avec l’œuf battu, parsemez de gros sel, puis enfournez 18 à 20 min à 210 °C."
      - "Finition. Laissez refroidir sur une grille."
      pro:
      - "Mélanger farine de blé T65, sel, levure, eau tiède et beurre doux. Pétrir 10 min. Laisser lever 1 h."
      - "Diviser la pâte en 8. Rouler des boudins. Former le nœud."
      - "Plonger chaque pièce 20 s dans l’eau frémissante additionnée de bicarbonate de soude alimentaire."
      - "Dorer au besoin avec l’œuf battu. Parsemer de gros sel. Four 210 °C, 18 à 20 min."
      - "Laisser refroidir sur une grille."
      cavernes:
      - "Pâte. Farine de blé T65, sel, levure, eau tiède, beurre doux, mélanger. Pétrir 10 min. Lever 1 h."
      - "Façonnage. Pâte : diviser 8. Boudins, nœud."
      - "Bain. Chaque pièce 20 s, eau frémissante, bicarbonate de soude alimentaire."
      - "Dorure. Œuf battu, dorer si besoin. Gros sel, parsemer. Four 210 °C 18 à 20 min."
      - "Finition. Grille, refroidir."
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 3
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
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
    - gluten
    difficulty: 3
    time:
      prep_min: 30
      cook_min: 20
      rest_min: 90
      total_min: 140
    equipment:
    - robot pâtissier
    - casserole
    - plaque
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 500
      unit: g
      item: farine de blé T65
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: ml
      item: eau tiède
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: sel
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 8
      unit: g
      item: levure de boulanger sèche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: margarine végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: bicarbonate de soude alimentaire
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: gros sel
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Pâte. Mélangez la farine de blé T65, le sel, la levure, l’eau tiède et la margarine végétale. Pétrissez 10 min, puis laissez lever 1 h."
    - "Façonnage. Roulez des boudins et formez les nœuds."
    - "Bain. Plongez chaque pièce 20 s dans l’eau additionnée de bicarbonate de soude alimentaire."
    - "Cuisson. Badigeonnez d’eau pour dorer, parsemez de gros sel, puis enfournez 18 à 20 min à 210 °C."
    steps_niveaux:
      amateur:
      - "Pâte. Mélangez la farine de blé T65, le sel, la levure, l’eau tiède et la margarine végétale. Pétrissez 10 min, puis laissez lever 1 h."
      - "Façonnage. Roulez des boudins et formez les nœuds."
      - "Bain. Plongez chaque pièce 20 s dans l’eau additionnée de bicarbonate de soude alimentaire."
      - "Cuisson. Badigeonnez d’eau pour dorer, parsemez de gros sel, puis enfournez 18 à 20 min à 210 °C."
      pro:
      - "Mélanger farine de blé T65, sel, levure, eau tiède et margarine végétale. Pétrir 10 min. Laisser lever 1 h."
      - "Rouler des boudins. Former les nœuds."
      - "Plonger chaque pièce 20 s dans l’eau additionnée de bicarbonate de soude alimentaire."
      - "Badigeonner d’eau pour dorer. Parsemer de gros sel. Four 210 °C, 18 à 20 min."
      cavernes:
      - "Pâte. Farine de blé T65, sel, levure, eau tiède, margarine végétale, mélanger. Pétrir 10 min. Lever 1 h."
      - "Façonnage. Boudins, nœuds."
      - "Bain. Chaque pièce 20 s, eau, bicarbonate de soude alimentaire."
      - "Cuisson. Eau, badigeonner dorer. Gros sel, parsemer. Four 210 °C 18 à 20 min."
    kcal_per_serving: 370
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 3
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: Le froid dessèche le pain.}
  congelation: {possible: true, duree: 1 mois, decongelation: ambiant puis 5 min au four, note: ""}
  temperature_ambiante: {duree: 2 jours, note: Sachet papier.}
  rechauffage: Quelques minutes au four 160 °C.
  restes: []
  anti_gaspi:
  - Pain perdu ou croûtons le lendemain.
  a_verifier: false
  note_verif: ""

---

# Bretzels

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 500 g farine de blé T65
- 300 ml eau tiède
- 10 g sel
- 8 g levure de boulanger sèche
- 20 g beurre doux
- 40 g bicarbonate de soude alimentaire
- 1 piece œuf
- 10 g gros sel

## Préparation

1. Pâte. Mélangez la farine de blé T65, le sel, la levure, l’eau tiède et le beurre doux. Pétrissez 10 min, puis laissez lever 1 h.
2. Façonnage. Divisez la pâte en 8, roulez des boudins et formez le nœud.
3. Bain. Plongez chaque pièce 20 s dans l’eau frémissante additionnée de bicarbonate de soude alimentaire.
4. Dorure. Dorez au besoin avec l’œuf battu, parsemez de gros sel, puis enfournez 18 à 20 min à 210 °C.
5. Finition. Laissez refroidir sur une grille.
