---
schema: recette-web-jigme/v2
slug: le-boeuf-rossini
title: Le bœuf Rossini
lang: fr
description: "Le bœuf Rossini : recette française avec filet de bœuf, fond de veau et madère, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: salé
tags:
- salé
- bœuf
- plat
- filet de bœuf
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/le-boeuf-rossini.webp
  alt: Le bœuf Rossini
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/le-boeuf-rossini.md
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
    clears:
    - gluten
    swaps:
    - from: seitan ou champignons portobello
      to: tofu ferme
      note:
    - from: champignons + seitan
      to: tofu ferme
      note:
    note: 'Gluten : seitan ou champignons portobello → tofu ferme ; champignons + seitan →
      tofu ferme.'
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
    note: 'Contient poisson (thon ou cabillaud) : pas d’adaptation fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: madère
      to: fond de veau corsé (sans vin)
      note: Acidité un peu différente.
    note: Madère → fond de veau.
house_toggle:
house_options: []
histoire: 'Tournedos Rossini : filet de bœuf poêlé, croûton, foie gras, souvent truffe et sauce au madère.
  Grande cuisine française. On rattache le nom au compositeur Gioachino Rossini, gastronome ; la paternité
  exacte (Rossini lui-même ou un cuisinier parisien du XIXe s.) n’est pas tranchée.

  '
fun_facts:
- text: 'Le tournedos est un médaillon de filet, pas une bavette : la pièce est tendre, la cuisson courte.

    '
  source_name: Wikipedia, Tournedos Rossini
  source_url: https://en.wikipedia.org/wiki/Tournedos_Rossini
- text: 'Le foie gras se saisit à la dernière minute : trop cuit, il fond dans la poêle.

    '
  source_name: Usage
  source_url: null
- text: 'Pour aller plus loin : l’histoire de « Le bœuf Rossini ».'
  source_name: Grokipedia
  source_url: https://grokipedia.com/page/Tournedos_Rossini
wines:
- name: Saint-Joseph
  producer: Cave de Tain
  origin: Saint-Joseph, Rhône nord
  grapes: syrah
  award:
  why: Syrah, poivre — le filet et le foie gras, tanin net sans un hermitage.
- name: Pessac-Léognan
  producer: Château Haut-Bergey
  origin: Pessac-Léognan, Bordeaux
  grapes: cabernet sauvignon, merlot
  award:
  why: Cabernet, graviers — le bœuf, un bordeaux de table plutôt qu’un premier cru.
- name: Madiran
  producer: Producteurs Plaimont
  origin: Madiran, Sud-Ouest
  grapes: tannat
  award:
  why: Tannat, fruit noir — le foie gras et le jus, tanin présent.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 5
      rest_min: 0
      total_min: 35
    equipment: &id002
    - four
    - casserole
    - poêle
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 5
      unit: piece
      item: filet de bœuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond de veau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: madère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: foie gras
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Pendant que la sauce madère et le fond de veau se réchauffent, vous pouvez snacker l’escalope
      de foie gras dans une poêle (3 minutes de chaque côté) et mettre l’escalope au four
      à 180°C pendant 4 minutes.
    - Cuisson. Saisissez le filet de bœuf dans un fond d’huile et laissez cuire selon votre goût. N’hésitez
      pas à rajouter des herbes sur le filet de bœuf.
    - Cuisson. Versez le fond de veau dans la casserole où vous avez fait réchauffer le madère.
    - Finition. Rajoutez des petits morceaux de foie gras dans la sauce madère pour plus de goût et
      mixez le tout. Lorsque le filet est cuit à votre convenance, passez ensuite au dressage.
      Placez le foie gras sur le filet et enfin versez un peu de sauce sur le dessus ou versez-la
      dans un petit récipient à côté de l’assiette. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Pendant que la sauce madère et le fond de veau se réchauffent, snackez l’escalope de foie gras dans une poêle (3 minutes de chaque côté) et mettez-la au four à 180°C pendant 4 minutes."
      - "Cuisson. Saisissez le filet de bœuf dans un fond d’huile et laissez cuire selon votre goût. Vous pouvez rajouter des herbes sur le filet."
      - "Cuisson. Versez le fond de veau dans la casserole où vous avez fait réchauffer le madère."
      - "Finition. Rajoutez des petits morceaux de foie gras dans la sauce madère pour plus de goût et mixez le tout. Lorsque le filet est cuit à votre convenance, dressez : placez le foie gras sur le filet, puis versez un peu de sauce sur le dessus ou dans un petit récipient à côté de l’assiette."
      pro:
      - "Réchauffer sauce madère et fond de veau. Snacker l’escalope de foie gras à la poêle, 3 minutes de chaque côté. Four 180°C, 4 minutes."
      - "Saisir le filet de bœuf dans un fond d’huile. Cuire selon le goût. Herbes possibles."
      - "Verser le fond de veau dans la casserole du madère réchauffé."
      - "Incorporer des morceaux de foie gras à la sauce madère. Mixer. Dresser : foie gras sur le filet, sauce sur le dessus ou en saucière."
      cavernes:
      - "Préparation. Sauce madère, fond veau, réchauffer. Escalope foie gras, poêle, snacker, 3 minutes chaque côté. Escalope, Four 180°C, 4 minutes."
      - "Cuisson. Filet bœuf, fond huile, saisir. Cuire goût. Herbes, possible."
      - "Cuisson. Fond veau, casserole madère, verser."
      - "Finition. Foie gras, morceaux, sauce madère. Mixer. Filet cuit, dressage. Foie gras sur filet. Sauce dessus ou récipient côté assiette."
    kcal_per_serving: 219
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 5
      unit: piece
      item: seitan ou champignons portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: champignons + seitan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: madère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: terrine de champignons
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Pendant que la sauce madère et le champignons + seitan se réchauffent, vous pouvez snacker
      l’escalope de terrine de champignons dans une poêle (3 minutes de chaque côté) et mettre l’escalope
      au four à 180°C pendant 4 minutes.
    - Cuisson. Saisissez le seitan ou champignons portobello dans un fond d’huile et laissez cuire
      selon votre goût. N’hésitez pas à rajouter des herbes sur le seitan ou champignons portobello.
    - Cuisson. Versez le champignons + seitan dans la casserole où vous avez fait réchauffer le madère.
    - Finition. Rajoutez des petits morceaux de terrine de champignons dans la sauce madère pour plus de goût et
      mixez le tout. Lorsque le filet est cuit à votre convenance, passez ensuite au dressage.
      Placez le terrine de champignons sur le filet et enfin versez un peu de sauce sur le dessus ou versez-la
      dans un petit récipient à côté de l’assiette. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Pendant que la sauce madère et le champignons + seitan se réchauffent, snackez l’escalope de terrine de champignons dans une poêle (3 minutes de chaque côté) et mettez-la au four à 180°C pendant 4 minutes."
      - "Cuisson. Saisissez le seitan ou les champignons portobello dans un fond d’huile et laissez cuire selon votre goût. Vous pouvez rajouter des herbes sur le seitan ou les champignons portobello."
      - "Cuisson. Versez le champignons + seitan dans la casserole où vous avez fait réchauffer le madère."
      - "Finition. Rajoutez des petits morceaux de terrine de champignons dans la sauce madère pour plus de goût et mixez le tout. Lorsque le filet est cuit à votre convenance, dressez : placez la terrine de champignons sur le filet, puis versez un peu de sauce sur le dessus ou dans un petit récipient à côté de l’assiette."
      pro:
      - "Réchauffer sauce madère et champignons + seitan. Snacker l’escalope de terrine de champignons à la poêle, 3 minutes de chaque côté. Four 180°C, 4 minutes."
      - "Saisir seitan ou champignons portobello dans un fond d’huile. Cuire selon le goût. Herbes possibles."
      - "Verser le champignons + seitan dans la casserole du madère réchauffé."
      - "Incorporer des morceaux de terrine de champignons à la sauce madère. Mixer. Dresser : terrine sur le filet, sauce sur le dessus ou en saucière."
      cavernes:
      - "Préparation. Sauce madère, champignons + seitan, réchauffer. Escalope terrine champignons, poêle, snacker, 3 minutes chaque côté. Escalope, Four 180°C, 4 minutes."
      - "Cuisson. Seitan ou champignons portobello, fond huile, saisir. Cuire goût. Herbes, possible."
      - "Cuisson. Champignons + seitan, casserole madère, verser."
      - "Finition. Terrine champignons, morceaux, sauce madère. Mixer. Filet cuit, dressage. Terrine sur filet. Sauce dessus ou récipient côté assiette."
    kcal_per_serving: 344
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
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 5
      unit: piece
      item: seitan ou champignons portobello
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: madère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Cuisson. Pendant que la sauce madère et le fond de légumes se réchauffent, faites dorer le tofu fumé dans une poêle (3 minutes de chaque côté) puis passez-le 4 minutes au four à 180°C.
    - Cuisson. Saisissez le seitan ou champignons portobello dans un fond d’huile et laissez cuire
      selon votre goût. N’hésitez pas à rajouter des herbes sur le seitan ou champignons portobello.
    - Cuisson. Versez le fond de légumes dans la casserole où vous avez fait réchauffer le madère.
    - Dressage. Rajoutez des petits morceaux de tofu fumé dans la sauce madère et mixez. Lorsque le seitan est cuit, dressez — tofu fumé sur le seitan, un peu de sauce par-dessus. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Pendant que la sauce madère et le fond de légumes se réchauffent, faites dorer le tofu fumé dans une poêle (3 minutes de chaque côté) puis passez-le 4 minutes au four à 180°C."
      - "Cuisson. Saisissez le seitan ou les champignons portobello dans un fond d’huile et laissez cuire selon votre goût. Vous pouvez rajouter des herbes sur le seitan ou les champignons portobello."
      - "Cuisson. Versez le fond de légumes dans la casserole où vous avez fait réchauffer le madère."
      - "Dressage. Rajoutez des petits morceaux de tofu fumé dans la sauce madère et mixez. Lorsque le seitan est cuit, dressez : tofu fumé sur le seitan, un peu de sauce par-dessus."
      pro:
      - "Réchauffer sauce madère et fond de légumes. Dorer le tofu fumé à la poêle, 3 minutes de chaque côté. Four 180°C, 4 minutes."
      - "Saisir seitan ou champignons portobello dans un fond d’huile. Cuire selon le goût. Herbes possibles."
      - "Verser le fond de légumes dans la casserole du madère réchauffé."
      - "Incorporer des morceaux de tofu fumé à la sauce madère. Mixer. Dresser : tofu fumé sur le seitan, sauce par-dessus."
      cavernes:
      - "Cuisson. Sauce madère, fond légumes, réchauffer. Tofu fumé, poêle, dorer, 3 minutes chaque côté. Four 180°C, 4 minutes."
      - "Cuisson. Seitan ou champignons portobello, fond huile, saisir. Cuire goût. Herbes, possible."
      - "Cuisson. Fond légumes, casserole madère, verser."
      - "Dressage. Tofu fumé, morceaux, sauce madère. Mixer. Seitan cuit, dressage. Tofu fumé sur seitan. Sauce par-dessus."
    kcal_per_serving: 344
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 5
      unit: piece
      item: thon ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: ml
      item: sole ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: ml
      item: madère
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 140
      unit: g
      item: saumon fumé
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - Préparation. Pendant que la sauce madère et le sole ou cabillaud se réchauffent, vous pouvez snacker
      l’escalope de saumon fumé dans une poêle (3 minutes de chaque côté) et mettre l’escalope
      au four à 180°C pendant 4 minutes.
    - Cuisson. Saisissez le thon ou cabillaud dans un fond d’huile et laissez cuire selon votre goût.
      N’hésitez pas à rajouter des herbes sur le thon ou cabillaud.
    - Cuisson. Versez le sole ou cabillaud dans la casserole où vous avez fait réchauffer le madère.
    - Finition. Rajoutez des petits morceaux de saumon fumé dans la sauce madère pour plus de goût et
      mixez le tout. Lorsque le filet est cuit à votre convenance, passez ensuite au dressage.
      Placez le saumon fumé sur le filet et enfin versez un peu de sauce sur le dessus ou versez-la
      dans un petit récipient à côté de l’assiette. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Pendant que la sauce madère et le sole ou cabillaud se réchauffent, snackez l’escalope de saumon fumé dans une poêle (3 minutes de chaque côté) et mettez-la au four à 180°C pendant 4 minutes."
      - "Cuisson. Saisissez le thon ou le cabillaud dans un fond d’huile et laissez cuire selon votre goût. Vous pouvez rajouter des herbes sur le thon ou le cabillaud."
      - "Cuisson. Versez le sole ou cabillaud dans la casserole où vous avez fait réchauffer le madère."
      - "Finition. Rajoutez des petits morceaux de saumon fumé dans la sauce madère pour plus de goût et mixez le tout. Lorsque le filet est cuit à votre convenance, dressez : placez le saumon fumé sur le filet, puis versez un peu de sauce sur le dessus ou dans un petit récipient à côté de l’assiette."
      pro:
      - "Réchauffer sauce madère et sole ou cabillaud. Snacker l’escalope de saumon fumé à la poêle, 3 minutes de chaque côté. Four 180°C, 4 minutes."
      - "Saisir thon ou cabillaud dans un fond d’huile. Cuire selon le goût. Herbes possibles."
      - "Verser le sole ou cabillaud dans la casserole du madère réchauffé."
      - "Incorporer des morceaux de saumon fumé à la sauce madère. Mixer. Dresser : saumon fumé sur le filet, sauce sur le dessus ou en saucière."
      cavernes:
      - "Préparation. Sauce madère, sole ou cabillaud, réchauffer. Escalope saumon fumé, poêle, snacker, 3 minutes chaque côté. Escalope, Four 180°C, 4 minutes."
      - "Cuisson. Thon ou cabillaud, fond huile, saisir. Cuire goût. Herbes, possible."
      - "Cuisson. Sole ou cabillaud, casserole madère, verser."
      - "Finition. Saumon fumé, morceaux, sauce madère. Mixer. Filet cuit, dressage. Saumon fumé sur filet. Sauce dessus ou récipient côté assiette."
    kcal_per_serving: 155
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
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "saumon fumé"
---

# Le bœuf Rossini

![[le-boeuf-rossini.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/le-boeuf-rossini]]

## Ingrédients (4 personnes)

- 5 filet de bœuf
- 50 cL de fond de veau
- 20 cL de madère
- 140 g de foie gras

## Préparation

1. Pendant que la sauce madère et le fond de veau se réchauffent, vous pouvez snacker l’escalope de foie gras dans une poêle (3 minutes de chaque côté) et mettre l’escalope au four à 180°C pendant 4 minutes.
2. Saisissez le filet de bœuf dans un fond d’huile et laissez cuire selon votre goût. N’hésitez pas à rajouter des herbes sur le filet de bœuf.
3. Versez le fond de veau dans la casserole où vous avez fait réchauffer le madère.
4. Rajoutez des petits morceaux de foie gras dans la sauce madère pour plus de goût et mixez le tout.

 
 

 
 Lorsque le filet est cuit à votre convenance, passez ensuite au dressage. Placez le foie gras sur le filet et enfin versez un peu de sauce sur le dessus ou versez-la dans un petit récipient à côté de l’assiette. Bon appétit !
