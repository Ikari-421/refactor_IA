---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
slug: tarte-a-la-moutarde
title: Tarte à la moutarde (jambon, tomates, fromage)
lang: fr
description: "Tarte à la moutarde : recette française avec pâte brisée, moutarde de Dijon et tranches de jambon blanc, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- tarte
- été
- tomate
- moutarde
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/tarte-a-la-moutarde.webp
  alt: Tarte à la moutarde (jambon, tomates, fromage)
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/tarte-a-la-moutarde.md
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
    - from: pâte brisée (≈ 250 g, prête ou maison)
      to: pâte sans gluten
      note:
    - from: pâte brisée ou feuilletée
      to: pâte sans gluten
      note:
    - from: farine T55
      to: mix farine sans gluten + psyllium
      note:
    - from: chapelure (option, pour le gras en surface)
      to: chapelure sans gluten
      note:
    note: 'Gluten : pâte brisée (≈ 250 g, prête ou maison) → pâte sans gluten ; pâte brisée
      ou feuilletée → pâte sans gluten ; farine T55 → mix farine sans gluten + psyllium ;
      chapelure (option, pour le gras en surface) → chapelure sans gluten.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: pâte brisée (≈ 250 g, prête ou maison)
      to: pâte brisée vegan (à la margarine)
      note:
    - from: pâte brisée ou feuilletée
      to: pâte brisée vegan (à la margarine)
      note:
    - from: parmesan ou gruyère râpé
      to: comté affiné (naturellement quasi sans lactose)
      note:
    note: 'Lactose : pâte brisée (≈ 250 g, prête ou maison) → pâte brisée vegan (à la margarine)
      ; pâte brisée ou feuilletée → pâte brisée vegan (à la margarine) ; parmesan ou gruyère
      râpé → comté affiné (naturellement quasi sans lactose).'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: pâte brisée (≈ 250 g, prête ou maison)
      to: pâte brisée vegan (à la margarine)
      note:
    - from: pâte brisée ou feuilletée
      to: pâte brisée vegan (à la margarine)
      note:
    - from: parmesan ou gruyère râpé
      to: parmesan végétal ou levure maltée
      note:
    note: 'Produits laitiers : pâte brisée (≈ 250 g, prête ou maison) → pâte brisée vegan
      (à la margarine) ; pâte brisée ou feuilletée → pâte brisée vegan (à la margarine) ;
      parmesan ou gruyère râpé → parmesan végétal ou levure maltée.'
  sans_oeufs:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_fruits_a_coque:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_celeri:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_moutarde:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - moutarde
    swaps: []
    note: 'Contient moutarde (moutarde de Dijon) : pas d’adaptation fiable.'
  sans_mollusques:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_crustaces:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
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
    note:
  sans_soja:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_arachides:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sesame:
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
  sans_sulfites:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - sulfites
    swaps: []
    note: 'Contient sulfites (moutarde de Dijon) : pas d’adaptation fiable.'
house_toggle:
house_options: []
histoire: 'La tarte à la moutarde — pâte, nappe de Dijon, tomates, souvent jambon et gruyère
  — est un classique de table française d’été, largement documenté dans les recettes de cuisine
  familiale (Marmiton, CuisineAZ). Ce n’est pas un mets médiéval catalogué : c’est l’usage
  moderne d’un condiment beaucoup plus ancien. La moutarde de Dijon, originaire de la ville,
  se fabrique depuis environ le XIIIe siècle (graines brunes et noires, vinaigre, sel ; autrefois
  verjus bourguignon). Un décret de 1937 en fait un terme générique (méthode), pas une AOC.
  L’IGP, elle, s’appelle moutarde de Bourgogne (graines + vin blanc et transformation en Bourgogne,
  IGP novembre 2009). Après 1945, la culture locale des graines s’effondre ; l’industrie dijonnaise
  importe surtout du Canada. Fin des années 1980, Amora-Maille et Fallot (Beaune, 1840) relancent
  des graines en Bourgogne.'
fun_facts:
- text: « Moutarde de Dijon » n’est pas une AOC. C’est une recette / un genre. L’IGP, c’est
    la moutarde de Bourgogne (2009).
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Moutarde_de_Dijon
- text: 'Les graines de beaucoup de Dijon viennent du Canada (Wikipedia : ~80 %).'
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Moutarde_de_Dijon
- text: Fallot, Beaune, 1840. Relance des graines bourguignonnes avec Amora-Maille à la fin
    des années 80.
  source_name: agriculture.gouv.fr
  source_url: https://agriculture.gouv.fr/la-moutarde-le-produit-phare-de-la-bourgogne
- text: Confrérie de la moutarde de Dijon, 1996. Habits jaune moutarde, promotion du condiment.
  source_name: Wikipedia
  source_url: https://fr.wikipedia.org/wiki/Moutarde_de_Dijon
wines:
- name: Saint-Bris
  producer: Domaine Guilhem et Jean-Hugues Goisot
  origin: Saint-Bris-le-Vineux, Bourgogne
  grapes: Sauvignon (appellation Saint-Bris)
  award:
  why: 'acidité vive, agrumes, un peu de végétal : ça tient la moutarde et le jus de tomate
    sans sucrer. Le blanc du plat.'
- name: Brouilly
  producer: Les Vins Georges Dubœuf
  origin: Brouilly, Beaujolais
  grapes: Gamay
  award:
  why: 'fruit rouge, peu de tanin : ça accompagne le jambon et le gruyère sans se battre avec
    le piquant. Le rouge léger du plat.'
- name: Bourgogne
  producer: Maison Joseph Drouhin
  origin: Beaune, Bourgogne
  grapes: selon cuvée (blanc Chardonnay / Aligoté, ou Pinot Noir léger)
  award:
  why: 'même région d’esprit que la moutarde. Un blanc régional frais si on restes sur la
    tomate ; un Pinot léger si le jambon mène. Marqué profil : pas de millésime ni de cuvée
    figés ici.'
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - lactose
    - moutarde
    - produits_laitiers
    - sulfites
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 35
      rest_min: 0
      total_min: 60
    equipment:
    - moule 28 cm
    - four Miele
    - couteau
    - passoire
    - fourchette
    substitutions:
    - from: pâte feuilletée à la place de la brisée (CuisineAZ le permet)
      to:
      note:
    - from: Comté 12–18 mois à la place du gruyère
      to:
      note:
    - from: moutarde à l’ancienne en plus de la Dijon, pas à la place (moins de piquant)
      to:
      note:
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: pâte brisée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: cas
      item: moutarde de Dijon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: jambon blanc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 500
      unit: g
      item: tomates
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: gruyère en lamelles
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 150
      unit: g
      item: gruyère râpé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: herbes de Provence
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: cas
      item: huile d’olive (optionnel, filet sur les tomates)
      group:
      scale: true
      optional: true
      to_taste: false
    steps:
    - "Cuisson. Préchauffez le four à 200 °C. Foncez le moule avec la pâte brisée et piquez-la à la fourchette."
    - "Cuisson. Coupez les tomates en rondelles et égouttez-les 10–15 min dans une passoire."
    - "Cuisson. Nappez tout le fond d’une couche de moutarde de Dijon."
    - "Cuisson. Répartissez les lamelles de gruyère, puis le jambon blanc en carrés, puis une rosace de tomates qui se chevauchent. Salez et poivrez avec mesure : le jambon et le fromage salent déjà."
    - "Cuisson. Parsemez de gruyère râpé et d’herbes de Provence ; ajoutez un filet d’huile d’olive si les tomates sont trop sèches."
    - "Repos. Enfournez 35–40 min à 200 °C, jusqu’à pâte colorée et fromage gratiné. Laissez reposer 5 min."
    steps_niveaux:
      amateur:
      - "Cuisson. Préchauffez le four à 200 °C. [[foncer|Foncez]] le moule avec la pâte brisée et piquez-la à la fourchette."
      - "Cuisson. Coupez les tomates en rondelles et égouttez-les 10–15 min dans une passoire."
      - "Cuisson. [[napper|Nappez]] tout le fond d’une couche de moutarde de Dijon."
      - "Cuisson. Répartissez les lamelles de gruyère, puis le jambon blanc en carrés, puis une rosace de tomates qui se chevauchent. Salez et poivrez avec mesure : le jambon et le fromage salent déjà."
      - "Cuisson. Parsemez de gruyère râpé et d’herbes de Provence ; ajoutez un filet d’huile d’olive si les tomates sont trop sèches."
      - "Repos. Enfournez 35–40 min à 200 °C, jusqu’à pâte colorée et fromage gratiné. Laissez reposer 5 min."
      pro:
      - "Préchauffer le four à 200 °C. Foncer le moule avec la pâte brisée et piquer à la fourchette."
      - "Couper les tomates en rondelles et égoutter 10–15 min dans une passoire."
      - "Napper tout le fond d’une couche de moutarde de Dijon."
      - "Répartir les lamelles de gruyère, puis le jambon blanc en carrés, puis une rosace de tomates qui se chevauchent. Saler et poivrer avec mesure : le jambon et le fromage salent déjà."
      - "Parsemer de gruyère râpé et d’herbes de Provence ; ajouter un filet d’huile d’olive si les tomates sont trop sèches."
      - "Enfourner 35–40 min à 200 °C, jusqu’à pâte colorée et fromage gratiné. Laisser reposer 5 min."
      cavernes:
      - "Cuisson. Four 200 °C, préchauffer. Pâte brisée, moule, foncer. Fourchette, piquer."
      - "Cuisson. Tomates, rondelles, couper. Passoire, égoutter 10–15 min."
      - "Cuisson. Fond, couche moutarde Dijon, napper."
      - "Cuisson. Lamelles gruyère, puis jambon blanc carrés, puis rosace tomates qui se chevauchent, répartir. Sel, poivre, mesure : jambon et fromage salent déjà."
      - "Cuisson. Gruyère râpé, herbes Provence, parsemer. Option : filet huile olive si tomates trop sèches."
      - "Repos. Four 200 °C, 35–40 min, enfourner, jusqu’à pâte colorée et fromage gratiné. Reposer 5 min."
    kcal_per_serving: 610
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  vegetarienne:
    label: Végétarienne
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - vegetarien
    - pesco
    allergens:
    - gluten
    - lactose
    - moutarde
    - produits_laitiers
    - sulfites
    difficulty: 2
    time:
      prep_min: 25
      cook_min: 30
      rest_min: 0
      total_min: 55
    equipment:
    - moule
    - four
    - poêle
    substitutions:
    - from: sans oignon
      to: tomates + fromage seulement
      note:
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte brisée ou feuilletée
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: moutarde de Dijon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 600
      unit: g
      item: tomates, égouttées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignons, émincés
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile d’olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: grana (présure microbienne) râpé
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: herbes de Provence
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Cuisson. Faites suer les oignons 10 min à feu doux dans l’huile d’olive, sans trop les colorer."
    - "Cuisson. Piquez le fond, nappez de moutarde de Dijon, répartissez les oignons, une rosace de tomates, le grana râpé et les herbes de Provence."
    - "Finition. Enfournez 30 min à 200 °C. Servez tiède."
    steps_niveaux:
      amateur:
      - "Cuisson. Faites suer les oignons 10 min à feu doux dans l’huile d’olive, sans trop les colorer."
      - "Cuisson. Piquez le fond, [[napper|nappez]] de moutarde de Dijon, répartissez les oignons, une rosace de tomates, le grana râpé et les herbes de Provence."
      - "Finition. Enfournez 30 min à 200 °C. Servez tiède."
      pro:
      - "Faire suer les oignons 10 min à feu doux dans l’huile d’olive, sans trop les colorer."
      - "Piquer le fond, napper de moutarde de Dijon, répartir les oignons, une rosace de tomates, le grana râpé et les herbes de Provence."
      - "Enfourner 30 min à 200 °C. Servir tiède."
      cavernes:
      - "Cuisson. Oignons, huile olive, suer 10 min feu doux, sans trop colorer."
      - "Cuisson. Fond, piquer. Moutarde Dijon, napper. Oignons, rosace tomates, grana râpé, herbes Provence, répartir."
      - "Finition. Four 200 °C, 30 min, enfourner. Servir tiède."
    kcal_per_serving: 520
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
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
    - gluten
    - moutarde
    - sulfites
    difficulty: 2
    time:
      prep_min: 20
      cook_min: 30
      rest_min: 0
      total_min: 50
    equipment:
    - moule
    - four
    substitutions:
    - from: 'pâte feuilletée du commerce : lire l’étiquette (souvent du beurre)'
      to:
      note:
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine T55
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: huile d’olive
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: eau froide
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: sel
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 3
      unit: cas
      item: moutarde de Dijon (vérifier sans miel)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: piece
      item: tomates, égouttées
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon fondu à l’huile
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: herbes de Provence
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: fleur de sel
      group: 
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: cas
      item: chapelure (option, pour le gras en surface)
      group:
      scale: true
      optional: false
      to_taste: false
    steps:
    - "Repos. Mélangez la farine T55, le sel, l’huile d’olive et l’eau froide, laissez reposer 20 min, foncez et piquez."
    - "Cuisson. Nappez de moutarde de Dijon, répartissez l’oignon, les tomates, les herbes de Provence et la chapelure."
    - "Finition. Enfournez 28–32 min à 200 °C."
    steps_niveaux:
      amateur:
      - "Repos. Mélangez la farine T55, le sel, l’huile d’olive et l’eau froide, laissez reposer 20 min, [[foncer|foncez]] et piquez."
      - "Cuisson. [[napper|Nappez]] de moutarde de Dijon, répartissez l’oignon, les tomates, les herbes de Provence et la chapelure."
      - "Finition. Enfournez 28–32 min à 200 °C."
      pro:
      - "Mélanger la farine T55, le sel, l’huile d’olive et l’eau froide, laisser reposer 20 min, foncer et piquer."
      - "Napper de moutarde de Dijon, répartir l’oignon, les tomates, les herbes de Provence et la chapelure."
      - "Enfourner 28–32 min à 200 °C."
      cavernes:
      - "Repos. Farine T55, sel, huile olive, eau froide, mélanger. Reposer 20 min, foncer, piquer."
      - "Cuisson. Moutarde Dijon, napper. Oignon, tomates, herbes Provence, chapelure, répartir."
      - "Finition. Four 200 °C, 28–32 min, enfourner."
    kcal_per_serving: 460
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit: vegetarienne
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens: []
    difficulty:
    time:
    equipment: []
    substitutions: []
    scale_note:
    ingredients: []
    steps: []
    kcal_per_serving: 520
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegetarienne:
    napper:
      terme: "napper"
      explication: "Vous versez la sauce ou la couche liquide sur l’aliment. Vous l’étalez pour tout recouvrir d’une couche uniforme. C’est réussi quand la surface est couverte, sans trous ni flaque."
      ref: Cuisine/Lexique/napper.md
  vegan:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
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
  a_verifier: false
  note_verif: ""
---

# Tarte à la moutarde (jambon, tomates, fromage)

![[tarte-a-la-moutarde.webp]]

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Salé/tarte-a-la-moutarde.md).

**Catégorie :** salé

## Ingrédients (4 personnes)

- 1 pâte brisée (≈ 250 g, prête ou maison)
- 4 c.à.s (60 g) de moutarde de Dijon
- 3 tranches de jambon blanc (≈ 120 g)
- 4 tomates moyennes (≈ 500 g)
- 100 g de gruyère en lamelles
- 150 g de gruyère râpé
- Herbes de Provence, sel, poivre
- 1 c.à.s d’huile d’olive (optionnel, filet sur les tomates)

## Préparation

1. Cuisson. Préchauffez le four à 200 °C. Foncez le moule avec la pâte brisée et piquez-la à la fourchette.
2. Cuisson. Coupez les tomates en rondelles et égouttez-les 10–15 min dans une passoire.
3. Cuisson. Nappez tout le fond d’une couche de moutarde de Dijon.
4. Cuisson. Répartissez les lamelles de gruyère, puis le jambon blanc en carrés, puis une rosace de tomates qui se chevauchent. Salez et poivrez avec mesure : le jambon et le fromage salent déjà.
5. Cuisson. Parsemez de gruyère râpé et d’herbes de Provence ; ajoutez un filet d’huile d’olive si les tomates sont trop sèches.
6. Repos. Enfournez 35–40 min à 200 °C, jusqu’à pâte colorée et fromage gratiné. Laissez reposer 5 min.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco`
