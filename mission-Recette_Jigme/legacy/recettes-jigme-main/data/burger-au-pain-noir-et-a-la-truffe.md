---
schema: recette-web-jigme/v2
equipment:
- ref: sauteuse-wok
slug: burger-au-pain-noir-et-a-la-truffe
title: Burger au pain noir et à la truffe
lang: fr
description: "Burger au pain noir et à la truffe : recette française de steak, pain de seigle et crème truffée, pour 4 personnes. Facile à suivre à la maison."
cuisine: française
category: salé
tags:
- salé
- truffe
- pain
- bœuf
image:
  url:
  alt: Burger au pain noir et à la truffe
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: "Pain de seigle : pain sans gluten, plus clair."
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
histoire: "Le burger au pain noir reprend le pain de seigle d’Europe du Nord. La truffe, tuber d’hiver, se râpe ou se met en crème. Plat de restaurant des années 2000 : pain sombre, bœuf, fromage, parfum de truffe (fraîche ou huile, selon le budget)."
fun_facts:
- text: "La truffe noire du Périgord (Tuber melanosporum) n’est pas l’huile « truffe » du commerce, souvent de synthèse."
  source_name: "Wikipedia FR, Truffe"
  source_url: "https://fr.wikipedia.org/wiki/Truffe_(champignon)"
- text: Le seigle donne la mie sombre du pain noir ; ce n’est pas du cacao.
  source_name: "Wikipedia FR, Seigle"
  source_url: "https://fr.wikipedia.org/wiki/Seigle"
- text: "La truffe se râpe hors feu : trop cuite, elle s’évapore."
  source_name: "Wikipedia FR, Truffe"
  source_url: "https://fr.wikipedia.org/wiki/Truffe_(champignon)"
wines:
- name: Pomerol
  producer: Château Gazin
  origin: "Pomerol, Bordeaux"
  grapes: Merlot
  award: 
  why: "Merlot, bœuf, parfum de sous-bois. Un vin un peu plus cher, le seul prestige de la fiche."
- name: Côtes du Rhône
  producer: E. Guigal
  origin: "Ampuis, Rhône"
  grapes: "Grenache, syrah, mourvèdre"
  award: 
  why: "Souple, steak, crème."
- name: "Pinot Noir d'Alsace"
  producer: Hugel
  origin: "Riquewihr, Alsace"
  grapes: Pinot noir
  award: 
  why: "Fruit, truffe, pain de seigle."
variants:
  traditionnelle:
    label: Traditionnelle
    inherit: 
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
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
    substitutions:
    - from: truffe fraîche
      to: "1 cac d'huile de truffe"
      note: "Moins net, plus facile."
    scale_note: "Viande hachée : cuire à cœur si on sert un public fragile."
    ingredients:
    - qty: 4
      unit: piece
      item: pains de seigle type burger
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: steak haché de bœuf
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: truffe noire
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: comté
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: roquette
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
    - "Crème. Mélangez la crème fraîche, la truffe noire râpée, le sel et le poivre. Réservez 20 min au frais."
    - "Steaks. Formez 4 steaks hachés de bœuf, salez-les et saisissez-les à la poêle vive 2 à 3 min par face."
    - "Pain. Faites dorer les pains de seigle dans le beurre doux."
    - "Montage. Garnissez de roquette, du steak, du comté fondu et de la crème truffée."
    steps_niveaux:
      amateur:
      - "Crème. Mélangez la crème fraîche, la truffe noire râpée, le sel et le poivre. Réservez 20 min au frais."
      - "Steaks. Formez 4 steaks hachés de bœuf, salez-les et saisissez-les à la poêle vive 2 à 3 min par face."
      - "Pain. Faites dorer les pains de seigle dans le beurre doux."
      - "Montage. Garnissez de roquette, du steak, du comté fondu et de la crème truffée."
      pro:
      - "Mélanger crème fraîche, truffe noire râpée, sel et poivre. Réserver 20 min au frais."
      - "Former 4 steaks hachés de bœuf. Saler. Saisir à la poêle vive 2 à 3 min par face."
      - "Dorer les pains de seigle dans le beurre doux."
      - "Garnir : roquette, steak, comté fondu, crème truffée."
      cavernes:
      - "Crème. Crème fraîche, truffe noire râpée, sel, poivre, mélanger. Frais, réserver 20 min."
      - "Steaks. 4 steaks hachés bœuf, former. Saler. Poêle vive, saisir 2 à 3 min par face."
      - "Pain. Pains seigle, beurre doux, dorer."
      - "Montage. Roquette, steak, comté fondu, crème truffée. Garnir."
    kcal_per_serving: 720
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
    - qty: 4
      unit: piece
      item: pains de seigle type burger
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: halloumi
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: truffe noire
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: roquette
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: beurre doux
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 
      unit: 
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Crème. Mélangez la crème fraîche et la truffe noire râpée."
    - "Halloumi. Poêlez le halloumi jusqu’à ce qu’il soit bien marqué."
    - "Montage. Garnissez le pain doré de roquette, de halloumi et de crème truffée."
    steps_niveaux:
      amateur:
      - "Crème. Mélangez la crème fraîche et la truffe noire râpée."
      - "Halloumi. Poêlez le halloumi jusqu’à ce qu’il soit bien marqué."
      - "Montage. Garnissez le pain doré de roquette, de halloumi et de crème truffée."
      pro:
      - "Mélanger crème fraîche et truffe noire râpée."
      - "Poêler le halloumi jusqu’à marquage net."
      - "Garnir le pain doré : roquette, halloumi, crème truffée."
      cavernes:
      - "Crème. Crème fraîche, truffe noire râpée, mélanger."
      - "Halloumi. Halloumi, poêler. Bien marqué."
      - "Montage. Pain doré. Roquette, halloumi, crème truffée. Garnir."
    kcal_per_serving: 610
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
    - qty: 4
      unit: piece
      item: pains de seigle type burger
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: steaks de pois
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: "crème d'avoine"
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: truffe noire
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: roquette
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: ml
      item: "huile d'olive"
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
    - "Crème. Mélangez la crème d’avoine et la truffe noire râpée."
    - "Steaks. Poêlez les steaks de pois."
    - "Montage. Garnissez le pain de roquette, du steak de pois et de la crème d’avoine truffée."
    steps_niveaux:
      amateur:
      - "Crème. Mélangez la crème d’avoine et la truffe noire râpée."
      - "Steaks. Poêlez les steaks de pois."
      - "Montage. Garnissez le pain de roquette, du steak de pois et de la crème d’avoine truffée."
      pro:
      - "Mélanger crème d’avoine et truffe noire râpée."
      - "Poêler les steaks de pois."
      - "Garnir le pain : roquette, steak de pois, crème d’avoine truffée."
      cavernes:
      - "Crème. Crème avoine, truffe noire râpée, mélanger."
      - "Steaks. Steaks pois, poêler."
      - "Montage. Pain. Roquette, steak pois, crème avoine truffée. Garnir."
    kcal_per_serving: 540
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
    - gluten
    - lactose
    - produits_laitiers
    - poisson
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
    - qty: 4
      unit: piece
      item: pains de seigle type burger
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: pavés de saumon
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: crème fraîche
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 10
      unit: g
      item: truffe noire
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: roquette
      group: 
      scale: true
      optional: false
      to_taste: false
    - qty: 40
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
    - "Crème. Mélangez la crème fraîche et la truffe noire râpée."
    - "Saumon. Poêlez les pavés de saumon 3 min par face."
    - "Montage. Garnissez le pain de roquette, de saumon et de crème truffée."
    steps_niveaux:
      amateur:
      - "Crème. Mélangez la crème fraîche et la truffe noire râpée."
      - "Saumon. Poêlez les pavés de saumon 3 min par face."
      - "Montage. Garnissez le pain de roquette, de saumon et de crème truffée."
      pro:
      - "Mélanger crème fraîche et truffe noire râpée."
      - "Poêler les pavés de saumon 3 min par face."
      - "Garnir le pain : roquette, saumon, crème truffée."
      cavernes:
      - "Crème. Crème fraîche, truffe noire râpée, mélanger."
      - "Saumon. Pavés saumon, poêler 3 min par face."
      - "Montage. Pain. Roquette, saumon, crème truffée. Garnir."
    kcal_per_serving: 650
    kcal_source: ciqual_2020_estime
    kcal_note: "Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées."
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
  note_verif: "Viande hachée : 24 h. Ne pas recongeler."

---

# Burger au pain noir et à la truffe

**Catégorie :** salé
Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version gastronomique.

## Ingrédients (4 personnes)

- 4 piece pains de seigle type burger
- 600 g steak haché de bœuf
- 80 g crème fraîche
- 10 g truffe noire
- 80 g comté
- 40 g beurre doux
- 80 g roquette
- sel (au goût)
- poivre (au goût)

## Préparation

1. Crème. Mélangez la crème fraîche, la truffe noire râpée, le sel et le poivre. Réservez 20 min au frais.
2. Steaks. Formez 4 steaks hachés de bœuf, salez-les et saisissez-les à la poêle vive 2 à 3 min par face.
3. Pain. Faites dorer les pains de seigle dans le beurre doux.
4. Montage. Garnissez de roquette, du steak, du comté fondu et de la crème truffée.
