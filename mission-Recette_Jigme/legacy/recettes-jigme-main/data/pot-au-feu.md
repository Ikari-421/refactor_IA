---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: pot-au-feu
title: Pot-au-feu
lang: fr
description: "Pot-au-feu : recette française de bœuf mijoté avec carotte, poireau, navet et os à moelle, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- bœuf
- mijoté
- légumes
image:
  url:
  alt: Pot-au-feu
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de céleri branche listé. Vérifier le bouquet.
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
histoire: "Le pot-au-feu est le bouillon de bœuf et de légumes du foyer français. Viandes à bouillir (gîte, paleron, plat de côtes), os à moelle, carotte, poireau, navet, oignon piqué de clou. Le bouillon se sert d’abord, la viande ensuite."
fun_facts:
- text: "Le pot-au-feu rassemble plusieurs morceaux : un gras, un gélatineux, un maigre."
  source_name: "Wikipedia FR, Pot-au-feu"
  source_url: "https://fr.wikipedia.org/wiki/Pot-au-feu"
- text: L’oignon piqué de clou de girofle parfume le bouillon sans le troubler.
  source_name: "Wikipedia FR, Pot-au-feu"
  source_url: "https://fr.wikipedia.org/wiki/Pot-au-feu"
- text: "Le bouillon dégraissé se sert à part, parfois avec du pain grillé."
  source_name: "Wikipedia FR, Bouillon (soupe)"
  source_url: "https://fr.wikipedia.org/wiki/Bouillon_(soupe)"
wines:
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, plat mijoté, légumes sucrés."
- name: Saint-Émilion
  producer: Château Haut-Segottes
  origin: "Saint-Émilion, Bordeaux"
  grapes: "Merlot, cabernet franc"
  award: 
  why: "Merlot, bœuf bouilli, tanin modéré."
- name: Chinon
  producer: Bernard Baudry
  origin: "Chinon, Loire"
  grapes: Cabernet franc
  award: 
  why: "Poivron, pot-au-feu, carotte."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens: []
    difficulty: 2
    time:
      prep_min: 40
      cook_min: 80
      rest_min: 0
      total_min: 120
    equipment:
    - cocotte
    - écumoire
    substitutions:
    - from: bœuf
      to: jarret de veau
      note: Plus gélatineux.
    scale_note: 
    ingredients:
    - qty: 800
      unit: g
      item: bœuf à pot-au-feu
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: os à moelle
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: carottes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poireaux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: navets
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: clous de girofle
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pommes de terre
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
    - qty: 2000
      unit: ml
      item: eau
      group: 
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Départ. Mettez le bœuf à pot-au-feu dans une grande marmite d’eau froide, portez à ébullition et écumez soigneusement."
    - "Aromates. Ajoutez l’oignon piqué de clous de girofle, le bouquet garni et le sel, puis laissez mijoter à feu doux pendant 1 h 30."
    - "Légumes. Incorporez les carottes, les poireaux, les navets, les pommes de terre et les os à moelle, puis poursuivez la cuisson 40 min."
    - "Service. Servez d’abord le bouillon, puis la viande et les légumes, et poivrez au moment de déguster."
    steps_niveaux:
      amateur:
      - "Départ. Mettez le bœuf à pot-au-feu dans une grande marmite d’eau froide, portez à ébullition et écumez soigneusement."
      - "Aromates. Ajoutez l’oignon piqué de clous de girofle, le bouquet garni et le sel, puis [[mijoter|laissez mijoter]] à feu doux pendant 1 h 30."
      - "Légumes. Incorporez les carottes, les poireaux, les navets, les pommes de terre et les os à moelle, puis poursuivez la cuisson 40 min."
      - "Service. Servez d’abord le bouillon, puis la viande et les légumes, et poivrez au moment de déguster."
      pro:
      - "Placer le bœuf à pot-au-feu dans une grande marmite d’eau froide. Porter à ébullition. Écumer soigneusement."
      - "Ajouter l’oignon piqué de clous de girofle, le bouquet garni et le sel. Mijoter à feu doux 1 h 30."
      - "Incorporer carottes, poireaux, navets, pommes de terre et os à moelle. Poursuivre 40 min."
      - "Servir d’abord le bouillon, puis la viande et les légumes. Poivrer au moment de déguster."
      cavernes:
      - "Départ. Bœuf pot-feu, grande marmite, eau froide. Ébullition. Écumer soigneusement."
      - "Aromates. Oignon, clous girofle, piqué. Bouquet garni, sel, ajouter. Feu doux, mijoter 1 h 30."
      - "Légumes. Carottes, poireaux, navets, pommes terre, os moelle, incorporer. Cuisson 40 min, poursuivre."
      - "Service. Bouillon d’abord, servir. Viande, légumes. Poivre, moment déguster."
    kcal_per_serving: 480
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegetarienne:
    label: Végétarienne
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - celeri
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 400
      unit: g
      item: céleri-rave
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: carottes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poireaux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: navets
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignons de Paris
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 2000
      unit: ml
      item: fond de légumes
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
    - "Légumes. Coupez le céleri-rave, les carottes, les poireaux, les navets, l’oignon, les pommes de terre et les champignons de Paris en gros morceaux."
    - "Mijotage. Couvrez avec le fond de légumes, ajoutez le bouquet garni et le sel, puis laissez mijoter 45 min."
    - "Service. Servez d’abord le bouillon, puis les légumes, et poivrez au moment de déguster."
    steps_niveaux:
      amateur:
      - "Légumes. Coupez le céleri-rave, les carottes, les poireaux, les navets, l’oignon, les pommes de terre et les champignons de Paris en gros morceaux."
      - "Mijotage. Couvrez avec le fond de légumes, ajoutez le bouquet garni et le sel, puis [[mijoter|laissez mijoter]] 45 min."
      - "Service. Servez d’abord le bouillon, puis les légumes, et poivrez au moment de déguster."
      pro:
      - "Couper en gros morceaux : céleri-rave, carottes, poireaux, navets, oignon, pommes de terre, champignons de Paris."
      - "Couvrir avec le fond de légumes. Ajouter le bouquet garni et le sel. Mijoter 45 min."
      - "Servir d’abord le bouillon, puis les légumes. Poivrer au moment de déguster."
      cavernes:
      - "Légumes. Céleri-rave, carottes, poireaux, navets, oignon, pommes terre, champignons Paris, gros morceaux, couper."
      - "Mijotage. Fond légumes, couvrir. Bouquet garni, sel, ajouter. Mijoter 45 min."
      - "Service. Bouillon d’abord, servir. Légumes. Poivre, moment déguster."
    kcal_per_serving: 220
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
  vegan:
    label: Vegan
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - celeri
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note: 
    ingredients: []
    steps: []
    kcal_per_serving: 220
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
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 50
      rest_min: 0
      total_min: 70
    equipment:
    - cocotte
    substitutions: []
    scale_note: 
    ingredients:
    - qty: 600
      unit: g
      item: lieu noir
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: carottes
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: poireaux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: navets
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: pommes de terre
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: bouquet garni
      group: 
      scale: false
      optional: false
      to_taste: false
    - qty: 1500
      unit: ml
      item: fond de légumes
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
    - "Légumes. Faites mijoter les carottes, les poireaux, les navets et les pommes de terre 40 min dans le fond de légumes, avec le bouquet garni et le sel."
    - "Poisson. Ajoutez le lieu noir coupé en pavés et laissez-le frémir 8 min."
    - "Service. Servez le bouillon, les légumes et le poisson, puis poivrez."
    steps_niveaux:
      amateur:
      - "Légumes. [[mijoter|Faites mijoter]] les carottes, les poireaux, les navets et les pommes de terre 40 min dans le fond de légumes, avec le bouquet garni et le sel."
      - "Poisson. Ajoutez le lieu noir coupé en pavés et laissez-le frémir 8 min."
      - "Service. Servez le bouillon, les légumes et le poisson, puis poivrez."
      pro:
      - "Mijoter 40 min carottes, poireaux, navets et pommes de terre dans le fond de légumes, avec le bouquet garni et le sel."
      - "Ajouter le lieu noir coupé en pavés. Laisser frémir 8 min."
      - "Servir le bouillon, les légumes et le poisson. Poivrer."
      cavernes:
      - "Légumes. Carottes, poireaux, navets, pommes terre, 40 min, mijoter. Fond légumes, bouquet garni, sel."
      - "Poisson. Lieu noir, pavés, couper, ajouter. Frémir 8 min."
      - "Service. Bouillon, légumes, poisson, servir. Poivrer."
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
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
  note_verif: "Bouillon et viande : 3 jours. Dégraisser froid."

---

# Pot-au-feu

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 800 g bœuf à pot-au-feu
- 2 piece os à moelle
- 3 piece carottes
- 2 piece poireaux
- 2 piece navets
- 1 piece oignon
- 2 piece clous de girofle
- 1 piece bouquet garni
- 4 piece pommes de terre
- sel (au goût)
- poivre (au goût)
- 2000 ml eau

## Préparation

1. Départ. Mettez le bœuf à pot-au-feu dans une grande marmite d’eau froide, portez à ébullition et écumez soigneusement.
2. Aromates. Ajoutez l’oignon piqué de clous de girofle, le bouquet garni et le sel, puis laissez mijoter à feu doux pendant 1 h 30.
3. Légumes. Incorporez les carottes, les poireaux, les navets, les pommes de terre et les os à moelle, puis poursuivez la cuisson 40 min.
4. Service. Servez d’abord le bouillon, puis la viande et les légumes, et poivrez au moment de déguster.
