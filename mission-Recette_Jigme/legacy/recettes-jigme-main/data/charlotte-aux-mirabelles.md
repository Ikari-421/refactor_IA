---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: charlotte-aux-mirabelles
title: Charlotte aux mirabelles
lang: fr
description: "Charlotte aux mirabelles : recette française avec biscuits à la cuillère, fromage blanc et mascarpone, pour 4 personnes."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- été
- mirabelle
- charlotte
image:
  url:
  alt: Charlotte aux mirabelles
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/charlotte-aux-mirabelles.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- sans_lactose_sans_gluten
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
    - from: biscuits à la cuillère
      to: boudoirs sans gluten
      note: 'Vérifier l’eau-de-vie (pure). Mix SG : gare au lupin.'
    - from: biscuits vegan
      to: biscuits vegan sans gluten
      note: Même rôle.
    - from: boudoirs
      to: boudoirs sans gluten
      note:
    note: Farine de blé des boudoirs.
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: fromage blanc
      to: fromage blanc sans lactose
      note: Intolérance, pas allergie.
    - from: mascarpone
      to: fromage blanc sans lactose (même poids total 350 g)
      note: Plus acide.
    note: Intolérance. Allergie lait → sans_produits_laitiers.
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → version vegan (coco / agar).
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - oeuf
    swaps: []
    note: Les boudoirs tradi portent l’œuf → version vegan.
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: 'Tradi sans fruits à coque. Vegan : coco n’est pas un fruit à coque UE.'
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
    note: Pas de mollusques dans cette fiche (hors version maison, si indiquée).
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
    note:
  sans_lupin:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Pas de lupin listé. Vérifier le mix SG du commerce (parfois du lupin).
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Tradi OK. En vegan, ne pas prendre la substi crème de soja.
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
    note: Pas de sulfites ajoutés listés (éviter vinaigre / vin sulfité en substi).
house_toggle:
house_options: []
histoire: 'Entremets moulé : pain, génoise ou biscuits tapissant un moule, fourré de fruits, crème ou
  mousse ; servi chaud (au four) ou froid. On rattache les formes élégantes à Marie-Antoine Carême (charlotte
  à la parisienne) ; ses publications de 1815 décrivent des versions parisienne et russe, boudoirs et
  crème bavaroise. Une recette anglaise imprimée figure chez Maria Rundell (Londres, 1808) : pain beurré,
  pommes. La charlotte aux mirabelles n’est pas un mets historique catalogué : c’est la charlotte aux
  fruits d’été, avec le fruit de Lorraine.

  '
fun_facts:
- text: 'Étymologie incertaine : vieil anglais charlyt (plat à la crème), ou hommage à la
    reine Charlotte, épouse de George III.'
  source_name: Grokipedia, Charlotte (cake)
  source_url: https://grokipedia.com/page/Charlotte_(cake)
- text: 'Deux familles : chaude (pain + fruits au four, ex. aux pommes) et froide (boudoirs
    + crème, charlotte russe). Ici, la froide.'
  source_name: Grokipedia, Charlotte (cake)
  source_url: https://grokipedia.com/page/Charlotte_(cake)
- text: 'Carême, 1815 : recettes parisienne et russe. Ce que d’autres appelaient à la russe,
    il le nomme souvent à la parisienne.'
  source_name: Grokipedia, Charlotte (cake)
  source_url: https://grokipedia.com/page/Charlotte_(cake)
- text: Environ 80 % de la production mondiale de mirabelle se fait en Lorraine. Mention de
    mirabelles confites offertes à la royauté française en 1569.
  source_name: Grokipedia, Mirabelle plum
  source_url: https://grokipedia.com/page/Mirabelle_plum
wines:
- name: Gewurztraminer
  producer: Hugel & Fils
  origin: Riquewihr, Alsace
  grapes: gewurztraminer
  award:
  why: Litchi, rose, un peu de sucrosité — suit la mirabelle sans alourdir la crème.
- name: Muscat d'Alsace
  producer: Maison Trimbach
  origin: Ribeauvillé, Alsace
  grapes: muscat
  award:
  why: Fruit net, plus sec qu’un VT — tient la charlotte sans dessert liquoreux.
- name: Côtes de Toul Gris
  producer: Domaine Lelièvre
  origin: Lucey, Meurthe-et-Moselle
  grapes: assemblage gris de Toul (gamay / pinot, étiquette)
  award:
  why: Même terroir que la mirabelle IGP ; le perlé coupe le mascarpone.
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
    - oeuf
    - produits_laitiers
    difficulty: 3
    time:
      prep_min: 35
      cook_min: 10
      rest_min: 180
      total_min: 225
    equipment:
    - moule à charlotte 16–18 cm (ou cake)
    - saladier
    - fouet
    - passoire
    - poids (assiette + boîte)
    substitutions:
    - from: mascarpone
      to: tout fromage blanc
      note: Plus acide, moins gras.
    - from: eau-de-vie
      to: sirop nature
      note: Sans alcool.
    scale_note:
    ingredients:
    - qty: 160
      unit: g
      item: biscuits à la cuillère (boudoirs)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 300
      unit: g
      item: fromage blanc
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: mascarpone
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: sucre glace
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: mirabelles dénoyautées
      group: fruits
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: eau
      group: sirop
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group: sirop
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: eau-de-vie de mirabelle
      group: sirop
      scale: true
      optional: true
      to_taste: false
    - qty: 1
      unit: pincee
      item: sel
      group: creme
      scale: false
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème liquide entière
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: beurre
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Faites compoter 150 g de mirabelles avec 1 c. à s. de sucre, 8 à 10 min à feu doux, écrasez, puis laissez refroidir. Réservez le reste des fruits en morceaux."
    - "Cuisson. Portez l’eau et 40 g de sucre à ébullition 1 min. Hors du feu, ajoutez l’eau-de-vie de mirabelle si vous en mettez. Laissez tiédir."
    - "Cuisson. Fouettez le fromage blanc, le mascarpone, le sucre glace et une pincée de sel jusqu’à crème lisse."
    - "Cuisson. Chemisez le moule (rhodoïd ou film alimentaire). Trempez les biscuits à la cuillère 1 à 2 s dans le sirop, tapissez les parois, côté sucré vers l’extérieur."
    - "Cuisson. Alternez crème, mirabelles en morceaux avec un peu de compote, et biscuits imbibés. Terminez par des biscuits. Tassez."
    - "Cuisson. Posez une assiette et un poids, puis réservez au moins 3 h au frais (mieux une nuit)."
    - "Finition. Démoulez (passez 2 s d’eau chaude sur le moule s’il résiste). Entourez de la compote restante et de quelques fruits crus."
    steps_niveaux:
      amateur:
      - "Compote. Faites compoter 150 g de mirabelles avec 1 c. à s. de sucre, 8 à 10 min à feu doux, écrasez, puis laissez refroidir. Réservez le reste des fruits en morceaux."
      - "Sirop. Portez l’eau et 40 g de sucre à ébullition 1 min. [[hors-du-feu|Hors du feu]], ajoutez l’eau-de-vie de mirabelle si vous en mettez. Laissez tiédir."
      - "Crème. Fouettez le fromage blanc, le mascarpone, le sucre glace et une pincée de sel jusqu’à crème lisse."
      - "Chemiser. [[chemiser|Chemisez]] le moule (rhodoïd ou film alimentaire). Trempez les biscuits à la cuillère 1 à 2 s dans le sirop, tapissez les parois, côté sucré vers l’extérieur."
      - "Montage. Alternez crème, mirabelles en morceaux avec un peu de compote, et biscuits imbibés. Terminez par des biscuits. Tassez."
      - "Poids. Posez une assiette et un poids, puis réservez au moins 3 h au frais (mieux une nuit)."
      - "Démouler. Démoulez (passez 2 s d’eau chaude sur le moule s’il résiste). Entourez de la compote restante et de quelques fruits crus."
      pro:
      - "Faire compoter 150 g de mirabelles avec 1 c. à s. de sucre, 8 à 10 min à feu doux. Écraser. Laisser refroidir. Réserver le reste des fruits en morceaux."
      - "Porter l’eau et 40 g de sucre à ébullition 1 min. Hors du feu, ajouter l’eau-de-vie de mirabelle si on en met. Laisser tiédir."
      - "Fouetter le fromage blanc, le mascarpone, le sucre glace et une pincée de sel jusqu’à crème lisse."
      - "Chemiser le moule (rhodoïd ou film alimentaire). Tremper les biscuits à la cuillère 1 à 2 s dans le sirop. Tapisser les parois, côté sucré vers l’extérieur."
      - "Alterner crème, mirabelles en morceaux avec un peu de compote, et biscuits imbibés. Terminer par des biscuits. Tasser."
      - "Poser une assiette et un poids. Réserver au moins 3 h au frais (mieux une nuit)."
      - "Démouler (passer 2 s d’eau chaude sur le moule s’il résiste). Entourer de la compote restante et de quelques fruits crus."
      cavernes:
      - "Compote. 150 g mirabelles, 1 c. à s. sucre, feu doux 8 à 10 min, écraser. Refroidir. Reste fruits, morceaux, réserver."
      - "Sirop. Eau, 40 g sucre, ébullition 1 min. Hors feu. Eau-de-vie de mirabelle, ajouter si mettez. Tiédir."
      - "Crème. Fromage blanc, mascarpone, sucre glace, pincée sel, fouetter. Crème lisse."
      - "Chemiser. Moule, rhodoïd ou film alimentaire, chemiser. Biscuits à cuillère, 1 à 2 s sirop, tremper. Parois, tapisser, côté sucré dehors."
      - "Montage. Crème, mirabelles morceaux, peu de compote, biscuits imbibés, alterner. Terminer biscuits. Tasser."
      - "Poids. Assiette, poids, poser. Frais minimum 3 h. Mieux nuit."
      - "Démouler. Démouler. Si résiste, 2 s eau chaude sur moule. Compote restante, fruits crus, entourer."
    kcal_per_serving: 279
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty: 3
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 279
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
    allergens:
    - gluten
    difficulty: 3
    time:
      prep_min: 40
      cook_min: 5
      rest_min: 240
      total_min: 285
    equipment:
    - moule
    - fouet
    - casserole
    substitutions:
    - from: crème de coco
      to: crème de soja épaisse
      note: Si le goût coco gêne.
    scale_note: Les biscuits vegan du commerce sont en général avec gluten.
    ingredients:
    - qty: 160
      unit: g
      item: biscuits vegan
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: crème de coco bien froide (partie solide)
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: sucre
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: g
      item: agar-agar
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: mirabelles dénoyautées
      group: fruits
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: sirop (eau + sucre)
      group: sirop
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Portez l’agar-agar et 40 ml d’eau à ébullition 1 min, puis laissez refroidir à tiède."
    - "Cuisson. Fouettez la crème de coco avec le sucre, puis incorporez l’agar-agar."
    - "Finition. Tapissez le moule de biscuits vegan imbibés 1 s. Alternez couches de crème et de fruits. Réservez au moins 4 h au frais."
    steps_niveaux:
      amateur:
      - "Agar. Portez l’agar-agar et 40 ml d’eau à ébullition 1 min, puis laissez refroidir à tiède."
      - "Crème. Fouettez la crème de coco avec le sucre, puis incorporez l’agar-agar."
      - "Montage. Tapissez le moule de biscuits vegan imbibés 1 s. Alternez couches de crème et de fruits. Réservez au moins 4 h au frais."
      pro:
      - "Porter l’agar-agar et 40 ml d’eau à ébullition 1 min. Laisser refroidir à tiède."
      - "Fouetter la crème de coco avec le sucre. Incorporer l’agar-agar."
      - "Tapisser le moule de biscuits vegan imbibés 1 s. Alterner couches de crème et de fruits. Réserver au moins 4 h au frais."
      cavernes:
      - "Agar. Agar-agar, 40 ml eau, ébullition 1 min. Puis tiède, refroidir."
      - "Crème. Crème de coco, sucre, fouetter. Puis agar-agar, incorporer."
      - "Montage. Moule, biscuits vegan imbibés 1 s, tapisser. Couches crème, fruits, alterner. Frais minimum 4 h."
    kcal_per_serving: 430
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - oeuf
    - produits_laitiers
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 279
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  sans_lactose_sans_gluten:
    label: Sans lactose et sans gluten
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - oeuf
    difficulty: 3
    time:
      prep_min: 35
      cook_min: 10
      rest_min: 180
      total_min: 225
    equipment:
    - moule
    - fouet
    substitutions:
    - from: fromage blanc sans lactose
      to: 350 g de coco solide
      note: Devient alors aussi vegan.
    - from: boudoirs SG
      to: biscuits maison farine de riz
      note: Vérifier l’eau-de-vie (pure, sans colorant).
    scale_note:
    ingredients:
    - qty: 160
      unit: g
      item: boudoirs sans gluten
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: g
      item: fromage blanc sans lactose
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 70
      unit: g
      item: sucre glace
      group: creme
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: mirabelles dénoyautées
      group: fruits
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: sirop eau-sucre
      group: sirop
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Préparez la compote, le sirop et une crème lisse au fromage blanc sans lactose. Trempez les boudoirs sans gluten 1 à 2 s, alternez les couches, posez un poids, puis réservez au moins 3 h au frais."
    - "Finition. Si la crème est trop liquide, liez-la avec 2 g d’agar-agar, comme pour la version végétalienne."
    steps_niveaux:
      amateur:
      - "Montage. Préparez la compote, le sirop et une crème lisse au fromage blanc sans lactose. Trempez les boudoirs sans gluten 1 à 2 s, alternez les couches, posez un poids, puis réservez au moins 3 h au frais."
      - "Lier. Si la crème est trop liquide, liez-la avec 2 g d’agar-agar, comme pour la version végétalienne."
      pro:
      - "Préparer la compote, le sirop et une crème lisse au fromage blanc sans lactose. Tremper les boudoirs sans gluten 1 à 2 s. Alterner les couches. Poser un poids. Réserver au moins 3 h au frais."
      - "Si la crème est trop liquide, lier avec 2 g d’agar-agar, comme pour la version végétalienne."
      cavernes:
      - "Montage. Compote, sirop, crème lisse fromage blanc sans lactose. Boudoirs sans gluten, 1 à 2 s, tremper. Couches, alterner. Poids. Frais minimum 3 h."
      - "Lier. Si crème trop liquide, 2 g agar-agar, lier. Comme version végétalienne."
    kcal_per_serving: 440
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
lexique_local:
  traditionnelle:
    hors-du-feu:
      terme: "hors du feu"
      explication: "Vous saisissez le récipient par la poignée et vous le sortez entièrement de la source de chaleur : plus de flamme ni de plaque sous le fond. Le mélange reste chaud, mais rien ne le chauffe plus par en dessous. Évitez de laisser le récipient à moitié sur le feu : ça continue de cuire sans que vous le voyiez."
      ref: Cuisine/Lexique/hors-du-feu.md
    chemiser:
      terme: "chemiser"
      explication: "Vous tapissez le moule avant de le remplir. Vous le recouvrez (film, rhodoïd, beurre et farine, biscuits…). C’est réussi quand le moule est tapissé, sans trou."
      ref: Cuisine/Lexique/chemiser.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24–48 h", contenant: "", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "crème"

---

# Charlotte aux mirabelles

**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Pas de version maison Jigmé.

**Catégorie :** sucré · dessert · Lorraine  
**Régimes déjà vrais (tradi) :** végétarien  
**Photo :** aucune pour l’instant

## Ingrédients (4 personnes)

- 160 g de biscuits à la cuillère (boudoirs)
- 300 g de fromage blanc
- 150 g de mascarpone
- 80 g de sucre glace
- 500 g de mirabelles dénoyautées
- 80 ml d’eau + 40 g de sucre (sirop)
- 2 c. à s. d’eau-de-vie de mirabelle (facultatif)
- 1 pincée de sel

## Préparation

1. Cuisson. Faites compoter 150 g de mirabelles avec 1 c. à s. de sucre, 8 à 10 min à feu doux, écrasez, puis laissez refroidir. Réservez le reste des fruits en morceaux.
2. Cuisson. Portez l’eau et 40 g de sucre à ébullition 1 min. Hors du feu, ajoutez l’eau-de-vie de mirabelle si vous en mettez. Laissez tiédir.
3. Cuisson. Fouettez le fromage blanc, le mascarpone, le sucre glace et une pincée de sel jusqu’à crème lisse.
4. Cuisson. Chemisez le moule (rhodoïd ou film alimentaire). Trempez les biscuits à la cuillère 1 à 2 s dans le sirop, tapissez les parois, côté sucré vers l’extérieur.
5. Cuisson. Alternez crème, mirabelles en morceaux avec un peu de compote, et biscuits imbibés. Terminez par des biscuits. Tassez.
6. Cuisson. Posez une assiette et un poids, puis réservez au moins 3 h au frais (mieux une nuit).
7. Finition. Démoulez (passez 2 s d’eau chaude sur le moule s’il résiste). Entourez de la compote restante et de quelques fruits crus.

## Variantes machine

`vegetarienne` (identique) · `vegan` · `sans_lactose_sans_gluten`
