---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: gateau-nantais
title: Gâteau nantais
lang: fr
description: "Gâteau nantais : recette de Nantes à l’amande, au beurre demi-sel et au rhum, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: sucré
tags:
- sucré
- Nantes
- amande
- rhum
image:
  url:
  alt: Gâteau nantais
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/gateau-nantais.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps:
    - from: farine de blé
      to: farine de riz
      note: Même poids.
    note: "40 g de farine : farine de riz possible."
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Amande : impossible à garder le goût nantais."
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Couche à appliquer : voir swaps."
house_toggle: ma_recette
house_options:
- ma_recette
histoire: "Pâtisserie nantaise à l’amande et au rhum, proche d’un quatre-quarts, souvent imbibée et nappée d’un glaçage rhum. Le port de Nantes a vu arriver sucre de canne et rhum. Paul Eudel attribue une création à Jean Rouleau, fouacier, vers 1820. LU l’a produit de 1910 à 1972."
fun_facts:
- text: "Gâteau de voyage : se conserve plusieurs jours, d’où la production LU au XXe siècle."
  source_name: "Wikipedia FR, Gâteau nantais"
  source_url: "https://fr.wikipedia.org/wiki/G%C3%A2teau_nantais"
- text: "La fiche du Voyage à Nantes (Villa Mon Rêve) est proche des doses maison : beurre, amandes, peu de farine, rhum."
  source_name: "Le Voyage à Nantes, Gâteau nantais"
  source_url: "https://www.levoyageanantes.fr/a-voir/voyage-culinaire/gateau-nantais/"
- text: "Chez Christophe Roussel à La Baule, imbibage au sirop de rhum en sortie de four."
  source_name: "Gault&Millau, Le gâteau nantais"
  source_url: "https://fr.gaultmillau.com/fr/news/le-gateau-nantais-son-histoire-et-nos-bonnes-adresses"
wines:
- name: Coteaux du Layon
  producer: Domaine des Baumard
  origin: "Layon, Loire"
  grapes: Chenin
  award: 
  why: "Moelleux, fruits confits, tient amande et rhum."
- name: Muscat de Beaumes-de-Venise
  producer: Domaine de Durban
  origin: Beaumes-de-Venise
  grapes: Muscat petits grains
  award: 
  why: "Floral, sucre, dessert de voyage."
- name: Crémant de Loire
  producer: Bouvet-Ladubay
  origin: "Saumur, Loire"
  grapes: Chenin
  award: 
  why: "Bulles, coupe le beurre demi-sel."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 45
      rest_min: 60
      total_min: 125
    equipment:
    - fouet
    - moule
    - four
    substitutions:
    - from: rhum
      to: "fleur d'oranger"
      note: Sans alcool.
    scale_note: 
    ingredients:
    - qty: 125
      unit: g
      item: beurre demi-sel
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: "poudre d'amandes"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: rhum brun
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre glace
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Four. Préchauffez le four à 175 °C et beurrez un moule de 20 à 22 cm."
    - "Appareil. Fouettez le beurre pommade avec le sucre. Incorporez la poudre d’amandes, les œufs un à un, la farine et 20 ml de rhum brun."
    - "Cuisson. Enfournez 40 à 45 min : la pique doit ressortir sèche et le cœur rester moelleux."
    - "Imbibage. Démoulez et arrosez de 20 ml de rhum brun pendant que le gâteau est encore chaud."
    - "Glaçage. Une fois froid, nappez d’un glaçage de sucre glace et de 20 ml de rhum. C’est encore meilleur le lendemain."
    steps_niveaux:
      amateur:
      - "Four. Préchauffez le four à 175 °C et beurrez un moule de 20 à 22 cm."
      - "Appareil. Fouettez le beurre pommade avec le sucre. Incorporez la poudre d’amandes, les œufs un à un, la farine et 20 ml de rhum brun."
      - "Cuisson. Enfournez 40 à 45 min : la pique doit ressortir sèche et le cœur rester moelleux."
      - "Imbibage. Démoulez et arrosez de 20 ml de rhum brun pendant que le gâteau est encore chaud."
      - "Glaçage. Une fois froid, nappez d’un glaçage de sucre glace et de 20 ml de rhum. C’est encore meilleur le lendemain."
      pro:
      - "Préchauffer le four à 175 °C. Beurrer un moule de 20 à 22 cm."
      - "Fouetter le beurre pommade avec le sucre. Incorporer la poudre d’amandes, les œufs un à un, la farine et 20 ml de rhum brun."
      - "Enfourner 40 à 45 min : pique sèche, cœur moelleux."
      - "Démouler. Arroser de 20 ml de rhum brun, gâteau encore chaud."
      - "Froid. Napper d’un glaçage sucre glace et 20 ml de rhum. Meilleur le lendemain."
      cavernes:
      - "Four. Four 175 °C. Moule 20 à 22 cm, beurrer."
      - "Appareil. Beurre pommade, sucre, fouetter. Poudre d’amandes, œufs 1 à 1, farine, 20 ml rhum brun."
      - "Cuisson. Four 40 à 45 min. Pique sèche, cœur moelleux."
      - "Imbibage. Démouler. 20 ml rhum brun, gâteau encore chaud, arroser."
      - "Glaçage. Froid. Glaçage sucre glace, 20 ml rhum, napper. Meilleur lendemain."
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 480
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
    allergens:
    - gluten
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 45
      rest_min: 60
      total_min: 125
    equipment:
    - fouet
    - moule
    - four
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 125
      unit: g
      item: margarine végétale
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: sucre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: "poudre d'amandes"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: compote de pomme
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine de blé
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: rhum brun
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre glace
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 15
      unit: ml
      item: eau
      group: 
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Four. Préchauffez le four à 175 °C et graissez le moule avec de la margarine végétale."
    - "Appareil. Mélangez la margarine végétale, le sucre, la poudre d’amandes, la compote de pomme, la farine et 20 ml de rhum brun."
    - "Cuisson. Enfournez 40 à 45 min."
    - "Imbibage. Arrosez de 20 ml de rhum brun à chaud."
    - "Glaçage. Nappez à froid d’un mélange de sucre glace et d’eau."
    steps_niveaux:
      amateur:
      - "Four. Préchauffez le four à 175 °C et graissez le moule avec de la margarine végétale."
      - "Appareil. Mélangez la margarine végétale, le sucre, la poudre d’amandes, la compote de pomme, la farine et 20 ml de rhum brun."
      - "Cuisson. Enfournez 40 à 45 min."
      - "Imbibage. Arrosez de 20 ml de rhum brun à chaud."
      - "Glaçage. Nappez à froid d’un mélange de sucre glace et d’eau."
      pro:
      - "Préchauffer le four à 175 °C. Graisser le moule à la margarine végétale."
      - "Mélanger margarine végétale, sucre, poudre d’amandes, compote de pomme, farine et 20 ml de rhum brun."
      - "Enfourner 40 à 45 min."
      - "Arroser de 20 ml de rhum brun à chaud."
      - "Napper à froid d’un mélange de sucre glace et d’eau."
      cavernes:
      - "Four. Four 175 °C. Moule, margarine végétale."
      - "Appareil. Margarine végétale, sucre, poudre d’amandes, compote de pomme, farine, 20 ml rhum brun, mélanger."
      - "Cuisson. Four 40 à 45 min."
      - "Imbibage. 20 ml rhum brun, chaud, arroser."
      - "Glaçage. Froid. Sucre glace, eau, napper."
    kcal_per_serving: 450
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 480
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 0
      rest_min: 0
      total_min: 15
    equipment:
    - saladier
    - fouet
    - spatule
    - moule 26 cm
    substitutions: []
    scale_note: "Batch réel : 1 moule 26 cm. Temps et température de four non indiqués par Jigmé."
    ingredients:
    - qty: 125
      unit: g
      item: beurre pommade
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre blanc
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: "poudre d'amandes"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: œufs
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: farine
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: ml
      item: rhum blanc ou ambré
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre glace
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: sel fin
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Appareil. Mélangez le beurre pommade, le sucre blanc, la poudre d’amandes, les œufs, la farine et le rhum."
    - "Cuisson. Versez dans le moule antiadhésif de 26 cm et faites cuire."
    - "Glaçage. Nappez de sucre glace une fois le gâteau refroidi."
    steps_niveaux:
      amateur:
      - "Appareil. Mélangez le beurre pommade, le sucre blanc, la poudre d’amandes, les œufs, la farine et le rhum."
      - "Cuisson. Versez dans le moule antiadhésif de 26 cm et faites cuire."
      - "Glaçage. Nappez de sucre glace une fois le gâteau refroidi."
      pro:
      - "Mélanger beurre pommade, sucre blanc, poudre d’amandes, œufs, farine et rhum."
      - "Verser dans le moule antiadhésif de 26 cm. Cuire."
      - "Napper de sucre glace, gâteau refroidi."
      cavernes:
      - "Appareil. Beurre pommade, sucre blanc, poudre d’amandes, œufs, farine, rhum, mélanger."
      - "Cuisson. Moule antiadhésif 26 cm, verser. Cuire."
      - "Glaçage. Gâteau refroidi. Sucre glace, napper."
    kcal_per_serving: 490
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: 4 jours, contenant: boîte hermétique, note: ""}
  congelation: {possible: true, duree: 1 mois, decongelation: une nuit au frigo, note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: Se mange froid.
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Gâteau nantais

**Catégorie :** sucré
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 125 g beurre demi-sel
- 150 g sucre
- 100 g poudre d'amandes
- 3 piece œufs
- 40 g farine de blé
- 60 ml rhum brun
- 50 g sucre glace

## Préparation

1. Four. Préchauffez le four à 175 °C et beurrez un moule de 20 à 22 cm.
2. Appareil. Fouettez le beurre pommade avec le sucre. Incorporez la poudre d’amandes, les œufs un à un, la farine et 20 ml de rhum brun.
3. Cuisson. Enfournez 40 à 45 min : la pique doit ressortir sèche et le cœur rester moelleux.
4. Imbibage. Démoulez et arrosez de 20 ml de rhum brun pendant que le gâteau est encore chaud.
5. Glaçage. Une fois froid, nappez d’un glaçage de sucre glace et de 20 ml de rhum. C’est encore meilleur le lendemain.
