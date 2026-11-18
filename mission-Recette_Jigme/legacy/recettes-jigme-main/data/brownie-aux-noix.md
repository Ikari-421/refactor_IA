---
schema: recette-web-jigme/v2
slug: brownie-aux-noix
title: Brownie aux noix
lang: fr
description: "Brownie aux noix : recette américaine avec chocolat, œuf et lait, pour 4 personnes. Version maison. Facile à suivre. Pour 4 personnes."
cuisine: américaine
category: sucré
tags:
- sucré
- dessert
- gâteau
- chocolat
- noix
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/brownie-aux-noix.jpg
  alt: Brownie aux noix
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/brownie-aux-noix.md
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
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: amande
      to: graines de tournesol
      note: Goût différent.
    - from: noisette
      to: graines de courge
      note:
    - from: noix
      to: graines de courge
      note:
    - from: cajou
      to: graines de tournesol
      note:
    note: Si le plat EST un praliné, le goût change.
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
histoire: >
  Gâteau plat au chocolat américain. On raconte plusieurs naissances aux États-Unis
  autour de 1900 (Boston, Chicago) : recette oubliée de levure, ou dessert d’hôtel.
  Rien n’est tranché. Les noix (pécan ou noix) sont une variante, pas le socle.
fun_facts:
- text: "Un brownie « fudgy » a plus de beurre et moins de farine qu’un « cakey »."
  source_name: Usage pâtissier
  source_url:
- text: "Le chocolat se fond hors du feu pour ne pas grainer ; les noix se torréfient à part."
  source_name: Usage
  source_url:
wines:
- name: Maury
  producer: Mas Amiel
  origin: Maury, Roussillon
  grapes: grenache
  award:
  why: Cacao, fruit noir — le brownie, sucrosité alignée.
- name: Banyuls
  producer: Clos de Paulilles
  origin: Banyuls-sur-Mer
  grapes: grenache
  award:
  why: Noix, rancio léger — les cerneaux.
- name: Rasteau vin doux naturel
  producer: Domaine des Escaravailles
  origin: Rasteau, Rhône
  grapes: grenache
  award:
  why: Mûre, cacao — moins oxydatif que le Banyuls.
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
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: &id001
      prep_min: 60
      cook_min: 30
      rest_min: 0
      total_min: 90
    equipment: &id002
    - four
    - casserole
    - moule / plat
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: beurre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noix
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre glace
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Cassez grossièrement le chocolat et faites-le cuire au bain-marie avec le beurre. Une
      fois fondu, versez le chocolat dans un cul de poule et ajoutez-y 4 œufs entiers. Il
      est important d’ajouter les œufs un par un et de mélanger la préparation entre chaque.
      Ajoutez ensuite deux cuillères à soupe de farine et vos noix concassées.
    - Cuisson. Beurrez un moule et versez-y votre préparation. Enfournez votre plat à 180°C pendant
      20 minutes.
    - Cuisson. Pendant ce temps, vous pouvez vous lancer dans la réalisation de la crème anglaise qui
      accompagne tout brownie digne de ce nom. Coupez une gousse de vanille en deux et récupérez
      les graines avec la lame de votre couteau. Incorporez-les dans 1L de lait préalablement
      mis à chauffé dans une casserole.
    - Finition. Blanchissez trois jaunes d’œufs avec 120g de sucre. Incorporez ensuite le lait chaud
      à votre préparation tout en continuant de mélanger. Transvasez la crème anglaise ainsi
      obtenue dans une grande casserole et faites la cuire à feu doux pendant 10 minutes tout
      en continuant de mélanger. Une fois prête, réservez-la au frais. Dressez le brownie
      dans une assiette avec un peu de sucre glace et de crème anglaise, et c’est prêt ! Bon
      appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Cassez grossièrement le chocolat et faites-le cuire au bain-marie avec le beurre. Une fois fondu, versez le chocolat dans un cul de poule et ajoutez-y 4 œufs entiers, un par un, en mélangeant entre chaque. Ajoutez ensuite deux cuillères à soupe de farine et vos noix concassées."
      - "Cuisson. Beurrez un moule et versez-y votre préparation. Enfournez votre plat à 180°C pendant 20 minutes."
      - "Cuisson. Pendant ce temps, réalisez la crème anglaise. Coupez une gousse de vanille en deux et [[egrainer|récupérez les graines]] avec la lame de votre couteau. Incorporez-les dans 1 L de lait préalablement mis à chauffer dans une casserole."
      - "Finition. [[blanchir|Blanchissez]] trois jaunes d’œufs avec 120 g de sucre. Incorporez ensuite le lait chaud à votre préparation tout en continuant de mélanger. Transvasez la crème anglaise dans une grande casserole et faites-la cuire à feu doux pendant 10 minutes tout en continuant de mélanger. Une fois prête, réservez-la au frais. Dressez le brownie dans une assiette avec un peu de sucre glace et de crème anglaise."
      pro:
      - "Casser grossièrement le chocolat. Cuire au bain-marie avec le beurre. Une fois fondu, verser dans un cul de poule. Ajouter 4 œufs entiers, un par un, en mélangeant entre chaque. Ajouter deux cuillères à soupe de farine et les noix concassées."
      - "Beurrer un moule. Y verser la préparation. Enfourner à 180°C pendant 20 minutes."
      - "Réaliser la crème anglaise. Couper une gousse de vanille en deux. Récupérer les graines avec la lame du couteau. Les incorporer dans 1 L de lait préalablement mis à chauffer dans une casserole."
      - "Blanchir trois jaunes d’œufs avec 120 g de sucre. Incorporer le lait chaud en mélangeant. Transvaser la crème anglaise dans une grande casserole. Cuire à feu doux 10 minutes en mélangeant. Réserver au frais. Dresser le brownie avec un peu de sucre glace et de crème anglaise."
      cavernes:
      - "Préparation. Chocolat, casser gros. Beurre, bain-marie, cuire. Fondu, cul de poule, verser. Œufs entiers 4, chacun, ajouter. Mélanger entre chaque. Farine deux cuillères à soupe, noix concassées, ajouter."
      - "Cuisson. Moule, beurrer. Préparation verser. Four 180°C 20 minutes."
      - "Cuisson. Crème anglaise. Gousse vanille, couper deux. Graines, lame couteau, récupérer. Lait 1 L, casserole, chauffer. Graines incorporer."
      - "Finition. Jaunes d’œufs trois, sucre 120 g, blanchir. Lait chaud incorporer. Mélanger pendant. Crème anglaise, casserole grande, transvaser. Feu doux 10 minutes, mélanger. Prête, frais. Brownie, assiette, peu sucre glace, crème anglaise, dresser."
    kcal_per_serving: 432
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
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 432
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
    - fruits_a_coque
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: chocolat
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1000
      unit: ml
      item: lait d'avoine ou soja
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 125
      unit: g
      item: margarine végétale
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: gousse de vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noix
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sucre glace
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: crème de soja
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Préparation. Cassez grossièrement le chocolat et faites-le cuire au bain-marie avec la margarine
      végétale. Une fois fondu, versez le chocolat dans un cul de poule et incorporez
      l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, puis mélangez.
      Ajoutez ensuite deux cuillères à soupe de farine et vos noix concassées.
    - Cuisson. Graissez un moule avec de la margarine végétale et versez-y votre préparation. Enfournez votre
      plat à 180°C pendant 20 minutes.
    - Cuisson. Pendant ce temps, vous pouvez vous lancer dans la réalisation de la crème anglaise végétale (lait d’avoine ou de soja) qui accompagne tout brownie digne de ce nom. Coupez une gousse de vanille en deux et récupérez
      les graines avec la lame de votre couteau. Incorporez-les dans 1L de lait d'avoine ou
      soja préalablement mis à chauffé dans une casserole.
    - Mixage. Fouettez le tofu soyeux (ou l’œuf de lin) avec 120 g de sucre. Incorporez ensuite le lait d'avoine ou soja chaud à votre préparation
      tout en continuant de mélanger. Transvasez la crème ainsi obtenue dans une
      grande casserole et faites la cuire à feu doux pendant 10 minutes tout en continuant
      de mélanger. Une fois prête, réservez-la au frais. Dressez le brownie dans une assiette
      avec un peu de sucre glace et de crème anglaise végétale, et c’est prêt ! Bon appétit !
    steps_niveaux:
      amateur:
      - "Préparation. Cassez grossièrement le chocolat et faites-le cuire au bain-marie avec la margarine végétale. Une fois fondu, versez le chocolat dans un cul de poule et incorporez l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux, puis mélangez. Ajoutez ensuite deux cuillères à soupe de farine et vos noix concassées."
      - "Cuisson. Graissez un moule avec de la margarine végétale et versez-y votre préparation. Enfournez votre plat à 180°C pendant 20 minutes."
      - "Cuisson. Pendant ce temps, réalisez la crème anglaise végétale (lait d’avoine ou de soja). Coupez une gousse de vanille en deux et [[egrainer|récupérez les graines]] avec la lame de votre couteau. Incorporez-les dans 1 L de lait d’avoine ou soja préalablement mis à chauffer dans une casserole."
      - "Mixage. Fouettez le tofu soyeux (ou l’œuf de lin) avec 120 g de sucre. Incorporez ensuite le lait d’avoine ou soja chaud à votre préparation tout en continuant de mélanger. Transvasez la crème dans une grande casserole et faites-la cuire à feu doux pendant 10 minutes tout en continuant de mélanger. Une fois prête, réservez-la au frais. Dressez le brownie dans une assiette avec un peu de sucre glace et de crème anglaise végétale."
      pro:
      - "Casser grossièrement le chocolat. Cuire au bain-marie avec la margarine végétale. Une fois fondu, verser dans un cul de poule. Incorporer l’œuf de lin (1 c.à.s. de lin + 3 c.à.s. d’eau par œuf) ou le tofu soyeux. Mélanger. Ajouter deux cuillères à soupe de farine et les noix concassées."
      - "Graisser un moule avec de la margarine végétale. Y verser la préparation. Enfourner à 180°C pendant 20 minutes."
      - "Réaliser la crème anglaise végétale (lait d’avoine ou de soja). Couper une gousse de vanille en deux. Récupérer les graines avec la lame du couteau. Les incorporer dans 1 L de lait d’avoine ou soja préalablement mis à chauffer dans une casserole."
      - "Fouetter le tofu soyeux (ou l’œuf de lin) avec 120 g de sucre. Incorporer le lait d’avoine ou soja chaud en mélangeant. Transvaser la crème dans une grande casserole. Cuire à feu doux 10 minutes en mélangeant. Réserver au frais. Dresser le brownie avec un peu de sucre glace et de crème anglaise végétale."
      cavernes:
      - "Préparation. Chocolat, casser gros. Margarine végétale, bain-marie, cuire. Fondu, cul de poule, verser. Œuf de lin (1 c.à.s. lin + 3 c.à.s. eau par œuf) ou tofu soyeux, incorporer. Mélanger. Farine deux cuillères à soupe, noix concassées, ajouter."
      - "Cuisson. Moule, margarine végétale, graisser. Préparation verser. Four 180°C 20 minutes."
      - "Cuisson. Crème anglaise végétale, lait d’avoine ou soja. Gousse vanille, couper deux. Graines, lame couteau, récupérer. Lait d’avoine ou soja 1 L, casserole, chauffer. Graines incorporer."
      - "Mixage. Tofu soyeux ou œuf de lin, sucre 120 g, fouetter. Lait d’avoine ou soja chaud incorporer. Mélanger pendant. Crème, casserole grande, transvaser. Feu doux 10 minutes, mélanger. Prête, frais. Brownie, assiette, peu sucre glace, crème anglaise végétale, dresser."
    kcal_per_serving: 286
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
    - lactose
    - produits_laitiers
    - oeuf
    - fruits_a_coque
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 432
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    egrainer:
      terme: "égrainer"
      explication: "Vous fendez la gousse dans la longueur. Vous raclez les grains avec le dos du couteau. C’est réussi quand les grains noirs sont bien détachés de l’intérieur."
      ref: Cuisine/Lexique/egrainer.md
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
  vegan:
    egrainer:
      terme: "égrainer"
      explication: "Vous fendez la gousse dans la longueur. Vous raclez les grains avec le dos du couteau. C’est réussi quand les grains noirs sont bien détachés de l’intérieur."
      ref: Cuisine/Lexique/egrainer.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "3–4 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Brownie aux noix
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 6 personnes.

**Catégorie :** salé
**Photo :** `Cuisine/Recettes/Web/brownie-aux-noix.jpg`
**Archive brute :** [[Cuisine/Recettes/Archives/brownie-aux-noix]]

## Ingrédients (6 personnes)

- 200 g de chocolat
- 4 œuf
- 1 L de lait
- 120 g de sucre
- 125 g de beurre
- 2 c.à.s de farine
- 1 gousse de vanille
-  noix
-  sucre glace

## Préparation

1. Cassez grossièrement le chocolat et faites-le cuire au bain-marie avec le beurre. Une fois fondu, versez le chocolat dans un cul de poule et ajoutez-y 4 œufs entiers. Il est important d’ajouter les œufs un par un et de mélanger la préparation entre chaque. Ajoutez ensuite deux cuillères à soupe de farine et vos noix concassées.
2. Beurrez un moule et versez-y votre préparation. Enfournez votre plat à 180°C pendant 20 minutes.
3. Pendant ce temps, vous pouvez vous lancer dans la réalisation de la crème anglaise qui accompagne tout brownie digne de ce nom. Coupez une gousse de vanille en deux et récupérez les graines avec la lame de votre couteau. Incorporez-les dans 1L de lait préalablement mis à chauffé dans une casserole.
4. Blanchissez trois jaunes d’œufs avec 120g de sucre. Incorporez ensuite le lait chaud à votre préparation tout en continuant de mélanger. Transvasez la crème anglaise ainsi obtenue dans une grande casserole et faites la cuire à feu doux pendant 10 minutes tout en continuant de mélanger. Une fois prête, réservez-la au frais.

 
 

 
 Dressez le brownie dans une assiette avec un peu de sucre glace et de crème anglaise, et c’est prêt ! Bon appétit !
