---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: riz-au-lait
title: Riz au lait
lang: fr
description: "Riz au lait : recette française de riz rond cuit dans le lait vanillé, pour 4 personnes. Recette du quotidien, 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- riz
- vanille
- dessert
image:
  url:
  alt: Riz au lait
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/riz-au-lait.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
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
    clears: []
    swaps:
    - from: lait entier
      to: lait sans lactose
      note: Même volume.
    note: "Lait entier : lait sans lactose ou lait d’avoine."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans œufs.
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
    note: Pas de céleri dans cette fiche.
  sans_moutarde:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de moutarde dans cette fiche.
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de mollusques dans cette fiche.
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de crustacés dans cette fiche.
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
    note: Pas de lupin listé. Vérifier un mix du commerce.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de soja dans la tradi.
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas d’arachide dans cette fiche.
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sésame dans cette fiche.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle: ma_recette
house_options:
- ma_recette
histoire: "Le riz cuit au lait existe d’Eurasie jusqu’à l’Asie centrale. En Europe, longtemps plat salé ; le dessert sucré se fixe autour des XVe–XVIe siècles. Le riz arrive vraiment en France vers le XVe. La vanille est plus tardive. La version actuelle se popularise au XIXe."
fun_facts:
- text: "On ne fait pas la liaison : riz au lait se prononce « ri o lé »."
  source_name: "Wikipedia FR, Riz au lait"
  source_url: "https://fr.wikipedia.org/wiki/Riz_au_lait"
- text: "Les fiches industrielles conseillent de ne pas laver le riz, pour garder l’amidon."
  source_name: "Taureau Ailé, Riz au lait au four"
  source_url: "https://www.taureauaile.fr/conseils-culinaires/comment-faire-du-riz-au-lait-au-four/"
- text: "La version maison de Jigmé lave et blanchit 2 min, puis four 200 °C / 25 min."
  source_name: "Wikipedia FR, Riz au lait"
  source_url: "https://fr.wikipedia.org/wiki/Riz_au_lait"
wines:
- name: Muscat de Beaumes-de-Venise
  producer: Domaine de Durban
  origin: Beaumes-de-Venise
  grapes: Muscat petits grains
  award: 
  why: "Floral, vanille du dessert."
- name: Monbazillac
  producer: Château Tirecul La Gravière
  origin: "Monbazillac, Dordogne"
  grapes: "Sémillon, muscadelle"
  award: 
  why: "Miel, riz sucré, froid."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, dessert lacté."
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
    difficulty: 1
    time:
      prep_min: 10
      cook_min: 40
      rest_min: 30
      total_min: 80
    equipment:
    - casserole
    substitutions:
    - from: sucre
      to: cassonade
      note: Goût caramel.
    scale_note: 
    ingredients:
    - qty: 800
      unit: ml
      item: lait entier
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: riz rond
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Infusion. Fendez la vanille et faites-la infuser dans le lait entier avec le sel."
    - "Cuisson. Ajoutez le riz rond non rincé et laissez cuire à feu très doux 35 à 40 min, en remuant souvent."
    - "Sucre. Hors du feu, incorporez le sucre. La préparation doit rester un peu liquide."
    - "Service. Répartissez dans des ramequins et servez tiède ou froid."
    steps_niveaux:
      amateur:
      - "Infusion. Fendez la vanille et mettez-la dans le lait entier avec le sel."
      - "Cuisson. Ajoutez le riz rond non rincé et laissez cuire à feu très doux 35 à 40 min, en remuant souvent."
      - "Sucre. [[hors-du-feu|Hors du feu]], incorporez le sucre. La préparation doit rester un peu liquide."
      - "Service. Répartissez dans des ramequins et servez tiède ou froid."
      pro:
      - "Fendre la vanille et la mettre dans le lait entier avec le sel."
      - "Ajouter le riz rond non rincé. Cuire à feu très doux 35 à 40 min, remuer souvent."
      - "Hors du feu, incorporer le sucre. La préparation doit rester un peu liquide."
      - "Répartir dans des ramequins. Servir tiède ou froid."
      cavernes:
      - "Infusion. Vanille, fendre, mettre dans lait entier avec sel."
      - "Cuisson. Riz rond non rincé, ajouter. Feu très doux 35 à 40 min, remuer souvent."
      - "Sucre. Hors feu, sucre, incorporer. Préparation, rester peu liquide."
      - "Service. Ramequins, répartir. Servir tiède ou froid."
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 1
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: []
    difficulty: 1
    time:
      prep_min: 10
      cook_min: 40
      rest_min: 30
      total_min: 80
    equipment:
    - casserole
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: ml
      item: "lait d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: riz rond
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Infusion. Faites infuser la vanille dans le lait d’avoine avec le sel."
    - "Cuisson. Ajoutez le riz rond et laissez cuire à feu très doux 35 à 40 min."
    - "Sucre. Hors du feu, incorporez le sucre, puis répartissez dans des ramequins."
    steps_niveaux:
      amateur:
      - "Infusion. Mettez la vanille dans le lait d’avoine avec le sel."
      - "Cuisson. Ajoutez le riz rond et laissez cuire à feu très doux 35 à 40 min."
      - "Sucre. [[hors-du-feu|Hors du feu]], incorporez le sucre, puis répartissez dans des ramequins."
      pro:
      - "Mettre la vanille dans le lait d’avoine avec le sel."
      - "Ajouter le riz rond. Cuire à feu très doux 35 à 40 min."
      - "Hors du feu, incorporer le sucre, puis répartir dans des ramequins."
      cavernes:
      - "Infusion. Vanille, mettre dans lait d’avoine avec sel."
      - "Cuisson. Riz rond, ajouter. Feu très doux 35 à 40 min."
      - "Sucre. Hors feu, sucre, incorporer. Ramequins, répartir."
    kcal_per_serving: 250
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 1
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  ma_recette:
    label: Ma recette
    inherit: 
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 1
    time:
      prep_min: 10
      cook_min: 27
      rest_min: 60
      total_min: 97
    equipment:
    - casserole
    - plat allant au four
    - four
    substitutions: []
    scale_note: "Batch réel Jigmé : 6 à 8 portions. 125 g de sucre, 150 à 160 g si pas de nappage."
    ingredients:
    - qty: 1000
      unit: ml
      item: lait entier
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 225
      unit: g
      item: riz rond
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: sel
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Blanchiment. Lavez le riz rond, puis blanchissez-le 2 minutes."
    - "Lait. Chauffez le lait entier avec le sucre, le sel et la vanille. Ajoutez le riz et couvrez."
    - "Four. Enfournez à 200 °C pendant 25 minutes."
    - "Froid. Débarrassez, laissez refroidir, puis réservez au réfrigérateur."
    steps_niveaux:
      amateur:
      - "Blanchiment. Lavez le riz rond, puis cuisez-le 2 minutes à l’eau bouillante."
      - "Lait. Chauffez le lait entier avec le sucre, le sel et la vanille. Ajoutez le riz et couvrez."
      - "Four. Enfournez à 200 °C pendant 25 minutes."
      - "Froid. Débarrassez, laissez refroidir, puis réservez au réfrigérateur."
      pro:
      - "Laver le riz rond, puis cuire 2 minutes à l’eau bouillante."
      - "Chauffer le lait entier avec le sucre, le sel et la vanille. Ajouter le riz, couvrir."
      - "Enfourner à 200 °C pendant 25 minutes."
      - "Débarrasser, laisser refroidir, réserver au réfrigérateur."
      cavernes:
      - "Blanchiment. Riz rond, laver. Eau bouillante, cuire 2 min."
      - "Lait. Lait entier, sucre, sel, vanille, chauffer. Riz, ajouter, couvrir."
      - "Four. 200 °C, 25 min."
      - "Froid. Débarrasser, laisser refroidir, réfrigérateur."
    kcal_per_serving: 320
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
  vegan:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 24 à 48 h, contenant: boîte hermétique, note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: Texture cassée à la décongélation.}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Riz cuit : 24 à 48 h au frigo, ne pas laisser à température ambiante."

---

# Riz au lait

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 800 ml lait entier
- 100 g riz rond
- 60 g sucre
- 1 gousse vanille
- 1 pincee sel

## Préparation

1. Infusion. Fendez la vanille et faites-la infuser dans le lait entier avec le sel.
2. Cuisson. Ajoutez le riz rond non rincé et laissez cuire à feu très doux 35 à 40 min, en remuant souvent.
3. Sucre. Hors du feu, incorporez le sucre. La préparation doit rester un peu liquide.
4. Service. Répartissez dans des ramequins et servez tiède ou froid.
