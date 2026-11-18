---
schema: recette-web-jigme/v2
slug: cheesecake-au-citron-a-lorange-et-au-gingembre
title: Cheesecake au citron, à l'orange et au gingembre
lang: fr
description: "Cheesecake au citron, à l'orange et au gingembre : recette américaine avec beurre, petits beurres et fromage blanc, pour 4 personnes."
cuisine: américaine
category: sucré
tags:
- sucré
- dessert
- goûter
- citron
- végétarien
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/cheesecake-au-citron-a-lorange-et-au-gingembre.webp
  alt: Cheesecake au citron, à l'orange et au gingembre
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/cheesecake-au-citron-a-lorange-et-au-gingembre.md
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
    impossible: true
    redirect_variant:
    clears:
    - gluten
    swaps: []
    note: 'Contient gluten (petits beurres) : pas d’adaptation fiable.'
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
    - from: petits beurres
      to: beurre sans lactose ou clarifié
      note:
    - from: fromage blanc
      to: fromage frais sans lactose
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
    - from: crème de soja ou avoine
      to: crème d'avoine
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine ; œuf de lin (1 c.à.s. lin + 3
      c.à.s. eau / œuf) ou tofu soyeux → pois chiches rôtis.'
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
histoire: >
  Le cheesecake (fromage frais, biscuit, souvent non cuit ou cuit au bain-marie) a des
  ancêtres européens (placenta romain, tartes au fromage) et une forme new-yorkaise
  au cream cheese au XXe s. Citron, orange, gingembre sont un parfum, pas l’origine.
fun_facts:
- text: "Le cream cheese (Philadelphia, 1870s, États-Unis) a fixé le cheesecake new-yorkais, plus acide que le fromage blanc."
  source_name: Usage / histoire alimentaire courante
  source_url:
- text: "Un cheesecake fend si le four est trop chaud ou s’il refroidit d’un coup."
  source_name: Usage pâtissier
  source_url:
wines:
- name: Moscato d'Asti
  producer: Coppo
  origin: Canelli, Piémont
  grapes: moscato bianco
  award:
  why: Bulles, fleur — agrumes et fromage.
- name: Gewurztraminer d'Alsace
  producer: Trimbach
  origin: Ribeauvillé, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, rose — gingembre et orange.
- name: Coteaux du Layon
  producer: Domaine Ogereau
  origin: Saint-Lambert-du-Lattay, Anjou
  grapes: chenin
  award:
  why: Agrume confit — le citron du cheese.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 30
      cook_min: 40
      rest_min: 450
      total_min: 520
    equipment: &id002
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 160
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: petits beurres
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: fromage blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème fraîche épaisse
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
    - qty: 3
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pot de confiture à l'orange
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
    steps:
    - Préparation. Pour commencez, broyez les gâteaux secs (type petits beurres). Incorporez le beurre
      fondu et mélangez jusqu’à l’obtention d’une pâte. Étalez cette dernière dans le fond
      de votre plat. Pressez bien puis réservez au frais pendant 20 minutes.
    - Cuisson. Dans un robot de préférence (c’est plus facile, sinon, faites le à la main), versez
      le fromage blanc, la crème fraîche épaisse, le sucre, les œufs entiers, du zeste et
      du jus de citron. Mélangez le tout et versez la préparation par dessus votre fond de
      gâteaux secs.
    - Cuisson. Enfournez à 150°C pendant un peu plus d’une heure. Veillez à surveiller la cuisson régulièrement.
    - Cuisson. Pour le topping, faites simplement réchauffer la confiture pour qu’elle devienne assez
      liquide. Versez la préparation sur le dessus du cheesecake et étalez de manière uniforme.
    - Cuisson. Râpez un peu de gingembre frais par dessus, ça apportera un petit côté piquant très
      agréable.
    - Finition. Laissez votre cheesecake à température ambiante pendant 1 heure puis au mettez-le au
      frigo pendant 5 heures minimum. Voilà, votre cheesecake est prêt ! Attendez qu’il soit
      ben froid et figé, généralement, c’est environ 5 heures. Enfin, la partie cruciale est
      le démoulage, faites le délicatement ! Mais nous pouvons vous assurez que c’est un jeu
      d’enfant avec un plat à fond amovible. Bonne dégustation et bonne sieste !
    steps_niveaux:
      amateur:
      - "Fond. Broyez les gâteaux secs (type petits beurres). Incorporez le beurre fondu et mélangez jusqu’à obtenir une pâte. Étalez-la dans le fond de votre plat, pressez bien, puis réservez au frais pendant 20 minutes."
      - "Appareil. Dans un robot de préférence, sinon à la main, versez le fromage blanc, la crème fraîche épaisse, le sucre, les œufs entiers, du zeste et du jus de citron. Mélangez, puis versez la préparation par-dessus le fond de gâteaux secs."
      - "Four. Enfournez à 150°C pendant un peu plus d’une heure. Surveillez la cuisson régulièrement."
      - "Topping. Réchauffez la confiture jusqu’à ce qu’elle soit assez liquide. Versez-la sur le dessus du cheesecake et étalez de manière uniforme."
      - "Gingembre. [[raper|Râpez]] un peu de gingembre frais par-dessus."
      - "Frais. Laissez le cheesecake à température ambiante pendant 1 heure, puis mettez-le au frigo pendant 5 heures minimum, jusqu’à ce qu’il soit bien froid et figé. Démoulez-le délicatement, avec un plat à fond amovible."
      pro:
      - "Broyer les gâteaux secs (type petits beurres). Incorporer le beurre fondu. Mélanger jusqu’à pâte. Étaler dans le fond du plat. Presser. Réserver au frais 20 minutes."
      - "Au robot de préférence, sinon à la main : verser fromage blanc, crème fraîche épaisse, sucre, œufs entiers, zeste et jus de citron. Mélanger. Verser sur le fond de gâteaux secs."
      - "Enfourner à 150°C pendant un peu plus d’une heure. Surveiller la cuisson régulièrement."
      - "Réchauffer la confiture jusqu’à assez liquide. Verser sur le dessus du cheesecake. Étaler de manière uniforme."
      - "Râper un peu de gingembre frais par-dessus."
      - "Laisser à température ambiante 1 heure, puis au frigo 5 heures minimum, froid et figé. Démouler délicatement, plat à fond amovible."
      cavernes:
      - "Fond. Gâteaux secs type petits beurres, broyer. Beurre fondu, incorporer. Pâte. Plat, fond, étaler. Presser. Frais 20 min."
      - "Appareil. Robot de préférence, sinon main. Fromage blanc, crème fraîche épaisse, sucre, œufs entiers, zeste, jus de citron, verser. Mélanger. Fond gâteaux secs, verser dessus."
      - "Four. Four 150°C, peu plus heure. Surveiller cuisson."
      - "Topping. Confiture, réchauffer. Assez liquide. Cheesecake, dessus, verser. Étaler uniforme."
      - "Gingembre. Gingembre frais, râper peu, dessus."
      - "Frais. Température ambiante 1 heure. Puis frigo 5 heures minimum. Froid, figé. Démouler délicat. Plat fond amovible."
    kcal_per_serving: 475
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 475
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - vegan
    - pesco
    allergens:
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 160
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: fromage végétal
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème de soja ou avoine
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
    - qty: 3
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: citron
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: pot de confiture à l'orange
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
    steps:
    - Préparation. Pour commencez, broyez les gâteaux secs (type biscuits vegan).
      Incorporez la margarine végétale fondue et mélangez jusqu’à l’obtention d’une
      pâte. Étalez cette dernière dans le fond de votre plat. Pressez bien puis réservez au
      frais pendant 20 minutes.
    - Cuisson. Dans un robot de préférence (c’est plus facile, sinon, faites le à la main), versez
      le fromage végétal, la crème de soja ou avoine, le sucre, l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, du zeste et du jus de citron. Mélangez
      le tout et versez la préparation par dessus votre fond de gâteaux secs.
    - Cuisson. Enfournez à 150°C pendant un peu plus d’une heure. Veillez à surveiller la cuisson régulièrement.
    - Cuisson. Pour le topping, faites simplement réchauffer la confiture pour qu’elle devienne assez
      liquide. Versez la préparation sur le dessus du cheesecake et étalez de manière uniforme.
    - Cuisson. Râpez un peu de gingembre frais par dessus, ça apportera un petit côté piquant très
      agréable.
    - Finition. Laissez votre cheesecake à température ambiante pendant 1 heure puis au mettez-le au
      frigo pendant 5 heures minimum. Voilà, votre cheesecake est prêt ! Attendez qu’il soit
      ben froid et figé, généralement, c’est environ 5 heures. Enfin, la partie cruciale est
      le démoulage, faites le délicatement ! Mais nous pouvons vous assurez que c’est un jeu
      d’enfant avec un plat à fond amovible. Bonne dégustation et bonne sieste !
    steps_niveaux:
      amateur:
      - "Fond. Broyez les gâteaux secs (type biscuits vegan). Incorporez la margarine végétale fondue et mélangez jusqu’à obtenir une pâte. Étalez-la dans le fond de votre plat, pressez bien, puis réservez au frais pendant 20 minutes."
      - "Appareil. Dans un robot de préférence, sinon à la main, versez le fromage végétal, la crème de soja ou avoine, le sucre, l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, du zeste et du jus de citron. Mélangez, puis versez la préparation par-dessus le fond de gâteaux secs."
      - "Four. Enfournez à 150°C pendant un peu plus d’une heure. Surveillez la cuisson régulièrement."
      - "Topping. Réchauffez la confiture jusqu’à ce qu’elle soit assez liquide. Versez-la sur le dessus du cheesecake et étalez de manière uniforme."
      - "Gingembre. [[raper|Râpez]] un peu de gingembre frais par-dessus."
      - "Frais. Laissez le cheesecake à température ambiante pendant 1 heure, puis mettez-le au frigo pendant 5 heures minimum, jusqu’à ce qu’il soit bien froid et figé. Démoulez-le délicatement, avec un plat à fond amovible."
      pro:
      - "Broyer les gâteaux secs (type biscuits vegan). Incorporer la margarine végétale fondue. Mélanger jusqu’à pâte. Étaler dans le fond du plat. Presser. Réserver au frais 20 minutes."
      - "Au robot de préférence, sinon à la main : verser fromage végétal, crème de soja ou avoine, sucre, œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou tofu soyeux, zeste et jus de citron. Mélanger. Verser sur le fond de gâteaux secs."
      - "Enfourner à 150°C pendant un peu plus d’une heure. Surveiller la cuisson régulièrement."
      - "Réchauffer la confiture jusqu’à assez liquide. Verser sur le dessus du cheesecake. Étaler de manière uniforme."
      - "Râper un peu de gingembre frais par-dessus."
      - "Laisser à température ambiante 1 heure, puis au frigo 5 heures minimum, froid et figé. Démouler délicatement, plat à fond amovible."
      cavernes:
      - "Fond. Gâteaux secs type biscuits vegan, broyer. Margarine végétale fondue, incorporer. Pâte. Plat, fond, étaler. Presser. Frais 20 min."
      - "Appareil. Robot de préférence, sinon main. Fromage végétal, crème de soja ou avoine, sucre, œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, zeste, jus de citron, verser. Mélanger. Fond gâteaux secs, verser dessus."
      - "Four. Four 150°C, peu plus heure. Surveiller cuisson."
      - "Topping. Confiture, réchauffer. Assez liquide. Cheesecake, dessus, verser. Étaler uniforme."
      - "Gingembre. Gingembre frais, râper peu, dessus."
      - "Frais. Température ambiante 1 heure. Puis frigo 5 heures minimum. Froid, figé. Démouler délicat. Plat fond amovible."
    kcal_per_serving: 261
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 6
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - oeuf
    - gluten
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 475
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "après ouverture : 3 semaines", contenant: "pot fermé", note: ""}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "pot non ouvert", note: "Au sec, à l’abri de la lumière."}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""
---

# Cheesecake au citron, à l'orange et au gingembre

![[cheesecake-au-citron-a-lorange-et-au-gingembre.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** sucré
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/cheesecake-au-citron-a-lorange-et-au-gingembre]]

## Ingrédients (6 personnes)

- 160 g de beurre
- 250 g de petits beurres
- 600 g de fromage blanc
- 250 g de crème fraîche épaisse
- 150 g de sucre
- 3 œuf
- 1 citron
- 1 pot de confiture à l'orange
-  gingembre

## Préparation

1. Pour commencez, broyez les gâteaux secs (type petits beurres). Incorporez le beurre fondu et mélangez jusqu’à l’obtention d’une pâte. Étalez cette dernière dans le fond de votre plat. Pressez bien puis réservez au frais pendant 20 minutes.
2. Dans un robot de préférence (c’est plus facile, sinon, faites le à la main), versez le fromage blanc, la crème fraîche épaisse, le sucre, les œufs entiers, du zeste et du jus de citron. Mélangez le tout et versez la préparation par dessus votre fond de gâteaux secs.
3. Enfournez à 150°C pendant un peu plus d’une heure. Veillez à surveiller la cuisson régulièrement.
4. Pour le topping, faites simplement réchauffer la confiture pour qu’elle devienne assez liquide. Versez la préparation sur le dessus du cheesecake et étalez de manière uniforme.
5. Râpez un peu de gingembre frais par dessus, ça apportera un petit côté piquant très agréable.
6. Laissez votre cheesecake à température ambiante pendant 1 heure puis au mettez-le au frigo pendant 5 heures minimum.

 
 

 
 Voilà, votre cheesecake est prêt ! Attendez qu’il soit ben froid et figé, généralement, c’est environ 5 heures. Enfin, la partie cruciale est le démoulage, faites le délicatement ! Mais nous pouvons vous assurez que c’est un jeu d’enfant avec un plat à fond amovible. Bonne dégustation et bonne sieste !
