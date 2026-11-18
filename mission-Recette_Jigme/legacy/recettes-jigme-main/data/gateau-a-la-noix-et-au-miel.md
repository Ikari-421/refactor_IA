---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: gateau-a-la-noix-et-au-miel
title: Gâteau à la noix et au miel
lang: fr
description: "Gâteau à la noix et au miel : recette française avec noix décortiquées, beurre pommade et farine, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- noix
- miel
image:
  url:
  alt: Gâteau à la noix et au miel
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/gateau-a-la-noix-et-au-miel.md
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
    - from: du beurre pour le moule
      to: beurre sans lactose ou clarifié
      note:
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
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
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
  Gâteau aux noix et au miel : forme répandue (Périgord, Méditerranée, Europe
  centrale), sans recette unique datée. Noix et miel se cuisent ensemble depuis
  l’Antiquité ; ce moule de pâtisserie est un gâteau de maison, pas un cru AOP.
fun_facts:
- text: "Le miel brunit plus vite que le sucre ; trop cuit, il amertume."
  source_name: Usage
  source_url:
- text: "Noix rances : goût de peinture. On les goûte avant de les moudre."
  source_name: Usage
  source_url:
wines:
- name: Jurançon
  producer: Domaine Bellegarde
  origin: Monein, Béarn
  grapes: petit manseng
  award:
  why: Abricot, miel — le gâteau, même registre sucré.
- name: Monbazillac
  producer: Château Belingard
  origin: Monbazillac, Bergerac
  grapes: sémillon, muscadelle
  award:
  why: Miel, noix — le Périgord dans le verre.
- name: Banyuls
  producer: Domaine Vial Magnères
  origin: Banyuls-sur-Mer, Roussillon
  grapes: grenache
  award:
  why: Figue, cacao — noix grillées, un vin doux plus sombre.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - four
    - saladier
    - fouet
    - moule / plat
    - rouleau à pâtisserie
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: noix décortiquées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: beurre pommade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du beurre pour le moule
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Réduisez les noix décortiquées en poudre. Vous pouvez le faire au robot, au mortier-pilon
      ou bien en mettant les noix dans un sac congélation et en les écrasant avec un rouleau
      à pâtisserie (ou bouteille en verre).
    - Mixage. Dans un grand récipient, mettez le beurre pommade. Ajoutez le sucre et fouettez.
    - Mixage. Ajoutez ensuite la poudre de noix. Rajoutez le miel et la farine. Fouettez à nouveau.
    - Mixage. Rajoutez les œufs un par un et fouettez à chaque fois.
    - Cuisson. Versez la préparation dans un moule beurré et fariné. Ça part au four pendant une trentaine
      de minutes à 170°C. Dès que le dessus du gâteau est bien brun, retirez du four et laissez
      refroidir. Ce gâteau est un réel délice. Il est très bon chaud mais encore meilleur
      froid !
    steps_niveaux:
      amateur:
      - "Préparation. Réduisez les noix décortiquées en poudre. Vous pouvez le faire au robot, au mortier-pilon, ou en mettant les noix dans un sac congélation et en les écrasant avec un rouleau à pâtisserie (ou une bouteille en verre)."
      - "Mixage. Dans un grand récipient, mettez le beurre pommade. Ajoutez le sucre et fouettez."
      - "Mixage. Ajoutez ensuite la poudre de noix. Rajoutez le miel et la farine. Fouettez à nouveau."
      - "Mixage. Rajoutez les œufs un par un et fouettez à chaque fois."
      - "Cuisson. Versez la préparation dans un moule beurré et fariné. Enfournez pendant une trentaine de minutes à 170°C. Dès que le dessus du gâteau est bien brun, retirez du four et laissez refroidir."
      pro:
      - "Réduire les noix décortiquées en poudre : robot, mortier-pilon, ou sac congélation et rouleau à pâtisserie (ou bouteille en verre)."
      - "Beurre pommade dans un grand récipient. Ajouter le sucre. Fouetter."
      - "Ajouter la poudre de noix. Rajouter le miel et la farine. Fouetter à nouveau."
      - "Rajouter les œufs un par un. Fouetter à chaque fois."
      - "Verser dans un moule beurré et fariné. Four 170°C, une trentaine de minutes. Dès le dessus bien brun, retirer. Laisser refroidir."
      cavernes:
      - "Préparation. Noix décortiquées, poudre. Robot, mortier-pilon, ou sac congélation, rouleau à pâtisserie (ou bouteille verre), écraser."
      - "Mixage. Grand récipient, beurre pommade. Sucre, ajouter, fouetter."
      - "Mixage. Poudre de noix, ajouter. Miel, farine, rajouter. Fouetter à nouveau."
      - "Mixage. Œufs, 1 par 1, fouetter chaque fois."
      - "Cuisson. Préparation, moule beurré fariné, verser. Four trentaine minutes 170°C. Dessus gâteau bien brun, sortir. Refroidir."
    kcal_per_serving: 409
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
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
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: noix décortiquées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: beurre pommade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit:
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: champignons de Paris
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Réduisez les noix décortiquées en poudre. Vous pouvez le faire au robot, au mortier-pilon
      ou bien en mettant les noix dans un sac congélation et en les écrasant avec un rouleau
      à pâtisserie (ou bouteille en verre).
    - Mixage. Dans un grand récipient, mettez le beurre pommade. Ajoutez le sucre et fouettez.
    - Mixage. Ajoutez ensuite la poudre de noix. Rajoutez le miel et la farine. Fouettez à nouveau.
    - Mixage. Rajoutez les œufs un par un et fouettez à chaque fois.
    - Cuisson. Versez la préparation dans un moule beurré et fariné. Ça part au four pendant une trentaine
      de minutes à 170°C. Dès que le dessus du gâteau est bien brun, retirez du four et laissez
      refroidir. Ce gâteau est un réel délice. Il est très bon chaud mais encore meilleur
      froid !
    steps_niveaux:
      amateur:
      - "Préparation. Réduisez les noix décortiquées en poudre. Vous pouvez le faire au robot, au mortier-pilon, ou en mettant les noix dans un sac congélation et en les écrasant avec un rouleau à pâtisserie (ou une bouteille en verre)."
      - "Mixage. Dans un grand récipient, mettez le beurre pommade. Ajoutez le sucre et fouettez."
      - "Mixage. Ajoutez ensuite la poudre de noix. Rajoutez le miel et la farine. Fouettez à nouveau."
      - "Mixage. Rajoutez les œufs un par un et fouettez à chaque fois."
      - "Cuisson. Versez la préparation dans un moule beurré et fariné. Enfournez pendant une trentaine de minutes à 170°C. Dès que le dessus du gâteau est bien brun, retirez du four et laissez refroidir."
      pro:
      - "Réduire les noix décortiquées en poudre : robot, mortier-pilon, ou sac congélation et rouleau à pâtisserie (ou bouteille en verre)."
      - "Beurre pommade dans un grand récipient. Ajouter le sucre. Fouetter."
      - "Ajouter la poudre de noix. Rajouter le miel et la farine. Fouetter à nouveau."
      - "Rajouter les œufs un par un. Fouetter à chaque fois."
      - "Verser dans un moule beurré et fariné. Four 170°C, une trentaine de minutes. Dès le dessus bien brun, retirer. Laisser refroidir."
      cavernes:
      - "Préparation. Noix décortiquées, poudre. Robot, mortier-pilon, ou sac congélation, rouleau à pâtisserie (ou bouteille verre), écraser."
      - "Mixage. Grand récipient, beurre pommade. Sucre, ajouter, fouetter."
      - "Mixage. Poudre de noix, ajouter. Miel, farine, rajouter. Fouetter à nouveau."
      - "Mixage. Œufs, 1 par 1, fouetter chaque fois."
      - "Cuisson. Préparation, moule beurré fariné, verser. Four trentaine minutes 170°C. Dessus gâteau bien brun, sortir. Refroidir."
    kcal_per_serving: 409
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
    - qty: 200
      unit: g
      item: noix décortiquées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 130
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
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
    - qty: 2
      unit:
      item: sirop d'érable ou agave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: margarine végétale (pour le moule)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Réduisez les noix décortiquées en poudre. Vous pouvez le faire au robot, au mortier-pilon
      ou bien en mettant les noix dans un sac congélation et en les écrasant avec un rouleau
      à pâtisserie (ou bouteille en verre).
    - Cuisson. Dans un grand récipient, mettez la margarine végétale. Ajoutez le sucre
      et fouettez.
    - Cuisson. Ajoutez ensuite la poudre de noix. Rajoutez le sirop d'érable ou agave et la farine.
      Fouettez à nouveau.
    - Cuisson. Rajoutez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, en plusieurs fois
      et fouettez à chaque fois.
    - Cuisson. Versez la préparation dans un moule graissé avec de la margarine végétale et fariné. Ça part au four pendant une trentaine
      de minutes à 170°C. Dès que le dessus du gâteau est bien brun, retirez du four et laissez
      refroidir. Ce gâteau est un réel délice. Il est très bon chaud mais encore meilleur
      froid !
    steps_niveaux:
      amateur:
      - "Préparation. Réduisez les noix décortiquées en poudre. Vous pouvez le faire au robot, au mortier-pilon, ou en mettant les noix dans un sac congélation et en les écrasant avec un rouleau à pâtisserie (ou une bouteille en verre)."
      - "Cuisson. Dans un grand récipient, mettez la margarine végétale. Ajoutez le sucre et fouettez."
      - "Cuisson. Ajoutez ensuite la poudre de noix. Rajoutez le sirop d’érable ou agave et la farine. Fouettez à nouveau."
      - "Cuisson. Rajoutez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, en plusieurs fois, et fouettez à chaque fois."
      - "Cuisson. Versez la préparation dans un moule graissé avec de la margarine végétale et fariné. Enfournez pendant une trentaine de minutes à 170°C. Dès que le dessus du gâteau est bien brun, retirez du four et laissez refroidir."
      pro:
      - "Réduire les noix décortiquées en poudre : robot, mortier-pilon, ou sac congélation et rouleau à pâtisserie (ou bouteille en verre)."
      - "Margarine végétale dans un grand récipient. Ajouter le sucre. Fouetter."
      - "Ajouter la poudre de noix. Rajouter le sirop d’érable ou agave et la farine. Fouetter à nouveau."
      - "Rajouter l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, en plusieurs fois. Fouetter à chaque fois."
      - "Verser dans un moule graissé à la margarine végétale et fariné. Four 170°C, une trentaine de minutes. Dès le dessus bien brun, retirer. Laisser refroidir."
      cavernes:
      - "Préparation. Noix décortiquées, poudre. Robot, mortier-pilon, ou sac congélation, rouleau à pâtisserie (ou bouteille verre), écraser."
      - "Cuisson. Grand récipient, margarine végétale. Sucre, ajouter, fouetter."
      - "Cuisson. Poudre de noix, ajouter. Sirop d’érable ou agave, farine, rajouter. Fouetter à nouveau."
      - "Cuisson. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, plusieurs fois, fouetter chaque fois."
      - "Cuisson. Préparation, moule graissé margarine végétale, fariné, verser. Four trentaine minutes 170°C. Dessus gâteau bien brun, sortir. Refroidir."
    kcal_per_serving: 180
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
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
    kcal_per_serving: 409
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: "Ne pas recongeler."}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gâteau à la noix et au miel
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/gateau-a-la-noix-et-au-miel]]

## Ingrédients (4 personnes)

- 200 g de noix décortiquées
- 130 g de beurre pommade
- 40 g de farine
- 40 g de sucre
- 3 œuf
- 2 cuillères à soupe de miel
-  du beurre pour le moule

## Préparation

1. Réduisez les noix décortiquées en poudre. Vous pouvez le faire au robot, au mortier-pilon ou bien en mettant les noix dans un sac congélation et en les écrasant avec un rouleau à pâtisserie (ou bouteille en verre).
2. Dans un grand récipient, mettez le beurre pommade. Ajoutez le sucre et fouettez.
3. Ajoutez ensuite la poudre de noix. Rajoutez le miel et la farine. Fouettez à nouveau.
4. Rajoutez les œufs un par un et fouettez à chaque fois.
5. Versez la préparation dans un moule beurré et fariné. Ça part au four pendant une trentaine de minutes à 170°C. Dès que le dessus du gâteau est bien brun, retirez du four et laissez refroidir.

 
 

 
 Ce gâteau est un réel délice. Il est très bon chaud mais encore meilleur froid !
