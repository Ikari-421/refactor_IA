---
schema: recette-web-jigme/v2
slug: caviar-de-courgettes
title: Caviar de courgettes
lang: fr
description: "Caviar de courgettes : recette française avec courgette, gousse d'ail et citron jaune, pour 4 personnes. Version maison."
cuisine: française
category: salé
tags:
- salé
- légumes
- végane
- plat
image:
  url:
  alt: Caviar de courgettes
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/caviar-de-courgettes.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sesame
    swaps:
    - from: sésame
      to: graines de courge
      note:
    - from: tahini
      to: purée de tournesol
      note:
    note: Remplacer sésame.
  sans_sulfites:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de sulfites ajoutés listés.
house_toggle:
house_options: []
histoire: >
  Sur le modèle du caviar d’aubergines (mezze levantin / grec, aubergine grillée),
  le caviar de courgettes est une variante française d’apéritif, pas un mets ottoman
  catalogué.
fun_facts:
- text: "La courgette rend beaucoup d’eau : on la fait dégorger ou réduire, sinon c’est une soupe froide."
  source_name: Usage
  source_url:
- text: "« Caviar » ici veut dire tartinade, pas d’esturgeon."
  source_name: Usage
  source_url:
wines:
- name: Cassis blanc
  producer: Domaine du Paternel
  origin: Cassis, Provence
  grapes: marsanne, clairette, ugni
  award:
  why: Fenouil, agrume — légume et huile d’olive.
- name: Palette blanc
  producer: Château Simone
  origin: Palette, Provence
  grapes: clairette et autres
  award:
  why: Floral, gras — la courgette confite. (rester sur un millésime d’entrée si le prix grimpe.)
- name: Côtes de Provence blanc
  producer: Commanderie de Peyrassol
  origin: Flassans-sur-Issole
  grapes: rolle, ugni
  award:
  why: Agrume, amande — tartine d’apéritif.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens: &id001
    - sesame
    difficulty: 2
    time: &id002
      prep_min: 40
      cook_min: 30
      rest_min: 0
      total_min: 70
    equipment: &id003
    - four
    - poêle
    - plaque + papier sulfurisé
    - mixeur
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: courgette
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
    - qty: 1
      unit: piece
      item: citron jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: purée de sésame (tahin ou tahini)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: grenade (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: piment d'Espelette (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Découpez les courgettes en lamelles, puis disposez-les sur une plaque de four préalablement
      recouverte de papier cuisson. Ajoutez un filet d’huile d’olive, du sel, du poivre et
      enfournez pendant 20 à 30min à 180°C. N’hésitez pas à les retourner à mi-cuisson. Si
      vous n’avez pas de four, vous pouvez cuire les courgettes à la poêle.
    - Cuisson. Coupez grossièrement une gousse d’ail et pressez le jus d’un citron jaune.
    - Mixage. Mettez le tout dans un blender et complétez avec de la purée de sésame (aussi appelée
      tahin ou tahini). Salez, poivrez et versez un filet d’huile d’olive. En fonction de
      vos goûts, vous pouvez également ajoutez de la menthe fraiche. Mixez le tout et débarrassez
      dans un plat.
    - Dressage. Pour finaliser le dressage, vous pouvez ajouter quelques rondelles de courgettes crues,
      des feuilles de menthe fraîche, un peu de piment d’Espelette et de la grenade. Dégustez
      votre caviar de courgette bien frais, en tartine ou en y trempant du pain grillé, des
      chips ou des gressins. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Découpez les courgettes en lamelles, puis disposez-les sur une plaque de four recouverte de papier cuisson. Ajoutez un filet d’huile d’olive, du sel et du poivre, puis enfournez 20 à 30 min à 180 °C. Retournez-les à mi-cuisson. Sans four, cuisez-les à la poêle."
      - "Cuisson. Coupez grossièrement une gousse d’ail et pressez le jus d’un citron jaune."
      - "Mixage. Mettez le tout dans un blender et complétez avec la purée de sésame (tahin ou tahini). Salez, poivrez et versez un filet d’huile d’olive. Ajoutez de la menthe fraîche selon votre goût. Mixez, puis débarrassez dans un plat."
      - "Dressage. Ajoutez quelques rondelles de courgettes crues, des feuilles de menthe fraîche, un peu de piment d’Espelette et de la grenade. Servez bien frais."
      pro:
      - "Détailler les courgettes en lamelles. Disposer sur plaque recouverte de papier cuisson. Filet d’huile d’olive, sel, poivre. Enfourner 20 à 30 min à 180 °C. Retourner à mi-cuisson. À défaut, cuire à la poêle."
      - "Couper grossièrement une gousse d’ail. Presser le jus d’un citron jaune."
      - "Mettre le tout au blender. Ajouter la purée de sésame (tahin ou tahini), sel, poivre, filet d’huile d’olive. Menthe fraîche selon le goût. Mixer. Débarrasser dans un plat."
      - "Dresser : rondelles de courgettes crues, feuilles de menthe fraîche, piment d’Espelette, grenade. Servir bien frais."
      cavernes:
      - "Cuisson. Courgettes, lamelles. Plaque four papier cuisson. Filet huile olive, sel, poivre. Four 180 °C 20 à 30 min. Retourner mi-cuisson. Sinon poêle."
      - "Cuisson. Gousse ail, couper grossier. Citron jaune, presser jus."
      - "Mixage. Tout blender. Purée sésame (tahin). Sel, poivre, filet huile olive. Menthe, option. Mixer. Débarrasser plat."
      - "Dressage. Rondelles courgettes crues, feuilles menthe, peu piment Espelette, grenade. Frais."
    kcal_per_serving: 120
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
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 120
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - sesame
    difficulty: 2
    time:
      prep_min: 40
      cook_min: 30
      rest_min: 0
      total_min: 70
    equipment: []
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: courgette
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
    - qty: 1
      unit: piece
      item: citron jaune
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: purée de sésame (tahin ou tahini)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: menthe fraîche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile d'olive
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: piece
      item: grenade (facultatif)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: piment d'Espelette (facultatif)
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Découpez les courgettes en lamelles, puis disposez-les sur une plaque de four préalablement
      recouverte de papier cuisson. Ajoutez un filet d’huile d’olive, du sel, du poivre et
      enfournez pendant 20 à 30min à 180°C. N’hésitez pas à les retourner à mi-cuisson. Si
      vous n’avez pas de four, vous pouvez cuire les courgettes à la poêle.
    - Cuisson. Coupez grossièrement une gousse d’ail et pressez le jus d’un citron jaune.
    - Mixage. Mettez le tout dans un blender et complétez avec de la purée de sésame (aussi appelée
      tahin ou tahini). Salez, poivrez et versez un filet d’huile d’olive. En fonction de
      vos goûts, vous pouvez également ajoutez de la menthe fraiche. Mixez le tout et débarrassez
      dans un plat.
    - Dressage. Pour finaliser le dressage, vous pouvez ajouter quelques rondelles de courgettes crues,
      des feuilles de menthe fraîche, un peu de piment d’Espelette et de la grenade. Dégustez
      votre caviar de courgette bien frais, en tartine ou en y trempant du pain grillé, des
      chips ou des gressins. Bon appétit !
    steps_niveaux:
      amateur:
      - "Cuisson. Découpez les courgettes en lamelles, puis disposez-les sur une plaque de four recouverte de papier cuisson. Ajoutez un filet d’huile d’olive, du sel et du poivre, puis enfournez 20 à 30 min à 180 °C. Retournez-les à mi-cuisson. Sans four, cuisez-les à la poêle."
      - "Cuisson. Coupez grossièrement une gousse d’ail et pressez le jus d’un citron jaune."
      - "Mixage. Mettez le tout dans un blender et complétez avec la purée de sésame (tahin ou tahini). Salez, poivrez et versez un filet d’huile d’olive. Ajoutez de la menthe fraîche selon votre goût. Mixez, puis débarrassez dans un plat."
      - "Dressage. Ajoutez quelques rondelles de courgettes crues, des feuilles de menthe fraîche, un peu de piment d’Espelette et de la grenade. Servez bien frais."
      pro:
      - "Détailler les courgettes en lamelles. Disposer sur plaque recouverte de papier cuisson. Filet d’huile d’olive, sel, poivre. Enfourner 20 à 30 min à 180 °C. Retourner à mi-cuisson. À défaut, cuire à la poêle."
      - "Couper grossièrement une gousse d’ail. Presser le jus d’un citron jaune."
      - "Mettre le tout au blender. Ajouter la purée de sésame (tahin ou tahini), sel, poivre, filet d’huile d’olive. Menthe fraîche selon le goût. Mixer. Débarrasser dans un plat."
      - "Dresser : rondelles de courgettes crues, feuilles de menthe fraîche, piment d’Espelette, grenade. Servir bien frais."
      cavernes:
      - "Cuisson. Courgettes, lamelles. Plaque four papier cuisson. Filet huile olive, sel, poivre. Four 180 °C 20 à 30 min. Retourner mi-cuisson. Sinon poêle."
      - "Cuisson. Gousse ail, couper grossier. Citron jaune, presser jus."
      - "Mixage. Tout blender. Purée sésame (tahin). Sel, poivre, filet huile olive. Menthe, option. Mixer. Débarrasser plat."
      - "Dressage. Rondelles courgettes crues, feuilles menthe, peu piment Espelette, grenade. Frais."
    kcal_per_serving: 120
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
    - vegan
    - pesco
    allergens: *id001
    difficulty: 2
    time: *id002
    equipment: *id003
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 120
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

# Caviar de courgettes
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/caviar-de-courgettes]]

## Ingrédients (4 personnes)

- 4 courgette
- 1 gousse d'ail
- 1 citron jaune
- 2 c.à.s de purée de sésame (tahin ou tahini)
-  menthe fraîche
-  huile d'olive
- 1 grenade (facultatif)
-  piment d'Espelette (facultatif)

## Préparation

1. Découpez les courgettes en lamelles, puis disposez-les sur une plaque de four préalablement recouverte de papier cuisson. Ajoutez un filet d’huile d’olive, du sel, du poivre et enfournez pendant 20 à 30min à 180°C. N’hésitez pas à les retourner à mi-cuisson. Si vous n’avez pas de four, vous pouvez cuire les courgettes à la poêle.
2. Coupez grossièrement une gousse d’ail et pressez le jus d’un citron jaune.
3. Mettez le tout dans un blender et complétez avec de la purée de sésame (aussi appelée tahin ou tahini). Salez, poivrez et versez un filet d’huile d’olive. En fonction de vos goûts, vous pouvez également ajoutez de la menthe fraiche. Mixez le tout et débarrassez dans un plat.
4. Pour finaliser le dressage, vous pouvez ajouter quelques rondelles de courgettes crues, des feuilles de menthe fraîche, un peu de piment d’Espelette et de la grenade.

 
 

 
 Dégustez votre caviar de courgette bien frais, en tartine ou en y trempant du pain grillé, des chips ou des gressins. Bon appétit !
