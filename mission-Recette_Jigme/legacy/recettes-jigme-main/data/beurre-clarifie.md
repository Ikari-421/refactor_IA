---
schema: recette-web-jigme/v2
equipment: []
slug: beurre-clarifie
title: Beurre clarifié
lang: fr
description: "Beurre clarifié : recette française pour séparer l’eau et la caséine du beurre, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- beurre
- sauce
- base
image:
  url:
  alt: Beurre clarifié
  credit:
source_fiche: ""
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
    clears: []
    swaps:
    - from: beurre
      to: "huile d'olive"
      note: Plus de traces de lactose.
    note: Le beurre clarifié contient encore des traces de lactose. Huile pour la couche stricte.
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps:
    - from: beurre
      to: huile de coco
      note: Goût différent.
    note: Remplacer par de l’huile de coco ou d’olive selon le plat.
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
house_toggle: 
house_options: []
histoire: "Le beurre clarifié est du beurre dont on a retiré l’eau et les protéines du lait. Il fume plus tard et se conserve mieux. En Inde, le ghee est une version longtemps cuite, au goût de noisette."
fun_facts:
- text: La clarification enlève l’eau et la caséine ; il reste surtout la matière grasse.
  source_name: "Wikipedia FR, Beurre clarifié"
  source_url: "https://fr.wikipedia.org/wiki/Beurre_clarifi%C3%A9"
- text: "Le point de fumée monte : utile pour une cuisson plus vive qu’avec du beurre entier."
  source_name: "Wikipedia FR, Beurre clarifié"
  source_url: "https://fr.wikipedia.org/wiki/Beurre_clarifi%C3%A9"
- text: "Le ghee indien est un beurre cuit plus longtemps, souvent aromatisé."
  source_name: "Wikipedia FR, Ghee"
  source_url: "https://fr.wikipedia.org/wiki/Ghee"
wines:
- name: Chablis
  producer: William Fèvre
  origin: "Chablis, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Blanc sec, pierre et agrumes, pour une sauce au beurre clarifié."
- name: Meursault
  producer: Louis Jadot
  origin: "Meursault, Bourgogne"
  grapes: Chardonnay
  award: 
  why: "Gras du chardonnay élevé, écho du beurre noisette."
- name: Champagne Brut
  producer: Pierre Gimonnet
  origin: Côte des Blancs
  grapes: Chardonnay
  award: 
  why: Bulles et acidité pour un beurre servi avec poissons ou légumes.
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
      prep_min: 5
      cook_min: 20
      rest_min: 10
      total_min: 35
    equipment:
    - casserole
    - cuillère
    - étamine
    substitutions:
    - from: beurre doux
      to: beurre demi-sel
      note: Moins saler le plat ensuite.
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Découpe. Coupez le beurre doux en morceaux et déposez-les dans une casserole à fond épais."
    - "Fonte. Chauffez à feu très doux : le beurre fond, mousse, puis se sépare."
    - "Écume. Retirez l’écume blanche à la cuillère."
    - "Filtrage. Versez en laissant le dépôt de caséine au fond, puis filtrez à l’étamine."
    - "Repos. Laissez refroidir : le gras fige et devient limpide."
    steps_niveaux:
      amateur:
      - "Coupez le beurre doux en morceaux et déposez-les dans une casserole à fond épais."
      - "Chauffez à feu très doux : le beurre fond, mousse, puis se sépare."
      - "Retirez l’écume blanche à la cuillère."
      - "Versez en laissant le dépôt de caséine au fond, puis [[filtrer|filtrez]] à l’étamine."
      - "Laissez refroidir : le gras fige et devient limpide."
      pro:
      - "Couper le beurre doux en morceaux et les déposer dans une casserole à fond épais."
      - "Chauffer à feu très doux : le beurre fond, mousse, puis se sépare."
      - "Retirer l’écume blanche à la cuillère."
      - "Verser en laissant le dépôt de caséine au fond, puis filtrer à l’étamine."
      - "Laisser refroidir : le gras fige et devient limpide."
      cavernes:
      - "Beurre doux, couper morceaux. Déposer casserole fond épais."
      - "Feu très doux, chauffer. Beurre fond, mousse, puis sépare."
      - "Écume blanche, retirer cuillère."
      - "Verser. Dépôt caséine reste fond. Filtrer étamine."
      - "Refroidir. Gras fige, devient limpide."
    kcal_per_serving: 180
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
    kcal_per_serving: 180
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
      prep_min: 2
      cook_min: 5
      rest_min: 10
      total_min: 17
    equipment:
    - casserole
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 250
      unit: g
      item: huile de coco désodorisée
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Fonte. Chauffez l’huile de coco désodorisée à feu très doux jusqu’à ce qu’elle soit liquide et limpide."
    - "Filtrage. Passez-la si besoin, puis laissez refroidir."
    steps_niveaux:
      amateur:
      - "Chauffez l’huile de coco désodorisée à feu très doux jusqu’à ce qu’elle soit liquide et limpide."
      - "Passez-la si besoin, puis laissez refroidir."
      pro:
      - "Chauffer l’huile de coco désodorisée à feu très doux jusqu’à liquide et limpide."
      - "Passer l’huile si besoin, puis laisser refroidir."
      cavernes:
      - "Huile de coco désodorisée, feu très doux, chauffer. Liquide limpide."
      - "Passer si besoin. Refroidir."
    kcal_per_serving: 220
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
    kcal_per_serving: 180
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 semaines, contenant: bocal, note: "Gras figé, à l’abri de la lumière."}
  congelation: {possible: true, duree: 3 mois, decongelation: à température ambiante, note: ""}
  temperature_ambiante: {duree: "", note: Préférer le frigo.}
  rechauffage: Faire fondre au bain-marie.
  restes: []
  anti_gaspi:
  - "Le dépôt de caséine peut aller dans une purée, pas dans une friture."
  a_verifier: false
  note_verif: ""
lexique_local:
  traditionnelle:
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md

---

# Beurre clarifié

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 250 g beurre doux

## Préparation

1. Découpe. Coupez le beurre doux en morceaux et déposez-les dans une casserole à fond épais.
2. Fonte. Chauffez à feu très doux : le beurre fond, mousse, puis se sépare.
3. Écume. Retirez l’écume blanche à la cuillère.
4. Filtrage. Versez en laissant le dépôt de caséine au fond, puis filtrez à l’étamine.
5. Repos. Laissez refroidir : le gras fige et devient limpide.

