---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: oeufs-mimosa
title: Œufs mimosa
lang: fr
description: "Œufs mimosa : recette française avec oeuf, moutarde et persil frais, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- entrée
- œufs
- végétarien
image:
  url:
  alt: Œufs mimosa
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/oeufs-mimosa.md
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
    note: Déjà sans lait.
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - moutarde
    swaps:
    - from: moutarde
      to: horseradish ou omettre
      note: Allergie.
    note: Omettre ou vinaigrette sans moutarde.
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
histoire: 'Œufs durs coupés, jaunes mêlés (mayonnaise, moutarde) et remis dans les blancs. En français,
  « mimosa » : le jaune émietté rappelle la fleur. Farce de jaunes dès des recettes européennes anciennes
  ; un exemple andalou du XIIIe s. est parfois cité — une seule piste, donc le siècle, pas une date.

  '
fun_facts:
- text: 'On les sert froids : ce n’est pas un œuf Chimay gratiné.

    '
  source_name: Wikipedia, Deviled egg
  source_url: https://en.wikipedia.org/wiki/Deviled_egg
- text: 'Trop de mayo, et la farce fuit ; un jaune d’œuf dur bien séché se mêle mieux.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Œufs mimosa ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Deviled_egg
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Famille Lieubeau
  origin: Muscadet, Loire
  grapes: melon de Bourgogne
  award:
  why: Blanc iodé, citron — l’œuf froid et la mayo, sans un chardonnay gras.
- name: Crémant de Bourgogne
  producer: Louis Bouillot
  origin: Nuits-Saint-Georges, Bourgogne
  grapes: pinot noir, chardonnay
  award:
  why: Bulles — l’entrée froide, sans un champagne de prestige.
- name: Sancerre
  producer: Pascal Jolivet
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex — la mayo et le jaune, acidité nette.
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
    - oeuf
    - moutarde
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - saladier
    - fouet
    - passoire
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par préparer vos oeufs durs en les plongeants dans l’eau bouillante pendant
      10 minutes.
    - Cuisson. Pendant que les oeufs cuisent, vous pouvez vous attaquez à la mayonnaise. Dans un récipient,
      versez 1 c.à.s de moutarde et ajoutez-y deux jaunes d’oeufs (vous pouvez faire des meringues
      avec les blancs, par exemple). Salez et poivrez selon vos goûts, puis montez la mayonnaise
      en ajoutant de l’huile végétale au fur et à mesure et en mélangeant énergiquement à
      l’aide d’un fouet.
    - Cuisson. Débarrassez les oeufs durs dans de l’eau froide et écalez-les. Coupez les ensuite en
      deux et réservez les jaunes.
    - Cuisson. Passez les jaunes d’oeufs durs à travers un chinois. Ajoutez la « poudre » ainsi obtenu
      dans la mayonnaise maison. Complétez avec du persil frais haché, puis mélangez.
    - Finition. Disposez la préparation obtenue dans les oeufs (à la place du jaune) à l’aide d’une
      cuillère ou d’une poche à douille. Et voilà, vous avez de beaux oeufs mimosa prêts à
      servir et à déguster avec vos proches. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Commencez par préparer vos œufs durs en les plongeant dans l’eau bouillante pendant 10 minutes."
      - "Cuisson. Pendant que les œufs cuisent, vous pouvez vous attaquer à la mayonnaise. Dans un récipient, versez 1 c.à.s de moutarde et ajoutez-y deux jaunes d’œufs (vous pouvez faire des meringues avec les blancs, par exemple). Salez et poivrez selon vos goûts, puis montez la mayonnaise en ajoutant de l’huile végétale au fur et à mesure et en mélangeant énergiquement à l’aide d’un fouet."
      - "Cuisson. Débarrassez les œufs durs dans de l’eau froide et écalez-les. Coupez-les ensuite en deux et réservez les jaunes."
      - "Cuisson. Passez les jaunes d’œufs durs à travers un chinois. Ajoutez la poudre ainsi obtenue dans la mayonnaise maison. Complétez avec du persil frais haché, puis mélangez."
      - "Finition. Disposez la préparation obtenue dans les œufs (à la place du jaune) à l’aide d’une cuillère ou d’une poche à douille."
      pro:
      - "Plonger les œufs dans l’eau bouillante pendant 10 minutes pour obtenir des œufs durs."
      - "Pendant la cuisson des œufs : verser 1 c.à.s de moutarde, ajouter deux jaunes d’œufs. Saler, poivrer. Monter la mayonnaise : huile végétale au fur et à mesure, fouetter énergiquement. Option : meringues avec les blancs."
      - "Débarrasser les œufs durs dans l’eau froide. Écaler. Couper en deux. Réserver les jaunes."
      - "Passer les jaunes d’œufs durs à travers un chinois. Ajouter la poudre à la mayonnaise maison. Compléter de persil frais haché. Mélanger."
      - "Disposer la préparation dans les œufs, à la place du jaune, cuillère ou poche à douille."
      cavernes:
      - "Préparation. Œufs, eau bouillante, 10 min, plonger. Œufs durs."
      - "Cuisson. Pendant cuisson œufs. Mayonnaise. Récipient. 1 c.à.s moutarde, verser. Deux jaunes d’œufs, ajouter. Blancs, meringues, possible. Sel, poivre, selon goûts. Huile végétale, fur et à mesure, ajouter. Fouet, mélanger énergiquement. Mayonnaise, monter."
      - "Cuisson. Œufs durs, eau froide, débarrasser. Écaler. Couper deux. Jaunes, réserver."
      - "Cuisson. Jaunes d’œufs durs, chinois, passer. Poudre, mayonnaise maison, ajouter. Persil frais haché, compléter. Mélanger."
      - "Finition. Préparation, œufs, place jaune, disposer. Cuillère ou poche à douille."
    kcal_per_serving: 170
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
    - oeuf
    - moutarde
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 170
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
    - moutarde
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 8
      unit: piece
      item: tofu ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: moutarde
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil frais
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Égouttez le tofu ferme. Coupez chaque bloc en deux dans la longueur pour former des
      barquettes, puis évidez légèrement le centre.
    - Cuisson. Dans un récipient, versez 1 c.à.s. de moutarde. Salez, poivrez, puis montez une mayonnaise
      végétale en ajoutant de l’huile végétale au fur et à mesure, en fouettant.
    - Mélange. Émiettez le tofu retiré du centre, passez-le à la fourchette, puis mélangez-le à la
      mayonnaise végétale et au persil frais haché.
    - Finition. Garnissez les barquettes de tofu avec cette farce, à la cuillère ou à la poche à douille.
      Servez frais. Bon appétit !
    steps_niveaux:
      amateur:
      - "Égouttez le tofu ferme. Coupez chaque bloc en deux dans la longueur pour former des barquettes, puis évidez légèrement le centre."
      - "Cuisson. Dans un récipient, versez 1 c.à.s. de moutarde. Salez, poivrez, puis montez une mayonnaise végétale en ajoutant de l’huile végétale au fur et à mesure, en fouettant."
      - "Mélange. Émiettez le tofu retiré du centre, passez-le à la fourchette, puis mélangez-le à la mayonnaise végétale et au persil frais haché."
      - "Finition. Garnissez les barquettes de tofu avec cette farce, à la cuillère ou à la poche à douille. Servez frais."
      pro:
      - "Égoutter le tofu ferme. Couper chaque bloc en deux dans la longueur pour former des barquettes. Évider légèrement le centre."
      - "Verser 1 c.à.s. de moutarde. Saler, poivrer. Monter une mayonnaise végétale : huile végétale au fur et à mesure, fouetter."
      - "Émietter le tofu retiré du centre, passer à la fourchette. Mélanger à la mayonnaise végétale et au persil frais haché."
      - "Garnir les barquettes de tofu, cuillère ou poche à douille. Servir frais."
      cavernes:
      - "Tofu ferme, égoutter. Chaque bloc, couper deux, longueur, barquettes. Centre, évider légèrement."
      - "Cuisson. Récipient. 1 c.à.s. moutarde, verser. Sel, poivre. Huile végétale, fur et à mesure, ajouter. Fouetter. Mayonnaise végétale, monter."
      - "Mélange. Tofu retiré centre, émietter, fourchette, passer. Mayonnaise végétale, persil frais haché, mélanger."
      - "Finition. Barquettes tofu, farce, garnir. Cuillère ou poche à douille. Frais, servir."
    kcal_per_serving: 170
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
    - oeuf
    - moutarde
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 170
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "œufs crus ou peu cuits"

---

# Œufs mimosa
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/oeufs-mimosa]]

## Ingrédients (4 personnes)

- 8 oeuf
- 1 c.à.s de moutarde
-  persil frais
-  huile végétale

## Préparation

1. Commencez par préparer vos oeufs durs en les plongeants dans l’eau bouillante pendant 10 minutes.
2. Pendant que les oeufs cuisent, vous pouvez vous attaquez à la mayonnaise. Dans un récipient, versez 1 c.à.s de moutarde et ajoutez-y deux jaunes d’oeufs (vous pouvez faire des meringues avec les blancs, par exemple). Salez et poivrez selon vos goûts, puis montez la mayonnaise en ajoutant de l’huile végétale au fur et à mesure et en mélangeant énergiquement à l’aide d’un fouet.
3. Débarrassez les oeufs durs dans de l’eau froide et écalez-les. Coupez les ensuite en deux et réservez les jaunes.
4. Passez les jaunes d’oeufs durs à travers un chinois. Ajoutez la « poudre » ainsi obtenu dans la mayonnaise maison. Complétez avec du persil frais haché, puis mélangez.
5. Disposez la préparation obtenue dans les oeufs (à la place du jaune) à l’aide d’une cuillère ou d’une poche à douille.

 
 

 
 Et voilà, vous avez de beaux oeufs mimosa prêts à servir et à déguster avec vos proches. Bon appétit !
