---
schema: recette-web-jigme/v2
slug: cake-banane-chocolat-noisette
title: Cake banane chocolat noisette
lang: fr
description: "Cake banane chocolat noisette : recette française avec banane, farine et sucre glace, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- chocolat
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/cake-banane-chocolat-noisette.webp
  alt: Cake banane chocolat noisette
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cake-banane-chocolat-noisette.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    - from: huile de noisette
      to: huile neutre
      note:
    note: Si le plat EST un praliné, le goût change.
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
  Le banana bread / cake à la banane se répand aux États-Unis surtout au XXe s.
  (bananes trop mûres, levure chimique). Chocolat et noisette sont une garniture,
  pas le gâteau d’origine.
fun_facts:
- text: "Plus la banane est noire, plus le cake est parfumé et humide."
  source_name: Usage
  source_url:
- text: "Le bicarbonate réagit à l’acidité de la banane : trop de farine, et ça retombe."
  source_name: Usage pâtissier
  source_url:
wines:
- name: Maury
  producer: Domaine Pouderoux
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Cacao, fruit — banane et chocolat.
- name: Jurançon moelleux
  producer: Clos Lapeyre
  origin: Jurançon
  grapes: petit manseng
  award:
  why: Agrume, miel — la banane trop mûre.
- name: Brachetto d'Acqui
  producer: Braida
  origin: Piémont
  grapes: brachetto
  award:
  why: Fraise, bulles légères — noisette et cacao.
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
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 65
      cook_min: 45
      rest_min: 0
      total_min: 110
    equipment: &id002
    - four
    - casserole
    - saladier
    - moule / plat
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: banane
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
      unit: g
      item: sucre glace
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: poudre d'amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: noisettes entières
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: pépites de chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile de noisette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Torréfiez les noisettes au four à 170 °C pendant 10 à 15 minutes : elles sont prêtes lorsqu’elles sentent bon et que la peau est légèrement craquelée."
    - "Cuisson. Pendant ce temps, pelez deux bananes, mixez-les avec 10 cl de lait et un filet d’huile de noisette, puis réservez."
    - "Cuisson. Faites fondre le beurre à feu doux dans une petite casserole."
    - "Mélange. Versez 200 g de sucre glace dans un récipient, cassez-y trois œufs et mélangez. Incorporez ensuite le beurre fondu en continuant de mélanger."
    - "Mélange. Ajoutez 40 g de poudre d’amande, 5 g de levure chimique et 150 g de farine. Incorporez petit à petit en mélangeant bien, pour éviter les grumeaux."
    - "Mélange. Versez les bananes mixées et mélangez. Concassez grossièrement les noisettes, ajoutez-en une bonne poignée, puis les 60 g de pépites de chocolat, et mélangez de nouveau."
    - "Cuisson. Beurrez et farinez un moule à cake, versez-y la moitié de l’appareil. Épluchez une banane, coupez-la en deux dans la largeur, disposez-la dans le moule, puis recouvrez du reste de l’appareil."
    - "Cuisson. Enfournez à 170 °C pendant 45 min. Laissez un peu refroidir avant de détailler."
    steps_niveaux:
      amateur:
      - "Cuisson. Torréfiez les noisettes au four à 170 °C pendant 10 à 15 minutes : elles sont prêtes lorsqu’elles sentent bon et que la peau est légèrement craquelée."
      - "Cuisson. Pendant ce temps, pelez deux bananes, mixez-les avec 10 cl de lait et un filet d’huile de noisette, puis réservez."
      - "Cuisson. Faites fondre le beurre à feu doux dans une petite casserole."
      - "Mélange. Versez 200 g de sucre glace dans un récipient, cassez-y trois œufs et mélangez. Incorporez ensuite le beurre fondu en continuant de mélanger."
      - "Mélange. Ajoutez 40 g de poudre d’amande, 5 g de levure chimique et 150 g de farine. Incorporez petit à petit en mélangeant bien, pour éviter les grumeaux."
      - "Mélange. Versez les bananes mixées et mélangez. Concassez grossièrement les noisettes, ajoutez-en une bonne poignée, puis les 60 g de pépites de chocolat, et mélangez de nouveau."
      - "Cuisson. Beurrez et farinez un moule à cake, versez-y la moitié de l’appareil. Épluchez une banane, coupez-la en deux dans la largeur, disposez-la dans le moule, puis recouvrez du reste de l’appareil."
      - "Cuisson. Enfournez à 170 °C pendant 45 min. Laissez un peu refroidir avant de détailler."
      pro:
      - "Torréfier les noisettes au four à 170 °C pendant 10 à 15 minutes, jusqu’à parfum net et peau légèrement craquelée."
      - "Pendant ce temps : peler deux bananes, mixer avec 10 cl de lait et un filet d’huile de noisette. Réserver."
      - "Faire fondre le beurre à feu doux dans une petite casserole."
      - "Verser 200 g de sucre glace dans un récipient, casser trois œufs, mélanger. Incorporer le beurre fondu en mélangeant."
      - "Ajouter 40 g de poudre d’amande, 5 g de levure chimique et 150 g de farine. Incorporer petit à petit en mélangeant, sans grumeaux."
      - "Verser les bananes mixées. Mélanger. Concasser grossièrement les noisettes, en ajouter une bonne poignée, puis les 60 g de pépites de chocolat. Mélanger de nouveau."
      - "Beurrer et fariner un moule à cake. Verser la moitié de l’appareil. Éplucher une banane, la couper en deux dans la largeur, la disposer dans le moule, recouvrir du reste de l’appareil."
      - "Enfourner à 170 °C pendant 45 min. Laisser un peu refroidir avant de détailler."
      cavernes:
      - "Cuisson. Noisettes, Four 170 °C 10 à 15 min. Sentent bon, peau légèrement craquelée."
      - "Cuisson. Deux bananes, peler. Mixer 10 cl lait, filet huile noisette. Réserver."
      - "Cuisson. Beurre, fondre feu doux, petite casserole."
      - "Mélange. 200 g sucre glace, récipient. Trois œufs, casser, mélanger. Beurre fondu, incorporer, mélanger."
      - "Mélange. 40 g poudre amande, 5 g levure chimique, 150 g farine. Incorporer petit à petit, mélanger. Grumeaux, éviter."
      - "Mélange. Bananes mixées, verser, mélanger. Noisettes, concasser gros. Bonne poignée, 60 g pépites chocolat. Mélanger."
      - "Cuisson. Moule cake, beurrer, fariner. Moitié appareil, verser. Banane, éplucher, couper deux largeur, disposer moule. Reste appareil, recouvrir."
      - "Cuisson. Four 170 °C 45 min. Refroidir peu. Détailler."
    kcal_per_serving: 759
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
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 759
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 3
      unit: piece
      item: banane
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
      unit: g
      item: sucre glace
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: poudre d'amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: levure chimique
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: noisettes entières
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: pépites de chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile de noisette
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Torréfiez les noisettes au four à 170 °C pendant 10 à 15 minutes : elles sont prêtes lorsqu’elles sentent bon et que la peau est légèrement craquelée."
    - "Cuisson. Pendant ce temps, pelez deux bananes, mixez-les avec 10 cl de lait d’avoine ou de soja et un filet d’huile de noisette, puis réservez."
    - "Cuisson. Faites fondre la margarine végétale à feu doux dans une petite casserole."
    - "Cuisson. Versez 200 g de sucre glace dans un récipient, incorporez trois œufs de lin (1 c. à s. de lin + 3 c. à s. d’eau par œuf) ou le tofu soyeux, puis mélangez. Incorporez ensuite la margarine végétale fondue en continuant de mélanger."
    - "Mélange. Ajoutez 40 g de poudre d’amande, 5 g de levure chimique et 150 g de farine. Incorporez petit à petit en mélangeant bien, pour éviter les grumeaux."
    - "Mélange. Versez les bananes mixées et mélangez. Concassez grossièrement les noisettes, ajoutez-en une bonne poignée, puis les 60 g de pépites de chocolat, et mélangez de nouveau."
    - "Cuisson. Graissez et farinez un moule à cake avec la margarine végétale, versez-y la moitié de l’appareil. Épluchez une banane, coupez-la en deux dans la largeur, disposez-la dans le moule, puis recouvrez du reste de l’appareil."
    - "Cuisson. Enfournez à 170 °C pendant 45 min. Laissez un peu refroidir avant de détailler."
    steps_niveaux:
      amateur:
      - "Cuisson. Torréfiez les noisettes au four à 170 °C pendant 10 à 15 minutes : elles sont prêtes lorsqu’elles sentent bon et que la peau est légèrement craquelée."
      - "Cuisson. Pendant ce temps, pelez deux bananes, mixez-les avec 10 cl de lait d’avoine ou de soja et un filet d’huile de noisette, puis réservez."
      - "Cuisson. Faites fondre la margarine végétale à feu doux dans une petite casserole."
      - "Cuisson. Versez 200 g de sucre glace dans un récipient, incorporez trois œufs de lin (1 c. à s. de lin + 3 c. à s. d’eau par œuf) ou le tofu soyeux, puis mélangez. Incorporez ensuite la margarine végétale fondue en continuant de mélanger."
      - "Mélange. Ajoutez 40 g de poudre d’amande, 5 g de levure chimique et 150 g de farine. Incorporez petit à petit en mélangeant bien, pour éviter les grumeaux."
      - "Mélange. Versez les bananes mixées et mélangez. Concassez grossièrement les noisettes, ajoutez-en une bonne poignée, puis les 60 g de pépites de chocolat, et mélangez de nouveau."
      - "Cuisson. Graissez et farinez un moule à cake avec la margarine végétale, versez-y la moitié de l’appareil. Épluchez une banane, coupez-la en deux dans la largeur, disposez-la dans le moule, puis recouvrez du reste de l’appareil."
      - "Cuisson. Enfournez à 170 °C pendant 45 min. Laissez un peu refroidir avant de détailler."
      pro:
      - "Torréfier les noisettes au four à 170 °C pendant 10 à 15 minutes, jusqu’à parfum net et peau légèrement craquelée."
      - "Pendant ce temps : peler deux bananes, mixer avec 10 cl de lait d’avoine ou de soja et un filet d’huile de noisette. Réserver."
      - "Faire fondre la margarine végétale à feu doux dans une petite casserole."
      - "Verser 200 g de sucre glace dans un récipient. Incorporer trois œufs de lin (1 c. à s. de lin + 3 c. à s. d’eau par œuf) ou le tofu soyeux. Mélanger. Incorporer la margarine végétale fondue en mélangeant."
      - "Ajouter 40 g de poudre d’amande, 5 g de levure chimique et 150 g de farine. Incorporer petit à petit en mélangeant, sans grumeaux."
      - "Verser les bananes mixées. Mélanger. Concasser grossièrement les noisettes, en ajouter une bonne poignée, puis les 60 g de pépites de chocolat. Mélanger de nouveau."
      - "Graisser et fariner un moule à cake avec la margarine végétale. Verser la moitié de l’appareil. Éplucher une banane, la couper en deux dans la largeur, la disposer dans le moule, recouvrir du reste de l’appareil."
      - "Enfourner à 170 °C pendant 45 min. Laisser un peu refroidir avant de détailler."
      cavernes:
      - "Cuisson. Noisettes, Four 170 °C 10 à 15 min. Sentent bon, peau légèrement craquelée."
      - "Cuisson. Deux bananes, peler. Mixer 10 cl lait d’avoine ou soja, filet huile noisette. Réserver."
      - "Cuisson. Margarine végétale, fondre feu doux, petite casserole."
      - "Cuisson. 200 g sucre glace, récipient. Trois œufs lin (1 c. à s. lin + 3 c. à s. eau par œuf) ou tofu soyeux, incorporer, mélanger. Margarine végétale fondue, incorporer, mélanger."
      - "Mélange. 40 g poudre amande, 5 g levure chimique, 150 g farine. Incorporer petit à petit, mélanger. Grumeaux, éviter."
      - "Mélange. Bananes mixées, verser, mélanger. Noisettes, concasser gros. Bonne poignée, 60 g pépites chocolat. Mélanger."
      - "Cuisson. Moule cake, graisser fariner margarine végétale. Moitié appareil, verser. Banane, éplucher, couper deux largeur, disposer moule. Reste appareil, recouvrir."
      - "Cuisson. Four 170 °C 45 min. Refroidir peu. Détailler."
    kcal_per_serving: 495
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
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 759
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "3–4 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Cake banane chocolat noisette

![[cake-banane-chocolat-noisette.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/cake-banane-chocolat-noisette]]

## Ingrédients (4 personnes)

- 3 banane
- 150 g de farine
- 200 g de sucre glace
- 50 g de poudre d'amande
- 5 g de levure chimique
- 3 oeuf
- 150 g de beurre
- 10 cL de lait
- 50 g de noisettes entières
- 60 g de pépites de chocolat
-  huile de noisette

## Préparation

1. Cuisson. Torréfiez les noisettes au four à 170 °C pendant 10 à 15 minutes : elles sont prêtes lorsqu’elles sentent bon et que la peau est légèrement craquelée.
2. Cuisson. Pendant ce temps, pelez deux bananes, mixez-les avec 10 cl de lait et un filet d’huile de noisette, puis réservez.
3. Cuisson. Faites fondre le beurre à feu doux dans une petite casserole.
4. Mélange. Versez 200 g de sucre glace dans un récipient, cassez-y trois œufs et mélangez. Incorporez ensuite le beurre fondu en continuant de mélanger.
5. Mélange. Ajoutez 40 g de poudre d’amande, 5 g de levure chimique et 150 g de farine. Incorporez petit à petit en mélangeant bien, pour éviter les grumeaux.
6. Mélange. Versez les bananes mixées et mélangez. Concassez grossièrement les noisettes, ajoutez-en une bonne poignée, puis les 60 g de pépites de chocolat, et mélangez de nouveau.
7. Cuisson. Beurrez et farinez un moule à cake, versez-y la moitié de l’appareil. Épluchez une banane, coupez-la en deux dans la largeur, disposez-la dans le moule, puis recouvrez du reste de l’appareil.
8. Cuisson. Enfournez à 170 °C pendant 45 min. Laissez un peu refroidir avant de détailler.

 
 

 
 Votre cake à la banane est prêt ! Laissez le refroidir un peu, puis servez vous une bonne tranche à déguster au goûter, en dessert ou au petit-déjeuner. Bon appétit !
