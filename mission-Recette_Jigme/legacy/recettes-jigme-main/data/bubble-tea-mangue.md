---
schema: recette-web-jigme/v2
slug: bubble-tea-mangue
title: Bubble tea mangue
lang: fr
description: "Bubble tea mangue : recette taïwanaise avec sachet de thé noir, graines de tapioca et sirop d'érable, pour 4 personnes. Version maison."
cuisine: taïwanaise
category: sucré
tags:
- sucré
- boisson
- thé
- mangue
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/bubble-tea-mangue.webp
  alt: Bubble tea mangue
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/bubble-tea-mangue.md
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
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: lait (de vache, soja, d'amande, etc.)
      to: lait d'avoine
      note:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
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
  Même origine taïwanaise que le bubble tea (fin des années 1980). La mangue est un
  parfum de fruit, courant dans les enseignes d’Asie de l’Est, pas une recette historique.
fun_facts:
- text: "Un smoothie mangue trop épais noie les perles : on cherche un fluide qui les laisse tomber lentement."
  source_name: Usage
  source_url:
- text: "La mangue trop mûre fermente vite : le thé se boit dans la journée."
  source_name: Usage
  source_url:
wines:
- name: Pas de vin
  producer:
  origin:
  grapes:
  award:
  why: Boisson sucrée à la mangue et aux perles. Pas d’accord vin.
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: &id001
      prep_min: 15
      cook_min: 10
      rest_min: 0
      total_min: 25
    equipment: &id002
    - casserole
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: sachet de thé noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: graines de tapioca
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: sirop d'érable
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: mangue
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: lait (de vache, soja, d'amande, etc.)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Mettez du thé noir à infuser dans de l’eau chaude.
    - Cuisson. Dans une casserole d’eau bouillante, faites cuire les graines de tapioca. Dosez selon
      l’envie, et dès que vous les voyez remonter à la surface, laissez cuire environ 4 minutes.
      Couvrez ensuite la casserole et retirez-la du feu, puis laissez reposer à nouveau 4
      à 5 minutes.
    - Cuisson. Égouttez vos graines de tapioca et rincez-les à l’eau froide. Ces petites billes ayant
      la particularité d’avoir un goût assez neutre, vous pouvez les mettre à tremper dans
      un sirop sucré (sirop simple, sirop d’érable, etc.) pour leur donner un peu plus de
      saveur.
    - Cuisson. Épluchez votre mangue, puis découpez-la en petits morceaux que vous disposez dans un
      mixeur.
    - Cuisson. Ajoutez le lait de soja dans le mixeur selon la dose souhaitée, et, pour plus de fraîcheur,
      n’hésitez pas à incorporer quelques glaçons. Mixez le tout jusqu’à obtenir une texture
      homogène.
    - Cuisson. Munissez-vous d’un grand verre. Au fond, disposez les graines de tapioca qui se sont
      bien imbibées du sirop.
    - Mélange. Ajoutez ensuite le mélange à base lait de soja et de mangue environ à mi-hauteur.
    - Finition. Enfin, versez votre thé jusqu’en haut. Mélangez le tout. Votre bubble tea est prêt !
      Dégustez-le avec une paille XXL qui laissera passer les graines de tapioca et, si vous
      n’aviez jamais goûté, laissez-vous surprendre par ce mélange aussi étonnant que délicieux
      !
    steps_niveaux:
      amateur:
      - "Préparation. Mettez du thé noir à [[infuser|infuser]] dans de l’eau chaude."
      - "Cuisson. Dans une casserole d’eau bouillante, faites cuire les graines de tapioca. Dosez selon l’envie, et dès que vous les voyez remonter à la surface, laissez cuire environ 4 minutes. Couvrez ensuite la casserole et [[hors-du-feu|retirez-la du feu]], puis laissez reposer à nouveau 4 à 5 minutes."
      - "Cuisson. Égouttez vos graines de tapioca et rincez-les à l’eau froide. Ces petites billes ayant la particularité d’avoir un goût assez neutre, vous pouvez les mettre à tremper dans un sirop sucré (sirop simple, sirop d’érable, etc.) pour leur donner un peu plus de saveur."
      - "Cuisson. Épluchez votre mangue, puis découpez-la en petits morceaux que vous disposez dans un mixeur."
      - "Cuisson. Ajoutez le lait de soja dans le mixeur selon la dose souhaitée, et, pour plus de fraîcheur, n’hésitez pas à incorporer quelques glaçons. Mixez le tout jusqu’à obtenir une texture homogène."
      - "Cuisson. Munissez-vous d’un grand verre. Au fond, disposez les graines de tapioca qui se sont bien imbibées du sirop."
      - "Mélange. Ajoutez ensuite le mélange à base lait de soja et de mangue environ à mi-hauteur."
      - "Finition. Enfin, versez votre thé jusqu’en haut. Mélangez le tout. Votre bubble tea est prêt ! Dégustez-le avec une paille XXL qui laissera passer les graines de tapioca et, si vous n’aviez jamais goûté, laissez-vous surprendre par ce mélange aussi étonnant que délicieux !"
      pro:
      - "Mettre du thé noir à infuser dans de l’eau chaude."
      - "Dans une casserole d’eau bouillante, cuire les graines de tapioca. Doser selon l’envie. Dès qu’elles remontent à la surface, cuire encore environ 4 minutes. Couvrir la casserole, retirer du feu, reposer 4 à 5 minutes."
      - "Égoutter les graines de tapioca. Rincer à l’eau froide. Tremper dans un sirop sucré (sirop simple, sirop d’érable, etc.)."
      - "Éplucher la mangue. La découper en petits morceaux. Disposer dans un mixeur."
      - "Ajouter le lait de soja dans le mixeur selon la dose souhaitée. Incorporer quelques glaçons. Mixer jusqu’à texture homogène."
      - "Prendre un grand verre. Au fond, disposer les graines de tapioca imbibées du sirop."
      - "Ajouter le mélange lait de soja et mangue environ à mi-hauteur."
      - "Verser le thé jusqu’en haut. Mélanger. Déguster avec une paille XXL qui laisse passer les graines de tapioca."
      cavernes:
      - "Préparation. Thé noir, eau chaude, infuser."
      - "Cuisson. Casserole, eau bouillante. Graines tapioca, cuire. Dose selon envie. Remontent surface, cuire environ 4 minutes. Casserole, couvrir. Hors feu. Reposer 4 à 5 minutes."
      - "Cuisson. Graines tapioca, égoutter. Eau froide, rincer. Goût assez neutre. Sirop sucré (sirop simple, sirop d’érable, etc.), tremper."
      - "Cuisson. Mangue, éplucher. Petits morceaux, découper. Mixeur, disposer."
      - "Cuisson. Lait de soja, mixeur, ajouter, selon dose souhaitée. Glaçons, incorporer. Mixer jusqu’à texture homogène."
      - "Cuisson. Grand verre. Fond, graines tapioca imbibées sirop, disposer."
      - "Mélange. Mélange lait de soja mangue, mi-hauteur, ajouter."
      - "Finition. Thé, jusqu’en haut, verser. Mélanger. Bubble tea prêt. Paille XXL, graines tapioca passent. Déguster."
    kcal_per_serving: 90
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 90
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
    - qty: 2
      unit: piece
      item: sachet de thé noir
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: graines de tapioca
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: sirop d'érable
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: mangue
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
    steps:
    - Préparation. Mettez du thé noir à infuser dans de l’eau chaude.
    - Cuisson. Dans une casserole d’eau bouillante, faites cuire les graines de tapioca. Dosez selon
      l’envie, et dès que vous les voyez remonter à la surface, laissez cuire environ 4 minutes.
      Couvrez ensuite la casserole et retirez-la du feu, puis laissez reposer à nouveau 4
      à 5 minutes.
    - Cuisson. Égouttez vos graines de tapioca et rincez-les à l’eau froide. Ces petites billes ayant
      la particularité d’avoir un goût assez neutre, vous pouvez les mettre à tremper dans
      un sirop sucré (sirop simple, sirop d’érable, etc.) pour leur donner un peu plus de
      saveur.
    - Cuisson. Épluchez votre mangue, puis découpez-la en petits morceaux que vous disposez dans un
      mixeur.
    - Cuisson. Ajoutez le lait de soja dans le mixeur selon la dose souhaitée, et, pour plus de fraîcheur,
      n’hésitez pas à incorporer quelques glaçons. Mixez le tout jusqu’à obtenir une texture
      homogène.
    - Cuisson. Munissez-vous d’un grand verre. Au fond, disposez les graines de tapioca qui se sont
      bien imbibées du sirop.
    - Mélange. Ajoutez ensuite le mélange à base lait de soja et de mangue environ à mi-hauteur.
    - Finition. Enfin, versez votre thé jusqu’en haut. Mélangez le tout. Votre bubble tea est prêt !
      Dégustez-le avec une paille XXL qui laissera passer les graines de tapioca et, si vous
      n’aviez jamais goûté, laissez-vous surprendre par ce mélange aussi étonnant que délicieux
      !
    steps_niveaux:
      amateur:
      - "Préparation. Mettez du thé noir à [[infuser|infuser]] dans de l’eau chaude."
      - "Cuisson. Dans une casserole d’eau bouillante, faites cuire les graines de tapioca. Dosez selon l’envie, et dès que vous les voyez remonter à la surface, laissez cuire environ 4 minutes. Couvrez ensuite la casserole et [[hors-du-feu|retirez-la du feu]], puis laissez reposer à nouveau 4 à 5 minutes."
      - "Cuisson. Égouttez vos graines de tapioca et rincez-les à l’eau froide. Ces petites billes ayant la particularité d’avoir un goût assez neutre, vous pouvez les mettre à tremper dans un sirop sucré (sirop simple, sirop d’érable, etc.) pour leur donner un peu plus de saveur."
      - "Cuisson. Épluchez votre mangue, puis découpez-la en petits morceaux que vous disposez dans un mixeur."
      - "Cuisson. Ajoutez le lait de soja dans le mixeur selon la dose souhaitée, et, pour plus de fraîcheur, n’hésitez pas à incorporer quelques glaçons. Mixez le tout jusqu’à obtenir une texture homogène."
      - "Cuisson. Munissez-vous d’un grand verre. Au fond, disposez les graines de tapioca qui se sont bien imbibées du sirop."
      - "Mélange. Ajoutez ensuite le mélange à base lait de soja et de mangue environ à mi-hauteur."
      - "Finition. Enfin, versez votre thé jusqu’en haut. Mélangez le tout. Votre bubble tea est prêt ! Dégustez-le avec une paille XXL qui laissera passer les graines de tapioca et, si vous n’aviez jamais goûté, laissez-vous surprendre par ce mélange aussi étonnant que délicieux !"
      pro:
      - "Mettre du thé noir à infuser dans de l’eau chaude."
      - "Dans une casserole d’eau bouillante, cuire les graines de tapioca. Doser selon l’envie. Dès qu’elles remontent à la surface, cuire encore environ 4 minutes. Couvrir la casserole, retirer du feu, reposer 4 à 5 minutes."
      - "Égoutter les graines de tapioca. Rincer à l’eau froide. Tremper dans un sirop sucré (sirop simple, sirop d’érable, etc.)."
      - "Éplucher la mangue. La découper en petits morceaux. Disposer dans un mixeur."
      - "Ajouter le lait de soja dans le mixeur selon la dose souhaitée. Incorporer quelques glaçons. Mixer jusqu’à texture homogène."
      - "Prendre un grand verre. Au fond, disposer les graines de tapioca imbibées du sirop."
      - "Ajouter le mélange lait de soja et mangue environ à mi-hauteur."
      - "Verser le thé jusqu’en haut. Mélanger. Déguster avec une paille XXL qui laisse passer les graines de tapioca."
      cavernes:
      - "Préparation. Thé noir, eau chaude, infuser."
      - "Cuisson. Casserole, eau bouillante. Graines tapioca, cuire. Dose selon envie. Remontent surface, cuire environ 4 minutes. Casserole, couvrir. Hors feu. Reposer 4 à 5 minutes."
      - "Cuisson. Graines tapioca, égoutter. Eau froide, rincer. Goût assez neutre. Sirop sucré (sirop simple, sirop d’érable, etc.), tremper."
      - "Cuisson. Mangue, éplucher. Petits morceaux, découper. Mixeur, disposer."
      - "Cuisson. Lait de soja, mixeur, ajouter, selon dose souhaitée. Glaçons, incorporer. Mixer jusqu’à texture homogène."
      - "Cuisson. Grand verre. Fond, graines tapioca imbibées sirop, disposer."
      - "Mélange. Mélange lait de soja mangue, mi-hauteur, ajouter."
      - "Finition. Thé, jusqu’en haut, verser. Mélanger. Bubble tea prêt. Paille XXL, graines tapioca passent. Déguster."
    kcal_per_serving: 90
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 90
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
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

# Bubble tea mangue

![[bubble-tea-mangue.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/bubble-tea-mangue]]

## Ingrédients (4 personnes)

- 2 sachet de thé noir
- 120 g de graines de tapioca
- 10 cl de sirop d'érable
- 1 mangue
- 20 cl de lait (de vache, soja, d'amande, etc.)

## Préparation

1. Mettez du thé noir à infuser dans de l’eau chaude.
2. Dans une casserole d’eau bouillante, faites cuire les graines de tapioca. Dosez selon l’envie, et dès que vous les voyez remonter à la surface, laissez cuire environ 4 minutes. Couvrez ensuite la casserole et retirez-la du feu, puis laissez reposer à nouveau 4 à 5 minutes.
3. Égouttez vos graines de tapioca et rincez-les à l’eau froide. Ces petites billes ayant la particularité d’avoir un goût assez neutre, vous pouvez les mettre à tremper dans un sirop sucré (sirop simple, sirop d’érable, etc.) pour leur donner un peu plus de saveur.
4. Épluchez votre mangue, puis découpez-la en petits morceaux que vous disposez dans un mixeur.
5. Ajoutez le lait de soja dans le mixeur selon la dose souhaitée, et, pour plus de fraîcheur, n’hésitez pas à incorporer quelques glaçons. Mixez le tout jusqu’à obtenir une texture homogène.
6. Munissez-vous d’un grand verre. Au fond, disposez les graines de tapioca qui se sont bien imbibées du sirop.
7. Ajoutez ensuite le mélange à base lait de soja et de mangue environ à mi-hauteur.
8. Enfin, versez votre thé jusqu’en haut. Mélangez le tout.

 
 

 
 Votre bubble tea est prêt ! Dégustez-le avec une paille XXL qui laissera passer les graines de tapioca et, si vous n’aviez jamais goûté, laissez-vous surprendre par ce mélange aussi étonnant que délicieux !
