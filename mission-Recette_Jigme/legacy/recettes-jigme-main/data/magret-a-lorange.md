---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: magret-a-lorange
title: "Magret à l'orange"
lang: fr
description: "Magret à l'orange : recette française de magret de canard poêlé, sauce à l’orange, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- canard
- orange
- poêle
image:
  url:
  alt: "Magret à l'orange"
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
    note: Déjà sans produits laitiers.
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
histoire: "Le canard à l’orange (canard à l’orange, bigarade) est un classique français. Le magret, poitrine du canard gras, se cuit à la poêle, peau croustillante, sauce agrumes. Le magret comme pièce à poêler est plus récent que le canard entier laqué."
fun_facts:
- text: "Le magret est la poitrine du canard gras, popularisée en pièce à poêler au XXe siècle."
  source_name: "Wikipedia FR, Magret"
  source_url: "https://fr.wikipedia.org/wiki/Magret"
- text: La sauce bigarade se faisait à l’orange amère ; l’orange douce demande un peu de vinaigre.
  source_name: "Wikipedia FR, Canard à l'orange"
  source_url: "https://fr.wikipedia.org/wiki/Canard_%C3%A0_l%27orange"
- text: "On commence toujours par la peau, à feu moyen, pour fondre la graisse."
  source_name: "Wikipedia FR, Magret"
  source_url: "https://fr.wikipedia.org/wiki/Magret"
wines:
- name: Madiran
  producer: Château Montus
  origin: "Madiran, Sud-Ouest"
  grapes: Tannat
  award: 
  why: "Tanin, prune, tient le magret gras."
- name: Bergerac
  producer: Château Tour des Gendres
  origin: "Bergerac, Dordogne"
  grapes: "Merlot, cabernet"
  award: 
  why: "Fruit, Sud-Ouest, sauce orange."
- name: "Pinot Noir d'Alsace"
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Pinot noir
  award: 
  why: "Fruit rouge, agrumes de la sauce, moins de tanin."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 25
      rest_min: 0
      total_min: 45
    equipment:
    - poêle
    - casserole
    substitutions:
    - from: fond de volaille
      to: jus de canard
      note: Plus corsé.
    scale_note: 
    ingredients:
    - qty: 2
      unit: piece
      item: magrets de canard
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oranges
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: vinaigre de vin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: fond de volaille
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Peau. Quadrillez la peau des magrets, puis salez et poivrez."
    - "Cuisson. Posez-les peau vers le bas, à feu moyen, 8 min. Retournez 4 min, pour une cuisson rosée."
    - "Repos. Réservez les magrets au chaud 5 min."
    - "Sauce. Ôtez l’excès de graisse. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de volaille, puis réduisez. Hors du feu, incorporez le beurre."
    - "Tranche. Tranchez en biais et nappez de sauce."
    steps_niveaux:
      amateur:
      - "Peau. Quadrillez la peau des magrets, puis salez et poivrez."
      - "Cuisson. Posez-les peau vers le bas, à feu moyen, 8 min. Retournez 4 min, pour une cuisson rosée."
      - "Repos. Réservez les magrets au chaud 5 min."
      - "Sauce. Ôtez l’excès de graisse. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de volaille, puis [[reduire|réduisez]]. [[hors-du-feu|Hors du feu]], incorporez le beurre."
      - "Tranche. Tranchez en biais et [[napper|nappez]] de sauce."
      pro:
      - "Quadriller la peau des magrets. Saler. Poivrer."
      - "Poser peau vers le bas, feu moyen, 8 min. Retourner 4 min, cuisson rosée."
      - "Réserver les magrets au chaud 5 min."
      - "Ôter l’excès de graisse. Ajouter le sucre, le vinaigre de vin, le jus d’orange et le fond de volaille. Réduire. Hors du feu, incorporer le beurre."
      - "Trancher en biais. Napper de sauce."
      cavernes:
      - "Peau. Peau magrets, quadriller. Saler, poivrer."
      - "Cuisson. Peau vers bas, feu moyen, 8 min. Retourner 4 min. Cuisson rosée."
      - "Repos. Magrets, chaud, réserver 5 min."
      - "Sauce. Excès graisse, ôter. Sucre, vinaigre vin, jus orange, fond volaille, ajouter, réduire. Hors feu, beurre, incorporer."
      - "Tranche. Trancher biais. Sauce, napper."
    kcal_per_serving: 520
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - soja
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - poêle
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: seitan
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oranges
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: vinaigre de vin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: fond de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Poêle. Faites dorer le seitan dans l’huile, 3 min par face."
    - "Sauce. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes, puis réduisez. Hors du feu, incorporez le beurre."
    - "Service. Tranchez et nappez de sauce."
    steps_niveaux:
      amateur:
      - "Poêle. Faites dorer le seitan dans l’huile, 3 min par face."
      - "Sauce. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes, puis [[reduire|réduisez]]. [[hors-du-feu|Hors du feu]], incorporez le beurre."
      - "Service. Tranchez et [[napper|nappez]] de sauce."
      pro:
      - "Dorer le seitan dans l’huile, 3 min par face."
      - "Ajouter le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes. Réduire. Hors du feu, incorporer le beurre."
      - "Trancher. Napper de sauce."
      cavernes:
      - "Poêle. Seitan, huile, dorer, 3 min par face."
      - "Sauce. Sucre, vinaigre vin, jus orange, fond légumes, ajouter, réduire. Hors feu, beurre, incorporer."
      - "Service. Trancher. Sauce, napper."
    kcal_per_serving: 380
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
    allergens:
    - gluten
    - soja
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - poêle
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: seitan
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oranges
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: vinaigre de vin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: fond de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: huile
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Poêle. Faites dorer le seitan 3 min par face."
    - "Sauce. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes, puis réduisez."
    - "Service. Tranchez et nappez de sauce."
    steps_niveaux:
      amateur:
      - "Poêle. Faites dorer le seitan 3 min par face."
      - "Sauce. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes, puis [[reduire|réduisez]]."
      - "Service. Tranchez et [[napper|nappez]] de sauce."
      pro:
      - "Dorer le seitan 3 min par face."
      - "Ajouter le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes. Réduire."
      - "Trancher. Napper de sauce."
      cavernes:
      - "Poêle. Seitan, dorer, 3 min par face."
      - "Sauce. Sucre, vinaigre vin, jus orange, fond légumes, ajouter, réduire."
      - "Service. Trancher. Sauce, napper."
    kcal_per_serving: 350
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  pesco:
    label: Pesco-végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 20
      rest_min: 0
      total_min: 35
    equipment:
    - poêle
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: pavés de saumon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oranges
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: ml
      item: vinaigre de vin
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: ml
      item: fond de légumes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Faites cuire les pavés de saumon peau vers le bas 6 min, puis 2 min de l’autre côté."
    - "Sauce. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes, puis réduisez. Hors du feu, incorporez le beurre."
    - "Service. Nappez de sauce et servez."
    steps_niveaux:
      amateur:
      - "Cuisson. Faites cuire les pavés de saumon peau vers le bas 6 min, puis 2 min de l’autre côté."
      - "Sauce. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes, puis [[reduire|réduisez]]. [[hors-du-feu|Hors du feu]], incorporez le beurre."
      - "Service. [[napper|Nappez]] de sauce et servez."
      pro:
      - "Cuire les pavés de saumon peau vers le bas 6 min, puis 2 min de l’autre côté."
      - "Ajouter le sucre, le vinaigre de vin, le jus d’orange et le fond de légumes. Réduire. Hors du feu, incorporer le beurre."
      - "Napper de sauce. Servir."
      cavernes:
      - "Cuisson. Pavés saumon, peau vers bas, 6 min. Autre côté, 2 min."
      - "Sauce. Sucre, vinaigre vin, jus orange, fond légumes, ajouter, réduire. Hors feu, beurre, incorporer."
      - "Service. Sauce, napper. Servir."
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  pesco:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 3 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 3 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Réchauffer à cœur (au moins 70 °C).
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "Canard cuit : 2 à 3 jours au frigo."

---

# Magret à l'orange

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 2 piece magrets de canard
- 2 piece oranges
- 20 g sucre
- 20 ml vinaigre de vin
- 100 ml fond de volaille
- 20 g beurre doux
- sel (au goût)
- poivre (au goût)

## Préparation

1. Peau. Quadrillez la peau des magrets, puis salez et poivrez.
2. Cuisson. Posez-les peau vers le bas, à feu moyen, 8 min. Retournez 4 min, pour une cuisson rosée.
3. Repos. Réservez les magrets au chaud 5 min.
4. Sauce. Ôtez l’excès de graisse. Ajoutez le sucre, le vinaigre de vin, le jus d’orange et le fond de volaille, puis réduisez. Hors du feu, incorporez le beurre.
5. Tranche. Tranchez en biais et nappez de sauce.
