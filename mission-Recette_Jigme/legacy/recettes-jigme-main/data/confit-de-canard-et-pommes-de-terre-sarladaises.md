---
schema: recette-web-jigme/v2
slug: confit-de-canard-et-pommes-de-terre-sarladaises
title: Confit de canard et pommes de terre sarladaises
lang: fr
description: "Confit de canard et pommes de terre sarladaises : recette française avec confit de canard, pommes de terre à chair ferme et cèpe, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- canard
- plat
- confit de canard
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/confit-de-canard-et-pommes-de-terre-sarladaises.jpg
  alt: Confit de canard et pommes de terre sarladaises
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/confit-de-canard-et-pommes-de-terre-sarladaises.md
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (pavé de saumon) : pas d’adaptation fiable.'
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans lupin.
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans soja.
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
histoire: 'Confit de canard : cuisses salées puis cuites et conservées dans la graisse, geste gascon (confire,
  « conserver »). On le rattache à la Gascogne, avant le réfrigérateur. Les pommes sarladaises (Sarlat)
  se rissolent dans cette graisse.

  '
fun_facts:
- text: "Une fois refroidi sous la graisse, le confit se garde des semaines au frais, à l’abri de l’air."
  source_name: Grokipedia, Duck confit
  source_url: https://grokipedia.com/page/Duck_confit
- text: "On dore la peau à la poêle au moment de servir ; la cuisson longue s’est faite à bas régime."
  source_name: Grokipedia, Duck confit
  source_url: https://grokipedia.com/page/Duck_confit
wines:
- name: Pécharmant
  producer: Château de Tiregand
  origin: Creysse, Bergerac
  grapes: merlot, cabernet
  award:
  why: Prune, tanin — la graisse du canard et la pomme de terre.
- name: Bergerac
  producer: Château Tour des Gendres
  origin: Ribagnac, Bergerac
  grapes: merlot, cabernet
  award:
  why: Fruit noir, terre — le Périgord dans le verre, sans bois lourd.
- name: Gaillac
  producer: Domaine Rotier
  origin: Cadalen, Gaillac
  grapes: duras, braucol
  award:
  why: Poivre, cerise — le confit, cépage du Sud-Ouest.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets: []
    allergens: []
    difficulty: 2
    time: &id001
      prep_min: 45
      cook_min: 30
      rest_min: 0
      total_min: 75
    equipment: &id002
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: confit de canard
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: pommes de terre à chair ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: cèpe
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graisse de canard
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez les pommes de terre en rondelles en gardant la peau, nettoyez et émincez le cèpe,
      ciselez l’ail et hachez le persil finement.
    - Cuisson. Dans une poêle à feu vif, ajoutez de la graisse de canard ou d’oie et faites-y cuire
      les pommes de terre. Dans une poêle sans matière grasse, déposez le canard, faites-le
      croûter et débarrassez.
    - Finition. Dans un peu de graisse de canard, faites sauter les morceaux de cèpes, puis ajoutez
      les pommes de terre, l’ail et le persil. Servez le tout dans une assiette à-côté du
      confit de canard. C’est déjà prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les pommes de terre en rondelles en gardant la peau, nettoyez et émincez le cèpe, ciselez l’ail et hachez le persil finement."
      - "Cuisson. Dans une poêle à feu vif, ajoutez de la graisse de canard ou d’oie et faites-y cuire les pommes de terre. Dans une poêle sans matière grasse, déposez le canard, faites-le croûter et débarrassez."
      - "Finition. Dans un peu de graisse de canard, faites sauter les morceaux de cèpes, puis ajoutez les pommes de terre, l’ail et le persil. Servez le tout dans une assiette à-côté du confit de canard."
      pro:
      - "Couper les pommes de terre en rondelles, peau conservée. Nettoyer et émincer le cèpe. Ciseler l’ail. Hacher le persil finement."
      - "Poêle à feu vif : graisse de canard ou d’oie, cuire les pommes de terre. Autre poêle sans matière grasse : y déposer le canard, le faire croûter, débarrasser."
      - "Dans un peu de graisse de canard, sauter les morceaux de cèpes. Ajouter pommes de terre, ail et persil. Servir à-côté du confit de canard."
      cavernes:
      - "Préparation. Pommes de terre, couper rondelles, peau gardée. Cèpe, nettoyer, émincer. Ail, ciseler. Persil, hacher fin."
      - "Cuisson. Poêle feu vif, graisse de canard ou d’oie, pommes de terre cuire. Autre poêle sans matière grasse, canard déposer, croûter, débarrasser."
      - "Finition. Peu graisse de canard, cèpes sauter. Pommes de terre, ail, persil. Assiette, à-côté confit de canard."
    kcal_per_serving: 344
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: aubergines rôties (gros quartiers)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: pommes de terre à chair ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: cèpe
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: aubergines rôties (gros quartiers)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez les pommes de terre en rondelles en gardant la peau, nettoyez et émincez le cèpe,
      ciselez l’ail et hachez le persil finement.
    - Cuisson. Dans une poêle à feu vif, faites cuire les pommes de terre avec un peu d’huile. Dans une autre poêle, faites dorer les quartiers d’aubergine et débarrassez.
    - Finition. Dans un peu de aubergines rôties (gros quartiers), faites sauter les morceaux de cèpes,
      puis ajoutez les pommes de terre, l’ail et le persil. Servez le tout dans une assiette
      à-côté du aubergines rôties (gros quartiers). C’est déjà prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les pommes de terre en rondelles en gardant la peau, nettoyez et émincez le cèpe, ciselez l’ail et hachez le persil finement."
      - "Cuisson. Dans une poêle à feu vif, faites cuire les pommes de terre avec un peu d’huile. Dans une autre poêle, faites dorer les quartiers d’aubergine et débarrassez."
      - "Finition. Dans un peu de aubergines rôties (gros quartiers), faites sauter les morceaux de cèpes, puis ajoutez les pommes de terre, l’ail et le persil. Servez le tout dans une assiette à-côté du aubergines rôties (gros quartiers)."
      pro:
      - "Couper les pommes de terre en rondelles, peau conservée. Nettoyer et émincer le cèpe. Ciseler l’ail. Hacher le persil finement."
      - "Poêle à feu vif : cuire les pommes de terre avec un peu d’huile. Autre poêle : dorer les quartiers d’aubergine, débarrasser."
      - "Dans un peu de aubergines rôties (gros quartiers), sauter les morceaux de cèpes. Ajouter pommes de terre, ail et persil. Servir à-côté du aubergines rôties (gros quartiers)."
      cavernes:
      - "Préparation. Pommes de terre, couper rondelles, peau gardée. Cèpe, nettoyer, émincer. Ail, ciseler. Persil, hacher fin."
      - "Cuisson. Poêle feu vif, peu huile, pommes de terre cuire. Autre poêle, quartiers d’aubergine dorer, débarrasser."
      - "Finition. Peu aubergines rôties (gros quartiers), cèpes sauter. Pommes de terre, ail, persil. Assiette, à-côté aubergines rôties (gros quartiers)."
    kcal_per_serving: 206
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit: vegetarienne
    servings_base: 2
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: []
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 206
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 2
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 2
      unit: piece
      item: pavé de saumon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: pommes de terre à chair ferme
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: cèpe
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: persil
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pavé de saumon
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Coupez les pommes de terre en rondelles en gardant la peau, nettoyez et émincez le cèpe,
      ciselez l’ail et hachez le persil finement.
    - Cuisson. Dans une poêle à feu vif, ajoutez de la pavé de saumon ou d’oie et faites-y cuire les
      pommes de terre. Dans une poêle sans matière grasse, déposez le canard, faites-le croûter
      et débarrassez.
    - Finition. Dans un peu de pavé de saumon, faites sauter les morceaux de cèpes, puis ajoutez les
      pommes de terre, l’ail et le persil. Servez le tout dans une assiette à-côté du pavé
      de saumon. C’est déjà prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Coupez les pommes de terre en rondelles en gardant la peau, nettoyez et émincez le cèpe, ciselez l’ail et hachez le persil finement."
      - "Cuisson. Dans une poêle à feu vif, ajoutez de la pavé de saumon ou d’oie et faites-y cuire les pommes de terre. Dans une poêle sans matière grasse, déposez le canard, faites-le croûter et débarrassez."
      - "Finition. Dans un peu de pavé de saumon, faites sauter les morceaux de cèpes, puis ajoutez les pommes de terre, l’ail et le persil. Servez le tout dans une assiette à-côté du pavé de saumon."
      pro:
      - "Couper les pommes de terre en rondelles, peau conservée. Nettoyer et émincer le cèpe. Ciseler l’ail. Hacher le persil finement."
      - "Poêle à feu vif : pavé de saumon ou d’oie, cuire les pommes de terre. Autre poêle sans matière grasse : y déposer le canard, le faire croûter, débarrasser."
      - "Dans un peu de pavé de saumon, sauter les morceaux de cèpes. Ajouter pommes de terre, ail et persil. Servir à-côté du pavé de saumon."
      cavernes:
      - "Préparation. Pommes de terre, couper rondelles, peau gardée. Cèpe, nettoyer, émincer. Ail, ciseler. Persil, hacher fin."
      - "Cuisson. Poêle feu vif, pavé de saumon ou d’oie, pommes de terre cuire. Autre poêle sans matière grasse, canard déposer, croûter, débarrasser."
      - "Finition. Peu pavé de saumon, cèpes sauter. Pommes de terre, ail, persil. Assiette, à-côté pavé de saumon."
    kcal_per_serving: 322
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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

# Confit de canard et pommes de terre sarladaises
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 2 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/confit-de-canard-et-pommes-de-terre-sarladaises]]

## Ingrédients (2 personnes)

- 2 confit de canard
- 350 g de pommes de terre à chair ferme
- 1 cèpe
- 2 gousse d'ail
-  persil
-  graisse de canard

## Préparation

1. Coupez les pommes de terre en rondelles en gardant la peau, nettoyez et émincez le cèpe, ciselez l’ail et hachez le persil finement.
2. Dans une poêle à feu vif, ajoutez de la graisse de canard ou d’oie et faites-y cuire les pommes de terre. Dans une poêle sans matière grasse, déposez le canard, faites-le croûter et débarrassez.
3. Dans un peu de graisse de canard, faites sauter les morceaux de cèpes, puis ajoutez les pommes de terre, l’ail et le persil. Servez le tout dans une assiette à-côté du confit de canard.

 
 

 
 C’est déjà prêt ! Bon appétit !
