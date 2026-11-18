---
schema: recette-web-jigme/v2
slug: fraises-au-mascarpone
title: Fraises au mascarpone
lang: fr
description: "Fraises au mascarpone : recette italienne avec fraises, mascarpone et crème liquide, pour 4 personnes. Version maison. Facile à suivre."
cuisine: italienne
category: sucré
tags:
- sucré
- dessert
- fruits
- végétarien
- rapide
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/fraises-au-mascarpone.webp
  alt: Fraises au mascarpone
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/fraises-au-mascarpone.md
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
    - from: mascarpone
      to: fromage frais sans lactose
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
    - from: mascarpone végétal (cajou)
      to: graines de tournesol
      note:
    note: 'Fruits à coque : mascarpone végétal (cajou) → graines de tournesol.'
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine.'
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
histoire: 'Fraises et crème de mascarpone. Le mascarpone est une crème acide-chaude de Lombardie. Le montage
  en ramequin est un dessert de maison, cousin du tiramisu sans café ni biscuit, sans date d’auteur.

  '
fun_facts:
- text: "Le mascarpone se fait par coagulation acide-chaleur de la crème, sans présure."
  source_name: Wikipedia, Mascarpone
  source_url: https://en.wikipedia.org/wiki/Mascarpone
- text: "Des fraises trop juteuses détrempent la crème ; on les égoutte ou on les couche au dernier moment."
  source_name: Usage
  source_url:
wines:
- name: Moscato d'Asti
  producer: Michele Chiarlo
  origin: Asti, Piémont
  grapes: moscato bianco
  award:
  why: Bulles douces, fleur — la fraise et le mascarpone, même région que le fromage.
- name: Clairette de Die
  producer: Jaillance
  origin: Die, Drôme
  grapes: muscat, clairette
  award:
  why: Raisin, bulles — plus léger qu’un liquoreux sur la crème.
- name: Coteaux du Layon
  producer: Domaine Ogereau
  origin: Saint-Lambert-du-Lattay, Anjou
  grapes: chenin blanc
  award:
  why: Pomme, miel — la fraise mûre, un chenin moelleux.
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
      prep_min: 15
      cook_min: 0
      rest_min: 0
      total_min: 15
    equipment: &id002
    - saladier
    - fouet
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: fraises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: mascarpone
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la vanille
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Coupez les fraises. Dans un saladier, mélangez le mascarpone, la crème liquide, la vanille
      et le sucre et battez le tout.
    - Finition. Mettez quelques fraises dans le fond des ramequins, recouvrez du mélange crème/mascarpone.
      Rajoutez des fraises et à nouveau le mélange crème/mascarpone. Finissez par des fraises
      sur le dessus pour la décoration et du chocolat râpé selon l’envie. C’est déjà prêt,
      régalez-vous !
    steps_niveaux:
      amateur:
      - "Coupez les fraises. Dans un saladier, mélangez le mascarpone, la crème liquide, la vanille et le sucre et battez le tout."
      - "Finition. Mettez quelques fraises dans le fond des ramequins, recouvrez du mélange crème/mascarpone. Rajoutez des fraises et à nouveau le mélange crème/mascarpone. Finissez par des fraises sur le dessus pour la décoration et du chocolat râpé selon l’envie."
      pro:
      - "Couper les fraises. Dans un saladier, mélanger le mascarpone, la crème liquide, la vanille et le sucre, puis battre."
      - "Finition. Disposer quelques fraises au fond des ramequins, recouvrir du mélange crème/mascarpone. Rajouter des fraises puis à nouveau le mélange. Terminer par des fraises sur le dessus et du chocolat râpé selon l’envie."
      cavernes:
      - "Fraises, couper. Mascarpone, crème liquide, vanille, sucre, saladier, mélanger. Battre."
      - "Finition. Fraises, fond ramequins. Mélange crème mascarpone, recouvrir. Fraises, rajouter. Mélange, encore. Fraises dessus, déco. Chocolat râpé, selon envie."
    kcal_per_serving: 280
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
    kcal_per_serving: 280
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 400
      unit: g
      item: fraises
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: mascarpone végétal (cajou)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: crème de soja ou avoine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: la vanille
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Coupez les fraises. Dans un saladier, mélangez le mascarpone végétal (cajou), la crème
      de soja ou avoine, la vanille et le sucre et battez le tout.
    - Finition. Mettez quelques fraises dans le fond des ramequins, recouvrez du mélange crème/mascarpone
      végétal (cajou). Rajoutez des fraises et à nouveau le mélange crème/mascarpone végétal
      (cajou). Finissez par des fraises sur le dessus pour la décoration et du chocolat râpé
      selon l’envie. C’est déjà prêt, régalez-vous !
    steps_niveaux:
      amateur:
      - "Coupez les fraises. Dans un saladier, mélangez le mascarpone végétal (cajou), la crème de soja ou avoine, la vanille et le sucre et battez le tout."
      - "Finition. Mettez quelques fraises dans le fond des ramequins, recouvrez du mélange crème/mascarpone végétal (cajou). Rajoutez des fraises et à nouveau le mélange crème/mascarpone végétal (cajou). Finissez par des fraises sur le dessus pour la décoration et du chocolat râpé selon l’envie."
      pro:
      - "Couper les fraises. Dans un saladier, mélanger le mascarpone végétal (cajou), la crème de soja ou avoine, la vanille et le sucre, puis battre."
      - "Finition. Disposer quelques fraises au fond des ramequins, recouvrir du mélange crème/mascarpone végétal (cajou). Rajouter des fraises puis à nouveau le mélange. Terminer par des fraises sur le dessus et du chocolat râpé selon l’envie."
      cavernes:
      - "Fraises, couper. Mascarpone végétal cajou, crème soja ou avoine, vanille, sucre, saladier, mélanger. Battre."
      - "Finition. Fraises, fond ramequins. Mélange crème mascarpone végétal cajou, recouvrir. Fraises, rajouter. Mélange, encore. Fraises dessus, déco. Chocolat râpé, selon envie."
    kcal_per_serving: 156
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
    kcal_per_serving: 280
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
  note_verif: "crème"
---

# Fraises au mascarpone

![[fraises-au-mascarpone.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/fraises-au-mascarpone]]

## Ingrédients (4 personnes)

- 400 g de fraises
- 250 g de mascarpone
- 20 cl de crème liquide
- 50 g de sucre blanc
-  de la vanille

## Préparation

1. Coupez les fraises. Dans un saladier, mélangez le mascarpone, la crème liquide, la vanille et le sucre et battez le tout.
2. Mettez quelques fraises dans le fond des ramequins, recouvrez du mélange crème/mascarpone. Rajoutez des fraises et à nouveau le mélange crème/mascarpone. Finissez par des fraises sur le dessus pour la décoration et du chocolat râpé selon l’envie.

 
 

 
 C’est déjà prêt, régalez-vous !
