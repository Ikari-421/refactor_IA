---
schema: recette-web-jigme/v2
slug: madeleines-fourrees-a-la-pate-a-tartiner
title: Madeleines fourrées à la pâte à tartiner
lang: fr
description: "Madeleines fourrées à la pâte à tartiner : recette française avec beurre, oeuf et sucre, pour 4 personnes. Version maison."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- goûter
- végétarien
- rapide
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/madeleines-fourrees-a-la-pate-a-tartiner.webp
  alt: Madeleines fourrées à la pâte à tartiner
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/madeleines-fourrees-a-la-pate-a-tartiner.md
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
    - from: pâte à tartiner
      to: pâte à tartiner vegan (sans lait)
      note:
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - oeuf
    swaps:
    - from: oeuf
      to: œuf de lin ou aquafaba selon le rôle
      note: 'Gâteau : lin ; mousse : aquafaba.'
    - from: œuf
      to: œuf de lin ou aquafaba selon le rôle
      note:
    note: 'Liaison / structure : voir vegan si dessert à meringue.'
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
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis ; lait d''avoine ou soja → lait d''avoine.'
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
histoire: 'Les madeleines que notre maman nous glissait dans notre petite boîte à goûter,
  vous en souvenez-vous ? Au lieu d''en acheter, faites-en à la maison !

  '
fun_facts:
- text: >
    Le moule en coquille donne la bosse : pâte bien froide, four vif.
  source_name: Grokipedia, Madeleine (cake)
  source_url: https://grokipedia.com/page/Madeleine_(cake)
- text: >
    Proust trempe une madeleine dans une tisane : le goût ramène l’enfance. On
    rattache souvent le gâteau à Commercy.
  source_name: Grokipedia, Involuntary memory
  source_url: https://grokipedia.com/page/Involuntary_memory
wines:
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: "Muscat, raisin frais — le cœur pâte à tartiner, sans noyer la madeleine."
- name: Coteaux du Layon
  producer: Château Pierre-Bise
  origin: Beaulieu-sur-Layon, Anjou
  grapes: chenin
  award:
  why: "Chenin moelleux, acidité — le beurre de la pâte et le sucre du fourrage."
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: "Grenache muté, cacao — le fourrage, un verre plus dense (un prestige)."
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - four
    - casserole
    - moule / plat
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 125
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: levure
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: extrait de vanille
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pâte à tartiner
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Faites fondre le beurre dans une casserole."
    - "Mélange. Dans un cul-de-poule, mélangez les œufs avec le sucre."
    - "Mélange. Incorporez le beurre fondu et mélangez de nouveau. Avec le reste de beurre, graissez les moules à madeleines au pinceau."
    - "Mélange. Versez le lait dans la préparation, puis mélangez une nouvelle fois."
    - "Cuisson. Incorporez la levure à la farine, puis ajoutez le tout petit à petit, en mélangeant."
    - "Cuisson. Terminez par une lichette d’extrait de vanille, selon votre goût, puis mélangez une dernière fois."
    - "Cuisson. Remplissez les moules à mi-hauteur."
    - "Cuisson. À la cuillère, déposez délicatement la pâte à tartiner au centre. Faites-la très légèrement chauffer si elle est trop ferme."
    - "Cuisson. Recouvrez d’une dernière couche de préparation."
    - "Cuisson. Enfournez 10 minutes à 200 °C. Surveillez et plantez la pointe d’un couteau dans la pâte : si elle ressort propre, c’est cuit. Laissez très légèrement refroidir, puis dégustez."
    steps_niveaux:
      amateur:
      - "Cuisson. Faites fondre le beurre dans une casserole."
      - "Mélange. Dans un cul-de-poule, mélangez les œufs avec le sucre."
      - "Mélange. Incorporez le beurre fondu et mélangez de nouveau. Avec le reste de beurre, graissez les moules à madeleines au pinceau."
      - "Mélange. Versez le lait dans la préparation, puis mélangez une nouvelle fois."
      - "Cuisson. Incorporez la levure à la farine, puis ajoutez le tout petit à petit, en mélangeant."
      - "Cuisson. Terminez par une lichette d’extrait de vanille, selon votre goût, puis mélangez une dernière fois."
      - "Cuisson. Remplissez les moules à mi-hauteur."
      - "Cuisson. À la cuillère, déposez délicatement la pâte à tartiner au centre. Faites-la très légèrement chauffer si elle est trop ferme."
      - "Cuisson. Recouvrez d’une dernière couche de préparation."
      - "Cuisson. Enfournez 10 minutes à 200 °C. Surveillez et plantez la pointe d’un couteau dans la pâte : si elle ressort propre, c’est cuit. Laissez très légèrement refroidir, puis dégustez."
      pro:
      - "Faire fondre le beurre en casserole."
      - "Dans un cul-de-poule, mélanger les œufs et le sucre."
      - "Incorporer le beurre fondu. Mélanger. Graisser les moules à madeleines au pinceau avec le reste de beurre."
      - "Verser le lait dans la préparation. Mélanger."
      - "Incorporer la levure à la farine. Ajouter petit à petit, en mélangeant."
      - "Ajouter une lichette d’extrait de vanille selon le goût. Mélanger."
      - "Remplir les moules à mi-hauteur."
      - "Déposer délicatement à la cuillère la pâte à tartiner au centre. Chauffer très légèrement si trop ferme."
      - "Recouvrir d’une dernière couche de préparation."
      - "Enfourner 10 minutes à 200 °C. Surveiller. Pointe de couteau dans la pâte : ressort propre, c’est cuit. Laisser très légèrement refroidir. Déguster."
      cavernes:
      - "Cuisson. Casserole. Beurre, fondre."
      - "Mélange. Cul-de-poule. Œufs, sucre, mélanger."
      - "Mélange. Beurre fondu, incorporer, mélanger. Reste beurre, moules madeleines, pinceau, graisser."
      - "Mélange. Lait, verser, préparation. Mélanger."
      - "Cuisson. Levure, farine, incorporer. Petit à petit, ajouter, mélanger."
      - "Cuisson. Lichette extrait vanille, goût. Mélanger, dernière fois."
      - "Cuisson. Moules, mi-hauteur, remplir."
      - "Cuisson. Cuillère. Pâte à tartiner, centre, déposer délicatement. Trop ferme : chauffer très légèrement."
      - "Cuisson. Dernière couche préparation, recouvrir."
      - "Cuisson. Four 200 °C, 10 min. Surveiller. Pointe couteau, pâte : ressort propre, cuit. Très légèrement refroidir. Déguster."
    kcal_per_serving: 495
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 495
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
    - pesco
    - vegan
    allergens:
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
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
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: g
      item: levure
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: extrait de vanille
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: pâte à tartiner vegan (sans lait)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Faites fondre la margarine végétale dans une casserole."
    - "Mélange. Dans un cul-de-poule, mélangez les œufs de lin (ou le tofu soyeux) avec le sucre."
    - "Cuisson. Incorporez la margarine végétale fondue et mélangez de nouveau. Avec le reste de margarine végétale, graissez les moules à madeleines au pinceau."
    - "Mélange. Versez le lait d’avoine ou de soja dans la préparation, puis mélangez une nouvelle fois."
    - "Cuisson. Incorporez la levure à la farine, puis ajoutez le tout petit à petit, en mélangeant."
    - "Cuisson. Terminez par une lichette d’extrait de vanille, selon votre goût, puis mélangez une dernière fois."
    - "Cuisson. Remplissez les moules à mi-hauteur."
    - "Cuisson. À la cuillère, déposez délicatement la pâte à tartiner vegan au centre. Faites-la très légèrement chauffer si elle est trop ferme."
    - "Cuisson. Recouvrez d’une dernière couche de préparation."
    - "Cuisson. Enfournez 10 minutes à 200 °C. Surveillez et plantez la pointe d’un couteau dans la pâte : si elle ressort propre, c’est cuit. Laissez très légèrement refroidir, puis dégustez."
    steps_niveaux:
      amateur:
      - "Cuisson. Faites fondre la margarine végétale dans une casserole."
      - "Mélange. Dans un cul-de-poule, mélangez les œufs de lin (ou le tofu soyeux) avec le sucre."
      - "Cuisson. Incorporez la margarine végétale fondue et mélangez de nouveau. Avec le reste de margarine végétale, graissez les moules à madeleines au pinceau."
      - "Mélange. Versez le lait d’avoine ou de soja dans la préparation, puis mélangez une nouvelle fois."
      - "Cuisson. Incorporez la levure à la farine, puis ajoutez le tout petit à petit, en mélangeant."
      - "Cuisson. Terminez par une lichette d’extrait de vanille, selon votre goût, puis mélangez une dernière fois."
      - "Cuisson. Remplissez les moules à mi-hauteur."
      - "Cuisson. À la cuillère, déposez délicatement la pâte à tartiner vegan au centre. Faites-la très légèrement chauffer si elle est trop ferme."
      - "Cuisson. Recouvrez d’une dernière couche de préparation."
      - "Cuisson. Enfournez 10 minutes à 200 °C. Surveillez et plantez la pointe d’un couteau dans la pâte : si elle ressort propre, c’est cuit. Laissez très légèrement refroidir, puis dégustez."
      pro:
      - "Faire fondre la margarine végétale en casserole."
      - "Dans un cul-de-poule, mélanger les œufs de lin (ou le tofu soyeux) et le sucre."
      - "Incorporer la margarine végétale fondue. Mélanger. Graisser les moules à madeleines au pinceau avec le reste de margarine végétale."
      - "Verser le lait d’avoine ou de soja dans la préparation. Mélanger."
      - "Incorporer la levure à la farine. Ajouter petit à petit, en mélangeant."
      - "Ajouter une lichette d’extrait de vanille selon le goût. Mélanger."
      - "Remplir les moules à mi-hauteur."
      - "Déposer délicatement à la cuillère la pâte à tartiner vegan au centre. Chauffer très légèrement si trop ferme."
      - "Recouvrir d’une dernière couche de préparation."
      - "Enfourner 10 minutes à 200 °C. Surveiller. Pointe de couteau dans la pâte : ressort propre, c’est cuit. Laisser très légèrement refroidir. Déguster."
      cavernes:
      - "Cuisson. Casserole. Margarine végétale, fondre."
      - "Mélange. Cul-de-poule. Œufs de lin ou tofu soyeux, sucre, mélanger."
      - "Cuisson. Margarine végétale fondue, incorporer, mélanger. Reste margarine végétale, moules madeleines, pinceau, graisser."
      - "Mélange. Lait d’avoine ou soja, verser, préparation. Mélanger."
      - "Cuisson. Levure, farine, incorporer. Petit à petit, ajouter, mélanger."
      - "Cuisson. Lichette extrait vanille, goût. Mélanger, dernière fois."
      - "Cuisson. Moules, mi-hauteur, remplir."
      - "Cuisson. Cuillère. Pâte à tartiner vegan, centre, déposer délicatement. Trop ferme : chauffer très légèrement."
      - "Cuisson. Dernière couche préparation, recouvrir."
      - "Cuisson. Four 200 °C, 10 min. Surveiller. Pointe couteau, pâte : ressort propre, cuit. Très légèrement refroidir. Déguster."
    kcal_per_serving: 276
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
    - gluten
    - lactose
    - produits_laitiers
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 495
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "", contenant: "", note: ""}
  congelation: {possible: true, duree: "2 mois", decongelation: "température ambiante", note: ""}
  temperature_ambiante: {duree: "4 à 7 jours", note: "Boîte hermétique."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Madeleines fourrées à la pâte à tartiner

![[madeleines-fourrees-a-la-pate-a-tartiner.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/madeleines-fourrees-a-la-pate-a-tartiner]]

## Ingrédients (4 personnes)

- 125 g de beurre
- 2 oeuf
- 100 g de sucre
- 5 cl de lait
- 5 g de levure
- 125 g de farine
-  extrait de vanille
-  pâte à tartiner

## Préparation

1. Cuisson. Faites fondre le beurre dans une casserole.
2. Mélange. Dans un cul-de-poule, mélangez les œufs avec le sucre.
3. Mélange. Incorporez le beurre fondu et mélangez de nouveau. Avec le reste de beurre, graissez les moules à madeleines au pinceau.
4. Mélange. Versez le lait dans la préparation, puis mélangez une nouvelle fois.
5. Cuisson. Incorporez la levure à la farine, puis ajoutez le tout petit à petit, en mélangeant.
6. Cuisson. Terminez par une lichette d’extrait de vanille, selon votre goût, puis mélangez une dernière fois.
7. Cuisson. Remplissez les moules à mi-hauteur.
8. Cuisson. À la cuillère, déposez délicatement la pâte à tartiner au centre. Faites-la très légèrement chauffer si elle est trop ferme.
9. Cuisson. Recouvrez d’une dernière couche de préparation.
10. Cuisson. Enfournez 10 minutes à 200 °C. Surveillez et plantez la pointe d’un couteau dans la pâte : si elle ressort propre, c’est cuit. Laissez très légèrement refroidir, puis dégustez.

 
 

 
 Vos madeleines sont prêtes ! Laissez très légèrement refroidir et dégustez avec vos amis, vos enfants, votre famille… bref, partagez !
