---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: pain-depices
title: Pain d'épices
lang: fr
description: "Pain d'épices : recette française avec œuf, cassonade et miel, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- épices
- Noël
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/pain-depices.webp
  alt: Pain d'épices
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pain-depices.md
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
    - from: farine de blé
      to: mix farine sans gluten + psyllium
      note:
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
histoire: 'Pain d’épices français : farine (souvent seigle), miel, épices. Le Dictionnaire de l’Académie
  (1694) cite déjà seigle, miel et épices. Moins sucré qu’un gingerbread anglais, le seigle reste perceptible.
  L’Alsace en a une tradition marquée (cannelle).

  '
fun_facts:
- text: 'Le miel brunit et garde le moelleux ; trop cuit, il amertume.

    '
  source_name: Usage
  source_url: null
- text: 'Ce n’est pas un biscuit sec type pain d’épices d’Alsace en tranches industrielles : un gâteau
    de voyage, mie serrée.

    '
  source_name: Wikipedia, Pain d'épices
  source_url: https://en.wikipedia.org/wiki/Pain_d'%C3%A9pices
- text: 'Pour aller plus loin : l’histoire de « Pain d''épices ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Pain_d'épices
wines:
- name: Gewurztraminer
  producer: Cave de Hunawihr
  origin: Hunawihr, Alsace
  grapes: gewurztraminer
  award:
  why: Épice, litchi — le miel et la cannelle, voisin d’Alsace.
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Fruit noir, doux — le pain d’épices, sans un vin sec.
- name: Rivesaltes
  producer: Domaine Lafage
  origin: Roussillon
  grapes: grenache, muscat
  award:
  why: Doux du Roussillon — le miel, sucré-épicé.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
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
      prep_min: 60
      cook_min: 50
      rest_min: 0
      total_min: 110
    equipment: &id002
    - four
    - saladier
    - fouet
    - moule / plat
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: cassonade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 220
      unit: g
      item: miel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: farine de blé complet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine de blé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: levure chimique
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
    - qty: 40
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: mélange cinq épices
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Cassez votre oeuf dans un récipient, puis ajoutez le sucre de canne et le miel.
    - Mélange. Incorporez la farine de blé complet et la farine « classique » petit à petit, en mélangeant
      à l’aide d’un fouet. Ajoutez la levure chimique et le mélange cinq épices (badiane,
      cannelle, clous de girofle, noix de muscade et vanille). Mélangez bien.
    - Mélange. Incorporez le lait et le beurre fondu, puis mélangez.
    - Cuisson. Versez le tout dans un moule à cake, préalablement beurré et fariné. Enfournez à 170°C
      pendant environ 50min. Vous pouvez surveillez la cuisson en plantant la pointe d’un
      couteau dans votre pain d’épice. Si elle ressort sèche, c’est que c’est prêt ! Et voilà,
      il ne vous reste plus qu’à déguster une belle tranche moelleuse et parfumée de ce délicieux
      pain d’épices. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Cassez votre œuf dans un récipient, puis ajoutez le sucre de canne et le miel."
      - "Mélange. Incorporez la farine de blé complet et la farine « classique » petit à petit, en mélangeant à l’aide d’un fouet. Ajoutez la levure chimique et le mélange cinq épices (badiane, cannelle, clous de girofle, noix de muscade et vanille). Mélangez bien."
      - "Mélange. Incorporez le lait et le beurre fondu, puis mélangez."
      - "Cuisson. Versez le tout dans un moule à cake, préalablement beurré et fariné. Enfournez à 170 °C pendant environ 50 min. Vous pouvez surveiller la cuisson en plantant la pointe d’un couteau dans votre pain d’épices. Si elle ressort sèche, c’est que c’est prêt. Dégustez une tranche."
      pro:
      - "Casser l’œuf dans un récipient. Ajouter le sucre de canne et le miel."
      - "Incorporer petit à petit la farine de blé complet et la farine classique, au fouet. Ajouter la levure chimique et le mélange cinq épices (badiane, cannelle, clous de girofle, noix de muscade et vanille). Bien mélanger."
      - "Incorporer le lait et le beurre fondu. Mélanger."
      - "Verser dans un moule à cake beurré et fariné. Enfourner à 170 °C environ 50 min. Contrôler à la pointe d’un couteau : elle ressort sèche. Déguster."
      cavernes:
      - "Préparation. Œuf, récipient, casser. Sucre de canne, miel, ajouter."
      - "Mélange. Farine blé complet, farine classique, petit à petit, incorporer. Fouet, mélanger. Levure chimique, mélange cinq épices (badiane, cannelle, clous de girofle, noix de muscade, vanille), ajouter. Bien mélanger."
      - "Mélange. Lait, beurre fondu, incorporer. Mélanger."
      - "Cuisson. Moule cake, beurré, fariné. Tout, verser. 170 °C environ 50 min, enfourner. Pointe couteau, planter. Ressort sèche : prêt. Tranche, déguster."
    kcal_per_serving: 327
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
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
    kcal_per_serving: 327
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
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
    - qty: 1
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: cassonade
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 220
      unit: g
      item: sirop d'érable ou agave
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: farine de blé complet
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine de blé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit:
      item: levure chimique
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
    - qty: 40
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: mélange cinq épices
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Versez l’œuf de lin (ou le tofu soyeux) dans un récipient, puis ajoutez la cassonade et le sirop d’érable ou d’agave.
    - Mélange. Incorporez la farine de blé complet et la farine « classique » petit à petit, en mélangeant
      à l’aide d’un fouet. Ajoutez la levure chimique et le mélange cinq épices (badiane,
      cannelle, clous de girofle, noix de muscade et vanille). Mélangez bien.
    - Cuisson. Incorporez le lait d'avoine ou soja et la margarine végétale fondue, puis
      mélangez.
    - Cuisson. Versez le tout dans un moule à cake, préalablement graissé avec de la margarine végétale et fariné. Enfournez à 170°C
      pendant environ 50min. Vous pouvez surveillez la cuisson en plantant la pointe d’un
      couteau dans votre pain d’épice. Si elle ressort sèche, c’est que c’est prêt ! Et voilà,
      il ne vous reste plus qu’à déguster une belle tranche moelleuse et parfumée de ce délicieux
      pain d’épices. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez l’œuf de lin (ou le tofu soyeux) dans un récipient, puis ajoutez la cassonade et le sirop d’érable ou d’agave."
      - "Mélange. Incorporez la farine de blé complet et la farine « classique » petit à petit, en mélangeant à l’aide d’un fouet. Ajoutez la levure chimique et le mélange cinq épices (badiane, cannelle, clous de girofle, noix de muscade et vanille). Mélangez bien."
      - "Cuisson. Incorporez le lait d’avoine ou soja et la margarine végétale fondue, puis mélangez."
      - "Cuisson. Versez le tout dans un moule à cake, préalablement graissé avec de la margarine végétale et fariné. Enfournez à 170 °C pendant environ 50 min. Vous pouvez surveiller la cuisson en plantant la pointe d’un couteau dans votre pain d’épices. Si elle ressort sèche, c’est que c’est prêt. Dégustez une tranche."
      pro:
      - "Verser l’œuf de lin (ou le tofu soyeux) dans un récipient. Ajouter la cassonade et le sirop d’érable ou d’agave."
      - "Incorporer petit à petit la farine de blé complet et la farine classique, au fouet. Ajouter la levure chimique et le mélange cinq épices (badiane, cannelle, clous de girofle, noix de muscade et vanille). Bien mélanger."
      - "Incorporer le lait d’avoine ou soja et la margarine végétale fondue. Mélanger."
      - "Verser dans un moule à cake graissé à la margarine végétale et fariné. Enfourner à 170 °C environ 50 min. Contrôler à la pointe d’un couteau : elle ressort sèche. Déguster."
      cavernes:
      - "Préparation. Œuf de lin (ou tofu soyeux), récipient, verser. Cassonade, sirop d’érable ou d’agave, ajouter."
      - "Mélange. Farine blé complet, farine classique, petit à petit, incorporer. Fouet, mélanger. Levure chimique, mélange cinq épices (badiane, cannelle, clous de girofle, noix de muscade, vanille), ajouter. Bien mélanger."
      - "Cuisson. Lait d’avoine ou soja, margarine végétale fondue, incorporer. Mélanger."
      - "Cuisson. Moule cake, margarine végétale, graisser, fariner. Tout, verser. 170 °C environ 50 min, enfourner. Pointe couteau, planter. Ressort sèche : prêt. Tranche, déguster."
    kcal_per_serving: 187
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
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
    kcal_per_serving: 327
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: "Le froid dessèche le pain."}
  congelation: {possible: true, duree: "1 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "2 jours", note: "Sachet ou boîte, à l’abri de l’humidité."}
  rechauffage: ""
  restes: ["Tranches grillées au petit-déjeuner"]
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Pain d'épices

![[pain-depices.webp]]
**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/pain-depices]]

## Ingrédients (6 personnes)

- 1 œuf
- 30 g de cassonade
- 220 g de miel
- 150 g de farine de blé complet
- 80 g de farine de blé
- 1 sachet de levure chimique
- 10 cl de lait
- 40 g de beurre
- 3 c.à.s de mélange cinq épices

## Préparation

1. Cassez votre oeuf dans un récipient, puis ajoutez le sucre de canne et le miel.
2. Incorporez la farine de blé complet et la farine « classique » petit à petit, en mélangeant à l’aide d’un fouet. Ajoutez la levure chimique et le mélange cinq épices (badiane, cannelle, clous de girofle, noix de muscade et vanille). Mélangez bien.
3. Incorporez le lait et le beurre fondu, puis mélangez.
4. Versez le tout dans un moule à cake, préalablement beurré et fariné. Enfournez à 170°C pendant environ 50min. Vous pouvez surveillez la cuisson en plantant la pointe d’un couteau dans votre pain d’épice. Si elle ressort sèche, c’est que c’est prêt !

 
 

 
 Et voilà, il ne vous reste plus qu’à déguster une belle tranche moelleuse et parfumée de ce délicieux pain d’épices. Bon appétit !
