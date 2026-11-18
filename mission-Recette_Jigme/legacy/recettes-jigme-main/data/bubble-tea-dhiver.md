---
schema: recette-web-jigme/v2
slug: bubble-tea-dhiver
title: Bubble tea d'hiver
lang: fr
description: "Bubble tea d'hiver : recette taïwanaise avec lait, thé de noël et perle/bille de tapioca, pour 4 personnes. Version maison."
cuisine: taïwanaise
category: sucré
tags:
- sucré
- dessert
- boisson
- hiver
- thé
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/bubble-tea-dhiver.webp
  alt: Bubble tea d'hiver
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/bubble-tea-dhiver.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - soja
    swaps:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : lait d''avoine ou soja → lait d''avoine.'
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
  Le bubble tea (thé aux perles de tapioca) naît à Taïwan à la fin des années 1980
  (Tchun Shui Tang et autres enseignes se le disputent). La version « d’hiver » (thé
  chaud, épices) est une adaptation, pas le canon taïwanais glacé.
fun_facts:
- text: "Les perles (boba) sont de la fécule de manioc cuite dans un sirop ; trop à l’avance, elles durcissent."
  source_name: Usage taïwanais
  source_url:
- text: "Ce n’est pas un cocktail : thé, lait ou non, sucre, perles."
  source_name: Usage
  source_url:
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: Boisson sucrée au thé et au tapioca, déjà sucrée et lactée. Un vin n’a pas de place à côté.
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
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 30
      rest_min: 0
      total_min: 60
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 800
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cac
      item: thé de noël (thé épicé)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: perle/bille de tapioca
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: miel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Versez vos perles de tapioca dans de l’eau bouillante. Une fois qu’elles remontent à
      la surface, couvrez et laissez cuire encore environ 4 minutes.
    - Cuisson. Dans une seconde casserole, faites chauffer le lait avec le contenu d’une gousse de
      vanille. Vous pouvez également mettre de l’eau à chauffer pour faire infuser votre thé
      de Noël (idéalement, un thé assez épicé).
    - Cuisson. Une fois cuites, égouttez vos billes de tapioca et placez-les au fond de votre verre.
      Ces perles ont un goût neutre, on vous conseille donc de rajouter du miel généreusement.
    - Finition. Versez le thé infusé environ jusqu’à la moitié du verre, puis complétez avec le lait
      à la vanille. Mélangez délicatement et dégustez bien chaud. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez vos perles de tapioca dans de l’eau bouillante. Une fois qu’elles remontent à la surface, couvrez et laissez cuire encore environ 4 minutes."
      - "Cuisson. Dans une seconde casserole, faites chauffer le lait avec le contenu d’une gousse de vanille. Vous pouvez également mettre de l’eau à chauffer pour faire [[infuser|infuser]] votre thé de Noël (idéalement, un thé assez épicé)."
      - "Cuisson. Une fois cuites, égouttez vos billes de tapioca et placez-les au fond de votre verre. Ces perles ont un goût neutre, on vous conseille donc de rajouter du miel généreusement."
      - "Finition. Versez le thé [[infuser|infusé]] environ jusqu’à la moitié du verre, puis complétez avec le lait à la vanille. Mélangez délicatement et dégustez bien chaud. Bon appétit !"
      pro:
      - "Verser les perles de tapioca dans de l’eau bouillante. Une fois qu’elles remontent à la surface, couvrir. Cuire encore environ 4 minutes."
      - "Dans une seconde casserole, chauffer le lait avec le contenu d’une gousse de vanille. Mettre également de l’eau à chauffer pour infuser le thé de Noël (idéalement un thé assez épicé)."
      - "Égoutter les billes de tapioca. Les placer au fond du verre. Rajouter du miel généreusement (goût neutre des perles)."
      - "Verser le thé infusé environ jusqu’à la moitié du verre. Compléter avec le lait à la vanille. Mélanger délicatement. Déguster bien chaud."
      cavernes:
      - "Préparation. Perles tapioca, eau bouillante, verser. Remontent surface, couvrir. Cuire encore environ 4 minutes."
      - "Cuisson. Seconde casserole. Lait, contenu gousse vanille, chauffer. Eau, chauffer. Thé de Noël, infuser (idéalement thé assez épicé)."
      - "Cuisson. Cuites, billes tapioca, égoutter. Fond verre, placer. Goût neutre, miel généreusement."
      - "Finition. Thé infusé, jusqu’à moitié verre, verser. Lait vanille, compléter. Mélanger délicatement. Déguster chaud. Bon appétit !"
    kcal_per_serving: 148
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 148
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
    - qty: 800
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cac
      item: thé de noël (thé épicé)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: perle/bille de tapioca
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sirop d'érable ou agave
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Versez vos perles de tapioca dans de l’eau bouillante. Une fois qu’elles remontent à
      la surface, couvrez et laissez cuire encore environ 4 minutes.
    - Cuisson. Dans une seconde casserole, faites chauffer le lait d'avoine ou soja avec le contenu
      d’une gousse de vanille. Vous pouvez également mettre de l’eau à chauffer pour faire
      infuser votre thé de Noël (idéalement, un thé assez épicé).
    - Cuisson. Une fois cuites, égouttez vos billes de tapioca et placez-les au fond de votre verre.
      Ces perles ont un goût neutre, on vous conseille donc de rajouter du sirop d'érable
      ou agave généreusement.
    - Finition. Versez le thé infusé environ jusqu’à la moitié du verre, puis complétez avec le lait
      d'avoine ou soja à la vanille. Mélangez délicatement et dégustez bien chaud. Bon appétit
      !
    steps_niveaux:
      amateur:
      - "Préparation. Versez vos perles de tapioca dans de l’eau bouillante. Une fois qu’elles remontent à la surface, couvrez et laissez cuire encore environ 4 minutes."
      - "Cuisson. Dans une seconde casserole, faites chauffer le lait d’avoine ou soja avec le contenu d’une gousse de vanille. Vous pouvez également mettre de l’eau à chauffer pour faire [[infuser|infuser]] votre thé de Noël (idéalement, un thé assez épicé)."
      - "Cuisson. Une fois cuites, égouttez vos billes de tapioca et placez-les au fond de votre verre. Ces perles ont un goût neutre, on vous conseille donc de rajouter du sirop d’érable ou agave généreusement."
      - "Finition. Versez le thé [[infuser|infusé]] environ jusqu’à la moitié du verre, puis complétez avec le lait d’avoine ou soja à la vanille. Mélangez délicatement et dégustez bien chaud. Bon appétit !"
      pro:
      - "Verser les perles de tapioca dans de l’eau bouillante. Une fois qu’elles remontent à la surface, couvrir. Cuire encore environ 4 minutes."
      - "Dans une seconde casserole, chauffer le lait d’avoine ou soja avec le contenu d’une gousse de vanille. Mettre également de l’eau à chauffer pour infuser le thé de Noël (idéalement un thé assez épicé)."
      - "Égoutter les billes de tapioca. Les placer au fond du verre. Rajouter du sirop d’érable ou agave généreusement (goût neutre des perles)."
      - "Verser le thé infusé environ jusqu’à la moitié du verre. Compléter avec le lait d’avoine ou soja à la vanille. Mélanger délicatement. Déguster bien chaud."
      cavernes:
      - "Préparation. Perles tapioca, eau bouillante, verser. Remontent surface, couvrir. Cuire encore environ 4 minutes."
      - "Cuisson. Seconde casserole. Lait d’avoine ou soja, contenu gousse vanille, chauffer. Eau, chauffer. Thé de Noël, infuser (idéalement thé assez épicé)."
      - "Cuisson. Cuites, billes tapioca, égoutter. Fond verre, placer. Goût neutre, sirop d’érable ou agave généreusement."
      - "Finition. Thé infusé, jusqu’à moitié verre, verser. Lait d’avoine ou soja vanille, compléter. Mélanger délicatement. Déguster chaud. Bon appétit !"
    kcal_per_serving: 148
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
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 148
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
  vegan:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
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

# Bubble tea d'hiver

![[bubble-tea-dhiver.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/bubble-tea-dhiver]]

## Ingrédients (4 personnes)

- 80 cl de lait
- 4 c.à.c de thé de noël (thé épicé)
- 120 g de perle/bille de tapioca
- 1 gousse de vanille
-  miel

## Préparation

1. Versez vos perles de tapioca dans de l’eau bouillante. Une fois qu’elles remontent à la surface, couvrez et laissez cuire encore environ 4 minutes.
2. Dans une seconde casserole, faites chauffer le lait avec le contenu d’une gousse de vanille. Vous pouvez également mettre de l’eau à chauffer pour faire infuser votre thé de Noël (idéalement, un thé assez épicé).
3. Une fois cuites, égouttez vos billes de tapioca et placez-les au fond de votre verre. Ces perles ont un goût neutre, on vous conseille donc de rajouter du miel généreusement.
4. Versez le thé infusé environ jusqu’à la moitié du verre, puis complétez avec le lait à la vanille.

 
 

 
 Mélangez délicatement et dégustez bien chaud. Bon appétit !
