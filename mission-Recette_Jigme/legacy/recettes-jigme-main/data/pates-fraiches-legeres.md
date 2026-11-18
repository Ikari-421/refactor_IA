---
schema: recette-web-jigme/v2
slug: pates-fraiches-legeres
title: Pâtes fraîches légères
lang: fr
description: "Pâtes fraîches légères : recette italienne avec farine tout usage, oeuf et du sel, pour 4 personnes. Version maison. Facile à suivre."
cuisine: italienne
category: salé
tags:
- salé
- pâtes
- végétarien
- farine tout usage
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/pates-fraiches-legeres.jpg
  alt: Pâtes fraîches légères
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/pates-fraiches-legeres.md
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
    note: 'Soja : œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux → pois chiches
      rôtis.'
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
  Pâte fraîche « légère » : moins de jaunes, plus d’eau ou de blancs, mie moins
  riche que la pâte aux seuls jaunes. Même geste italien (farine, œuf, abaisser).
  Pas une pâte d’appellation.
fun_facts:
- text: >
    Moins de jaune, moins de liaison : elle sèche plus vite à l’air, on la farine
    à peine et on la cuit tôt.
  source_name: Usage
  source_url:
- text: >
    Une pâte légère convient aux sauces grasses : elle ne double pas l’œuf.
  source_name: Usage
  source_url:
wines:
- name: Montepulciano d'Abruzzo
  producer: Cantina Tollo
  origin: Abruzzes
  grapes: montepulciano
  award:
  why: Fruit, tanin souple — dès qu’une sauce rouge arrive.
- name: Soave
  producer: Pieropan
  origin: Soave, Vénétie
  grapes: garganega
  award:
  why: Blanc d’amande — la pâte nature.
- name: Valpolicella
  producer: Masi
  origin: Valpolicella, Vénétie
  grapes: corvina
  award:
  why: Cerise, tanin léger — un plat de pâtes, sans un amarone.
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
    - gluten
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 3
      rest_min: 0
      total_min: 63
    equipment: &id002
    - saladier
    - rouleau à pâtisserie
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: farine tout usage
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: piece
      item: oeuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du sel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Préparation. Versez la farine sur votre plan de travail et faites-y un puit. Versez-y les oeufs
      (environ 1 oeuf pour 100g de farine), l’huile d’olive et le sel, puis mélangez à la
      main. Ajoutez de l’eau au fur et à mesure afin d’obtenir une pâte à la texture parfaite
      : ni trop dure, ni trop sèche. Le dosage d’eau de cette recette peut varier en fonction
      du taux d’humidité et du lieu de stockage de votre farine. Travaillez ensuite la pâte
      à la main pendant une dizaine de minutes. Placez votre pâte dans du cellophane ou dans
      une boîte hermétique et laissez-la reposer pendant 1 heure au frigo.'
    - 'Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur
      voulue. Essayez d’avoir de longs rectangles pour avoir des pâtes de la même taille.
      Saupoudrez de la farine sur vos rectangles de pâtes pour éviter qu’ils ne collent. Vous
      pouvez même vous arrêter là : vous obtenez de superbes feuilles à lasagnes ! Pour obtenir
      des tagliatelles, poursuivez la recette.'
    - Finition. Repliez vos rectangles plusieurs fois sur eux-même et émincez avec un couteau en veillant
      à faire des pâtes de la même taille. Vous pouvez faire sécher les pâtes si vous avez
      de quoi les suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera d’environ
      2 minutes 45 dans l’eau bouillante. Sachez également que vous pouvez les congeler en
      portions individuelles, il faudra juste bien les remuer dans l’eau bouillante pour les
      décoller lors de la cuisson. Sauce carbonara, bolognaise, pâtes au saumon, aux légumes…
      les recettes sont infinies ! Cuisinez vos pâtes fraîches de la manière que vous souhaitez
      tant que vous vous faites plaisir. Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Versez la farine sur votre plan de travail et faites-y un puit. Versez-y les oeufs (environ 1 oeuf pour 100g de farine), l’huile d’olive et le sel, puis mélangez à la main. Ajoutez de l’eau au fur et à mesure afin d’obtenir une pâte à la texture parfaite : ni trop dure, ni trop sèche. Le dosage d’eau de cette recette peut varier en fonction du taux d’humidité et du lieu de stockage de votre farine. Travaillez ensuite la pâte à la main pendant une dizaine de minutes. Placez votre pâte dans du cellophane ou dans une boîte hermétique et laissez-la reposer pendant 1 heure au frigo."
      - "Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur voulue. Essayez d’avoir de longs rectangles pour avoir des pâtes de la même taille. Saupoudrez de la farine sur vos rectangles de pâtes pour éviter qu’ils ne collent. Vous pouvez même vous arrêter là : vous obtenez de superbes feuilles à lasagnes ! Pour obtenir des tagliatelles, poursuivez la recette."
      - "Finition. Repliez vos rectangles plusieurs fois sur eux-même et émincez avec un couteau en veillant à faire des pâtes de la même taille. Vous pouvez faire sécher les pâtes si vous avez de quoi les suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera d’environ 2 minutes 45 dans l’eau bouillante. Sachez également que vous pouvez les congeler en portions individuelles, il faudra juste bien les remuer dans l’eau bouillante pour les décoller lors de la cuisson. Sauce carbonara, bolognaise, pâtes au saumon, aux légumes… les recettes sont infinies ! Cuisinez vos pâtes fraîches de la manière que vous souhaitez tant que vous vous faites plaisir. Bon appétit !"
      pro:
      - "Verser la farine sur le plan de travail. Former un puit. Y verser les oeufs (environ 1 oeuf pour 100g de farine), l’huile d’olive et le sel. Mélanger à la main. Ajouter de l’eau au fur et à mesure jusqu’à pâte ni trop dure ni trop sèche. Dosage d’eau variable selon humidité et stockage de la farine. Travailler à la main une dizaine de minutes. Mettre en cellophane ou boîte hermétique. Reposer 1 heure au frigo."
      - "Étaler au laminoir ou au rouleau jusqu’à l’épaisseur voulue. Former de longs rectangles de même taille. Saupoudrer de farine pour éviter que ça colle. Option : s’arrêter aux feuilles à lasagnes. Pour des tagliatelles, poursuivre."
      - "Replier les rectangles plusieurs fois sur eux-même. Émincer au couteau, même taille. Option : sécher en les suspendant. Sinon cuire directement environ 2 minutes 45 dans l’eau bouillante. Option : congeler en portions individuelles ; remuer dans l’eau bouillante pour décoller. Servir carbonara, bolognaise, saumon, légumes… au choix. Bon appétit."
      cavernes:
      - "Préparation. Farine, plan travail, verser. Puit. Oeufs (environ 1 oeuf pour 100g farine), huile d’olive, sel, verser. Mélange main. Eau, ajouter fur et à mesure. Pâte texture parfaite : ni trop dure, ni trop sèche. Dosage eau, varier selon humidité et lieu stockage farine. Pâte, travailler main dizaine minutes. Cellophane ou boîte hermétique. Repos 1 heure, frigo."
      - "Cuisson. Pâte, étaler laminoir ou rouleau pâtisserie, épaisseur voulue. Longs rectangles, même taille. Farine, saupoudrer rectangles, coller non. Stop possible : feuilles lasagnes. Tagliatelles : poursuivre."
      - "Finition. Rectangles, replier plusieurs fois eux-même. Couteau, émincer, même taille. Sécher possible, suspendre. Ou cuire direct, environ 2 minutes 45, eau bouillante. Congeler possible, portions individuelles. Eau bouillante, remuer, décoller. Sauce carbonara, bolognaise, pâtes saumon, légumes… recettes infinies. Cuisiner pâtes fraîches comme voulu, plaisir. Bon appétit."
    kcal_per_serving: 267
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
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 267
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
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 350
      unit: g
      item: farine tout usage
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
    - qty: 60
      unit: g
      item: eau
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile d'olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: du sel
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - 'Mélange. Versez la farine sur votre plan de travail et faites-y un puit. Versez-y l’œuf de lin (ou le tofu soyeux), l’huile d’olive et le sel, puis mélangez à la main. Ajoutez de l’eau au fur et à mesure afin d’obtenir une
      pâte à la texture parfaite : ni trop dure, ni trop sèche. Le dosage d’eau de cette recette
      peut varier en fonction du taux d’humidité et du lieu de stockage de votre farine. Travaillez
      ensuite la pâte à la main pendant une dizaine de minutes. Placez votre pâte dans du
      cellophane ou dans une boîte hermétique et laissez-la reposer pendant 1 heure au frigo.'
    - 'Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur
      voulue. Essayez d’avoir de longs rectangles pour avoir des pâtes de la même taille.
      Saupoudrez de la farine sur vos rectangles de pâtes pour éviter qu’ils ne collent. Vous
      pouvez même vous arrêter là : vous obtenez de superbes feuilles à lasagnes ! Pour obtenir
      des tagliatelles, poursuivez la recette.'
    - Finition. Repliez vos rectangles plusieurs fois sur eux-même et émincez avec un couteau en veillant
      à faire des pâtes de la même taille. Vous pouvez faire sécher les pâtes si vous avez
      de quoi les suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera d’environ
      2 minutes 45 dans l’eau bouillante. Sachez également que vous pouvez les congeler en
      portions individuelles, il faudra juste bien les remuer dans l’eau bouillante pour les
      décoller lors de la cuisson. Sauce tomate, pesto, légumes… cuisinez-les comme vous voulez. Bon appétit !
    steps_niveaux:
      amateur:
      - "Mélange. Versez la farine sur votre plan de travail et faites-y un puit. Versez-y l’œuf de lin (ou le tofu soyeux), l’huile d’olive et le sel, puis mélangez à la main. Ajoutez de l’eau au fur et à mesure afin d’obtenir une pâte à la texture parfaite : ni trop dure, ni trop sèche. Le dosage d’eau de cette recette peut varier en fonction du taux d’humidité et du lieu de stockage de votre farine. Travaillez ensuite la pâte à la main pendant une dizaine de minutes. Placez votre pâte dans du cellophane ou dans une boîte hermétique et laissez-la reposer pendant 1 heure au frigo."
      - "Cuisson. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur voulue. Essayez d’avoir de longs rectangles pour avoir des pâtes de la même taille. Saupoudrez de la farine sur vos rectangles de pâtes pour éviter qu’ils ne collent. Vous pouvez même vous arrêter là : vous obtenez de superbes feuilles à lasagnes ! Pour obtenir des tagliatelles, poursuivez la recette."
      - "Finition. Repliez vos rectangles plusieurs fois sur eux-même et émincez avec un couteau en veillant à faire des pâtes de la même taille. Vous pouvez faire sécher les pâtes si vous avez de quoi les suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera d’environ 2 minutes 45 dans l’eau bouillante. Sachez également que vous pouvez les congeler en portions individuelles, il faudra juste bien les remuer dans l’eau bouillante pour les décoller lors de la cuisson. Sauce tomate, pesto, légumes… cuisinez-les comme vous voulez. Bon appétit !"
      pro:
      - "Verser la farine sur le plan de travail. Former un puit. Y verser l’œuf de lin (ou le tofu soyeux), l’huile d’olive et le sel. Mélanger à la main. Ajouter de l’eau au fur et à mesure jusqu’à pâte ni trop dure ni trop sèche. Dosage d’eau variable selon humidité et stockage de la farine. Travailler à la main une dizaine de minutes. Mettre en cellophane ou boîte hermétique. Reposer 1 heure au frigo."
      - "Étaler au laminoir ou au rouleau jusqu’à l’épaisseur voulue. Former de longs rectangles de même taille. Saupoudrer de farine pour éviter que ça colle. Option : s’arrêter aux feuilles à lasagnes. Pour des tagliatelles, poursuivre."
      - "Replier les rectangles plusieurs fois sur eux-même. Émincer au couteau, même taille. Option : sécher en les suspendant. Sinon cuire directement environ 2 minutes 45 dans l’eau bouillante. Option : congeler en portions individuelles ; remuer dans l’eau bouillante pour décoller. Sauce tomate, pesto, légumes… au choix. Bon appétit."
      cavernes:
      - "Mélange. Farine, plan travail, verser. Puit. Œuf de lin (ou tofu soyeux), huile d’olive, sel, verser. Mélange main. Eau, ajouter fur et à mesure. Pâte texture parfaite : ni trop dure, ni trop sèche. Dosage eau, varier selon humidité et lieu stockage farine. Pâte, travailler main dizaine minutes. Cellophane ou boîte hermétique. Repos 1 heure, frigo."
      - "Cuisson. Pâte, étaler laminoir ou rouleau pâtisserie, épaisseur voulue. Longs rectangles, même taille. Farine, saupoudrer rectangles, coller non. Stop possible : feuilles lasagnes. Tagliatelles : poursuivre."
      - "Finition. Rectangles, replier plusieurs fois eux-même. Couteau, émincer, même taille. Sécher possible, suspendre. Ou cuire direct, environ 2 minutes 45, eau bouillante. Congeler possible, portions individuelles. Eau bouillante, remuer, décoller. Sauce tomate, pesto, légumes… cuisiner comme voulu. Bon appétit."
    kcal_per_serving: 267
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
    - gluten
    - oeuf
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 267
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 à 48 h", contenant: "film alimentaire", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Pâtes fraîches légères
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/pates-fraiches-legeres.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/pates-fraiches-legeres]]

## Ingrédients (6 personnes)

- 350 g de farine tout usage
- 3 oeuf
- 60 g d'eau
- 1 càs d'huile d'olive
-  du sel

## Préparation

1. Versez la farine sur votre plan de travail et faites-y un puit. Versez-y les oeufs (environ 1 oeuf pour 100g de farine), l’huile d’olive et le sel, puis mélangez à la main. Ajoutez de l’eau au fur et à mesure afin d’obtenir une pâte à la texture parfaite : ni trop dure, ni trop sèche. Le dosage d’eau de cette recette peut varier en fonction du taux d’humidité et du lieu de stockage de votre farine. Travaillez ensuite la pâte à la main pendant une dizaine de minutes. Placez votre pâte dans du cellophane ou dans une boîte hermétique et laissez-la reposer pendant 1 heure au frigo.
2. Étalez la pâte au laminoir ou au rouleau à pâtisserie jusqu’à obtention de l’épaisseur voulue. Essayez d’avoir de longs rectangles pour avoir des pâtes de la même taille. Saupoudrez de la farine sur vos rectangles de pâtes pour éviter qu’ils ne collent. Vous pouvez même vous arrêter là : vous obtenez de superbes feuilles à lasagnes ! Pour obtenir des tagliatelles, poursuivez la recette.
3. Repliez vos rectangles plusieurs fois sur eux-même et émincez avec un couteau en veillant à faire des pâtes de la même taille. Vous pouvez faire sécher les pâtes si vous avez de quoi les suspendre. Sinon, vous pouvez les cuire directement, la cuisson sera d’environ 2 minutes 45 dans l’eau bouillante. Sachez également que vous pouvez les congeler en portions individuelles, il faudra juste bien les remuer dans l’eau bouillante pour les décoller lors de la cuisson.

 
 

 
 Sauce carbonara, bolognaise, pâtes au saumon, aux légumes… les recettes sont infinies ! Cuisinez vos pâtes fraîches de la manière que vous souhaitez tant que vous vous faites plaisir. Bon appétit !
