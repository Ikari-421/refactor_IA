---
schema: recette-web-jigme/v2
slug: pate-sablee
title: Pâte sablée
lang: fr
description: "Pâte sablée : recette française avec farine, beurre ramoli et sucre en poudre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- pâte
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/pate-sablee.jpg
  alt: Pâte sablée
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pate-sablee.md
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
histoire: 'Pâte sablée : farine, beurre, sucre, souvent jaune d’œuf. Plus sucrée qu’une brisée, texture
  de sablé, sablage du beurre froid dans la farine. Fonds de tartes sucrées. Pas un plat.

  '
fun_facts:
- text: >
    Le sablage enrobe les grains de farine : après cuisson ils ne sont pas
    solidaires, d’où le sablé.
  source_name: Grokipedia, Sablé (biscuit)
  source_url: https://grokipedia.com/page/Sabl%C3%A9_(biscuit)
- text: >
    Trop travaillée, elle se rétracte ; trop chaude, elle fuit au four.
  source_name: Usage
  source_url:
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: "C’est une pâte, pas un plat : pas d’accord vin."
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
      cook_min: 0
      rest_min: 0
      total_min: 20
    equipment: &id002
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: beurre ramoli
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Mélange. Dans un saladier, versez la farine, le beurre et le sel et mélangez avec vos doigts
      jusqu’à obtention d’une texture « sablonneuse ».
    - Cuisson. Ensuite faites un puit au milieu de votre préparation puis versez le sucre et cassez
      un œuf. Placez votre doigt au centre de votre préparation et mélangez, en faisant des
      petits tourbillons, tout en raclant les bords de votre texture « sablonneuse » pour
      l’incorporer tout doucement. Vous obtenez à la fin une pâte homogène. Si vous avez encore
      un peu de morceaux de pâte sur vos doigts, mettez un peu de farine au creux de votre
      main.
    - Finition. Il s’agit maintenant de fleurer votre table (disposez un peu de farine sur votre plan
      de travail) et de fraiser votre pâte (c’est-à-dire qu’il faut que écrasiez votre pâte
      en la poussant vers l’extérieur et la reprendre dans vos main pour re faire une boule
      puis l’écraser, la reprendre et ains de suite) pour écraser les petits morceaux de beurre.
      Vous pouvez dès à présent préparer votre tarte préférée, sucrée ou salée ! N’oubliez
      pas de pré-cuire votre fond de tarte avant de la garnir, ce sera meilleur. Vous pouvez
      également ne pas la faire pré-cuire.
    steps_niveaux:
      amateur:
      - "Mélange. Dans un saladier, versez la farine, le beurre et le sel et mélangez avec vos doigts jusqu’à obtention d’une texture sablonneuse."
      - "Cuisson. Faites un puit au milieu de votre préparation, versez le sucre et cassez un œuf. Placez votre doigt au centre et mélangez en petits tourbillons, tout en raclant les bords de la texture sablonneuse pour l’incorporer tout doucement, jusqu’à une pâte homogène. S’il reste un peu de morceaux de pâte sur vos doigts, mettez un peu de farine au creux de votre main."
      - "Finition. Fleurez votre table (disposez un peu de farine sur votre plan de travail) et fraisez votre pâte : écrasez-la en la poussant vers l’extérieur, reprenez-la dans vos mains pour refaire une boule, puis écrasez, reprenez, et ainsi de suite, pour écraser les petits morceaux de beurre. Vous pouvez pré-cuire votre fond de tarte avant de le garnir, ou ne pas le faire pré-cuire."
      pro:
      - "Farine, beurre, sel dans un saladier. Mélanger du bout des doigts jusqu’à texture sablonneuse."
      - "Puit au centre. Verser le sucre, casser un œuf. Mélanger du doigt en petits tourbillons en raclant les bords, jusqu’à pâte homogène. Farine au creux de la main si pâte aux doigts."
      - "Fleurer le plan. Fraiser : écraser en poussant vers l’extérieur, ramener en boule, recommencer, pour écraser les morceaux de beurre. Fond de tarte : pré-cuire avant garnir, ou non."
      cavernes:
      - "Mélange. Saladier. Farine, beurre, sel, verser. Doigts, mélanger. Texture sablonneuse."
      - "Cuisson. Puit milieu. Sucre, verser. Œuf, casser. Doigt centre. Petits tourbillons, mélanger. Bords, racler, incorporer doucement. Pâte homogène. Morceaux pâte doigts : peu farine, creux main."
      - "Finition. Table, fleurer (peu farine plan travail). Pâte, fraiser : écraser, pousser extérieur, reprendre mains, boule, encore. Petits morceaux beurre, écraser. Fond tarte : pré-cuire avant garnir, ou pas."
    kcal_per_serving: 600
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
    kcal_per_serving: 600
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
    - qty: 250
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: sucre en poudre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
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
    steps:
    - Mélange. Dans un saladier, versez la farine, la margarine végétale et le sel et mélangez avec vos doigts
      jusqu’à obtention d’une texture « sablonneuse ».
    - Cuisson. Ensuite faites un puit au milieu de votre préparation puis versez le sucre et cassez
      un œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux. Placez votre doigt
      au centre de votre préparation et mélangez, en faisant des petits tourbillons, tout
      en raclant les bords de votre texture « sablonneuse » pour l’incorporer tout doucement.
      Vous obtenez à la fin une pâte homogène. Si vous avez encore un peu de morceaux de pâte
      sur vos doigts, mettez un peu de farine au creux de votre main.
    - Finition. Il s’agit maintenant de fleurer votre table (disposez un peu de farine sur votre plan
      de travail) et de fraiser votre pâte (c’est-à-dire qu’il faut que écrasiez votre pâte
      en la poussant vers l’extérieur et la reprendre dans vos main pour re faire une boule
      puis l’écraser, la reprendre et ains de suite) pour écraser les petits morceaux de margarine végétale.
      Vous pouvez dès à présent préparer votre tarte préférée, sucrée ou salée ! N’oubliez
      pas de pré-cuire votre fond de tarte avant de la garnir, ce sera meilleur. Vous pouvez
      également ne pas la faire pré-cuire.
    steps_niveaux:
      amateur:
      - "Mélange. Dans un saladier, versez la farine, la margarine végétale et le sel et mélangez avec vos doigts jusqu’à obtention d’une texture sablonneuse."
      - "Cuisson. Faites un puit au milieu de votre préparation, versez le sucre et cassez un œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux. Placez votre doigt au centre et mélangez en petits tourbillons, tout en raclant les bords de la texture sablonneuse pour l’incorporer tout doucement, jusqu’à une pâte homogène. S’il reste un peu de morceaux de pâte sur vos doigts, mettez un peu de farine au creux de votre main."
      - "Finition. Fleurez votre table (disposez un peu de farine sur votre plan de travail) et fraisez votre pâte : écrasez-la en la poussant vers l’extérieur, reprenez-la dans vos mains pour refaire une boule, puis écrasez, reprenez, et ainsi de suite, pour écraser les petits morceaux de margarine végétale. Vous pouvez pré-cuire votre fond de tarte avant de le garnir, ou ne pas le faire pré-cuire."
      pro:
      - "Farine, margarine végétale, sel dans un saladier. Mélanger du bout des doigts jusqu’à texture sablonneuse."
      - "Puit au centre. Verser le sucre, casser un œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux. Mélanger du doigt en petits tourbillons en raclant les bords, jusqu’à pâte homogène. Farine au creux de la main si pâte aux doigts."
      - "Fleurer le plan. Fraiser : écraser en poussant vers l’extérieur, ramener en boule, recommencer, pour écraser les morceaux de margarine végétale. Fond de tarte : pré-cuire avant garnir, ou non."
      cavernes:
      - "Mélange. Saladier. Farine, margarine végétale, sel, verser. Doigts, mélanger. Texture sablonneuse."
      - "Cuisson. Puit milieu. Sucre, verser. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux, casser. Doigt centre. Petits tourbillons, mélanger. Bords, racler, incorporer doucement. Pâte homogène. Morceaux pâte doigts : peu farine, creux main."
      - "Finition. Table, fleurer (peu farine plan travail). Pâte, fraiser : écraser, pousser extérieur, reprendre mains, boule, encore. Petits morceaux margarine végétale, écraser. Fond tarte : pré-cuire avant garnir, ou pas."
    kcal_per_serving: 380
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
    kcal_per_serving: 600
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "film alimentaire", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Pâte sablée
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/pate-sablee.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/pate-sablee]]

## Ingrédients (4 personnes)

- 250 g de farine
- 125 g de beurre ramoli
- 125 g de sucre en poudre
- 1 pincée de sel
- 1 œuf

## Préparation

1. Dans un saladier, versez la farine, le beurre et le sel et mélangez avec vos doigts jusqu’à obtention d’une texture « sablonneuse ».
2. Ensuite faites un puit au milieu de votre préparation puis versez le sucre et cassez un œuf. Placez votre doigt au centre de votre préparation et mélangez, en faisant des petits tourbillons, tout en raclant les bords de votre texture « sablonneuse » pour l’incorporer tout doucement.

Vous obtenez à la fin une pâte homogène. Si vous avez encore un peu de morceaux de pâte sur vos doigts, mettez un peu de farine au creux de votre main.
3. Il s’agit maintenant de fleurer votre table (disposez un peu de farine sur votre plan de travail) et de fraiser votre pâte (c’est-à-dire qu’il faut que écrasiez votre pâte en la poussant vers l’extérieur et la reprendre dans vos main pour re faire une boule puis l’écraser, la reprendre et ains de suite) pour écraser les petits morceaux de beurre.

 
 

 
 Vous pouvez dès à présent préparer votre tarte préférée, sucrée ou salée ! N’oubliez pas de pré-cuire votre fond de tarte avant de la garnir, ce sera meilleur. Vous pouvez également ne pas la faire pré-cuire.
