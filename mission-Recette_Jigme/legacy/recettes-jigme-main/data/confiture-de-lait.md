---
schema: recette-web-jigme/v2
slug: confiture-de-lait
title: Confiture de lait
lang: fr
description: "Confiture de lait : recette française avec lait, sucre et gousse de vanille, pour 4 personnes. Version maison. Facile à suivre."
cuisine: argentine
category: sucré
tags:
- sucré
- dessert
- lait
- vanille
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/confiture-de-lait.webp
  alt: Confiture de lait
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/confiture-de-lait.md
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
histoire: 'Lait et sucre cuits longtemps jusqu’au caramel de lait. En espagnol, dulce de leche ; en français,
  confiture de lait. On décrit le geste, pas une origine unique (légendes du Rio de la Plata, usages plus
  anciens).

  '
fun_facts:
- text: "La couleur vient surtout du brunissement non enzymatique (Maillard), pas seulement d’un caramel de sucre."
  source_name: Wikipedia, Dulce de leche
  source_url: https://en.wikipedia.org/wiki/Dulce_de_leche
- text: "On raconte plusieurs naissances (Argentine, colonial) ; aucune n’est tranchée."
  source_name: Wikipedia, Dulce de leche
  source_url: https://en.wikipedia.org/wiki/Dulce_de_leche
wines:
- name: Banyuls
  producer: Domaine de La Rectorie
  origin: Banyuls-sur-Mer, Roussillon
  grapes: grenache
  award:
  why: Cacao, figue — le lait caramélisé, tanin doux.
- name: Maury
  producer: Domaine Pouderoux
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Cerise confite — même registre sucré, un peu plus vif.
- name: Rivesaltes ambré
  producer: Domaine des Schistes
  origin: Estagel, Roussillon
  grapes: grenache, macabeu
  award:
  why: Noix, orange sèche — la confiture de lait sur une tartine.
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
      cook_min: 120
      rest_min: 90
      total_min: 240
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: ml
      item: lait (demi écrémé ou entier)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 370
      unit: g
      item: sucre
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
    steps:
    - Cuisson. Dans une casserole, versez le lait, le sucre et le contenu d’une gousse de vanille.
    - Cuisson. Laissez cuire votre préparation pendant 2h. Vous connaissez certainement l’expression
      « à surveiller comme le lait sur le feu ». Pensez donc à mélanger régulièrement (environ
      toutes les 10 minutes).
    - Finition. Votre confiture de lait est prête comme vous obtenez une sorte de pâte qui a la même
      consistance que du caramel ou de la pâte à tartiner. Stockée dans un pot à l’abri de
      la chaleur, de la lumière et de l’humidité, elle peut être conservée plusieurs mois.
      Et voilà, vous avez une délicieuse confiture de lait à dévorer à la cuillère ou à tartiner
      sur du pain, de la brioche ou des crêpes !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez le lait, le sucre et le contenu d’une gousse de vanille."
      - "Cuisson. Laissez cuire votre préparation pendant 2h. Mélangez régulièrement, environ toutes les 10 minutes."
      - "Finition. La confiture de lait est prête quand vous obtenez une pâte de la consistance du caramel ou de la pâte à tartiner. Stockez-la dans un pot à l’abri de la chaleur, de la lumière et de l’humidité : elle peut se conserver plusieurs mois. Servez à la cuillère ou tartinez sur du pain, de la brioche ou des crêpes."
      pro:
      - "Verser le lait, le sucre et le contenu d’une gousse de vanille dans une casserole."
      - "Cuire 2h. Mélanger régulièrement, environ toutes les 10 minutes."
      - "Prêt : pâte de consistance caramel ou pâte à tartiner. Stocker en pot à l’abri de la chaleur, de la lumière et de l’humidité, plusieurs mois. Servir à la cuillère ou tartiner pain, brioche, crêpes."
      cavernes:
      - "Cuisson. Casserole, lait, sucre, contenu gousse vanille, verser."
      - "Cuisson. Cuire 2h. Mélanger régulièrement, environ toutes 10 minutes."
      - "Finition. Pâte consistance caramel ou pâte à tartiner. Pot, abri chaleur lumière humidité, plusieurs mois. Cuillère, ou tartiner pain, brioche, crêpes."
    kcal_per_serving: 533
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
    kcal_per_serving: 533
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
    - qty: 1000
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 370
      unit: g
      item: sucre
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
    steps:
    - Cuisson. Dans une casserole, versez le lait d’avoine ou de soja, le sucre et le contenu d’une gousse de vanille.
    - Cuisson. Laissez cuire votre préparation pendant 2h. Vous connaissez certainement l’expression
      « à surveiller comme le lait sur le feu ». Pensez donc à mélanger régulièrement (environ
      toutes les 10 minutes).
    - Finition. Votre confiture de lait végétal est prête comme vous obtenez une sorte de pâte qui a la même
      consistance que du caramel ou de la pâte à tartiner. Stockée dans un pot à l’abri de
      la chaleur, de la lumière et de l’humidité, elle peut être conservée plusieurs mois.
      Et voilà, vous avez une délicieuse confiture de lait végétal à dévorer à la cuillère ou à tartiner
      sur du pain, de la brioche ou des crêpes !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez le lait d’avoine ou de soja, le sucre et le contenu d’une gousse de vanille."
      - "Cuisson. Laissez cuire votre préparation pendant 2h. Mélangez régulièrement, environ toutes les 10 minutes."
      - "Finition. La confiture de lait végétal est prête quand vous obtenez une pâte de la consistance du caramel ou de la pâte à tartiner. Stockez-la dans un pot à l’abri de la chaleur, de la lumière et de l’humidité : elle peut se conserver plusieurs mois. Servez à la cuillère ou tartinez sur du pain, de la brioche ou des crêpes."
      pro:
      - "Verser le lait d’avoine ou de soja, le sucre et le contenu d’une gousse de vanille dans une casserole."
      - "Cuire 2h. Mélanger régulièrement, environ toutes les 10 minutes."
      - "Prêt : pâte de consistance caramel ou pâte à tartiner. Stocker en pot à l’abri de la chaleur, de la lumière et de l’humidité, plusieurs mois. Servir à la cuillère ou tartiner pain, brioche, crêpes."
      cavernes:
      - "Cuisson. Casserole, lait d’avoine ou soja, sucre, contenu gousse vanille, verser."
      - "Cuisson. Cuire 2h. Mélanger régulièrement, environ toutes 10 minutes."
      - "Finition. Pâte consistance caramel ou pâte à tartiner. Pot, abri chaleur lumière humidité, plusieurs mois. Cuillère, ou tartiner pain, brioche, crêpes."
    kcal_per_serving: 533
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
    kcal_per_serving: 533
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "après ouverture : 3 semaines", contenant: "pot fermé", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "pot non ouvert", note: "Au sec, à l’abri de la lumière."}
  rechauffage: ""
  restes: []
  anti_gaspi: ["Yaourt, crêpes ou fromage blanc"]
  a_verifier: false
  note_verif: ""
---

# Confiture de lait

![[confiture-de-lait.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `Cuisine/Recettes/Web/confiture-de-lait.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/confiture-de-lait]]

## Ingrédients (4 personnes)

- 1 L de lait (demi écrémé ou entier)
- 370 g de sucre
- 1 gousse de vanille

## Préparation

1. Dans une casserole, versez le lait, le sucre et le contenu d’une gousse de vanille.
2. Laissez cuire votre préparation pendant 2h. Vous connaissez certainement l’expression « à surveiller comme le lait sur le feu ». Pensez donc à mélanger régulièrement (environ toutes les 10 minutes).
3. Votre confiture de lait est prête comme vous obtenez une sorte de pâte qui a la même consistance que du caramel ou de la pâte à tartiner. Stockée dans un pot à l’abri de la chaleur, de la lumière et de l’humidité, elle peut être conservée plusieurs mois.

 
 

 
 Et voilà, vous avez une délicieuse confiture de lait à dévorer à la cuillère ou à tartiner sur du pain, de la brioche ou des crêpes !
