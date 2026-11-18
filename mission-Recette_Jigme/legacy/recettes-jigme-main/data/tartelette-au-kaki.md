---
schema: recette-web-jigme/v2
slug: tartelette-au-kaki
title: Tartelette au kaki
lang: fr
description: "Tartelette au kaki : recette française avec kaki, sucre et beurre, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- tartelette
- kaki
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tartelette-au-kaki.jpg
  alt: Tartelette au kaki
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/tartelette-au-kaki.md
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
histoire: >
  Le kaki, fruit du plaqueminier, est originaire de Chine. On le dit souvent fruit
  national du Japon — et aussi de Corée — où on le cultive depuis longtemps. L’Europe
  le découvre au XIXe siècle : les premiers fruits à Paris vers 1873, les premiers
  arbres acclimatés à Toulon. Il mûrit tard, quand les autres fruits se font rares.
  Trop ferme, il astringe ; trop mûr, il se répand en purée. Posé sur une pâte sablée
  à la française, il donne une tartelette d’automne entre Orient et pâtisserie classique —
  pas une recette historique cataloguée.
fun_facts:
- text: >
    Originaire de l’est de la Chine, le kaki est présenté comme fruit national du Japon
    et de la Corée. En France, les premiers plaqueminiers ont été acclimatés à Toulon.
  source_name: Gerbeaud, le kaki
  source_url: https://www.gerbeaud.com/fruit-legume-de-saison/kaki-fruit.php
- text: >
    Sa consommation en Europe se développe à la fin du XIXe siècle, avec le japonisme :
    en 1873, les premiers kakis arrivent à Paris.
  source_name: Réussir Fruits & Légumes, le kaki
  source_url: https://www.reussir.fr/fruits-legumes/le-kaki-un-superfruit-mediterraneen
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: Layon, Loire
  grapes: chenin
  award:
  why: Chenin — le kaki sucré, acidité de Loire.
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: Muscat doux — le fruit, sans un vin tannique.
- name: Jurançon
  producer: Clos Lapeyre
  origin: Jurançon, Béarn
  grapes: petit manseng
  award:
  why: Agrume, miel — le kaki, sans un prestige.
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
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 20
      rest_min: 0
      total_min: 80
    equipment: &id002
    - four
    - poids pour cuisson à blanc
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: kaki
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cannelle en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: œuf entier pour la dorure
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Préparez, abaissez dans votre plat et foncez la pâte à tarte. Cuisez la à blanc avec
      un peu de papier cuisson et des poids à 180°C pendant une quinzaine de minute. Puis
      retirez le papier cuisson et les poids pour laisser cuire 2 minutes de plus afin d’assécher
      le fond de la pâte.
    - Cuisson. Préparez une compote de kakis. Pour cela, coupez grossièrement 1 kaki et faites le revenir
      dans un peu de beurre avec du sucre et de la cannelle en poudre. Laissez compoter en
      mélangeant régulièrement pendant une trentaine quarantaine de minute. Rajoutez un peu
      d’eau si jamais cela s’assèche un peu.
    - 'Cuisson. Préparez toutes vos découpes : émincez les Kakis.'
    - Mélange. Cassez un œuf entier et mélangez-le. Appliquez la dorure sur les bords de la tarte.
    - 'Finition. Il ne reste plus qu’à passer à l’assemblage : un peu de compote (qui a eu le temps
      de refroidir un peu) dans le fond de la pâte à tarte, puis disposez les tranches de
      Kakis. Enfournez une bonne vingtaine de minutes à 180°C. Et voilà, simple, rapide, efficace
      !'
    steps_niveaux:
      amateur:
      - "Préparation. Préparez, abaissez dans votre plat et [[foncer|foncez]] la pâte à tarte. Cuisez-la à blanc avec un peu de papier cuisson et des poids à 180°C pendant une quinzaine de minute. Puis retirez le papier cuisson et les poids pour laisser cuire 2 minutes de plus afin d’assécher le fond de la pâte."
      - "Cuisson. Préparez une compote de kakis. Pour cela, coupez grossièrement 1 kaki et faites-le revenir dans un peu de beurre avec du sucre et de la cannelle en poudre. Laissez compoter en mélangeant régulièrement pendant une trentaine quarantaine de minute. Rajoutez un peu d’eau si jamais cela s’assèche un peu."
      - "Cuisson. Préparez toutes vos découpes : émincez les kakis."
      - "Mélange. Cassez un œuf entier et mélangez-le. Appliquez la dorure sur les bords de la tarte."
      - "Finition. Passez à l’assemblage : un peu de compote (qui a eu le temps de refroidir un peu) dans le fond de la pâte à tarte, puis disposez les tranches de kakis. Enfournez une bonne vingtaine de minutes à 180°C."
      pro:
      - "Préparer, abaisser dans le plat et foncer la pâte à tarte. Cuire à blanc avec un peu de papier cuisson et des poids à 180°C pendant une quinzaine de minute. Retirer le papier et les poids, laisser cuire 2 minutes de plus afin d’assécher le fond."
      - "Préparer une compote de kakis : couper grossièrement 1 kaki, le faire revenir dans un peu de beurre avec du sucre et de la cannelle en poudre. Laisser compoter en mélangeant régulièrement pendant une trentaine quarantaine de minute. Rajouter un peu d’eau si cela s’assèche."
      - "Émincer les kakis."
      - "Casser un œuf entier et le mélanger. Appliquer la dorure sur les bords de la tarte."
      - "Assembler : un peu de compote (refroidie un peu) dans le fond de la pâte, puis disposer les tranches de kakis. Enfourner une bonne vingtaine de minutes à 180°C."
      cavernes:
      - "Préparation. Pâte tarte, plat, abaisser, foncer. Blanc, papier cuisson, poids, 180°C, quinzaine min. Papier, poids, retirer. 2 min de plus, fond, assécher."
      - "Cuisson. Compote kakis. 1 kaki, gros, couper. Beurre, sucre, cannelle poudre, revenir. Trentaine quarantaine min, mélange, compoter. Si sèche : peu eau."
      - "Cuisson. Kakis, émincer."
      - "Mélange. Œuf entier, casser, mélanger. Dorure, bords tarte."
      - "Finition. Compote peu froide, fond pâte. Tranches kakis, disposer. Four 180°C, bonne vingtaine min."
    kcal_per_serving: 120
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
    kcal_per_serving: 120
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
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: kaki
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: cannelle en poudre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: lait d'avoine
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Préparez, abaissez dans votre plat et foncez la pâte à tarte. Cuisez la à blanc avec
      un peu de papier cuisson et des poids à 180°C pendant une quinzaine de minute. Puis
      retirez le papier cuisson et les poids pour laisser cuire 2 minutes de plus afin d’assécher
      le fond de la pâte.
    - Cuisson. Préparez une compote de kakis. Pour cela, coupez grossièrement 1 kaki et faites le revenir
      dans un peu de margarine végétale avec du sucre et de la cannelle en poudre.
      Laissez compoter en mélangeant régulièrement pendant une trentaine quarantaine de minute.
      Rajoutez un peu d’eau si jamais cela s’assèche un peu.
    - 'Cuisson. Préparez toutes vos découpes : émincez les Kakis.'
    - Mélange. Mélangez un peu de lait d’avoine ou de soja avec une pincée de sucre. Appliquez cette dorure végétale sur les bords de la tarte.
    - 'Finition. Il ne reste plus qu’à passer à l’assemblage : un peu de compote (qui a eu le temps
      de refroidir un peu) dans le fond de la pâte à tarte, puis disposez les tranches de
      Kakis. Enfournez une bonne vingtaine de minutes à 180°C. Et voilà, simple, rapide, efficace
      !'
    steps_niveaux:
      amateur:
      - "Préparation. Préparez, abaissez dans votre plat et [[foncer|foncez]] la pâte à tarte. Cuisez-la à blanc avec un peu de papier cuisson et des poids à 180°C pendant une quinzaine de minute. Puis retirez le papier cuisson et les poids pour laisser cuire 2 minutes de plus afin d’assécher le fond de la pâte."
      - "Cuisson. Préparez une compote de kakis. Pour cela, coupez grossièrement 1 kaki et faites-le revenir dans un peu de margarine végétale avec du sucre et de la cannelle en poudre. Laissez compoter en mélangeant régulièrement pendant une trentaine quarantaine de minute. Rajoutez un peu d’eau si jamais cela s’assèche un peu."
      - "Cuisson. Préparez toutes vos découpes : émincez les kakis."
      - "Mélange. Mélangez un peu de lait d’avoine ou de soja avec une pincée de sucre. Appliquez cette dorure végétale sur les bords de la tarte."
      - "Finition. Passez à l’assemblage : un peu de compote (qui a eu le temps de refroidir un peu) dans le fond de la pâte à tarte, puis disposez les tranches de kakis. Enfournez une bonne vingtaine de minutes à 180°C."
      pro:
      - "Préparer, abaisser dans le plat et foncer la pâte à tarte. Cuire à blanc avec un peu de papier cuisson et des poids à 180°C pendant une quinzaine de minute. Retirer le papier et les poids, laisser cuire 2 minutes de plus afin d’assécher le fond."
      - "Préparer une compote de kakis : couper grossièrement 1 kaki, le faire revenir dans un peu de margarine végétale avec du sucre et de la cannelle en poudre. Laisser compoter en mélangeant régulièrement pendant une trentaine quarantaine de minute. Rajouter un peu d’eau si cela s’assèche."
      - "Émincer les kakis."
      - "Mélanger un peu de lait d’avoine ou de soja avec une pincée de sucre. Appliquer cette dorure végétale sur les bords de la tarte."
      - "Assembler : un peu de compote (refroidie un peu) dans le fond de la pâte, puis disposer les tranches de kakis. Enfourner une bonne vingtaine de minutes à 180°C."
      cavernes:
      - "Préparation. Pâte tarte, plat, abaisser, foncer. Blanc, papier cuisson, poids, 180°C, quinzaine min. Papier, poids, retirer. 2 min de plus, fond, assécher."
      - "Cuisson. Compote kakis. 1 kaki, gros, couper. Margarine végétale, sucre, cannelle poudre, revenir. Trentaine quarantaine min, mélange, compoter. Si sèche : peu eau."
      - "Cuisson. Kakis, émincer."
      - "Mélange. Peu lait avoine ou soja, pincée sucre, mélanger. Dorure végétale, bords tarte."
      - "Finition. Compote peu froide, fond pâte. Tranches kakis, disposer. Four 180°C, bonne vingtaine min."
    kcal_per_serving: 120
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
    kcal_per_serving: 120
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
  vegan:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
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

# Tartelette au kaki
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/tartelette-au-kaki]]

## Ingrédients (4 personnes)

- 4 kaki
- 80 g de sucre
-  beurre
-  cannelle en poudre
-  œuf entier pour la dorure

## Préparation

1. Préparez, abaissez dans votre plat et foncez la pâte à tarte. Cuisez la à blanc avec un peu de papier cuisson et des poids à 180°C pendant une quinzaine de minute. Puis retirez le papier cuisson et les poids pour laisser cuire 2 minutes de plus afin d’assécher le fond de la pâte.
2. Préparez une compote de kakis. Pour cela, coupez grossièrement 1 kaki et faites le revenir dans un peu de beurre avec du sucre et de la cannelle en poudre. Laissez compoter en mélangeant régulièrement pendant une trentaine quarantaine de minute. Rajoutez un peu d’eau si jamais cela s’assèche un peu.
3. Préparez toutes vos découpes : émincez les Kakis.
4. Cassez un œuf entier et mélangez-le. Appliquez la dorure sur les bords de la tarte.
5. Il ne reste plus qu’à passer à l’assemblage : un peu de compote (qui a eu le temps de refroidir un peu) dans le fond de la pâte à tarte, puis disposez les tranches de Kakis.  Enfournez une bonne vingtaine de minutes à 180°C.

 
 

 
 Et voilà, simple, rapide, efficace !
