---
schema: recette-web-jigme/v2
equipment:
- ref: robot-patissier
- ref: fouet
slug: quiche-aux-blettes
title: Quiche aux blettes
lang: fr
description: "Quiche aux blettes : recette française avec pâte sablée sans sucre, blettes et tranche de poitrine fumée, pour 4 personnes."
cuisine: française
category: salé
tags:
- salé
- quiche
- blettes
- lard
- four
image:
  url:
  alt: Quiche aux blettes
  credit:
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Salé/quiche-aux-blettes.md
default_variant: traditionnelle
available_variants:
- traditionnelle
- vegetarienne
- vegan
- pesco
- ma_recette
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
    - from: pâte sablée sans sucre (ou brisée, ≈ 250 g)
      to: pâte sans gluten
      note:
    - from: farine T55
      to: mix farine sans gluten + psyllium
      note:
    note: 'Gluten : pâte sablée sans sucre (ou brisée, ≈ 250 g) → pâte sans gluten ; farine
      T55 → mix farine sans gluten + psyllium.'
  sans_lactose:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    swaps:
    - from: pâte sablée sans sucre (ou brisée, ≈ 250 g)
      to: pâte brisée vegan (à la margarine)
      note:
    - from: Fromage râpé (emmental ou comté, ≈ 60 g)
      to: comté affiné (naturellement quasi sans lactose)
      note:
    - from: crème liquide
      to: crème sans lactose
      note:
    - from: lait
      to: lait sans lactose
      note:
    note: 'Lactose : pâte sablée sans sucre (ou brisée, ≈ 250 g) → pâte brisée vegan (à la
      margarine) ; Fromage râpé (emmental ou comté, ≈ 60 g) → comté affiné (naturellement
      quasi sans lactose) ; crème liquide → crème sans lactose ; lait → lait sans lactose.'
  sans_produits_laitiers:
    already_ok: false
    impossible: false
    redirect_variant:
    clears:
    - lactose
    - produits_laitiers
    swaps:
    - from: pâte sablée sans sucre (ou brisée, ≈ 250 g)
      to: pâte brisée vegan (à la margarine)
      note:
    - from: Fromage râpé (emmental ou comté, ≈ 60 g)
      to: fromage végétal
      note:
    - from: crème liquide
      to: crème de soja ou avoine
      note:
    - from: lait
      to: lait d'avoine
      note:
    note: 'Produits laitiers : pâte sablée sans sucre (ou brisée, ≈ 250 g) → pâte brisée vegan
      (à la margarine) ; Fromage râpé (emmental ou comté, ≈ 60 g) → fromage végétal ; crème
      liquide → crème de soja ou avoine ; lait → lait d''avoine.'
  sans_oeufs:
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - oeuf
    swaps: []
    note: 'Contient œuf (œufs entiers) : pas d’adaptation fiable.'
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
    already_ok: true
    impossible: false
    redirect_variant:
    clears: []
    swaps: []
    note:
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
    impossible: false
    redirect_variant:
    clears:
    - sulfites
    swaps:
    - from: Vin blanc, un fond de verre (facultatif)
      to: bouillon de légumes
      note:
    note: 'Sulfites : Vin blanc, un fond de verre (facultatif) → bouillon de légumes.'
house_toggle: ma_recette
house_options:
- ma_recette
histoire: 'La quiche est une tarte salée à l’appareil œufs-crème (migaine en lorrain). Le
  mot viendrait du francique / allemand Kuchen (gâteau, tarte), via Kichel / Kiche vers 1845.
  Attestations lorraines : 1586 (table de Charles III, Nancy — quiches et échaudés), 1594,
  comptes de l’hôpital Saint-Julien en 1605. Pendant des siècles : pâte à pain fine, œufs
  + crème, beurre en copeaux ; le lard et la migaine épaisse datent surtout du XIXe. La pâte
  brisée (ici sablée sans sucre chez Jigmé) est la forme moderne. Fromage râpé : courant après
  1945, discuté chez les puristes de la lorraine (Elizabeth David le refusait). Une quiche
  aux blettes n’est pas un mets médiéval catalogué : c’est la forme « quiche » appliquée à
  un légume de potager. Cousine belge : tarte al d’jote de Nivelles (blettes). Ne pas confondre
  avec la tourte de blettes niçoise, souvent sucrée (pignons, raisins, sucre).'
fun_facts:
- text: Bette, blette, poirée, jotte. Même plante (Beta vulgaris), même espèce que la betterave,
    sélectionnée pour feuilles et cardes. « Blette » gagne après-guerre ; « poirée » vient
    de la porée médiévale.
  source_name: Wikipedia FR, Bette
  source_url: https://fr.wikipedia.org/wiki/Bette_(plante
- text: La quiche du jour du pain. On l’enfourne dans la chaleur résiduelle du four communal,
    après les miches. D’où la pâte à pain d’origine.
  source_name: Wikipedia FR, Quiche lorraine
  source_url: https://fr.wikipedia.org/wiki/Quiche_lorraine
- text: Nivelles a sa tarte aux blettes (al d’jote), plat identitaire wallon, pas une quiche
    lorraine.
  source_name: Wikipedia FR, Bette
  source_url: https://fr.wikipedia.org/wiki/Bette_(plante
- text: 'Côtes et feuilles, deux cuissons. Francine et Les filles à table séparent cardes
    (blanchies) et feuilles (poêle) : les côtes restent fermes, le vert ne tourne pas à la
    bouillie.'
  source_name: Francine
  source_url: https://www.francine.com/recettes/quiches/quiche-aux-blettes-et-aux-lardons
wines:
- name: Riesling
  producer: F.E. Trimbach
  origin: Alsace (Ribeauvillé)
  grapes: Riesling
  award:
  why: sec, citron, pierre. Il lave la crème et la muscade sans sucrosité. Le verre droit
    sur une quiche.
- name: Pinot Blanc Cuvée Les Amours
  producer: Hugel & Fils
  origin: Alsace
  grapes: Pinot blanc
  award:
  why: plus rond, moins tranchant. Poire, amande — ça épouse les blettes et le lard sans voler
    la vedette.
- name: Pinot Gris Jubilee
  producer: Hugel & Fils
  origin: Alsace
  grapes: Pinot gris
  award:
  why: plus de gras et de fumé noble. Si la poitrine est bien fumée et le comté présent, c’est
    le verre le plus « plat ».
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
    - oeuf
    - produits_laitiers
    - sulfites
    difficulty: 2
    time:
      prep_min: 35
      cook_min: 60
      rest_min: 0
      total_min: 95
    equipment:
    - moule 26–28 cm
    - poêle
    - casserole
    - four
    substitutions:
    - from: pâte brisée si pas de sablée salée
      to:
      note:
    - from: lardons 100–150 g si la « 1 tranche » est maigre
      to:
      note:
    - from: pas de vin blanc
      to: omettre
      note:
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: pâte sablée sans sucre (ou brisée)
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 450
      unit: g
      item: blettes, côtes et feuilles
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: poitrine fumée ou lardons fumés
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: cl
      item: Vin blanc, un fond de verre (facultatif)
      group: Garniture
      scale: true
      optional: true
      to_taste: false
    - qty: 60
      unit: g
      item: fromage râpé (emmental ou comté)
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œufs entiers
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaunes d’œufs
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème liquide
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: lait
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noix de muscade
      group: Appareil
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group: Appareil
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group: Appareil
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
    - "Cuisson. Foncez le moule avec la pâte, piquez le fond et réservez 20 min au réfrigérateur. Préchauffez le four à 180 °C."
    - "Cuisson. Séparez les côtes et les feuilles des blettes. Coupez les côtes en tronçons, blanchissez-les 8–10 min, puis égouttez-les très à fond (sinon l’appareil devient liquide). Ciselez les feuilles et faites-les tomber 5 min à la poêle."
    - "Oignon émincé blond. Émincez l’oignon et faites-le blondir. Coupez la poitrine fumée en lardons et faites-les dorer (blanchissez-les 2–3 min auparavant s’ils sont très salés). Si vous le souhaitez, déglacez avec le vin blanc et réduisez à sec."
    - "Cuisson. Préparez l’appareil : fouettez les œufs entiers et les jaunes d’œufs avec la crème liquide, le lait, la noix de muscade, le sel et le poivre."
    - "Pâte à blanc 15 min. Faites cuire la pâte à blanc 15 min. Répartissez la garniture (oignon, lardons, côtes et feuilles), versez l’appareil et parsemez de fromage râpé."
    - "Repos. Enfournez 40–50 min à 180 °C, jusqu’à ce que la migaine soit prise et le dessus doré. Laissez reposer 10 min avant de servir."
    steps_niveaux:
      amateur:
      - "Cuisson. [[foncer|Foncez]] le moule avec la pâte, piquez le fond et réservez 20 min au réfrigérateur. Préchauffez le four à 180 °C."
      - "Cuisson. Séparez les côtes et les feuilles des blettes. Coupez les côtes en tronçons, cuisez-les 8–10 min à l’eau bouillante, puis égouttez-les très à fond (sinon l’appareil devient liquide). Ciselez les feuilles et faites-les tomber 5 min à la poêle."
      - "Oignon émincé blond. Émincez l’oignon et faites-le blondir. Coupez la poitrine fumée en lardons et faites-les dorer (cuisez-les 2–3 min à l’eau bouillante auparavant s’ils sont très salés). Si vous le souhaitez, [[deglacer|déglacez]] avec le vin blanc et [[reduire|réduisez]] à sec."
      - "Cuisson. Préparez l’appareil : fouettez les œufs entiers et les jaunes d’œufs avec la crème liquide, le lait, la noix de muscade, le sel et le poivre."
      - "Pâte à blanc 15 min. Faites cuire la pâte à blanc 15 min. Répartissez la garniture (oignon, lardons, côtes et feuilles), versez l’appareil et parsemez de fromage [[raper|râpé]]."
      - "Repos. Enfournez 40–50 min à 180 °C, jusqu’à ce que la migaine soit prise et le dessus doré. Laissez reposer 10 min avant de servir."
      pro:
      - "Foncer le moule avec la pâte, piquer le fond, réfrigérateur 20 min. Préchauffer le four à 180 °C."
      - "Séparer côtes et feuilles des blettes. Couper les côtes en tronçons, cuire 8–10 min à l’eau bouillante, égoutter très à fond. Ciseler les feuilles, les faire tomber 5 min à la poêle."
      - "Émincer l’oignon, blondir. Couper la poitrine fumée en lardons, dorer (cuire 2–3 min à l’eau bouillante auparavant si très salés). Option : déglacer au vin blanc, réduire à sec."
      - "Fouetter les œufs entiers et les jaunes d’œufs avec la crème liquide, le lait, la noix de muscade, le sel et le poivre."
      - "Cuire la pâte à blanc 15 min. Répartir la garniture (oignon, lardons, côtes et feuilles), verser l’appareil, parsemer de fromage râpé."
      - "Enfourner 40–50 min à 180 °C, migaine prise, dessus doré. Reposer 10 min. Servir."
      cavernes:
      - "Cuisson. Moule, foncer pâte, piquer fond, réfrigérateur 20 min. Four 180 °C, préchauffer."
      - "Cuisson. Blettes : côtes et feuilles, séparer. Côtes, tronçons, cuire 8–10 min à l’eau bouillante, égoutter très à fond (sinon appareil liquide). Feuilles, ciseler, tomber 5 min poêle."
      - "Oignon émincé blond. Oignon, émincer, blondir. Poitrine fumée, lardons, dorer (cuire 2–3 min à l’eau bouillante avant si très salés). Option : vin blanc, déglacer, réduire à sec."
      - "Cuisson. Appareil : œufs entiers, jaunes œufs, crème liquide, lait, muscade, sel, poivre, fouetter."
      - "Pâte à blanc 15 min. Pâte à blanc, 15 min. Garniture (oignon, lardons, côtes, feuilles), répartir. Appareil, verser. Fromage râpé, parsemer."
      - "Repos. Enfourner 40–50 min 180 °C, migaine prise, dessus doré. Reposer 10 min. Servir."
    kcal_per_serving: 620
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
    - oeuf
    - produits_laitiers
    - sulfites
    difficulty: 2
    time:
      prep_min: 35
      cook_min: 60
      rest_min: 0
      total_min: 95
    equipment:
    - moule 26–28 cm
    - poêle
    - casserole
    - four
    substitutions:
    - from: feta 80 g à la place du râpé (plus salé, baisser le sel)
      to:
      note:
    scale_note:
    ingredients:
    - qty: 250
      unit: g
      item: pâte sablée sans sucre (ou brisée)
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 450
      unit: g
      item: blettes, côtes et feuilles
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: oignon
      group: Garniture
      scale: true
      optional: false
      to_taste: false
      note: + 1 oignon pour remplacer la poitrine
    - qty: 5
      unit: cl
      item: Vin blanc, un fond de verre (facultatif)
      group: Garniture
      scale: true
      optional: true
      to_taste: false
    - qty: 50
      unit: g
      item: champignons de Paris (facultatif)
      note:
      group: Garniture
    - qty: 60
      unit: g
      item: fromage râpé (tomme à présure végétale)
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œufs entiers
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaunes d’œufs
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème liquide
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: lait
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noix de muscade
      group: Appareil
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group: Appareil
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group: Appareil
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
    - "Cuisson. Foncez le moule avec la pâte, piquez le fond et réservez 20 min au réfrigérateur. Préchauffez le four à 180 °C."
    - "Cuisson. Séparez les côtes et les feuilles des blettes. Coupez les côtes en tronçons, blanchissez-les 8–10 min, puis égouttez-les très à fond (sinon l’appareil devient liquide). Ciselez les feuilles et faites-les tomber 5 min à la poêle."
    - "Oignon émincé blond. Émincez l’oignon et faites-le blondir, avec les champignons de Paris si vous en utilisez. Si vous le souhaitez, déglacez avec le vin blanc et réduisez à sec."
    - "Cuisson. Préparez l’appareil : fouettez les œufs entiers et les jaunes d’œufs avec la crème liquide, le lait, la noix de muscade, le sel et le poivre."
    - "Pâte à blanc 15 min. Faites cuire la pâte à blanc 15 min. Répartissez la garniture (oignon, côtes et feuilles), versez l’appareil et parsemez de fromage râpé."
    - "Repos. Enfournez 40–50 min à 180 °C, jusqu’à ce que la migaine soit prise et le dessus doré. Laissez reposer 10 min avant de servir."
    steps_niveaux:
      amateur:
      - "Cuisson. [[foncer|Foncez]] le moule avec la pâte, piquez le fond et réservez 20 min au réfrigérateur. Préchauffez le four à 180 °C."
      - "Cuisson. Séparez les côtes et les feuilles des blettes. Coupez les côtes en tronçons, cuisez-les 8–10 min à l’eau bouillante, puis égouttez-les très à fond (sinon l’appareil devient liquide). Ciselez les feuilles et faites-les tomber 5 min à la poêle."
      - "Oignon émincé blond. Émincez l’oignon et faites-le blondir, avec les champignons de Paris si vous en utilisez. Si vous le souhaitez, [[deglacer|déglacez]] avec le vin blanc et [[reduire|réduisez]] à sec."
      - "Cuisson. Préparez l’appareil : fouettez les œufs entiers et les jaunes d’œufs avec la crème liquide, le lait, la noix de muscade, le sel et le poivre."
      - "Pâte à blanc 15 min. Faites cuire la pâte à blanc 15 min. Répartissez la garniture (oignon, côtes et feuilles), versez l’appareil et parsemez de fromage [[raper|râpé]]."
      - "Repos. Enfournez 40–50 min à 180 °C, jusqu’à ce que la migaine soit prise et le dessus doré. Laissez reposer 10 min avant de servir."
      pro:
      - "Foncer le moule avec la pâte, piquer le fond, réfrigérateur 20 min. Préchauffer le four à 180 °C."
      - "Séparer côtes et feuilles des blettes. Couper les côtes en tronçons, cuire 8–10 min à l’eau bouillante, égoutter très à fond. Ciseler les feuilles, les faire tomber 5 min à la poêle."
      - "Émincer l’oignon, blondir, avec les champignons de Paris si utilisés. Option : déglacer au vin blanc, réduire à sec."
      - "Fouetter les œufs entiers et les jaunes d’œufs avec la crème liquide, le lait, la noix de muscade, le sel et le poivre."
      - "Cuire la pâte à blanc 15 min. Répartir la garniture (oignon, côtes et feuilles), verser l’appareil, parsemer de fromage râpé."
      - "Enfourner 40–50 min à 180 °C, migaine prise, dessus doré. Reposer 10 min. Servir."
      cavernes:
      - "Cuisson. Moule, foncer pâte, piquer fond, réfrigérateur 20 min. Four 180 °C, préchauffer."
      - "Cuisson. Blettes : côtes et feuilles, séparer. Côtes, tronçons, cuire 8–10 min à l’eau bouillante, égoutter très à fond (sinon appareil liquide). Feuilles, ciseler, tomber 5 min poêle."
      - "Oignon émincé blond. Oignon, émincer, blondir, champignons de Paris si utilisés. Option : vin blanc, déglacer, réduire à sec."
      - "Cuisson. Appareil : œufs entiers, jaunes œufs, crème liquide, lait, muscade, sel, poivre, fouetter."
      - "Pâte à blanc 15 min. Pâte à blanc, 15 min. Garniture (oignon, côtes, feuilles), répartir. Appareil, verser. Fromage râpé, parsemer."
      - "Repos. Enfourner 40–50 min 180 °C, migaine prise, dessus doré. Reposer 10 min. Servir."
    kcal_per_serving: 600
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
    difficulty: 2
    time:
      prep_min: 35
      cook_min: 0
      rest_min: 0
      total_min: 90
    equipment:
    - moule 26–28 cm
    - poêle
    - casserole
    - four
    substitutions:
    - from: tofu soyeux 300 g mixé à la place de la farine de pois chiche (plus « flan »)
      to:
      note:
    scale_note:
    ingredients:
    - qty: 200
      unit: g
      item: farine T55
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: ml
      item: huile d’olive
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 50
      unit: ml
      item: eau froide
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 4
      unit: g
      item: sel
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 450
      unit: g
      item: blettes
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: huile d’olive
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: cas
      item: levure maltée (parmesan vegan)
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 80
      unit: g
      item: farine de pois chiche
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 400
      unit: ml
      item: lait d’avoine
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: cas
      item: huile d’olive
      group: Appareil
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: muscade
      group: Appareil
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group: Appareil
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group: Appareil
      scale: false
      optional: false
      to_taste: true
    - qty: 1
      unit: pincee
      item: curcuma (couleur)
      group: Appareil
      scale: false
      optional: false
      to_taste: false
    steps:
    - "Repos. Mélangez la farine T55, le sel, l’huile d’olive et l’eau froide. Foncez le moule, piquez le fond et réservez au réfrigérateur. Faites cuire à blanc 15 min à 180 °C."
    - "Cuisson. Séparez côtes et feuilles des blettes, préparez-les, puis faites blondir l’oignon."
    - "Cuisson. Fouettez la farine de pois chiche avec le lait d’avoine, l’huile d’olive et la muscade."
    - "Finition. Répartissez la garniture, versez l’appareil et parsemez de levure maltée. Enfournez 40 min à 180 °C."
    steps_niveaux:
      amateur:
      - "Repos. Mélangez la farine T55, le sel, l’huile d’olive et l’eau froide. [[foncer|Foncez]] le moule, piquez le fond et réservez au réfrigérateur. Faites cuire à blanc 15 min à 180 °C."
      - "Cuisson. Séparez côtes et feuilles des blettes, préparez-les, puis faites blondir l’oignon."
      - "Cuisson. Fouettez la farine de pois chiche avec le lait d’avoine, l’huile d’olive et la muscade."
      - "Finition. Répartissez la garniture, versez l’appareil et parsemez de levure maltée. Enfournez 40 min à 180 °C."
      pro:
      - "Mélanger la farine T55, le sel, l’huile d’olive et l’eau froide. Foncer le moule, piquer le fond, réfrigérateur. Cuire à blanc 15 min à 180 °C."
      - "Séparer côtes et feuilles des blettes, les préparer, blondir l’oignon."
      - "Fouetter la farine de pois chiche avec le lait d’avoine, l’huile d’olive et la muscade."
      - "Répartir la garniture, verser l’appareil, parsemer de levure maltée. Enfourner 40 min à 180 °C."
      cavernes:
      - "Repos. Farine T55, sel, huile olive, eau froide, mélanger. Moule, foncer, piquer fond, réfrigérateur. Cuire à blanc 15 min 180 °C."
      - "Cuisson. Côtes et feuilles blettes, séparer, préparer. Oignon, blondir."
      - "Cuisson. Farine pois chiche, lait avoine, huile olive, muscade, fouetter."
      - "Finition. Garniture, répartir. Appareil, verser. Levure maltée, parsemer. Enfourner 40 min 180 °C."
    kcal_per_serving: 590
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
    kcal_per_serving: 600
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  ma_recette:
    label: Version maison Jigmé
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
    - sulfites
    difficulty: 2
    time:
      prep_min: 35
      cook_min: 60
      rest_min: 0
      total_min: 95
    equipment:
    - moule à tarte
    - four
    substitutions: []
    scale_note:
    ingredients:
    - qty: 1
      unit: piece
      item: pâte sablée (sans sucre)
      group: Pâte
      scale: true
      optional: false
      to_taste: false
    - qty: 450
      unit: g
      item: blettes
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: tranche de poitrine fumée
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 5
      unit: cl
      item: Vin blanc (facultatif)
      group: Garniture
      scale: true
      optional: true
      to_taste: false
    - qty: 60
      unit: g
      item: fromage râpé
      group: Garniture
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œufs entiers
      group: Appareil à crème
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: jaunes d’œufs
      group: Appareil à crème
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: crème liquide
      group: Appareil à crème
      scale: true
      optional: false
      to_taste: false
    - qty: 250
      unit: g
      item: lait
      group: Appareil à crème
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: noix de muscade
      group: Appareil à crème
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: sel
      group: Appareil à crème
      scale: false
      optional: false
      to_taste: true
    - qty:
      unit:
      item: poivre
      group: Appareil à crème
      scale: false
      optional: false
      to_taste: true
    steps:
    - "Repos. Foncez le moule avec la pâte sablée, piquez le fond et réservez au réfrigérateur."
    - "Cuisson. Préparez la garniture : faites revenir l’oignon, la poitrine fumée et les blettes."
    - "Cuisson. Fouettez l’appareil avec les œufs entiers, les jaunes d’œufs, la crème liquide, le lait, la noix de muscade, le sel et le poivre."
    - "Cuisson. Faites cuire la pâte à blanc 15 min, puis ajoutez la garniture, l’appareil et le fromage râpé."
    - "Finition. Enfournez 40–50 min à 180 °C."
    steps_niveaux:
      amateur:
      - "Repos. [[foncer|Foncez]] le moule avec la pâte sablée, piquez le fond et réservez au réfrigérateur."
      - "Cuisson. Préparez la garniture : faites revenir l’oignon, la poitrine fumée et les blettes."
      - "Cuisson. Fouettez l’appareil avec les œufs entiers, les jaunes d’œufs, la crème liquide, le lait, la noix de muscade, le sel et le poivre."
      - "Cuisson. Faites cuire la pâte à blanc 15 min, puis ajoutez la garniture, l’appareil et le fromage [[raper|râpé]]."
      - "Finition. Enfournez 40–50 min à 180 °C."
      pro:
      - "Foncer le moule avec la pâte sablée, piquer le fond, réfrigérateur."
      - "Faire revenir l’oignon, la poitrine fumée et les blettes."
      - "Fouetter l’appareil : œufs entiers, jaunes d’œufs, crème liquide, lait, noix de muscade, sel, poivre."
      - "Cuire la pâte à blanc 15 min. Ajouter la garniture, l’appareil et le fromage râpé."
      - "Enfourner 40–50 min à 180 °C."
      cavernes:
      - "Repos. Moule, foncer pâte sablée, piquer fond, réfrigérateur."
      - "Cuisson. Garniture : oignon, poitrine fumée, blettes, faire revenir."
      - "Cuisson. Appareil : œufs entiers, jaunes œufs, crème liquide, lait, muscade, sel, poivre, fouetter."
      - "Cuisson. Pâte à blanc 15 min. Garniture, appareil, fromage râpé, ajouter."
      - "Finition. Enfourner 40–50 min 180 °C."
    kcal_per_serving: 620
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible. Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegetarienne:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
    deglacer:
      terme: "déglacer"
      explication: "Vous versez un liquide (vin, fond…) dans la poêle encore chaude. Vous grattez le fond pour décoller les sucs caramélisés. C’est réussi quand le fond est propre et que le liquide a pris le goût des sucs."
      ref: Cuisine/Lexique/deglacer.md
    reduire:
      terme: "réduire"
      explication: "Vous laissez le liquide cuire. L’eau s’en va en vapeur, le niveau descend. Quand la recette dit de moitié, il reste environ la moitié du volume versé : la sauce est plus épaisse, le goût plus marqué."
      ref: Cuisine/Lexique/reduire.md
    raper:
      terme: "râper"
      explication: "Vous passez l’aliment sur une râpe pour en tirer de fins copeaux. C’est réussi quand les copeaux sont fins et se dispersent ensuite dans la préparation. Évitez les gros morceaux qui restent entiers."
      ref: Cuisine/Lexique/raper.md
  vegan:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
  ma_recette:
    foncer:
      terme: "foncer"
      explication: "Vous garnissez le moule ou le plat avec la pâte. Vous la pressez sur le fond et les bords, sans trous. C’est réussi quand la pâte colle au moule, fond et bords."
      ref: Cuisine/Lexique/foncer.md
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
  frigo: {duree: "3 jours", contenant: "boîte hermétique", note: ""}
  congelation: {possible: true, duree: "3 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: false
  note_verif: ""

---

# Quiche aux blettes

Fiche **Web** (Grok Bot). Source de vérité = YAML. Ci-dessous : **traditionnelle**, 4 personnes. Convertie depuis la fiche Chef (Salé/quiche-aux-blettes.md).

**Catégorie :** salé

## Ingrédients (4 personnes)

**Pâte**
- 1 pâte sablée sans sucre (ou brisée, ≈ 250 g)

**Garniture**
- 1 botte de blettes (400–500 g), côtes et feuilles
- 1 tranche de poitrine fumée (ou 100–150 g de lardons fumés)
- 1 oignon
- Vin blanc, un fond de verre (facultatif)
- Fromage râpé (emmental ou comté, ≈ 60 g)

**Appareil**
- 2 œufs entiers
- 2 jaunes d’œufs
- 250 g de crème liquide
- 250 g de lait
- Noix de muscade, sel, poivre

## Préparation

1. Cuisson. Foncez le moule avec la pâte, piquez le fond et réservez 20 min au réfrigérateur. Préchauffez le four à 180 °C.
2. Cuisson. Séparez les côtes et les feuilles des blettes. Coupez les côtes en tronçons, blanchissez-les 8–10 min, puis égouttez-les très à fond (sinon l’appareil devient liquide). Ciselez les feuilles et faites-les tomber 5 min à la poêle.
3. Oignon émincé blond. Émincez l’oignon et faites-le blondir. Coupez la poitrine fumée en lardons et faites-les dorer (blanchissez-les 2–3 min auparavant s’ils sont très salés). Si vous le souhaitez, déglacez avec le vin blanc et réduisez à sec.
4. Cuisson. Préparez l’appareil : fouettez les œufs entiers et les jaunes d’œufs avec la crème liquide, le lait, la noix de muscade, le sel et le poivre.
5. Pâte à blanc 15 min. Faites cuire la pâte à blanc 15 min. Répartissez la garniture (oignon, lardons, côtes et feuilles), versez l’appareil et parsemez de fromage râpé.
6. Repos. Enfournez 40–50 min à 180 °C, jusqu’à ce que la migaine soit prise et le dessus doré. Laissez reposer 10 min avant de servir.

## Variantes machine

`traditionnelle` · `vegetarienne` · `vegan` · `pesco` · `ma_recette`
