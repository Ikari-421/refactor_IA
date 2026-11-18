---
schema: recette-web-jigme/v2
equipment:
- ref: balance
- ref: fouet
slug: quatre-quarts
title: Quatre-quarts
lang: fr
description: "Quatre-quarts : recette française avec farine, sucre et beurre demi-sel, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- gâteau
- végétarien
- farine
image:
  url:
  alt: Quatre-quarts
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/quatre-quarts.md
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
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan.
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Les œufs font la structure du quatre-quarts : pas de substitution fiable.'
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
histoire: 'Quatre-quarts : beurre, sucre, farine, œufs, même poids. Cousin du pound cake britannique,
  égalité des quatre parts ; en Europe continentale dès le XVIIIe s. Gâteau de maison, pas une pâtisserie
  d’auteur.

  '
fun_facts:
- text: >
    On pèse les œufs d’abord, puis on aligne le reste sur ce poids : d’où le nom.
  source_name: Grokipedia, Pound cake
  source_url: https://grokipedia.com/page/Pound_cake
- text: >
    Beurre pommade, pas fondu : trop liquide, le gâteau retombe.
  source_name: Usage
  source_url:
wines:
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin moelleux — le beurre du gâteau, sans un vin tannique.
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: Muscat doux — le quatre-quarts nature.
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: Saumur, Loire
  grapes: chenin
  award:
  why: Bulles, pomme — le goûter, sans un champagne.
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
      prep_min: 50
      cook_min: 30
      rest_min: 0
      total_min: 80
    equipment: &id002
    - four
    - casserole
    - saladier
    - fouet
    - moule / plat
    - poids pour cuisson à blanc
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: beurre demi-sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: oeufs
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
    steps:
    - Préparation. Dans un premier temps, pesez vos oeufs (en les cassant dans un récipient, pas avec la
      coquille bien sur). Il vous en faudra 3 ou 4, en fonction de leur taille, pour atteindre
      un poids aux alentours de 200g. Si vos oeufs ne font pas PILE 200g, ce n’est pas grave.
      Vous mettrez le même poids que celui affiché sur la balance pour la farine, le beurre
      et le sucre.
    - Cuisson. Dans une casserole, faites fondre le beurre à feu doux. Pendant ce temps, ajoutez le
      sucre à vos oeufs et mélangez à l’aide d’un fouet. Complétez avec la farine et la levure,
      puis mélangez de nouveau.
    - Mélange. Maintenant que le beurre est fondu, ajoutez-le à votre appareil et mélangez au fouet.
    - Cuisson. Versez le tout dans un moule à cake préalablement beurré et fariné, puis enfournez à
      180°C pendant environ 30 minutes. Et voilà, votre quatre quarts est prêt ! Dégustez-le
      en dessert ou au goûter, accompagné d’un chocolat chaud à l’ancienne ou d’un délicieux
      chai tea latte. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un premier temps, pesez vos oeufs (en les cassant dans un récipient, pas avec la coquille bien sur). Il vous en faudra 3 ou 4, en fonction de leur taille, pour atteindre un poids aux alentours de 200g. Si vos oeufs ne font pas PILE 200g, ce n’est pas grave. Vous mettrez le même poids que celui affiché sur la balance pour la farine, le beurre et le sucre."
      - "Cuisson. Dans une casserole, faites fondre le beurre à feu doux. Pendant ce temps, ajoutez le sucre à vos oeufs et mélangez à l’aide d’un fouet. Complétez avec la farine et la levure, puis mélangez de nouveau."
      - "Mélange. Maintenant que le beurre est fondu, ajoutez-le à votre appareil et mélangez au fouet."
      - "Cuisson. Versez le tout dans un moule à cake préalablement beurré et fariné, puis enfournez à 180°C pendant environ 30 minutes. Et voilà, votre quatre quarts est prêt ! Dégustez-le en dessert ou au goûter, accompagné d’un chocolat chaud à l’ancienne ou d’un délicieux chai tea latte. Bon appétit !"
      pro:
      - "Peser les oeufs cassés (sans coquille). 3 ou 4 selon la taille, autour de 200 g. Reprendre le même poids pour la farine, le beurre et le sucre."
      - "Faire fondre le beurre à feu doux. Pendant ce temps, ajouter le sucre aux oeufs, mélanger au fouet. Compléter avec la farine et la levure, mélanger."
      - "Beurre fondu : l’ajouter à l’appareil, mélanger au fouet."
      - "Verser dans un moule à cake beurré et fariné. Enfourner 180 °C environ 30 minutes. Dessert ou goûter."
      cavernes:
      - "Préparation. Premier temps, oeufs, peser (casser récipient, pas coquille bien sur). 3 ou 4 selon taille, poids alentours 200g. Pas PILE 200g, pas grave. Même poids balance : farine, beurre, sucre."
      - "Cuisson. Casserole, beurre, fondre feu doux. Pendant, sucre sur oeufs, fouet, mélanger. Farine, levure, compléter, mélanger encore."
      - "Mélange. Beurre fondu, ajouter appareil, mélanger fouet."
      - "Cuisson. Tout, verser moule cake, beurré fariné. Enfourner 180°C environ 30 minutes. Quatre quarts prêt. Dessert ou goûter, chocolat chaud à l’ancienne ou chai tea latte. Bon appétit !"
    kcal_per_serving: 777
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
    kcal_per_serving: 777
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
    - pesco
    - vegan
    allergens:
    - gluten
    - soja
    difficulty: 2
    time:
      prep_min: 50
      cook_min: 30
      rest_min: 0
      total_min: 80
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
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
    steps:
    - Préparation. Dans un premier temps, pesez 200 g d’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou de tofu soyeux.
      Vous mettrez le même poids pour la farine, la margarine végétale et le sucre.
    - Cuisson. Dans une casserole, faites fondre la margarine végétale à feu doux. Pendant ce temps, ajoutez le
      sucre à l’œuf de lin (ou au tofu soyeux) et mélangez à l’aide d’un fouet. Complétez avec la farine
      et la levure, puis mélangez de nouveau.
    - Mélange. Maintenant que la margarine végétale est fondue, ajoutez-la à votre appareil et mélangez au fouet.
    - Cuisson. Versez le tout dans un moule à cake préalablement graissé avec de la margarine végétale et fariné, puis enfournez à
      180°C pendant environ 30 minutes. Et voilà, votre quatre quarts est prêt ! Dégustez-le
      en dessert ou au goûter, accompagné d’un chocolat chaud à l’ancienne ou d’un délicieux
      chai tea latte. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Dans un premier temps, pesez 200 g d’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou de tofu soyeux. Vous mettrez le même poids pour la farine, la margarine végétale et le sucre."
      - "Cuisson. Dans une casserole, faites fondre la margarine végétale à feu doux. Pendant ce temps, ajoutez le sucre à l’œuf de lin (ou au tofu soyeux) et mélangez à l’aide d’un fouet. Complétez avec la farine et la levure, puis mélangez de nouveau."
      - "Mélange. Maintenant que la margarine végétale est fondue, ajoutez-la à votre appareil et mélangez au fouet."
      - "Cuisson. Versez le tout dans un moule à cake préalablement graissé avec de la margarine végétale et fariné, puis enfournez à 180°C pendant environ 30 minutes. Et voilà, votre quatre quarts est prêt ! Dégustez-le en dessert ou au goûter, accompagné d’un chocolat chaud à l’ancienne ou d’un délicieux chai tea latte. Bon appétit !"
      pro:
      - "Peser 200 g d’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou de tofu soyeux. Reprendre le même poids pour la farine, la margarine végétale et le sucre."
      - "Faire fondre la margarine végétale à feu doux. Pendant ce temps, ajouter le sucre à l’œuf de lin (ou au tofu soyeux), mélanger au fouet. Compléter avec la farine et la levure, mélanger."
      - "Margarine végétale fondue : l’ajouter à l’appareil, mélanger au fouet."
      - "Verser dans un moule à cake graissé de margarine végétale et fariné. Enfourner 180 °C environ 30 minutes. Dessert ou goûter."
      cavernes:
      - "Préparation. Premier temps, 200 g œuf lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, peser. Même poids : farine, margarine végétale, sucre."
      - "Cuisson. Casserole, margarine végétale, fondre feu doux. Pendant, sucre sur œuf lin (ou tofu soyeux), fouet, mélanger. Farine, levure, compléter, mélanger encore."
      - "Mélange. Margarine végétale fondue, ajouter appareil, mélanger fouet."
      - "Cuisson. Tout, verser moule cake, graissé margarine végétale, fariné. Enfourner 180°C environ 30 minutes. Quatre quarts prêt. Dessert ou goûter, chocolat chaud à l’ancienne ou chai tea latte. Bon appétit !"
    kcal_per_serving: 426
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
    kcal_per_serving: 777
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Quatre-quarts
**Équipement :** [[fouet]] · [[balance]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/quatre-quarts]]

## Ingrédients (4 personnes)

- 200 g de farine
- 200 g de sucre
- 200 g de beurre demi-sel
- 200 g d'oeufs
- 5 g de levure chimique

## Préparation

1. Dans un premier temps, pesez vos oeufs (en les cassant dans un récipient, pas avec la coquille bien sur). Il vous en faudra 3 ou 4, en fonction de leur taille, pour atteindre un poids aux alentours de 200g. Si vos oeufs ne font pas PILE 200g, ce n’est pas grave. Vous mettrez le même poids que celui affiché sur la balance pour la farine, le beurre et le sucre.
2. Dans une casserole, faites fondre le beurre à feu doux. Pendant ce temps, ajoutez le sucre à vos oeufs et mélangez à l’aide d’un fouet. Complétez avec la farine et la levure, puis mélangez de nouveau.
3. Maintenant que le beurre est fondu, ajoutez-le à votre appareil et mélangez au fouet.
4. Versez le tout dans un moule à cake préalablement beurré et fariné, puis enfournez à 180°C pendant environ 30 minutes.

 
 

 
 Et voilà, votre quatre quarts est prêt ! Dégustez-le en dessert ou au goûter, accompagné d’un chocolat chaud à l’ancienne ou d’un délicieux chai tea latte. Bon appétit !
