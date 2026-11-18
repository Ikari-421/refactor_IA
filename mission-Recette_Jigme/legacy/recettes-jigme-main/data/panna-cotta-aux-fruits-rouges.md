---
schema: recette-web-jigme/v2
equipment:
- ref: fouet
slug: panna-cotta-aux-fruits-rouges
title: Panna cotta aux fruits rouges
lang: fr
description: "Panna cotta aux fruits rouges : recette italienne avec crème liquide 30 %, sucre et agar-agar, pour 4 personnes. Version maison."
cuisine: italienne
category: sucré
tags:
- sucré
- dessert
- panna cotta
- fruits rouges
- framboise
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/panna-cotta-aux-fruits-rouges.jpg
  alt: Panna cotta aux fruits rouges, coulis de framboise
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/panna-cotta-aux-fruits-rouges.md
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
    - from: lait d'avoine ou soja
      to: lait d'avoine
      note:
    note: 'Soja : crème de soja ou avoine → crème d''avoine ; lait d''avoine ou soja → lait
      d''avoine.'
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
histoire: 'Panna cotta, « crème cuite » en italien : dessert piémontais de crème sucrée prise
  au gélifiant, sans œufs. Le nom imprimé se fixe au XXe siècle ; une mention de 1879 parle
  encore de latte inglese. Une légende l’attribue à une Hongroise des Langhe, qui en aurait
  fait un pudding pour les ouvriers agricoles. Première carte restaurant connue : Ettore Songia,
  I Tre Citroni, Cuneo, 1966. Produit traditionnel piémontais reconnu en 2001. La version  prend
  à l’agar-agar, pas à la gélatine.

  '
fun_facts:
- text: 'Panna cotta = « crème cuite » : panna (crème) + cotta (cuite).'
  source_name: Grokipedia, Panna cotta
  source_url: https://grokipedia.com/page/Panna_cotta
- text: 'Première carte restaurant documentée : Ettore Songia, I Tre Citroni, Cuneo, 1966.'
  source_name: Grokipedia, Panna cotta
  source_url: https://grokipedia.com/page/Panna_cotta
- text: Reconnue produit traditionnel piémontais en 2001.
  source_name: Grokipedia, Panna cotta
  source_url: https://grokipedia.com/page/Panna_cotta
- text: Les versions végétariennes / vegan remplacent la gélatine par de l’agar-agar — c’est
    déjà le cas de cette fiche.
  source_name: Grokipedia, Panna cotta
  source_url: https://grokipedia.com/page/Panna_cotta
wines:
- name: Moscato d'Asti
  producer: Michele Chiarlo
  origin: Asti, Piémont
  grapes: muscat blanc à petits grains
  award:
  why: Moelleux léger, bulles fines, raisin frais — tient la crème sans écraser le coulis.
- name: Brachetto d'Acqui
  producer: Braida
  origin: Acqui Terme, Piémont
  grapes: brachetto
  award:
  why: Rouge léger, perlant, notes de fraise et de rose — même registre que les fruits rouges.
- name: Clairette de Die Tradition
  producer: Cave de Die Jaillance
  origin: Die, Diois
  grapes: muscat, clairette
  award:
  why: Doux, floral, basse alcool — dessert d’été, framboise et vanille.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 20
      rest_min: 180
      total_min: 220
    equipment: &id002
    - casserole
    - fouet
    - verrines ou moules silicone
    - chinois (optionnel)
    substitutions: &id003
    - from: framboises
      to: autre fruit (mangue, pêche, fruits rouges mélangés)
      note: Le coulis suit la même méthode.
    - from: arôme de vanille
      to: 1 gousse de vanille
      note: Infuser dans la crème, retirer avant de verser.
    scale_note: L’agar-agar se scale avec le volume de crème ; trop d’agar donne un gel cassant.
    ingredients:
    - qty: 800
      unit: ml
      item: crème liquide 30 %
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: sucre
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: agar-agar
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: lait
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: arôme de vanille
      group: panna cotta
      scale: false
      optional: false
      to_taste: true
    - qty: 250
      unit: g
      item: framboises (ou autre fruit)
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: demi-citron
      group: coulis
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Cuisson. Dans une casserole, versez la crème liquide, les 90 g de sucre et l’arôme de vanille. Chauffez à feu doux en mélangeant. Dès l’ébullition, coupez le feu et laissez infuser à couvert."
    - "Cuisson. Diluez l’agar-agar dans le lait froid, puis incorporez-le à la crème à feu doux. Fouettez. Dès la reprise de l’ébullition, comptez une minute, puis retirez du feu."
    - "Repos. Versez dans des verrines ou des moules en silicone. Réservez au réfrigérateur 2 à 4 h."
    - "Coulis. Faites cuire les framboises avec 30 g de sucre et le jus du demi-citron, à feu doux. Servez tel quel, ou passez au chinois. Réservez au réfrigérateur."
    - "Finition. Au moment de servir, nappez de coulis et ajoutez quelques fruits entiers ou coupés."
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez la crème liquide, les 90 g de sucre et l’arôme de vanille. Chauffez à feu doux en mélangeant. Dès l’ébullition, coupez le feu et [[infuser|laissez infuser]] à couvert."
      - "Cuisson. [[delayer|Délayez]] l’agar-agar dans le lait froid, puis incorporez-le à la crème à feu doux. Fouettez. Dès la reprise de l’ébullition, comptez une minute, puis retirez du feu."
      - "Repos. Versez dans des verrines ou des moules en silicone. Réservez au réfrigérateur 2 à 4 h."
      - "Coulis. Faites cuire les framboises avec 30 g de sucre et le jus du demi-citron, à feu doux. Servez tel quel, ou passez au chinois. Réservez au réfrigérateur."
      - "Finition. Au moment de servir, [[napper|nappez]] de coulis et ajoutez quelques fruits entiers ou coupés."
      pro:
      - "Verser crème liquide, 90 g de sucre et arôme de vanille en casserole. Chauffer à feu doux en mélangeant. À l’ébullition, couper le feu. Infuser à couvert."
      - "Délayer l’agar-agar dans le lait froid. Incorporer à la crème à feu doux. Fouetter. À la reprise de l’ébullition, compter une minute. Retirer du feu."
      - "Verser en verrines ou moules en silicone. Réfrigérateur 2 à 4 h."
      - "Cuire les framboises avec 30 g de sucre et le jus du demi-citron, à feu doux. Servir tel quel, ou passer au chinois. Réfrigérateur."
      - "Napper de coulis. Ajouter quelques fruits entiers ou coupés."
      cavernes:
      - "Cuisson. Casserole : crème liquide, 90 g sucre, arôme vanille, verser. Feu doux, mélanger. Ébullition, feu, couper. Couvert, infuser."
      - "Cuisson. Agar-agar, lait froid, délayer. Crème, feu doux, incorporer. Fouetter. Ébullition reprise, minute, compter. Feu, retirer."
      - "Repos. Verrines ou moules silicone, verser. Réfrigérateur 2 à 4 h."
      - "Coulis. Framboises, 30 g sucre, jus demi-citron, feu doux, cuire. Tel quel, ou chinois, passer. Réfrigérateur."
      - "Finition. Moment servir. Coulis, napper. Fruits entiers ou coupés, ajouter."
    kcal_per_serving: 377
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne (identique)
    inherit: traditionnelle
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: *id003
    scale_note: L’agar-agar se scale avec le volume de crème ; trop d’agar donne un gel cassant.
    ingredients: []
    steps: []
    kcal_per_serving: 377
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegan:
    label: Vegan
    inherit:
    servings_base: 8
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
    substitutions: *id003
    scale_note: L’agar-agar se scale avec le volume de crème ; trop d’agar donne un gel cassant.
    ingredients:
    - qty: 800
      unit: ml
      item: crème de soja ou avoine
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: sucre
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: agar-agar
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: lait d'avoine ou soja
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: arôme de vanille
      group: panna cotta
      scale: false
      optional: false
      to_taste: true
    - qty: 250
      unit: g
      item: framboises (ou autre fruit)
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: demi-citron
      group: coulis
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Cuisson. Dans une casserole, versez la crème de soja ou d’avoine, les 90 g de sucre et l’arôme de vanille. Chauffez à feu doux en mélangeant. Dès l’ébullition, coupez le feu et laissez infuser à couvert."
    - "Cuisson. Diluez l’agar-agar dans le lait d’avoine ou de soja froid, puis incorporez-le à la crème à feu doux. Fouettez. Dès la reprise de l’ébullition, comptez une minute, puis retirez du feu."
    - "Repos. Versez dans des verrines ou des moules en silicone. Réservez au réfrigérateur 2 à 4 h."
    - "Repos. Préparez un coulis de framboises avec 30 g de sucre et le jus du demi-citron, à feu doux. Servez tel quel, ou passez au chinois. Réservez au réfrigérateur."
    - "Finition. Au moment de servir, nappez de coulis et ajoutez quelques fruits entiers ou coupés."
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une casserole, versez la crème de soja ou d’avoine, les 90 g de sucre et l’arôme de vanille. Chauffez à feu doux en mélangeant. Dès l’ébullition, coupez le feu et [[infuser|laissez infuser]] à couvert."
      - "Cuisson. [[delayer|Délayez]] l’agar-agar dans le lait d’avoine ou de soja froid, puis incorporez-le à la crème à feu doux. Fouettez. Dès la reprise de l’ébullition, comptez une minute, puis retirez du feu."
      - "Repos. Versez dans des verrines ou des moules en silicone. Réservez au réfrigérateur 2 à 4 h."
      - "Repos. Préparez un coulis de framboises avec 30 g de sucre et le jus du demi-citron, à feu doux. Servez tel quel, ou passez au chinois. Réservez au réfrigérateur."
      - "Finition. Au moment de servir, [[napper|nappez]] de coulis et ajoutez quelques fruits entiers ou coupés."
      pro:
      - "Verser crème de soja ou d’avoine, 90 g de sucre et arôme de vanille en casserole. Chauffer à feu doux en mélangeant. À l’ébullition, couper le feu. Infuser à couvert."
      - "Délayer l’agar-agar dans le lait d’avoine ou de soja froid. Incorporer à la crème à feu doux. Fouetter. À la reprise de l’ébullition, compter une minute. Retirer du feu."
      - "Verser en verrines ou moules en silicone. Réfrigérateur 2 à 4 h."
      - "Préparer un coulis de framboises avec 30 g de sucre et le jus du demi-citron, à feu doux. Servir tel quel, ou passer au chinois. Réfrigérateur."
      - "Napper de coulis. Ajouter quelques fruits entiers ou coupés."
      cavernes:
      - "Cuisson. Casserole : crème de soja ou d’avoine, 90 g sucre, arôme vanille, verser. Feu doux, mélanger. Ébullition, feu, couper. Couvert, infuser."
      - "Cuisson. Agar-agar, lait d’avoine ou de soja froid, délayer. Crème, feu doux, incorporer. Fouetter. Ébullition reprise, minute, compter. Feu, retirer."
      - "Repos. Verrines ou moules silicone, verser. Réfrigérateur 2 à 4 h."
      - "Repos. Coulis framboises, 30 g sucre, jus demi-citron, feu doux. Tel quel, ou chinois, passer. Réfrigérateur."
      - "Finition. Moment servir. Coulis, napper. Fruits entiers ou coupés, ajouter."
    kcal_per_serving: 130
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco (identique, sans viande terrestre)
    inherit: traditionnelle
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: *id003
    scale_note: L’agar-agar se scale avec le volume de crème ; trop d’agar donne un gel cassant.
    ingredients: []
    steps: []
    kcal_per_serving: 377
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  sans_lactose_sans_gluten:
    label: Sans lactose et sans gluten
    inherit:
    servings_base: 8
    servings_unit: personnes
    diets:
    - vegetarien
    allergens:
    - produits_laitiers
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 20
      rest_min: 180
      total_min: 220
    equipment:
    - casserole
    - fouet
    - verrines ou moules silicone
    - chinois (optionnel)
    substitutions: []
    scale_note: L’agar-agar se scale avec le volume de crème ; trop d’agar donne un gel cassant.
    ingredients:
    - qty: 800
      unit: ml
      item: crème sans lactose
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 90
      unit: g
      item: sucre
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: agar-agar
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty: 20
      unit: g
      item: lait sans lactose
      group: panna cotta
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: arôme de vanille
      group: panna cotta
      scale: false
      optional: false
      to_taste: true
    - qty: 250
      unit: g
      item: framboises (ou autre fruit)
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 30
      unit: g
      item: sucre
      group: coulis
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: demi-citron
      group: coulis
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Cuisson. Chauffez la crème sans lactose, les 90 g de sucre et l’arôme de vanille à feu doux. Dès l’ébullition, laissez infuser à couvert."
    - "Cuisson. Diluez l’agar-agar dans le lait sans lactose froid, incorporez, fouettez. Comptez une minute d’ébullition, puis retirez du feu."
    - "Verrines ou moules. Versez dans des verrines ou des moules, puis réservez au réfrigérateur 2 à 4 h."
    - "Repos. Préparez un coulis de framboises avec 30 g de sucre et le jus de citron. Réservez au réfrigérateur."
    - "Finition. Nappez de coulis et ajoutez des fruits au moment de servir."
    steps_niveaux:
      amateur:
      - "Cuisson. Chauffez la crème sans lactose, les 90 g de sucre et l’arôme de vanille à feu doux. Dès l’ébullition, [[infuser|laissez infuser]] à couvert."
      - "Cuisson. [[delayer|Délayez]] l’agar-agar dans le lait sans lactose froid, incorporez, fouettez. Comptez une minute d’ébullition, puis retirez du feu."
      - "Verrines ou moules. Versez dans des verrines ou des moules, puis réservez au réfrigérateur 2 à 4 h."
      - "Repos. Préparez un coulis de framboises avec 30 g de sucre et le jus de citron. Réservez au réfrigérateur."
      - "Finition. [[napper|Nappez]] de coulis et ajoutez des fruits au moment de servir."
      pro:
      - "Chauffer la crème sans lactose, 90 g de sucre et arôme de vanille à feu doux. À l’ébullition, infuser à couvert."
      - "Délayer l’agar-agar dans le lait sans lactose froid. Incorporer. Fouetter. Compter une minute d’ébullition. Retirer du feu."
      - "Verser en verrines ou moules. Réfrigérateur 2 à 4 h."
      - "Préparer un coulis de framboises avec 30 g de sucre et le jus de citron. Réfrigérateur."
      - "Napper de coulis. Ajouter des fruits au moment de servir."
      cavernes:
      - "Cuisson. Crème sans lactose, 90 g sucre, arôme vanille, feu doux, chauffer. Ébullition, couvert, infuser."
      - "Cuisson. Agar-agar, lait sans lactose froid, délayer. Incorporer. Fouetter. Minute ébullition, compter. Feu, retirer."
      - "Verrines ou moules. Verrines ou moules, verser. Réfrigérateur 2 à 4 h."
      - "Repos. Coulis framboises, 30 g sucre, jus citron. Réfrigérateur."
      - "Finition. Coulis, napper. Fruits, ajouter. Moment servir."
    kcal_per_serving: 380
    kcal_source: ciqual_2020_estime
    kcal_note: estimation ingrédients
lexique_local:
  traditionnelle:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    delayer:
      terme: "délayer"
      explication: "Vous mettez la poudre dans un bol. Vous ajoutez un peu de liquide encore froid, pris sur celui de la recette, et vous mélangez jusqu’à disparition des grumeaux. Puis vous versez ce mélange dans le reste. C’est réussi quand la poudre a disparu dans un liquide lisse. Évitez de jeter la poudre d’un coup dans le chaud : elle forme des paquets."
      ref: Cuisine/Lexique/delayer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    delayer:
      terme: "délayer"
      explication: "Vous mettez la poudre dans un bol. Vous ajoutez un peu de liquide encore froid, pris sur celui de la recette, et vous mélangez jusqu’à disparition des grumeaux. Puis vous versez ce mélange dans le reste. C’est réussi quand la poudre a disparu dans un liquide lisse. Évitez de jeter la poudre d’un coup dans le chaud : elle forme des paquets."
      ref: Cuisine/Lexique/delayer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  sans_lactose_sans_gluten:
    infuser:
      terme: "infuser"
      explication: "Vous laissez l’aromate dans le liquide déjà chaud, récipient entièrement hors du feu. Le parfum passe dans le liquide : ça sent nettement l’aromate."
      ref: Cuisine/Lexique/infuser.md
    delayer:
      terme: "délayer"
      explication: "Vous mettez la poudre dans un bol. Vous ajoutez un peu de liquide encore froid, pris sur celui de la recette, et vous mélangez jusqu’à disparition des grumeaux. Puis vous versez ce mélange dans le reste. C’est réussi quand la poudre a disparu dans un liquide lisse. Évitez de jeter la poudre d’un coup dans le chaud : elle forme des paquets."
      ref: Cuisine/Lexique/delayer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
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

---

# Panna cotta aux fruits rouges

**Équipement :** [[fouet]]

Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 8 personnes.

**Catégorie :** sucré · dessert  
**Régimes déjà vrais (tradi) :** végétarien, sans gluten, sans œufs  
**Photo :** `Cuisine/Recettes/Web/panna-cotta-aux-fruits-rouges.jpg`  
**Archive brute :** [[Cuisine/Recettes/Archives/panna-cotta-aux-fruits-rouges]]

## Ingrédients (8 personnes)

**Panna cotta**
- 800 ml (80 cl) de crème liquide 30 %
- 90 g de sucre
- 4 g d’agar-agar
- 20 g de lait
- arôme de vanille, au goût

**Coulis**
- 250 g de framboises (ou autre fruit)
- 30 g de sucre
- 1 demi-citron

## Préparation

1. Cuisson. Dans une casserole, versez la crème liquide, les 90 g de sucre et l’arôme de vanille. Chauffez à feu doux en mélangeant. Dès l’ébullition, coupez le feu et laissez infuser à couvert.
2. Cuisson. Diluez l’agar-agar dans le lait froid, puis incorporez-le à la crème à feu doux. Fouettez. Dès la reprise de l’ébullition, comptez une minute, puis retirez du feu.
3. Repos. Versez dans des verrines ou des moules en silicone. Réservez au réfrigérateur 2 à 4 h.
4. Coulis. Faites cuire les framboises avec 30 g de sucre et le jus du demi-citron, à feu doux. Servez tel quel, ou passez au chinois. Réservez au réfrigérateur.
5. Finition. Au moment de servir, nappez de coulis et ajoutez quelques fruits entiers ou coupés.

## Variantes machine

`vegetarienne` (identique) · `vegan` (crème de coco) · `pesco` (identique) · `sans_lactose_sans_gluten`
