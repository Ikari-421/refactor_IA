---
schema: recette-web-jigme/v2
slug: la-truite-mi-cuite-sauce-ciboulette
title: La truite mi-cuite sauce ciboulette
lang: fr
description: "La truite mi-cuite sauce ciboulette : recette française avec filet de truite, sauce soja et vinaigre balsamique, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- poisson
- rapide
- plat
image:
  url:
  alt: La truite mi-cuite sauce ciboulette
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/la-truite-mi-cuite-sauce-ciboulette.md
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
    - from: crème
      to: crème sans lactose
      note: Intolérance.
    - from: lait
      to: lait sans lactose
      note: Intolérance.
    - from: beurre
      to: beurre sans lactose ou clarifié
      note: Intolérance, pas allergie.
    - from: tofu ferme ou halloumi
      to: tofu ferme
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
    - from: tofu ferme ou halloumi
      to: pois chiches rôtis
      note:
    - from: tofu ferme
      to: pois chiches rôtis
      note:
    - from: crème de soja ou avoine
      to: crème d'avoine
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
    - from: vin rouge
      to: fond de légumes + un filet de vinaigre de cidre non souffré
      note: Profil différent.
    - from: vin blanc
      to: fond de légumes
      note:
    - from: vinaigre balsamique
      to: jus de citron
      note:
    note: 'Vin / fruits secs : possible SO₂.'
house_toggle:
house_options: []
histoire: >
  Truite (salmonidé d’eau froide) servie mi-cuite, sauce soja, vinaigre, ciboulette :
  assiette contemporaine, pas un plat régional daté. La mi-cuisson du poisson
  (cœur nacre) est un geste de restaurant du XXe s. finissant, pas une tradition
  de rivière.
fun_facts:
- text: >
    La truite d’élevage a une chair plus grasse que la truite de torrent : elle
    supporte mieux une cuisson courte.
  source_name: Usage
  source_url:
- text: >
    Le soja et le balsamique salent et sucrent : on sale le poisson après, pas avant,
    si la sauce est déjà salée.
  source_name: Usage
  source_url:
wines:
- name: Roussette de Savoie
  producer: Domaine Dupasquier
  origin: Savoie
  grapes: altesse
  award:
  why: Blanc de montagne — la truite, sans un bois qui noie la ciboulette.
- name: Sancerre
  producer: Pascal Jolivet
  origin: Sancerre, Loire
  grapes: sauvignon
  award:
  why: Silex, agrume — le soja et le vinaigre, un blanc vif.
- name: Chablis
  producer: La Chablisienne
  origin: Chablis, Bourgogne
  grapes: chardonnay
  award:
  why: Pierre, citron — le poisson mi-cuit, sans beurre de fût.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - lactose
    - produits_laitiers
    - poisson
    - soja
    - sesame
    - sulfites
    - gluten
    difficulty: 2
    time: &id001
      prep_min: 20
      cook_min: 10
      rest_min: 0
      total_min: 30
    equipment: &id002
    - casserole
    - poêle
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: filet de truite
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
      item: vinaigre balsamique
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame
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
    - Cuisson. Dans une petite casserole, faites réduire à feu doux la sauce soja coupée au vinaigre
      balsamique. Pendant ce temps, hachez finement les échalotes et la ciboulette.
    - Cuisson. Dans une autre casserole, faites fondre du beurre et ajoutez-y l’échalote. Baissez le
      feu puis ajoutez la crème fraiche ainsi que la ciboulette. Assaisonnez selon vos goûts.
    - Dressage. Faites saisir les filets de truite d’un seul côté dans une poêle huilée. Pour le dressage,
      commencez par un lit de crème ciboulette, déposez-y les filets de truite et badigeonnez-les
      avec la réduction soja balsamique à l’aide d’un pinceau. Déposez de la ciboulette ciselée
      et des graines de sésame sur le dessus. Vos truites mi-cuites seront parfaites pour
      accompagner des légumes ou des féculents (ou les deux) !
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une petite casserole, [[reduire|faites réduire]] à feu doux la sauce soja coupée au vinaigre balsamique. Pendant ce temps, hachez finement les échalotes et la ciboulette."
      - "Cuisson. Dans une autre casserole, faites fondre du beurre et ajoutez-y l’échalote. Baissez le feu puis ajoutez la crème fraiche ainsi que la ciboulette. Assaisonnez selon vos goûts."
      - "Dressage. Faites saisir les filets de truite d’un seul côté dans une poêle huilée. Pour le dressage, commencez par un lit de crème ciboulette, déposez-y les filets de truite et badigeonnez-les avec la réduction soja balsamique à l’aide d’un pinceau. Déposez de la ciboulette ciselée (coupée en petits brins) et des graines de sésame sur le dessus. Vos truites mi-cuites seront parfaites pour accompagner des légumes ou des féculents (ou les deux) !"
      pro:
      - "Petite casserole : réduire à feu doux la sauce soja coupée au vinaigre balsamique. Pendant ce temps, hacher finement échalotes et ciboulette."
      - "Autre casserole : fondre le beurre, ajouter l’échalote. Baisser le feu. Ajouter la crème fraiche et la ciboulette. Assaisonner."
      - "Saisir les filets de truite d’un seul côté, poêle huilée. Lit de crème ciboulette, filets, badigeonner à la réduction soja balsamique au pinceau. Ciboulette ciselée et graines de sésame. Servir avec légumes ou féculents."
      cavernes:
      - "Cuisson. Petite casserole. Sauce soja, vinaigre balsamique, feu doux, réduire. Pendant : échalotes, ciboulette, hacher fin."
      - "Cuisson. Autre casserole. Beurre, fondre. Échalote, ajouter. Feu, baisser. Crème fraiche, ciboulette, ajouter. Assaisonner."
      - "Dressage. Poêle huilée. Filets truite, côté, saisir. Lit crème ciboulette. Filets, déposer. Réduction soja balsamique, pinceau, badigeonner. Ciboulette ciselée, graines sésame, dessus. Légumes ou féculents."
    kcal_per_serving: 53
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
    - lactose
    - produits_laitiers
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
    - qty: 4
      unit: piece
      item: tofu ferme ou halloumi
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
      item: vinaigre balsamique
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème fraiche
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame
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
    - Cuisson. Dans une petite casserole, faites réduire à feu doux la sauce soja coupée au vinaigre
      balsamique. Pendant ce temps, hachez finement les échalotes et la ciboulette.
    - Cuisson. Dans une autre casserole, faites fondre du beurre et ajoutez-y l’échalote. Baissez le
      feu puis ajoutez la crème fraiche ainsi que la ciboulette. Assaisonnez selon vos goûts.
    - Dressage. Faites saisir le tofu ferme (ou le halloumi) d’un seul côté dans une poêle huilée. Pour le dressage, commencez par un lit de crème ciboulette, déposez-y le tofu et badigeonnez-le avec la réduction soja balsamique. Déposez de la ciboulette ciselée et des graines de sésame. Servez avec des légumes ou des féculents.
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une petite casserole, [[reduire|faites réduire]] à feu doux la sauce soja coupée au vinaigre balsamique. Pendant ce temps, hachez finement les échalotes et la ciboulette."
      - "Cuisson. Dans une autre casserole, faites fondre du beurre et ajoutez-y l’échalote. Baissez le feu puis ajoutez la crème fraiche ainsi que la ciboulette. Assaisonnez selon vos goûts."
      - "Dressage. Faites saisir le tofu ferme (ou le halloumi) d’un seul côté dans une poêle huilée. Pour le dressage, commencez par un lit de crème ciboulette, déposez-y le tofu et badigeonnez-le avec la réduction soja balsamique. Déposez de la ciboulette ciselée (coupée en petits brins) et des graines de sésame. Servez avec des légumes ou des féculents."
      pro:
      - "Petite casserole : réduire à feu doux la sauce soja coupée au vinaigre balsamique. Pendant ce temps, hacher finement échalotes et ciboulette."
      - "Autre casserole : fondre le beurre, ajouter l’échalote. Baisser le feu. Ajouter la crème fraiche et la ciboulette. Assaisonner."
      - "Saisir le tofu ferme (ou le halloumi) d’un seul côté, poêle huilée. Lit de crème ciboulette, tofu, badigeonner à la réduction soja balsamique. Ciboulette ciselée et graines de sésame. Servir avec légumes ou féculents."
      cavernes:
      - "Cuisson. Petite casserole. Sauce soja, vinaigre balsamique, feu doux, réduire. Pendant : échalotes, ciboulette, hacher fin."
      - "Cuisson. Autre casserole. Beurre, fondre. Échalote, ajouter. Feu, baisser. Crème fraiche, ciboulette, ajouter. Assaisonner."
      - "Dressage. Poêle huilée. Tofu ferme ou halloumi, côté, saisir. Lit crème ciboulette. Tofu, déposer. Réduction soja balsamique, badigeonner. Ciboulette ciselée, graines sésame. Légumes ou féculents."
    kcal_per_serving: 131
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
    - qty: 4
      unit: piece
      item: tofu ferme
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
      item: vinaigre balsamique
      group:
      scale: false
      optional: false
      to_taste: true
    - qty: 2
      unit: piece
      item: échalote
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: crème de soja ou avoine
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: ciboulette
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: graines de sésame
      group:
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: margarine végétale
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Cuisson. Dans une petite casserole, faites réduire à feu doux la sauce soja coupée au vinaigre
      balsamique. Pendant ce temps, hachez finement les échalotes et la ciboulette.
    - Cuisson. Dans une autre casserole, faites fondre de la margarine végétale et ajoutez-y l’échalote. Baissez le
      feu puis ajoutez la crème de soja ou avoine ainsi que la ciboulette. Assaisonnez selon
      vos goûts.
    - Dressage. Faites saisir le tofu ferme d’un seul côté dans une poêle huilée. Pour le dressage, commencez par un lit de crème ciboulette, déposez-y le tofu et badigeonnez-le avec la réduction soja balsamique. Déposez de la ciboulette ciselée et des graines de sésame. Servez avec des légumes ou des féculents.
    steps_niveaux:
      amateur:
      - "Cuisson. Dans une petite casserole, [[reduire|faites réduire]] à feu doux la sauce soja coupée au vinaigre balsamique. Pendant ce temps, hachez finement les échalotes et la ciboulette."
      - "Cuisson. Dans une autre casserole, faites fondre de la margarine végétale et ajoutez-y l’échalote. Baissez le feu puis ajoutez la crème de soja ou avoine ainsi que la ciboulette. Assaisonnez selon vos goûts."
      - "Dressage. Faites saisir le tofu ferme d’un seul côté dans une poêle huilée. Pour le dressage, commencez par un lit de crème ciboulette, déposez-y le tofu et badigeonnez-le avec la réduction soja balsamique. Déposez de la ciboulette ciselée (coupée en petits brins) et des graines de sésame. Servez avec des légumes ou des féculents."
      pro:
      - "Petite casserole : réduire à feu doux la sauce soja coupée au vinaigre balsamique. Pendant ce temps, hacher finement échalotes et ciboulette."
      - "Autre casserole : fondre la margarine végétale, ajouter l’échalote. Baisser le feu. Ajouter la crème de soja ou avoine et la ciboulette. Assaisonner."
      - "Saisir le tofu ferme d’un seul côté, poêle huilée. Lit de crème ciboulette, tofu, badigeonner à la réduction soja balsamique. Ciboulette ciselée et graines de sésame. Servir avec légumes ou féculents."
      cavernes:
      - "Cuisson. Petite casserole. Sauce soja, vinaigre balsamique, feu doux, réduire. Pendant : échalotes, ciboulette, hacher fin."
      - "Cuisson. Autre casserole. Margarine végétale, fondre. Échalote, ajouter. Feu, baisser. Crème soja ou avoine, ciboulette, ajouter. Assaisonner."
      - "Dressage. Poêle huilée. Tofu ferme, côté, saisir. Lit crème ciboulette. Tofu, déposer. Réduction soja balsamique, badigeonner. Ciboulette ciselée, graines sésame. Légumes ou féculents."
    kcal_per_serving: 131
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
    - lactose
    - produits_laitiers
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
    kcal_per_serving: 53
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegetarienne:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
  vegan:
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Au plus froid du frigo."}
  congelation: {possible: false, duree: "", decongelation: "", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: ""
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "poisson / fruits de mer ; œufs crus ou peu cuits"

---

# La truite mi-cuite sauce ciboulette
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/la-truite-mi-cuite-sauce-ciboulette]]

## Ingrédients (4 personnes)

- 4 filet de truite
-  sauce soja
-  vinaigre balsamique
- 2 échalote
-  crème fraiche
-  ciboulette
-  graines de sésame

## Préparation

1. Dans une petite casserole, faites réduire à feu doux la sauce soja coupée au vinaigre balsamique. Pendant ce temps, hachez finement les échalotes et la ciboulette.
2. Dans une autre casserole, faites fondre du beurre et ajoutez-y l’échalote. Baissez le feu puis ajoutez la crème fraiche ainsi que la ciboulette. Assaisonnez selon vos goûts.
3. Faites saisir les filets de truite d’un seul côté dans une poêle huilée. Pour le dressage, commencez par un lit de crème ciboulette, déposez-y les filets de truite et badigeonnez-les avec la réduction soja balsamique à l’aide d’un pinceau. Déposez de la ciboulette ciselée et des graines de sésame sur le dessus.

 
 

 
 Vos truites mi-cuites seront parfaites pour accompagner des légumes ou des féculents (ou les deux) !
