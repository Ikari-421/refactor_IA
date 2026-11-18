---
schema: recette-web-jigme/v2
slug: bento-au-saumon
title: Bento au saumon
lang: fr
description: "Bento au saumon : recette française avec riz, fève et maïs, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: japonaise
category: salé
tags:
- salé
- bento
- saumon
- rapide
image:
  url:
  alt: Bento au saumon
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/bento-au-saumon.md
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
    - from: sauce soja
      to: tamari sans gluten
      note:
    note: 'Gluten : sauce soja → tamari sans gluten.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: halloumi ou tofu fumé
      to: tofu ferme
      note:
    note: 'Lactose : halloumi ou tofu fumé → tofu ferme.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: halloumi ou tofu fumé
      to: tofu ferme
      note:
    note: 'Produits laitiers : halloumi ou tofu fumé → tofu ferme.'
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
    impossible: false
    redirect_variant: vegetarienne
    clears:
    - poisson
    swaps: []
    note: → version végétarienne.
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
    - from: sauce soja
      to: tamari de coco ou sel + vinaigre de riz
      note: Goût moins iodé.
    - from: halloumi ou tofu fumé
      to: pois chiches rôtis
      note:
    - from: tofu fumé
      to: pois chiches rôtis
      note:
    note: 'Soja central (sauce soja / tofu) : pas de substitut unique, warning.'
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: vinaigre de riz
      to: jus de citron vert
      note: Acidité un peu différente.
    note: Vinaigre de riz → citron vert.
house_toggle:
house_options: []
histoire: >
  Le bento est la boîte-repas japonaise (voyageurs, écoliers, ouvriers). Le mot désigne
  le contenant autant que le contenu. Le saumon grillé ou en sashimi y est courant
  au Japon moderne ; ce n’est pas un mets de cour figé.
fun_facts:
- text: "Un bento se compose souvent de riz, d’une protéine et de pickles aux couleurs contrastées (règle empirique du « pas tout beige »)."
  source_name: Usage japonais
  source_url:
- text: "Le saumon cru d’élevage en bento pose la même question de froid que tout poisson cru : à manger le jour même."
  source_name: Usage / sécurité
  source_url:
wines:
- name: Muscadet Sèvre-et-Maine
  producer: Domaine de l'Ecu
  origin: Le Landreau, Loire
  grapes: melon de Bourgogne
  award:
  why: Salin, maigre — saumon et riz, sans sucrosité.
- name: Txakoli de Getaria
  producer: Ameztoi
  origin: Getaria, Pays basque
  grapes: hondarrabi zuri
  award:
  why: Petit perlé, citron — le gras du saumon.
- name: Cheverny blanc
  producer: Domaine du Salvard
  origin: Cheverny, Loire
  grapes: sauvignon, chardonnay
  award:
  why: Agrume, herbe — algue nori et soja.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - soja
    - sesame
    - sulfites
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 0
      rest_min: 0
      total_min: 30
    equipment: &id002
    - plan de travail
    - couteau
    - saladier
    substitutions: []
    scale_note:
    ingredients:
    - qty: 50
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: fève
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: radis
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: saumon cru
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Nettoyez votre riz et mettez-le à cuire dans de l’eau bouillante. Pendant qu’il cuit,
      écossez les fèves, coupez les radis, l’avocat et le saumon en petits morceaux.
    - Cuisson. Pour enlever la peau des fèves, faites une entaille à l’arrière de celles-ci et plongez-les
      dans de l’eau bouillante salée pendant 2 minutes. Vous n’avez ensuite plus qu’à appuyer
      sur les fèves pour les faire sortir de leur peau.
    - Cuisson. Ajoutez du vinaigre de riz dans votre riz, puis assemblez votre bento en mettant tous
      vos ingrédients dedans.
    - Finition. Pour la vinaigrette, on opte ici pour un mélange de sauce soja, d’huile de sésame et
      de vinaigre de riz. Votre bento est prêt à être emporté partout ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Nettoyez votre riz et mettez-le à cuire dans de l’eau bouillante. Pendant qu’il cuit, écossez les fèves, coupez les radis, l’avocat et le saumon en petits morceaux."
      - "Pour enlever la peau des fèves, faites une entaille à l’arrière de celles-ci et plongez-les dans de l’eau bouillante salée pendant 2 minutes. Appuyez ensuite sur les fèves pour les faire sortir de leur peau."
      - "Ajoutez du vinaigre de riz dans votre riz, puis assemblez votre bento en mettant tous vos ingrédients dedans."
      - "Pour la vinaigrette, mélangez de la sauce soja, de l’huile de sésame et du vinaigre de riz."
      pro:
      - "Nettoyer le riz. Cuire à l’eau bouillante. Pendant la cuisson, écosser les fèves ; couper les radis, l’avocat et le saumon en petits morceaux."
      - "Entailler les fèves à l’arrière. Plonger 2 min dans l’eau bouillante salée. Presser pour extraire de la peau."
      - "Ajouter du vinaigre de riz au riz. Assembler le bento avec tous les ingrédients."
      - "Vinaigrette : mélanger sauce soja, huile de sésame et vinaigre de riz."
      cavernes:
      - "Riz : nettoyer, cuire eau bouillante. Pendant : fèves écosser. Radis, avocat, saumon : couper petits morceaux."
      - "Fèves : entaille arrière, plonger eau bouillante salée 2 min. Appuyer, peau dehors."
      - "Riz : vinaigre de riz. Bento : assembler, tous ingrédients dedans."
      - "Vinaigrette : sauce soja, huile de sésame, vinaigre de riz. Mélanger."
    kcal_per_serving: 176
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
    - soja
    - sesame
    - sulfites
    - gluten
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 50
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: fève
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: radis
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: halloumi ou tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Nettoyez votre riz et mettez-le à cuire dans de l’eau bouillante. Pendant qu’il cuit,
      écossez les fèves, coupez les radis, l’avocat et le halloumi (ou le tofu fumé) en petits morceaux.
    - Cuisson. Pour enlever la peau des fèves, faites une entaille à l’arrière de celles-ci et plongez-les
      dans de l’eau bouillante salée pendant 2 minutes. Vous n’avez ensuite plus qu’à appuyer
      sur les fèves pour les faire sortir de leur peau.
    - Cuisson. Ajoutez du vinaigre de riz dans votre riz, puis assemblez votre bento en mettant tous
      vos ingrédients dedans.
    - Finition. Pour la vinaigrette, on opte ici pour un mélange de sauce soja, d’huile de sésame et
      de vinaigre de riz. Votre bento est prêt à être emporté partout ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Nettoyez votre riz et mettez-le à cuire dans de l’eau bouillante. Pendant qu’il cuit, écossez les fèves, coupez les radis, l’avocat et le halloumi (ou le tofu fumé) en petits morceaux."
      - "Pour enlever la peau des fèves, faites une entaille à l’arrière de celles-ci et plongez-les dans de l’eau bouillante salée pendant 2 minutes. Appuyez ensuite sur les fèves pour les faire sortir de leur peau."
      - "Ajoutez du vinaigre de riz dans votre riz, puis assemblez votre bento en mettant tous vos ingrédients dedans."
      - "Pour la vinaigrette, mélangez de la sauce soja, de l’huile de sésame et du vinaigre de riz."
      pro:
      - "Nettoyer le riz. Cuire à l’eau bouillante. Pendant la cuisson, écosser les fèves ; couper les radis, l’avocat et le halloumi (ou le tofu fumé) en petits morceaux."
      - "Entailler les fèves à l’arrière. Plonger 2 min dans l’eau bouillante salée. Presser pour extraire de la peau."
      - "Ajouter du vinaigre de riz au riz. Assembler le bento avec tous les ingrédients."
      - "Vinaigrette : mélanger sauce soja, huile de sésame et vinaigre de riz."
      cavernes:
      - "Riz : nettoyer, cuire eau bouillante. Pendant : fèves écosser. Radis, avocat, halloumi ou tofu fumé : couper petits morceaux."
      - "Fèves : entaille arrière, plonger eau bouillante salée 2 min. Appuyer, peau dehors."
      - "Riz : vinaigre de riz. Bento : assembler, tous ingrédients dedans."
      - "Vinaigrette : sauce soja, huile de sésame, vinaigre de riz. Mélanger."
    kcal_per_serving: 140
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan (identique)
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    - sesame
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 50
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: fève
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: radis
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: avocat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: tofu fumé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sauce soja
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: huile de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: vinaigre de riz
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Nettoyez votre riz et mettez-le à cuire dans de l’eau bouillante. Pendant qu’il cuit,
      écossez les fèves, coupez les radis, l’avocat et le tofu fumé en petits morceaux.
    - Cuisson. Pour enlever la peau des fèves, faites une entaille à l’arrière de celles-ci et plongez-les
      dans de l’eau bouillante salée pendant 2 minutes. Vous n’avez ensuite plus qu’à appuyer
      sur les fèves pour les faire sortir de leur peau.
    - Cuisson. Ajoutez du vinaigre de riz dans votre riz, puis assemblez votre bento en mettant tous
      vos ingrédients dedans.
    - Finition. Pour la vinaigrette, on opte ici pour un mélange de sauce soja, d’huile de sésame et
      de vinaigre de riz. Votre bento est prêt à être emporté partout ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Nettoyez votre riz et mettez-le à cuire dans de l’eau bouillante. Pendant qu’il cuit, écossez les fèves, coupez les radis, l’avocat et le tofu fumé en petits morceaux."
      - "Pour enlever la peau des fèves, faites une entaille à l’arrière de celles-ci et plongez-les dans de l’eau bouillante salée pendant 2 minutes. Appuyez ensuite sur les fèves pour les faire sortir de leur peau."
      - "Ajoutez du vinaigre de riz dans votre riz, puis assemblez votre bento en mettant tous vos ingrédients dedans."
      - "Pour la vinaigrette, mélangez de la sauce soja, de l’huile de sésame et du vinaigre de riz."
      pro:
      - "Nettoyer le riz. Cuire à l’eau bouillante. Pendant la cuisson, écosser les fèves ; couper les radis, l’avocat et le tofu fumé en petits morceaux."
      - "Entailler les fèves à l’arrière. Plonger 2 min dans l’eau bouillante salée. Presser pour extraire de la peau."
      - "Ajouter du vinaigre de riz au riz. Assembler le bento avec tous les ingrédients."
      - "Vinaigrette : mélanger sauce soja, huile de sésame et vinaigre de riz."
      cavernes:
      - "Riz : nettoyer, cuire eau bouillante. Pendant : fèves écosser. Radis, avocat, tofu fumé : couper petits morceaux."
      - "Fèves : entaille arrière, plonger eau bouillante salée 2 min. Appuyer, peau dehors."
      - "Riz : vinaigre de riz. Bento : assembler, tous ingrédients dedans."
      - "Vinaigrette : sauce soja, huile de sésame, vinaigre de riz. Mélanger."
    kcal_per_serving: 140
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - poisson
    - soja
    - sesame
    - sulfites
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 176
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Se mange froid, ne pas réchauffer"
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; riz cuit (Bacillus cereus si refroidissement lent)"

---

# Bento au saumon
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/bento-au-saumon]]

## Ingrédients (4 personnes)

- 50 g de riz
- 60 g de fève
- 60 g de maïs
- 5 radis
- 1 avocat
- 100 g de saumon cru
-  sauce soja
-  huile de sésame
-  vinaigre de riz

## Préparation

1. Nettoyez votre riz et mettez-le à cuire dans de l’eau bouillante. Pendant qu’il cuit, écossez les fèves, coupez les radis, l’avocat et le saumon en petits morceaux.
2. Pour enlever la peau des fèves, faites une entaille à l’arrière de celles-ci et plongez-les dans de l’eau bouillante salée pendant 2 minutes. Vous n’avez ensuite plus qu’à appuyer sur les fèves pour les faire sortir de leur peau.
3. Ajoutez du vinaigre de riz dans votre riz, puis assemblez votre bento en mettant tous vos ingrédients dedans.
4. Pour la vinaigrette, on opte ici pour un mélange de sauce soja, d’huile de sésame et de vinaigre de riz.

 
 

 
 Votre bento est prêt à être emporté partout ! Bon appétit !
