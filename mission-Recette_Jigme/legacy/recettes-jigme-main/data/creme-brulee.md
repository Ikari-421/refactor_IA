---
schema: recette-web-jigme/v2
equipment:
- ref: rape
- ref: fouet
slug: creme-brulee
title: Crème brûlée
lang: fr
description: "Crème brûlée : recette française avec jaunes d'œufs, crème liquide entière et sucre, pour 4 personnes. Version maison. Facile à suivre."
cuisine: française
category: sucré
tags:
- sucré
- dessert
- vanille
- crème brûlée
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/creme-brulee.webp
  alt: Crème brûlée
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Sucré/creme-brulee.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
- ma_recette_tonka
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note: Déjà sans gluten.
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: crème liquide entière
      to: crème sans lactose
      note: Intolérance.
    - from: crème liquide
      to: crème sans lactose
      note: Intolérance.
    - from: lait entier
      to: lait sans lactose
      note: Version maison.
    note: Intolérance. Allergie → sans_produits_laitiers (vegan).
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - lactose
    - produits_laitiers
    swaps: []
    note: Allergie lait → crème coco.
  sans_oeufs:
    already_ok: false
    impossible: false
    redirect_variant: vegan
    clears:
    - oeuf
    swaps: []
    note: Les jaunes lient la tradi → version vegan (fécule).
  sans_fruits_a_coque:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - fruits_a_coque
    swaps:
    - from: lait d'amande
      to: lait de coco ou tout coco
      note: La vegan liste de l’amande.
    note: 'Tradi OK. Si vegan cochée : remplacer le lait d’amande.'
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
    note: Pas de soja dans la tradi. Ne pas prendre les substi tofu / soja.
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
house_toggle: ma_recette
house_options:
- ma_recette
- ma_recette_tonka
histoire: 'La première recette imprimée sous le nom crème brûlée est celle de François Massialot,
  Le Cuisinier royal et bourgeois (1691, éditions suivantes 1693) : crème aux agrumes, sucre
  brûlé, servie à la cour de Louis XIV. L’origine reste disputée : la crema catalana apparaît
  dans des livres catalans dès le XIVe siècle (cannelle, agrumes ; le sucre caramélisé vient
  plus tard) ; l’Angleterre connaît un burnt cream lié au Trinity College de Cambridge à la
  fin du XIXe. La mode restaurant reprend dans les années 1980, notamment au Cirque à New
  York (Dieter Schorner, Sirio Maccioni).

  '
fun_facts:
- text: 'Massialot 1691 (ou 1693 selon les éditions) : première recette explicite de crème
    brûlée, sucre brûlé, cour de Louis XIV.'
  source_name: Grokipedia, Crème brûlée
  source_url: https://grokipedia.com/page/Crème_brûlée
- text: La crema catalana figure dans des livres de cuisine catalans dès le XIVe siècle ;
    le caramel de surface se fixe plus tard.
  source_name: Grokipedia, Crème brûlée
  source_url: https://grokipedia.com/page/Crème_brûlée
- text: Le burnt cream anglais, fer chaud sur le sucre, est associé au Trinity College (Cambridge)
    depuis la fin du XIXe siècle.
  source_name: Grokipedia, Crème brûlée
  source_url: https://grokipedia.com/page/Crème_brûlée
- text: 'Aux États-Unis, Le Cirque (New York, années 1980) relance le dessert : pâtissier
    Dieter Schorner, propriétaire Sirio Maccioni, après une crema catalana.'
  source_name: Grokipedia, Crème brûlée
  source_url: https://grokipedia.com/page/Crème_brûlée
wines:
- name: Barsac
  producer: Château Doisy-Daëne
  origin: Barsac, Bordeaux
  grapes: sémillon
  award:
  why: Vanille, agrume confit, acidité — le caramel et le gras de la crème.
- name: Muscat de Rivesaltes
  producer: Domaine Cazes
  origin: Rivesaltes, Roussillon
  grapes: muscat
  award:
  why: Fleur, raisin frais — plus léger qu’un Sauternes sur la vanille.
- name: Jurançon
  producer: Clos Lapeyre
  origin: Jurançon
  grapes: petit manseng
  award:
  why: Miel, agrumes — tient aussi la version tonka.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: ramequins
    diets:
    - vegetarien
    - pesco
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 40
      rest_min: 240
      total_min: 300
    equipment:
    - casserole
    - fouet
    - 4 ramequins
    - plat à bain-marie
    - four
    - chalumeau
    substitutions:
    - from: crème + lait
      to: tout crème
      note: Sans lait, uniquement crème liquide.
    - from: cassonade
      to: sucre blanc
      note: La cassonade caramelise mieux pour brûler.
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: jaunes d'œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: crème liquide entière
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: cassonade (à brûler)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Faites infuser la vanille dans la crème 10 à 15 min hors du feu, après une petite ébullition."
    - "Cuisson. Blanchez les jaunes avec le sucre. Versez la crème, fouettez, filtrez."
    - "Cuisson. Placez les ramequins dans un bain-marie d’eau chaude. Enfournez à 150–160 °C pendant 25 à 35 min, ou à 100–110 °C plus longtemps : prise sur les bords, tremblotant au centre."
    - "Cuisson. Laissez tiédir, puis réservez au moins 4 h au frais."
    - "Finition. Saupoudrez de cassonade et brûlez au chalumeau au moment de servir."
    steps_niveaux:
      amateur:
      - "Portez la crème liquide entière et la gousse de vanille à petite ébullition (premières bulles), retirez la casserole hors du feu, puis [[infuser|faites infuser]] 10 à 15 min."
      - "[[blanchir|Blanchissez]] les jaunes d’œufs avec le sucre : fouettez jusqu’à ce que le mélange pâlisse. Versez la crème infusée en fouettant, puis [[filtrer|filtrez]] à la passoire fine pour retirer la gousse."
      - "Versez dans les ramequins. Placez-les dans un plat plus grand avec de l’eau chaude autour : [[bain-marie|bain-marie]], l’eau ne va pas dans la crème. Enfournez à 150–160 °C pendant 25 à 35 min, ou à 100–110 °C plus longtemps. C’est prêt quand les bords sont pris et que le centre tremblote encore."
      - "Laissez tiédir, puis réservez au moins 4 h au réfrigérateur."
      - "Saupoudrez de cassonade et brûlez au [[chalumeau|chalumeau]] au moment de servir."
      pro:
      - "Infuser la vanille dans la crème liquide entière : petite ébullition, retirer du feu, puis 10 à 15 min hors du feu."
      - "Blanchir les jaunes d’œufs avec le sucre. Verser la crème infusée en fouettant, filtrer."
      - "Remplir les ramequins. Placer les ramequins au bain-marie d’eau chaude. Enfourner à 150–160 °C pendant 25 à 35 min, ou à 100–110 °C plus longtemps : prise périphérique, centre tremblotant."
      - "Laisser tiédir, puis réserver au moins 4 h au réfrigérateur."
      - "Saupoudrer de cassonade et brûler au chalumeau au moment de servir."
      cavernes:
      - "Crème, gousse vanille, chauffer. Petite ébullition, couper feu. Hors feu, infuser 10-15 min."
      - "Jaunes d'œufs, sucre, blanchir. Crème infusée verser sur mélange jaunes, sucre. Fouetter pendant verser.\nFiltrer. Gousse dehors."
      - "Ramequins verser. Plat plus grand, mettre ramequins Eau chaude autour, bain marie, Four 150-160 °C 25-35 min. Ou 100-110 °C plus longtemps. Ok bords pris centre tremblote."
      - "Tiédir. Frigo minimum 4 h."
      - "Saupoudrer cassonade. Chalumeau. Servir. Manger."
    kcal_per_serving: 358
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé (œufs entiers)
    inherit:
    servings_base: 6
    servings_unit: ramequins
    diets:
    - vegetarien
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 35
      cook_min: 75
      rest_min: 240
      total_min: 350
    equipment:
    - casserole
    - fouet
    - ramequins
    - plat à bain-marie
    - four
    - chalumeau
    substitutions: []
    scale_note: 'Batch maison : 6 à 8 ramequins. Le scaling part de 6.'
    ingredients:
    - qty: 8
      unit: piece
      item: œufs entiers
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
    - qty: 1
      unit: gousse
      item: vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: lait entier
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: sucre de canne ou cassonade pour brûler
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Préparation. Chauffez le lait, la crème et la gousse de vanille égrainée. Dès ébullition, coupez le feu et couvrez. Laissez infuser 15 min."
    - "Cuisson. Blanchez les œufs (fouettez les œufs et le sucre)."
    - "Cuisson. Incorporez progressivement, en fouettant, la crème et le lait infusés."
    - "Cuisson. Versez dans des ramequins."
    - "Cuisson. Enfournez à 110 °C pendant 1 h 10 à 1 h 20 (bain-marie)."
    - "Repos. Laissez refroidir à température ambiante, puis stockez au frais."
    - "Finition. Au moment de servir, saupoudrez de cassonade et brûlez au chalumeau."
    steps_niveaux:
      amateur:
      - "Chauffez le lait entier, la crème liquide et la gousse de vanille [[egrainer|égrainée]] : fendez la gousse et grattez les graines. Dès ébullition, coupez le feu, couvrez, puis [[infuser|faites infuser]] 15 min."
      - "Blanchissez les œufs entiers avec le sucre : fouettez les œufs et le sucre jusqu’à ce que le mélange pâlisse."
      - "Incorporez progressivement, en fouettant, la crème et le lait infusés."
      - "Versez dans des ramequins."
      - "Placez les ramequins dans un plat plus grand avec de l’eau chaude autour : [[bain-marie|bain-marie]], l’eau ne va pas dans la crème. Enfournez à 110 °C pendant 1 h 10 à 1 h 20."
      - "Laissez refroidir à température ambiante, puis stockez au frais."
      - "Au moment de servir, saupoudrez de cassonade et brûlez au [[chalumeau|chalumeau]]."
      pro:
      - "Chauffer le lait, la crème et la vanille égrainée. Dès ébullition, couper le feu, infuser 15 min à couvert."
      - "Blanchir les œufs entiers avec le sucre."
      - "Incorporer progressivement la crème et le lait infusés, en fouettant."
      - "Verser dans des ramequins."
      - "Placer les ramequins au bain-marie d’eau chaude. Enfourner à 110 °C pendant 1 h 10 à 1 h 20."
      - "Laisser refroidir à température ambiante, puis réserver au frais."
      - "Au moment de servir, saupoudrer de cassonade et brûler au chalumeau."
      cavernes:
      - "Fendre gousse. Gratter graines. Chauffer lait crème vanille égrainée. Ébullition. Couper feu. Couvrir. Infuser 15 min."
      - "Blanchir œufs entiers sucre."
      - "Incorporer progressivement crème lait infusés mélange œufs sucre. Fouetter pendant incorporation."
      - "Verser ramequins."
      - "Ramequins plat plus grand. Bain-marie. Eau chaude autour. Jamais dans crème. Four 110 °C 1 h 10 à 1 h 20."
      - "Refroidir température ambiante. Stocker frais."
      - "Saupoudrer cassonade. Chalumeau. Servir."
    kcal_per_serving: 490
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), par ramequin (≈ 10 g de cassonade à brûler compté)
  ma_recette_tonka:
    label: Version maison Jigmé (jaunes + tonka)
    inherit:
    servings_base: 4
    servings_unit: ramequins
    diets:
    - vegetarien
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 70
      rest_min: 240
      total_min: 325
    equipment:
    - saladier
    - ramequins
    - four
    - râpe
    - chalumeau
    substitutions: []
    scale_note: Batch maison ~4–6 ramequins selon la taille. Le scaling part de 4.
    ingredients:
    - qty: 100
      unit: g
      item: jaunes d'œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre vanillé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: fève de tonka
      group:
      scale: false
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: crème liquide
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Blanchez les jaunes avec le sucre vanillé."
    - "Cuisson. Râpez la fève de tonka."
    - "Cuisson. Incorporez la crème."
    - "Cuisson. Enfournez à 95 °C pendant 1 h 10, sans bain-marie."
    - "Finition. Réservez au froid, puis saupoudrez de cassonade et brûlez au chalumeau au service."
    steps_niveaux:
      amateur:
      - "[[blanchir|Blanchissez]] les jaunes d’œufs avec le sucre vanillé : fouettez jusqu’à ce que le mélange pâlisse."
      - "[[raper|Râpez]] la fève de tonka et incorporez-la au mélange de jaunes et de sucre vanillé."
      - "Incorporez la crème liquide."
      - "Versez dans des ramequins. Enfournez à 95 °C pendant 1 h 10, sans bain-marie : pas d’eau chaude autour des plats."
      - "Réservez au froid, puis saupoudrez de cassonade et brûlez au [[chalumeau|chalumeau]] au service."
      pro:
      - "Blanchir les jaunes d’œufs avec le sucre vanillé."
      - "Râper la fève de tonka, l’incorporer au mélange de jaunes et de sucre vanillé."
      - "Incorporer la crème."
      - "Remplir les ramequins. Enfourner à 95 °C pendant 1 h 10, sans bain-marie."
      - "Réserver au froid, puis saupoudrer de cassonade et brûler au chalumeau au service."
      cavernes:
      - "Blanchir jaunes d’œufs sucre vanillé."
      - "Râper fève de tonka. Incorporer tonka râpée vers mélange jaunes sucre vanillé."
      - "Incorporer crème."
      - "Verser ramequins. Four 95 °C 1 h 10. Sans bain-marie. Pas eau chaude autour."
      - "Réserver froid. Saupoudrer cassonade. Chalumeau. Servir."
    kcal_per_serving: 550
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), par ramequin (≈ 10 g de cassonade à brûler compté)
  vegetarienne:
    label: Végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: ramequins
    diets:
    - vegetarien
    - pesco
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    difficulty: 2
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 358
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 4
    servings_unit: ramequins
    diets:
    - vegetarien
    - vegan
    allergens:
    - fruits_a_coque
    difficulty: 2
    time:
      prep_min: 15
      cook_min: 70
      rest_min: 240
      total_min: 325
    equipment:
    - casserole
    - ramequins
    - four
    - chalumeau
    substitutions:
    - from: lait d'amande
      to: tout coco
      note: Si l’amande gêne.
    scale_note:
    ingredients:
    - qty: 300
      unit: g
      item: crème de coco
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: lait d'amande
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: fécule de maïs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: cassonade (à brûler)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Chauffez la crème de coco, le lait d’amande, la vanille et le sucre. Délayez la fécule, épaississez 2 min."
    - "Répartir dans les ramequins. Enfournez à 90 °C pendant 50 min, jusqu’à la prise."
    - "Au moins 4 h au frais. Brûlez la cassonade au chalumeau."
    steps_niveaux:
      amateur:
      - "[[delayer|Délayez]] la fécule de maïs dans un peu de lait d’amande encore froid, prélevé sur le lait d’amande prévu. Chauffez la crème de coco, le reste du lait d’amande, la vanille et le sucre. Versez la fécule délayée dans la préparation chaude, puis épaississez 2 min en remuant."
      - "Versez dans les ramequins. Enfournez à 90 °C pendant 50 min, jusqu’à la prise : la crème tient, sans couler."
      - "Réservez au moins 4 h au réfrigérateur. Au moment de servir, saupoudrez de cassonade et brûlez au [[chalumeau|chalumeau]]."
      pro:
      - "Délayer la fécule dans un peu du lait d’amande prévu, encore froid. Chauffer la crème de coco, le reste du lait d’amande, la vanille et le sucre. Incorporer la fécule délayée à la préparation chaude, épaissir 2 min en remuant."
      - "Verser dans les ramequins. Enfourner à 90 °C pendant 50 min, jusqu’à la prise."
      - "Réserver au moins 4 h au réfrigérateur. Au moment de servir, saupoudrer de cassonade et brûler au chalumeau."
      cavernes:
      - "Prélever peu lait d’amande prévu froid. Délayer fécule dedans. Chauffer crème de coco reste lait d’amande vanille sucre. Verser fécule délayée préparation chaude. Épaissir remuer 2 min."
      - "Verser ramequins. Four 90 °C 50 min. Prise."
      - "Frigo minimum 4 h. Saupoudrer cassonade. Chalumeau. Servir."
    kcal_per_serving: 280
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), par ramequin
  pesco:
    label: Pesco-végétarienne
    inherit: traditionnelle
    servings_base: 4
    servings_unit: ramequins
    diets:
    - vegetarien
    - pesco
    allergens:
    - oeuf
    - lactose
    - produits_laitiers
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 358
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  sans_lactose_sans_gluten:
    label: Sans lactose et sans gluten
    inherit:
    servings_base: 4
    servings_unit: ramequins
    diets:
    - vegetarien
    allergens:
    - oeuf
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 35
      rest_min: 240
      total_min: 295
    equipment:
    - casserole
    - fouet
    - 4 ramequins
    - plat à bain-marie
    - four
    - chalumeau
    substitutions:
    - from: crème sans lactose
      to: crème coco 50/50
      note: Si le SL industriel goûte le carton.
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: jaunes d'œufs
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 350
      unit: g
      item: crème sans lactose
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 60
      unit: g
      item: sucre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: gousse
      item: vanille
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: cassonade (à brûler)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Préparation. Faites infuser la vanille dans la crème sans lactose 10 à 15 min hors du feu, après une petite ébullition."
    - "Cuisson. Blanchez les jaunes avec le sucre. Versez la crème, fouettez, filtrez."
    - "Ramequins au bain-marie. Enfournez à 150–160 °C pendant 25 à 35 min, ou à 100–110 °C plus longtemps : prise sur les bords, tremblotant au centre."
    - "Cuisson. Laissez tiédir, puis réservez au moins 4 h au frais."
    - "Finition. Saupoudrez de cassonade et brûlez au chalumeau au service."
    steps_niveaux:
      amateur:
      - "Portez la crème sans lactose et la gousse de vanille à petite ébullition (premières bulles), retirez la casserole hors du feu, puis [[infuser|faites infuser]] 10 à 15 min."
      - "[[blanchir|Blanchissez]] les jaunes d’œufs avec le sucre : fouettez jusqu’à ce que le mélange pâlisse. Versez la crème infusée en fouettant, puis [[filtrer|filtrez]] à la passoire fine pour retirer la gousse."
      - "Versez dans les ramequins. Placez-les dans un plat plus grand avec de l’eau chaude autour : [[bain-marie|bain-marie]], l’eau ne va pas dans la crème. Enfournez à 150–160 °C pendant 25 à 35 min, ou à 100–110 °C plus longtemps. C’est prêt quand les bords sont pris et que le centre tremblote encore."
      - "Laissez tiédir, puis réservez au moins 4 h au réfrigérateur."
      - "Saupoudrez de cassonade et brûlez au [[chalumeau|chalumeau]] au service."
      pro:
      - "Infuser la vanille dans la crème sans lactose : petite ébullition, retirer du feu, puis 10 à 15 min hors du feu."
      - "Blanchir les jaunes d’œufs avec le sucre. Verser la crème infusée en fouettant, filtrer."
      - "Remplir les ramequins. Placer les ramequins au bain-marie d’eau chaude. Enfourner à 150–160 °C pendant 25 à 35 min, ou à 100–110 °C plus longtemps : prise périphérique, centre tremblotant."
      - "Laisser tiédir, puis réserver au moins 4 h au réfrigérateur."
      - "Saupoudrer de cassonade et brûler au chalumeau au service."
      cavernes:
      - "Chauffer crème sans lactose gousse vanille. Petite ébullition. Hors feu. Infuser 10 à 15 min."
      - "Blanchir jaunes d’œufs sucre. Verser crème infusée mélange jaunes sucre. Fouetter pendant versement. Filtrer. Gousse dehors."
      - "Verser ramequins. Ramequins plat plus grand. Bain-marie. Eau chaude autour. Jamais dans crème. Four 150–160 °C 25 à 35 min. Ou 100–110 °C plus longtemps. Ok bords pris centre tremblote."
      - "Tiédir. Frigo minimum 4 h."
      - "Saupoudrer cassonade. Chalumeau. Servir."
    kcal_per_serving: 440
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), par ramequin
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "2 à 3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "crème"
lexique_local:
  traditionnelle:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    bain-marie:
      terme: "bain-marie"
      explication: "Vous posez les ramequins dans un récipient plus grand, puis vous versez de l’eau chaude autour, sans en mettre dans la préparation. Cette eau adoucit la chaleur du four. Évitez d’éclabousser l’intérieur."
      ref: Cuisine/Lexique/bain-marie.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
  ma_recette:
    egrainer:
      terme: "égrainer"
      explication: "Vous fendez la gousse dans la longueur. Vous raclez les grains avec le dos du couteau. C’est réussi quand les grains noirs sont bien détachés de l’intérieur."
      ref: Cuisine/Lexique/egrainer.md
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    bain-marie:
      terme: "bain-marie"
      explication: "Vous posez les ramequins dans un récipient plus grand, puis vous versez de l’eau chaude autour, sans en mettre dans la préparation. Cette eau adoucit la chaleur du four. Évitez d’éclabousser l’intérieur."
      ref: Cuisine/Lexique/bain-marie.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
  ma_recette_tonka:
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
  vegan:
    delayer:
      terme: "délayer"
      explication: "Vous mettez la poudre dans un bol. Vous ajoutez un peu de liquide encore froid, pris sur celui de la recette, et vous mélangez jusqu’à disparition des grumeaux. Puis vous versez ce mélange dans le reste. C’est réussi quand la poudre a disparu dans un liquide lisse. Évitez de jeter la poudre d’un coup dans le chaud : elle forme des paquets."
      ref: Cuisine/Lexique/delayer.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md
  sans_lactose_sans_gluten:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    blanchir:
      terme: "blanchir"
      explication: "Vous mettez les jaunes et le sucre dans un bol. Vous fouettez jusqu’à ce que la couleur pâlisse et que le mélange soit lisse, un peu mousseux."
      ref: Cuisine/Lexique/blanchir.md
    filtrer:
      terme: "filtrer"
      explication: "Vous posez une passoire fine au-dessus d’un bol, puis vous versez le liquide. Elle retient les morceaux visibles ; le liquide passe, même s’il reste de fines particules. Évitez de verser trop vite, ce qui fait déborder, et d’utiliser une passoire à mailles trop larges, qui laisse passer les morceaux."
      ref: Cuisine/Lexique/filtrer.md
    bain-marie:
      terme: "bain-marie"
      explication: "Vous posez les ramequins dans un récipient plus grand, puis vous versez de l’eau chaude autour, sans en mettre dans la préparation. Cette eau adoucit la chaleur du four. Évitez d’éclabousser l’intérieur."
      ref: Cuisine/Lexique/bain-marie.md
    chalumeau:
      terme: "chalumeau"
      explication: "Vous allumez le petit outil à flamme de cuisine. Vous le tenez au-dessus du sucre, jamais collé. Vous bougez sans arrêt pour faire fondre et dorer, sans rester sur un point."
      ref: Cuisine/Lexique/chalumeau.md

---

# Crème brûlée

![[creme-brulee.webp]]

**Équipement :** [[fouet]] · [[rape]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** sucré · dessert  
**Régimes déjà vrais (tradi) :** végétarien, sans gluten  
**Photo :** aucune pour l’instant

## Ingrédients (4 personnes)

- 4 jaunes d’œufs
- 350 g de crème liquide entière
- 60 g de sucre
- 1 gousse de vanille
- 4 c. à s. de cassonade (à brûler)

## Préparation

1. Préparation. Faites infuser la vanille dans la crème 10 à 15 min hors du feu, après une petite ébullition.
2. Cuisson. Blanchez les jaunes avec le sucre. Versez la crème, fouettez, filtrez.
3. Cuisson. Placez les ramequins dans un bain-marie d’eau chaude. Enfournez à 150–160 °C pendant 25 à 35 min, ou à 100–110 °C plus longtemps : prise sur les bords, tremblotant au centre.
4. Cuisson. Laissez tiédir, puis réservez au moins 4 h au frais.
5. Finition. Saupoudrez de cassonade et brûlez au chalumeau au moment de servir.

## Variantes machine

`ma_recette` (œufs entiers, 6 ramequins) · `ma_recette_tonka` · `vegetarienne` (identique) · `vegan` · `sans_lactose_sans_gluten`


