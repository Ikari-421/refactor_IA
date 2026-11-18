---
schema: recette-web-jigme/v2
equipment:
- ref: friteuse
- ref: fouet
slug: onion-rings
title: Onion rings
lang: fr
description: "Onion rings : recette belge avec gros oignon, farine et levure chimique, pour 4 personnes. Version maison. Facile à suivre."
cuisine: britannique
category: salé
tags:
- salé
- accompagnement
- végétarien
- rapide
image:
  url:
  alt: Onion rings
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/onion-rings.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    note: Intolérance. Allergie caséine → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: 'Allergie lait : pas de substitut honnête listé.'
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; lait d''avoine ou soja → lait d''avoine.'
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
histoire: >
  Rondelles d’oignon panées et frites, croustillantes autour et tendres au
  centre. Une recette britannique de John Mollard, au début du XIXe siècle,
  décrit déjà des oignons en anneaux, farinés, frits et servis avec du
  parmesan. Le plat s’impose aux États-Unis au XXe siècle, sur les cartes des
  diners et des drive-in ; plusieurs villes s’en disputent l’invention, sans
  attribution tranchée. Les versions surgelées industrielles se répandent
  vers le milieu du siècle.
fun_facts: []
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de la Pépière
  origin: Maisdon-sur-Sèvre, Loire
  grapes: melon de Bourgogne
  award:
  why: "Iode, citron — la friture, ça rince la panure."
- name: Tavel
  producer: Prieuré de Montézargues
  origin: Tavel, Vallée du Rhône
  grapes: grenache
  award:
  why: "Rosé dense, fruit — l’oignon sucré, sans tanin."
- name: Chinon
  producer: Olga Raffault
  origin: Chinon, Loire
  grapes: cabernet franc
  award:
  why: "Cabernet franc, poivre léger — l’oignon frit, un rouge pas trop tannique."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
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
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 5
      rest_min: 0
      total_min: 25
    equipment: &id002
    - four
    - saladier
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: gros oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: paprika en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Dans un récipient, cassez l’oeuf et ajoutez le sel, la farine et la levure chimique.
      Mélangez le tout à l’aide d’un fouet.
    - Mélange. Complétez avec le paprika, puis ajoutez le lait petit à petit tout en mélangeant avec
      le fouet.
    - Cuisson. Épluchez les oignons et coupez-les rondelles assez épaisses. Il vous suffit ensuite
      de séparer les différentes couches d’oignon à la main, comme Marc le fait dans la vidéo
      ci-dessous.
    - Finition. Trempez les rondelles d’oignon dans l’appareil, puis déposez-les dans une friteuse à
      170°C jusqu’à ce qu’ils aient une belle coloration. Débarassez les onion rings ainsi
      obtenus sur un papier absorbant, salez selon vos goûts et dégustez avec la sauce de
      votre choix (ketchup, moutarde, mayonnaise). Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un récipient, cassez l’œuf et ajoutez le sel, la farine et la levure chimique. Mélangez le tout à l’aide d’un fouet."
      - "Mélange. Complétez avec le paprika, puis ajoutez le lait petit à petit tout en mélangeant avec le fouet."
      - "Cuisson. Épluchez les oignons et coupez-les en rondelles assez épaisses. Séparez ensuite les différentes couches d’oignon à la main, comme Marc le fait dans la vidéo ci-dessous."
      - "Finition. Trempez les rondelles d’oignon dans l’appareil, puis [[frire|faites-les frire]] dans une friteuse à 170°C jusqu’à ce qu’ils aient une belle coloration. Débarrassez les onion rings ainsi obtenus sur un papier absorbant, salez selon vos goûts et dégustez avec la sauce de votre choix (ketchup, moutarde, mayonnaise)."
      pro:
      - "Casser l’œuf. Ajouter le sel, la farine et la levure chimique. Mélanger au fouet."
      - "Compléter avec le paprika. Ajouter le lait petit à petit tout en mélangeant au fouet."
      - "Éplucher les oignons. Couper en rondelles assez épaisses. Séparer les couches à la main."
      - "Tremper les rondelles dans l’appareil. Frire en friteuse à 170°C jusqu’à belle coloration. Débarrasser sur papier absorbant. Saler. Servir avec la sauce au choix (ketchup, moutarde, mayonnaise)."
      cavernes:
      - "Préparation. Récipient. Œuf, casser. Sel, farine, levure chimique, ajouter. Fouet, mélanger."
      - "Mélange. Paprika, compléter. Lait, petit à petit, fouet, mélanger."
      - "Cuisson. Oignons, éplucher. Rondelles assez épaisses, couper. Couches, main, séparer. Vidéo Marc."
      - "Finition. Rondelles, appareil, tremper. Friteuse 170°C, frire, belle coloration. Papier absorbant, débarrasser. Sel, goût. Sauce choix : ketchup, moutarde, mayonnaise."
    kcal_per_serving: 191
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
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 191
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: gros oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 6
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: paprika en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cac
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux
      et ajoutez le sel, la farine et la levure chimique. Mélangez le tout à l’aide d’un fouet.
    - Cuisson. Complétez avec le paprika, puis ajoutez le lait d'avoine ou soja petit à petit tout
      en mélangeant avec le fouet.
    - Cuisson. Épluchez les oignons et coupez-les rondelles assez épaisses. Il vous suffit ensuite
      de séparer les différentes couches d’oignon à la main, comme Marc le fait dans la vidéo
      ci-dessous.
    - Finition. Trempez les rondelles d’oignon dans l’appareil, puis déposez-les dans une friteuse à
      170°C jusqu’à ce qu’ils aient une belle coloration. Débarassez les onion rings ainsi
      obtenus sur un papier absorbant, salez selon vos goûts et dégustez avec la sauce de
      votre choix (ketchup, moutarde, mayonnaise végétale). Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un récipient, versez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux et ajoutez le sel, la farine et la levure chimique. Mélangez le tout à l’aide d’un fouet."
      - "Cuisson. Complétez avec le paprika, puis ajoutez le lait d’avoine ou soja petit à petit tout en mélangeant avec le fouet."
      - "Cuisson. Épluchez les oignons et coupez-les en rondelles assez épaisses. Séparez ensuite les différentes couches d’oignon à la main, comme Marc le fait dans la vidéo ci-dessous."
      - "Finition. Trempez les rondelles d’oignon dans l’appareil, puis [[frire|faites-les frire]] dans une friteuse à 170°C jusqu’à ce qu’ils aient une belle coloration. Débarrassez les onion rings ainsi obtenus sur un papier absorbant, salez selon vos goûts et dégustez avec la sauce de votre choix (ketchup, moutarde, mayonnaise végétale)."
      pro:
      - "Verser l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Ajouter le sel, la farine et la levure chimique. Mélanger au fouet."
      - "Compléter avec le paprika. Ajouter le lait d’avoine ou soja petit à petit tout en mélangeant au fouet."
      - "Éplucher les oignons. Couper en rondelles assez épaisses. Séparer les couches à la main."
      - "Tremper les rondelles dans l’appareil. Frire en friteuse à 170°C jusqu’à belle coloration. Débarrasser sur papier absorbant. Saler. Servir avec la sauce au choix (ketchup, moutarde, mayonnaise végétale)."
      cavernes:
      - "Préparation. Récipient. Œuf-lin, 1 c.à.s. lin + 3 c.à.s. eau par œuf, ou tofu soyeux, verser. Sel, farine, levure chimique, ajouter. Fouet, mélanger."
      - "Cuisson. Paprika, compléter. Lait d’avoine ou soja, petit à petit, fouet, mélanger."
      - "Cuisson. Oignons, éplucher. Rondelles assez épaisses, couper. Couches, main, séparer. Vidéo Marc."
      - "Finition. Rondelles, appareil, tremper. Friteuse 170°C, frire, belle coloration. Papier absorbant, débarrasser. Sel, goût. Sauce choix : ketchup, moutarde, mayonnaise végétale."
    kcal_per_serving: 191
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
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 191
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Pas au frigo (ramollit)."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "à manger aussitôt", note: "Perdent le croustillant."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Onion rings
**Équipement :** [[fouet]] · [[friteuse]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/onion-rings]]

## Ingrédients (4 personnes)

- 3 gros oignon
- 120 g de farine
- 6 g de levure chimique
- 1 oeuf
- 20 cl de lait
- 1 c.à.c de paprika en poudre
- 1 c.à.c de sel

## Préparation

1. Dans un récipient, cassez l’oeuf et ajoutez le sel, la farine et la levure chimique. Mélangez le tout à l’aide d’un fouet.
2. Complétez avec le paprika, puis ajoutez le lait petit à petit tout en mélangeant avec le fouet.
3. Épluchez les oignons et coupez-les rondelles assez épaisses. Il vous suffit ensuite de séparer les différentes couches d’oignon à la main, comme Marc le fait dans la vidéo ci-dessous.
4. Trempez les rondelles d’oignon dans l’appareil, puis déposez-les dans une friteuse à 170°C jusqu’à ce qu’ils aient une belle coloration.

 
 

 
 Débarassez les onion rings ainsi obtenus sur un papier absorbant, salez selon vos goûts et dégustez avec la sauce de votre choix (ketchup, moutarde, mayonnaise). Bon appétit !
