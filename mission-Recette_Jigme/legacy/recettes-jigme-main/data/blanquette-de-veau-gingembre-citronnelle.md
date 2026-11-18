---
schema: recette-web-jigme/v2
equipment:
- ref: cocotte
slug: blanquette-de-veau-gingembre-citronnelle
title: Blanquette de veau gingembre citronnelle
lang: fr
description: "Blanquette de veau gingembre citronnelle : recette française avec viande de veau, échalote grise et gousse d'ail, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- mijoté
- veau
- viande de veau
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/blanquette-de-veau-gingembre-citronnelle.webp
  alt: Blanquette de veau gingembre citronnelle
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/blanquette-de-veau-gingembre-citronnelle.md
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
    - from: farine
      to: mix farine sans gluten + psyllium
      note: Liant.
    - from: pain
      to: pain sans gluten
      note:
    - from: pâte
      to: pâte sans gluten
      note: Texture différente.
    - from: champignons + seitan
      to: tofu ferme
      note:
    - from: champignons + seitan
      to: tofu ferme
      note:
    note: 'Farine / pâte : mix SG. Feuilletage moins typique.'
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (sole ou cabillaud) : pas d’adaptation fiable.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: Saké
      to: bouillon de légumes
      note:
    note: 'Sulfites : Saké → bouillon de légumes.'
house_toggle:
house_options: []
histoire: 'La blanquette de veau est un ragoût blanc français (on ne dore pas la viande). Recettes imprimées
  chez La Chapelle (1735, restes de veau) et Marin, *Les Dons de Comus* (1739). La liaison crème-jaunes
  et le veau non coloré définissent le plat. Gingembre et citronnelle sont un écart contemporain, pas
  le canon.

  '
fun_facts:
- text: "« Blanquette » vient de blanc : aucune coloration. Un veau rôti n’est plus une blanquette."
  source_name: Grokipedia, Blanquette de veau
  source_url: https://grokipedia.com/page/Blanquette_de_veau
- text: "En 2006 un sondage la plaçait parmi les plats préférés des Français ; le ranking varie selon les années."
  source_name: Grokipedia, Blanquette de veau
  source_url: https://grokipedia.com/page/Blanquette_de_veau
wines:
- name: Mâcon-Villages
  producer: Cave de Lugny
  origin: Lugny, Mâconnais
  grapes: chardonnay
  award:
  why: Fleur, peu de bois — sauce blanche et veau.
- name: Sancerre
  producer: Domaine Vacheron
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Agrume — gingembre et citronnelle de cette version.
- name: Beaujolais blanc
  producer: Jean-Paul Brun
  origin: Charnay, Beaujolais
  grapes: chardonnay
  award:
  why: Citron, pierre — la liaison crème-jaune.
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
    - sulfites
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 85
      rest_min: 120
      total_min: 235
    equipment: &id002
    - casserole
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: viande de veau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote grise
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citronnelle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: bouillon de veau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Saké
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle,
      les carottes et les champignons.
    - Cuisson. Dans une cocotte, faites saisir la viande avec un peu de matière grasse, puis sortez-la.
      Dans le jus de cuisson du veau, faites cuire l’échalote, le gingembre, la citronnelle
      et l’ail, puis déglacez avec de l’alcool (ici, du Saké).
    - Cuisson. Rajoutez la viande, les carottes, les feuilles de laurier et du bouillon de veau à hauteur.
      Laissez mijoter pendant une heure et demi à feu doux, puis retirez toute la garniture
      de la cocotte pour n’y laisser que le bouillon.
    - Cuisson. Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire
      les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux (on
      explique ici comment le préparer) et de la crème liquide et laissez épaissir.
    - Finition. Vous pouvez désormais rajouter toute votre garniture dans la cocotte, y compris les
      champignons. Ajoutez de la coriandre hachée et du zeste de citron. Votre blanquette
      est prête ! Vous pouvez l’accompagner de riz, de pâtes ou même de pommes de terre. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Épluchez et coupez l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Dans une cocotte, faites saisir la viande avec un peu de matière grasse, puis sortez-la. Dans le jus de cuisson du veau, faites cuire l’échalote, le gingembre, la citronnelle et l’ail, puis [[deglacer|déglacez]] avec de l’alcool (ici, du saké)."
      - "Ajoutez la viande, les carottes, les feuilles de laurier et du bouillon de veau à hauteur. [[mijoter|Laissez mijoter]] pendant une heure et demi à feu doux, puis retirez toute la garniture de la cocotte pour n’y laisser que le bouillon."
      - "Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux et de la crème liquide et laissez épaissir."
      - "Ajoutez toute la garniture dans la cocotte, y compris les champignons. Ajoutez de la coriandre hachée et du zeste de citron. Vous pouvez accompagner de riz, de pâtes ou de pommes de terre."
      pro:
      - "Éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Cocotte : saisir la viande avec un peu de matière grasse. Sortir. Dans le jus de cuisson du veau, cuire échalote, gingembre, citronnelle et ail. Déglacer à l’alcool (saké)."
      - "Remettre la viande, les carottes, les feuilles de laurier et du bouillon de veau à hauteur. Mijoter une heure et demi à feu doux. Retirer toute la garniture ; ne laisser que le bouillon."
      - "Casserole d’eau bouillante : ajouter une louche de bouillon, y cuire les champignons. Dans la cocotte, au bouillon de cuisson : ajouter le roux et la crème liquide. Laisser épaissir."
      - "Remettre toute la garniture, champignons compris. Ajouter la coriandre hachée et le zeste de citron. Accompagner de riz, pâtes ou pommes de terre."
      cavernes:
      - "Échalote grise, ail, gingembre, citronnelle, carottes, champignons : éplucher, couper."
      - "Cocotte : viande, matière grasse, saisir. Sortir. Jus cuisson veau : échalote, gingembre, citronnelle, ail, cuire. Alcool (saké) : déglacer."
      - "Viande, carottes, feuilles de laurier, bouillon de veau à hauteur : ajouter. Mijoter heure et demi feu doux. Garniture dehors. Bouillon reste."
      - "Casserole eau bouillante : louche bouillon, champignons cuire. Cocotte, bouillon cuisson : roux, crème liquide, épaissir."
      - "Garniture, champignons : remettre. Coriandre hachée, zeste de citron : ajouter. Riz, pâtes ou pommes de terre : accompagner."
    kcal_per_serving: 469
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
    - pesco
    allergens:
    - gluten
    - lactose
    - produits_laitiers
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: champignons + seitan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote grise
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citronnelle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Saké
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle,
      les carottes et les champignons.
    - Cuisson. Dans une cocotte, faites saisir le seitan (et les champignons) avec un peu de matière grasse, puis sortez-les. Dans le jus de cuisson, faites cuire l’échalote, le gingembre, la citronnelle
      et l’ail, puis déglacez avec de l’alcool (ici, du Saké).
    - Cuisson. Rajoutez le seitan, les carottes, les feuilles de laurier et du fond de légumes à hauteur. Laissez mijoter pendant une heure et demi à feu doux, puis retirez toute
      la garniture de la cocotte pour n’y laisser que le bouillon.
    - Cuisson. Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire
      les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux (on
      explique ici comment le préparer) et de la crème liquide et laissez épaissir.
    - Finition. Vous pouvez désormais rajouter toute votre garniture dans la cocotte, y compris les
      champignons. Ajoutez de la coriandre hachée et du zeste de citron. Votre blanquette
      est prête ! Vous pouvez l’accompagner de riz, de pâtes ou même de pommes de terre. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Épluchez et coupez l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Dans une cocotte, faites saisir le seitan (et les champignons) avec un peu de matière grasse, puis sortez-les. Dans le jus de cuisson, faites cuire l’échalote, le gingembre, la citronnelle et l’ail, puis [[deglacer|déglacez]] avec de l’alcool (ici, du saké)."
      - "Ajoutez le seitan, les carottes, les feuilles de laurier et du fond de légumes à hauteur. [[mijoter|Laissez mijoter]] pendant une heure et demi à feu doux, puis retirez toute la garniture de la cocotte pour n’y laisser que le bouillon."
      - "Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux et de la crème liquide et laissez épaissir."
      - "Ajoutez toute la garniture dans la cocotte, y compris les champignons. Ajoutez de la coriandre hachée et du zeste de citron. Vous pouvez accompagner de riz, de pâtes ou de pommes de terre."
      pro:
      - "Éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Cocotte : saisir le seitan (et les champignons) avec un peu de matière grasse. Sortir. Dans le jus de cuisson, cuire échalote, gingembre, citronnelle et ail. Déglacer à l’alcool (saké)."
      - "Remettre le seitan, les carottes, les feuilles de laurier et du fond de légumes à hauteur. Mijoter une heure et demi à feu doux. Retirer toute la garniture ; ne laisser que le bouillon."
      - "Casserole d’eau bouillante : ajouter une louche de bouillon, y cuire les champignons. Dans la cocotte, au bouillon de cuisson : ajouter le roux et la crème liquide. Laisser épaissir."
      - "Remettre toute la garniture, champignons compris. Ajouter la coriandre hachée et le zeste de citron. Accompagner de riz, pâtes ou pommes de terre."
      cavernes:
      - "Échalote grise, ail, gingembre, citronnelle, carottes, champignons : éplucher, couper."
      - "Cocotte : seitan et champignons, matière grasse, saisir. Sortir. Jus cuisson : échalote, gingembre, citronnelle, ail, cuire. Alcool (saké) : déglacer."
      - "Seitan, carottes, feuilles de laurier, fond de légumes à hauteur : ajouter. Mijoter heure et demi feu doux. Garniture dehors. Bouillon reste."
      - "Casserole eau bouillante : louche bouillon, champignons cuire. Cocotte, bouillon cuisson : roux, crème liquide, épaissir."
      - "Garniture, champignons : remettre. Coriandre hachée, zeste de citron : ajouter. Riz, pâtes ou pommes de terre : accompagner."
    kcal_per_serving: 889
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
    - gluten
    - soja
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: seitan et champignons
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote grise
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citronnelle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème de soja ou avoine
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: fond de légumes
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Saké
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle,
      les carottes et les champignons.
    - Cuisson. Dans une cocotte, faites saisir le seitan et les champignons avec un peu d’huile, puis sortez-les. Dans le jus de cuisson, faites cuire l’échalote, le gingembre, la citronnelle
      et l’ail, puis déglacez avec de l’alcool (ici, du Saké).
    - Cuisson. Rajoutez le seitan, les champignons, les carottes, les feuilles de laurier et du fond de légumes à hauteur. Laissez mijoter pendant une heure et demi à feu doux, puis retirez toute
      la garniture de la cocotte pour n’y laisser que le bouillon.
    - Cuisson. Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire
      les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux (on
      explique ici comment le préparer) et de la crème de soja ou avoine et laissez épaissir.
    - Finition. Vous pouvez désormais rajouter toute votre garniture dans la cocotte, y compris les
      champignons. Ajoutez de la coriandre hachée et du zeste de citron. Votre blanquette
      est prête ! Vous pouvez l’accompagner de riz, de pâtes ou même de pommes de terre. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Épluchez et coupez l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Dans une cocotte, faites saisir le seitan et les champignons avec un peu d’huile, puis sortez-les. Dans le jus de cuisson, faites cuire l’échalote, le gingembre, la citronnelle et l’ail, puis [[deglacer|déglacez]] avec de l’alcool (ici, du saké)."
      - "Ajoutez le seitan, les champignons, les carottes, les feuilles de laurier et du fond de légumes à hauteur. [[mijoter|Laissez mijoter]] pendant une heure et demi à feu doux, puis retirez toute la garniture de la cocotte pour n’y laisser que le bouillon."
      - "Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux et de la crème de soja ou d’avoine et laissez épaissir."
      - "Ajoutez toute la garniture dans la cocotte, y compris les champignons. Ajoutez de la coriandre hachée et du zeste de citron. Vous pouvez accompagner de riz, de pâtes ou de pommes de terre."
      pro:
      - "Éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Cocotte : saisir le seitan et les champignons avec un peu d’huile. Sortir. Dans le jus de cuisson, cuire échalote, gingembre, citronnelle et ail. Déglacer à l’alcool (saké)."
      - "Remettre le seitan, les champignons, les carottes, les feuilles de laurier et du fond de légumes à hauteur. Mijoter une heure et demi à feu doux. Retirer toute la garniture ; ne laisser que le bouillon."
      - "Casserole d’eau bouillante : ajouter une louche de bouillon, y cuire les champignons. Dans la cocotte, au bouillon de cuisson : ajouter le roux et la crème de soja ou d’avoine. Laisser épaissir."
      - "Remettre toute la garniture, champignons compris. Ajouter la coriandre hachée et le zeste de citron. Accompagner de riz, pâtes ou pommes de terre."
      cavernes:
      - "Échalote grise, ail, gingembre, citronnelle, carottes, champignons : éplucher, couper."
      - "Cocotte : seitan et champignons, huile, saisir. Sortir. Jus cuisson : échalote, gingembre, citronnelle, ail, cuire. Alcool (saké) : déglacer."
      - "Seitan, champignons, carottes, feuilles de laurier, fond de légumes à hauteur : ajouter. Mijoter heure et demi feu doux. Garniture dehors. Bouillon reste."
      - "Casserole eau bouillante : louche bouillon, champignons cuire. Cocotte, bouillon cuisson : roux, crème de soja ou avoine, épaissir."
      - "Garniture, champignons : remettre. Coriandre hachée, zeste de citron : ajouter. Riz, pâtes ou pommes de terre : accompagner."
    kcal_per_serving: 784
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
    - gluten
    - lactose
    - produits_laitiers
    - poisson
    - sulfites
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1000
      unit: g
      item: sole ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: échalote grise
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse d'ail
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: champignon de Paris
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: gingembre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: citronnelle
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: feuilles de laurier
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: coriandre
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: sole ou cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: Saké
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Commencez par éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle,
      les carottes et les champignons.
    - Cuisson. Dans une cocotte, faites saisir la viande avec un peu de matière grasse, puis sortez-la.
      Dans le jus de cuisson du veau, faites cuire l’échalote, le gingembre, la citronnelle
      et l’ail, puis déglacez avec de l’alcool (ici, du Saké).
    - Cuisson. Rajoutez la viande, les carottes, les feuilles de laurier et du sole ou cabillaud à
      hauteur. Laissez mijoter pendant une heure et demi à feu doux, puis retirez toute la
      garniture de la cocotte pour n’y laisser que le bouillon.
    - Cuisson. Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire
      les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux (on
      explique ici comment le préparer) et de la crème liquide et laissez épaissir.
    - Finition. Vous pouvez désormais rajouter toute votre garniture dans la cocotte, y compris les
      champignons. Ajoutez de la coriandre hachée et du zeste de citron. Votre blanquette
      est prête ! Vous pouvez l’accompagner de riz, de pâtes ou même de pommes de terre. Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Épluchez et coupez l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Dans une cocotte, faites saisir la viande avec un peu de matière grasse, puis sortez-la. Dans le jus de cuisson du veau, faites cuire l’échalote, le gingembre, la citronnelle et l’ail, puis [[deglacer|déglacez]] avec de l’alcool (ici, du saké)."
      - "Ajoutez la viande, les carottes, les feuilles de laurier et du sole ou cabillaud à hauteur. [[mijoter|Laissez mijoter]] pendant une heure et demi à feu doux, puis retirez toute la garniture de la cocotte pour n’y laisser que le bouillon."
      - "Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux et de la crème liquide et laissez épaissir."
      - "Ajoutez toute la garniture dans la cocotte, y compris les champignons. Ajoutez de la coriandre hachée et du zeste de citron. Vous pouvez accompagner de riz, de pâtes ou de pommes de terre."
      pro:
      - "Éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons."
      - "Cocotte : saisir la viande avec un peu de matière grasse. Sortir. Dans le jus de cuisson du veau, cuire échalote, gingembre, citronnelle et ail. Déglacer à l’alcool (saké)."
      - "Remettre la viande, les carottes, les feuilles de laurier et du sole ou cabillaud à hauteur. Mijoter une heure et demi à feu doux. Retirer toute la garniture ; ne laisser que le bouillon."
      - "Casserole d’eau bouillante : ajouter une louche de bouillon, y cuire les champignons. Dans la cocotte, au bouillon de cuisson : ajouter le roux et la crème liquide. Laisser épaissir."
      - "Remettre toute la garniture, champignons compris. Ajouter la coriandre hachée et le zeste de citron. Accompagner de riz, pâtes ou pommes de terre."
      cavernes:
      - "Échalote grise, ail, gingembre, citronnelle, carottes, champignons : éplucher, couper."
      - "Cocotte : viande, matière grasse, saisir. Sortir. Jus cuisson veau : échalote, gingembre, citronnelle, ail, cuire. Alcool (saké) : déglacer."
      - "Viande, carottes, feuilles de laurier, sole ou cabillaud à hauteur : ajouter. Mijoter heure et demi feu doux. Garniture dehors. Bouillon reste."
      - "Casserole eau bouillante : louche bouillon, champignons cuire. Cocotte, bouillon cuisson : roux, crème liquide, épaissir."
      - "Garniture, champignons : remettre. Coriandre hachée, zeste de citron : ajouter. Riz, pâtes ou pommes de terre : accompagner."
    kcal_per_serving: 469
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  pesco:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  traditionnelle:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegan:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
  vegetarienne:
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Blanquette de veau gingembre citronnelle

![[blanquette-de-veau-gingembre-citronnelle.webp]]
**Équipement :** [[cocotte]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/blanquette-de-veau-gingembre-citronnelle]]

## Ingrédients (4 personnes)

- 1 kg de viande de veau
- 1 échalote grise
- 1 gousse d'ail
- 2 carotte
- 200 g de champignon de Paris
-  gingembre
-  citronnelle
-  crème liquide
-  feuilles de laurier
-  coriandre
- 1 citron
- 60 g de farine
- 60 g de beurre
- 1 L de bouillon de veau
-  Saké

## Préparation

1. Commencez par éplucher et couper l’échalote grise, l’ail, le gingembre, la citronnelle, les carottes et les champignons.
2. Dans une cocotte, faites saisir la viande avec un peu de matière grasse, puis sortez-la. Dans le jus de cuisson du veau, faites cuire l’échalote, le gingembre, la citronnelle et l’ail, puis déglacez avec de l’alcool (ici, du Saké).
3. Rajoutez la viande, les carottes, les feuilles de laurier et du bouillon de veau à hauteur. Laissez mijoter pendant une heure et demi à feu doux, puis retirez toute la garniture de la cocotte pour n’y laisser que le bouillon.
4. Dans une casserole d’eau bouillante, ajoutez une louche de bouillon pour y faire cuire les champignons. Dans la cocotte contenant le bouillon de cuisson, ajoutez du roux (on explique ici comment le préparer) et de la crème liquide et laissez épaissir.
5. Vous pouvez désormais rajouter toute votre garniture dans la cocotte, y compris les champignons. Ajoutez de la coriandre hachée et du zeste de citron.

 
 

 
 Votre blanquette est prête ! Vous pouvez l’accompagner de riz, de pâtes ou même de pommes de terre. Bon appétit !
