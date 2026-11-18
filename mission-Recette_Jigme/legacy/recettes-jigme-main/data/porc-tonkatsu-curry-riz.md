---
schema: recette-web-jigme/v2
slug: porc-tonkatsu-curry-riz
title: Porc tonkatsu curry riz
lang: fr
description: "Porc tonkatsu curry riz : recette japonaise avec escalope de porc, oignon et carotte, pour 4 personnes. Version maison. Facile à suivre."
cuisine: japonaise
category: salé
tags:
- salé
- curry
- porc
- escalope de porc
image:
  url: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Web/porc-tonkatsu-curry-riz.webp
  alt: Porc tonkatsu curry riz
  credit: Jigmé Théaux
source_fiche: /Volumes/NAS HDD/MCP/Cuisine/Recettes/Archives/porc-tonkatsu-curry-riz.md
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
    - from: chapelure (panko)
      to: chapelure sans gluten
      note:
    - from: seitan ou tempeh
      to: tofu ferme
      note:
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
    already_ok: false
    impossible: true
    redirect_variant:
    clears:
    - poisson
    swaps: []
    note: 'Contient poisson (cabillaud) : pas d’adaptation fiable.'
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
    - from: seitan ou tempeh
      to: seitan
      note:
    - from: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      to: pois chiches rôtis
      note:
    note: 'Soja : seitan ou tempeh → seitan ; œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf)
      ou tofu soyeux → pois chiches rôtis.'
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
histoire: 'Tonkatsu : escalope de porc panée au panko, frite. Yōshoku (cuisine japonaise d’influence occidentale).
  On raconte que le restaurant Rengatei, à Ginza, servait des côtelettes de porc panées dès la fin du
  XIXe siècle ; le tonkatsu en tranches s’impose vers les années 1920-1930. Le curry japonais (karē) est
  un roux doux, servi avec du riz. Ensemble : katsu karē.

  '
fun_facts:
- text: >
    Le panko est plus gros que la chapelure française : ça cloisonne l’huile,
    la croûte reste sèche.
  source_name: Wikipedia, Tonkatsu
  source_url: https://en.wikipedia.org/wiki/Tonkatsu
- text: >
    La sauce tonkatsu, plus fruitée qu’un Worcester, n’est pas obligatoire dès
    qu’il y a du curry.
  source_name: Grokipedia, Tonkatsu sauce
  source_url: https://grokipedia.com/page/Tonkatsu_sauce
wines:
- name: Alsace Pinot Gris
  producer: Hugel
  origin: Riquewihr, Alsace
  grapes: pinot gris
  award:
  why: Poire — le curry doux et la panure, sans un rouge tannique.
- name: Alsace Riesling
  producer: Cave de Ribeauvillé
  origin: Ribeauvillé, Alsace
  grapes: riesling
  award:
  why: Agrume, légèrement sucré — le karē, acidité nette.
- name: Côtes du Rhône
  producer: E. Guigal
  origin: Ampuis, Rhône
  grapes: grenache, syrah
  award:
  why: Fruit, poivre — le porc frit, tanin court.
variants:
  traditionnelle:
    label: Traditionnelle
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets: []
    allergens:
    - gluten
    - oeuf
    difficulty: 2
    time: &id001
      prep_min: 40
      cook_min: 20
      rest_min: 0
      total_min: 60
    equipment: &id002
    - casserole
    - saladier
    - fouet
    - couteau
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: escalope de porc
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure (panko)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: curry (japonais)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale pour la cuisson
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois
      cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les.
    - Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans
      une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ
      à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes
      et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame
      d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez
      tout en laissant un peu d’eau dans casserole, cela servira à lier le curry.
    - Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout.
      Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter
      de la fleur de maïs. Laissez mijoter à feu doux en mélangeant de temps à autre.
    - Cuisson. Prenez vos escalopes de porc et commencez à faire quelques entailles régulières sur
      les bords de chaque escalope. Puis, avec le dos du couteau, venez attendrir chaque côté
      de la viande en tapant régulièrement dans le sens de découpe des entailles. Enfin, assaisonnez
      de chaque côté.
    - Cuisson. Pour réaliser une panure classique, commencez par plonger la viande dans de la farine
      (pensez à taper légèrement la viande pour enlever l’excédent de farine). Dans un récipient
      où vous avez au préalable cassé et fouetté plusieurs jaunes d’œufs, trempez-y ensuite
      l’escalope. Enfin, placez votre escalope dans un plat à chapelure. Pour cette recette,
      nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser
      de la chapelure classique si vous n’en avez pas.
    - Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à faire frire les escalopes.
      Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif
      pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle
      ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos escalopes
      une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur
      uniformisées. Dès que vos escalopes sont cuites, débarrassez-les dans un plat recouverts
      de papier absorbant pour retirer tout excédent d’huile.
    - Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez
      votre escalope de porc en tranches fines et placez-les au dessus du riz. Enfin, arrosez
      votre escalope de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il
      s’agit de ketchup ou de sauce tomate mélange à de la sauce soja, de la sauce huître
      et un peu de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu
      de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes
      et à accompagner avec une petite salade de choux. 頂きます !
    steps_niveaux:
      amateur:
      - "Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les."
      - "Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez tout en laissant un peu d’eau dans casserole, cela servira à lier le curry."
      - "Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout. Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter de la fleur de maïs. [[mijoter|Laissez mijoter]] à feu doux en mélangeant de temps à autre."
      - "Cuisson. Prenez vos escalopes de porc et commencez à faire quelques entailles régulières sur les bords de chaque escalope. Puis, avec le dos du couteau, venez attendrir chaque côté de la viande en tapant régulièrement dans le sens de découpe des entailles. Enfin, assaisonnez de chaque côté."
      - "Cuisson. Pour réaliser une panure classique, commencez par plonger la viande dans de la farine (pensez à taper légèrement la viande pour enlever l’excédent de farine). Dans un récipient où vous avez au préalable cassé et fouetté plusieurs jaunes d’œufs, trempez-y ensuite l’escalope. Enfin, placez votre escalope dans un plat à chapelure. Pour cette recette, nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser de la chapelure classique si vous n’en avez pas."
      - "Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à [[frire|faire frire]] les escalopes. Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos escalopes une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur uniformisées. Dès que vos escalopes sont cuites, débarrassez-les dans un plat recouverts de papier absorbant pour retirer tout excédent d’huile."
      - "Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez votre escalope de porc en tranches fines et placez-les au dessus du riz. Enfin, arrosez votre escalope de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il s’agit de ketchup ou de sauce tomate mélange à de la sauce soja, de la sauce huître et un peu de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes et à accompagner avec une petite salade de choux. 頂きます !"
      pro:
      - "Couper les oignons. Chauffer une casserole d’huile végétale. Ajouter les oignons. Revenir. Réserver."
      - "Éplucher et couper grossièrement carottes et pommes de terre. Départ à froid : casserole d’eau froide ou à température ambiante. Cuire jusqu’à lame de couteau sans résistance. Égoutter en laissant un peu d’eau dans la casserole, pour lier le curry."
      - "Ajouter les oignons et le curry (japonais si possible). Mélanger. Option : fleur de maïs pour épaissir. Mijoter à feu doux, mélanger de temps à autre."
      - "Entailler régulièrement les bords des escalopes de porc. Attendrir au dos du couteau, dans le sens des entailles. Assaisonner chaque côté."
      - "Panure : farine, tapoter l’excédent ; jaunes d’œufs fouettés ; chapelure (Panko, ou chapelure classique)."
      - "Chauffer une grande casserole d’huile. Ne pas trop remplir. Huile chaude : plonger les escalopes une à une à la pince, retourner pour cuisson et couleur uniformes. Débarrasser sur papier absorbant."
      - "Dresser riz blanc, curry. Trancher l’escalope de porc, poser sur le riz. Arroser de sauce Tonkatsu (ketchup ou sauce tomate, sauce soja, sauce huître, un peu de sucre). Option : ciboulette, autres légumes, salade de choux. 頂きます !"
      cavernes:
      - "Oignons, couper. Casserole, huile végétale, chauffer. Chaude, oignons, ajouter. Revenus, réserver."
      - "Cuisson. Carottes, pommes de terre, éplucher, couper grossièrement. Casserole, eau froide ou température ambiante, départ froid. Cuisson, vérifier. Lame couteau, zéro résistance : cuit. Égoutter, peu eau rester casserole. Lier curry."
      - "Mélange. Oignons, curry, si possible japonais, ajouter. Mélanger. Texture plus épaisse : fleur maïs, option. Feu doux, mijoter. Mélanger de temps à autre."
      - "Cuisson. Escalopes porc, bords, entailles régulières. Dos couteau, attendrir, sens découpe entailles. Chaque côté, assaisonner."
      - "Cuisson. Panure classique. Viande, farine, plonger. Tapoter, excédent farine dehors. Jaunes œufs, casser, fouetter. Escalope, tremper. Plat chapelure. Panko, chapelure japonaise, ou chapelure classique."
      - "Cuisson. Grande casserole, huile, chauffer. Frire escalopes. Huile dangereuse. Casserole, pas trop remplir. Huile chaude, pince, escalopes 1 par 1, plonger. Retourner. Cuisson, couleur, uniformes. Cuit, plat papier absorbant, débarrasser. Excédent huile, retirer."
      - "Finition. Riz blanc, curry, dresser. Escalope porc, tranches fines, dessus riz. Sauce Tonkatsu, arroser. Ketchup ou sauce tomate, sauce soja, sauce huître, peu sucre. Ciboulette, hacher, option. Autres légumes, salade choux, option. 頂きます !"
    kcal_per_serving: 452
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
    - gluten
    - oeuf
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure (panko)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: curry (japonais)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale pour la cuisson
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois
      cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les.
    - Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans
      une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ
      à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes
      et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame
      d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez
      tout en laissant un peu d’eau dans casserole, cela servira à lier le curry.
    - Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout.
      Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter
      de la fleur de maïs. Laissez mijoter à feu doux en mélangeant de temps à autre.
    - Cuisson. Aplatissez légèrement les tranches de seitan (ou de tempeh) et assaisonnez-les de chaque côté.
    - Cuisson. Pour réaliser une panure classique, commencez par plonger le seitan dans de la farine (tapotez pour enlever l’excédent). Trempez-le ensuite dans les œufs battus, puis dans la chapelure. Pour cette recette,
      nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser
      de la chapelure classique si vous n’en avez pas.
    - Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à faire frire le seitan (ou le tempeh).
      Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif
      pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle
      ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos morceaux de seitan
      une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur
      uniformisées. Dès que vos morceaux sont cuits, débarrassez-les dans un plat recouverts
      de papier absorbant pour retirer tout excédent d’huile.
    - Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez
      votre seitan ou tempeh en tranches fines et placez-les au dessus du riz. Enfin, arrosez
      le seitan de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il
      s’agit de ketchup ou de sauce tomate mélange à de la sauce soja, de la sauce aux champignons (type sauce huître végétale) et un peu de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu
      de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes
      et à accompagner avec une petite salade de choux. 頂きます !
    steps_niveaux:
      amateur:
      - "Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les."
      - "Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez tout en laissant un peu d’eau dans casserole, cela servira à lier le curry."
      - "Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout. Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter de la fleur de maïs. [[mijoter|Laissez mijoter]] à feu doux en mélangeant de temps à autre."
      - "Cuisson. Aplatissez légèrement les tranches de seitan (ou de tempeh) et assaisonnez-les de chaque côté."
      - "Cuisson. Pour réaliser une panure classique, commencez par plonger le seitan dans de la farine (tapotez pour enlever l’excédent). Trempez-le ensuite dans les œufs battus, puis dans la chapelure. Pour cette recette, nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser de la chapelure classique si vous n’en avez pas."
      - "Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à [[frire|faire frire]] le seitan (ou le tempeh). Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos morceaux de seitan une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur uniformisées. Dès que vos morceaux sont cuits, débarrassez-les dans un plat recouverts de papier absorbant pour retirer tout excédent d’huile."
      - "Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez votre seitan ou tempeh en tranches fines et placez-les au dessus du riz. Enfin, arrosez le seitan de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il s’agit de ketchup ou de sauce tomate mélange à de la sauce soja, de la sauce aux champignons (type sauce huître végétale) et un peu de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes et à accompagner avec une petite salade de choux. 頂きます !"
      pro:
      - "Couper les oignons. Chauffer une casserole d’huile végétale. Ajouter les oignons. Revenir. Réserver."
      - "Éplucher et couper grossièrement carottes et pommes de terre. Départ à froid : casserole d’eau froide ou à température ambiante. Cuire jusqu’à lame de couteau sans résistance. Égoutter en laissant un peu d’eau dans la casserole, pour lier le curry."
      - "Ajouter les oignons et le curry (japonais si possible). Mélanger. Option : fleur de maïs pour épaissir. Mijoter à feu doux, mélanger de temps à autre."
      - "Aplatir légèrement les tranches de seitan (ou de tempeh). Assaisonner chaque côté."
      - "Panure : farine, tapoter l’excédent ; œufs battus ; chapelure (Panko, ou chapelure classique)."
      - "Chauffer une grande casserole d’huile. Ne pas trop remplir. Huile chaude : plonger les morceaux de seitan (ou tempeh) un à un à la pince, retourner pour cuisson et couleur uniformes. Débarrasser sur papier absorbant."
      - "Dresser riz blanc, curry. Trancher seitan ou tempeh, poser sur le riz. Arroser de sauce Tonkatsu (ketchup ou sauce tomate, sauce soja, sauce aux champignons type huître végétale, un peu de sucre). Option : ciboulette, autres légumes, salade de choux. 頂きます !"
      cavernes:
      - "Oignons, couper. Casserole, huile végétale, chauffer. Chaude, oignons, ajouter. Revenus, réserver."
      - "Cuisson. Carottes, pommes de terre, éplucher, couper grossièrement. Casserole, eau froide ou température ambiante, départ froid. Cuisson, vérifier. Lame couteau, zéro résistance : cuit. Égoutter, peu eau rester casserole. Lier curry."
      - "Mélange. Oignons, curry, si possible japonais, ajouter. Mélanger. Texture plus épaisse : fleur maïs, option. Feu doux, mijoter. Mélanger de temps à autre."
      - "Cuisson. Tranches seitan ou tempeh, aplatir légèrement. Chaque côté, assaisonner."
      - "Cuisson. Panure classique. Seitan, farine, plonger. Tapoter, excédent dehors. Œufs battus, tremper. Chapelure. Panko, chapelure japonaise, ou chapelure classique."
      - "Cuisson. Grande casserole, huile, chauffer. Frire seitan ou tempeh. Huile dangereuse. Casserole, pas trop remplir. Huile chaude, pince, morceaux seitan 1 par 1, plonger. Retourner. Cuisson, couleur, uniformes. Cuit, plat papier absorbant, débarrasser. Excédent huile, retirer."
      - "Finition. Riz blanc, curry, dresser. Seitan ou tempeh, tranches fines, dessus riz. Seitan, sauce Tonkatsu, arroser. Ketchup ou sauce tomate, sauce soja, sauce champignons type huître végétale, peu sucre. Ciboulette, hacher, option. Autres légumes, salade choux, option. 頂きます !"
    kcal_per_serving: 520
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
    - gluten
    - soja
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: seitan ou tempeh
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf de lin (1 c.à.s. lin + 3 c.à.s. eau / œuf) ou tofu soyeux
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure (panko)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: curry (japonais)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale pour la cuisson
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois
      cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les.
    - Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans
      une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ
      à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes
      et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame
      d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez
      tout en laissant un peu d’eau dans casserole, cela servira à lier le curry.
    - Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout.
      Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter
      de la fleur de maïs. Laissez mijoter à feu doux en mélangeant de temps à autre.
    - Cuisson. Prenez les tranches de seitan ou de tempeh, assaisonnez chaque côté.
    - Cuisson. Pour réaliser une panure classique, plongez le seitan dans la farine (tapotez l’excédent). Trempez ensuite dans l’œuf de lin (ou le tofu soyeux battu). Enfin, placez votre
      escalope dans un plat à chapelure. Pour cette recette, nous utilisons du Panko qui est
      de la chapelure japonaise. Mais vous pouvez utiliser de la chapelure classique si vous
      n’en avez pas.
    - Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à faire frire les escalopes.
      Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif
      pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle
      ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos escalopes
      une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur
      uniformisées. Dès que vos escalopes sont cuites, débarrassez-les dans un plat recouverts
      de papier absorbant pour retirer tout excédent d’huile.
    - Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez
      votre seitan ou tempeh en tranches fines et placez-les au dessus du riz. Enfin, arrosez
      votre escalope de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il
      s’agit de ketchup ou de sauce tomate mélange à de la sauce soja et un peu de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu
      de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes
      et à accompagner avec une petite salade de choux. 頂きます !
    steps_niveaux:
      amateur:
      - "Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les."
      - "Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez tout en laissant un peu d’eau dans casserole, cela servira à lier le curry."
      - "Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout. Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter de la fleur de maïs. [[mijoter|Laissez mijoter]] à feu doux en mélangeant de temps à autre."
      - "Cuisson. Prenez les tranches de seitan ou de tempeh, assaisonnez chaque côté."
      - "Cuisson. Pour réaliser une panure classique, plongez le seitan dans la farine (tapotez l’excédent). Trempez ensuite dans l’œuf de lin (ou le tofu soyeux battu). Enfin, placez votre escalope dans un plat à chapelure. Pour cette recette, nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser de la chapelure classique si vous n’en avez pas."
      - "Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à [[frire|faire frire]] les escalopes. Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos escalopes une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur uniformisées. Dès que vos escalopes sont cuites, débarrassez-les dans un plat recouverts de papier absorbant pour retirer tout excédent d’huile."
      - "Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez votre seitan ou tempeh en tranches fines et placez-les au dessus du riz. Enfin, arrosez votre escalope de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il s’agit de ketchup ou de sauce tomate mélange à de la sauce soja et un peu de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes et à accompagner avec une petite salade de choux. 頂きます !"
      pro:
      - "Couper les oignons. Chauffer une casserole d’huile végétale. Ajouter les oignons. Revenir. Réserver."
      - "Éplucher et couper grossièrement carottes et pommes de terre. Départ à froid : casserole d’eau froide ou à température ambiante. Cuire jusqu’à lame de couteau sans résistance. Égoutter en laissant un peu d’eau dans la casserole, pour lier le curry."
      - "Ajouter les oignons et le curry (japonais si possible). Mélanger. Option : fleur de maïs pour épaissir. Mijoter à feu doux, mélanger de temps à autre."
      - "Prendre les tranches de seitan ou de tempeh. Assaisonner chaque côté."
      - "Panure : farine, tapoter l’excédent ; œuf de lin (ou tofu soyeux battu) ; chapelure (Panko, ou chapelure classique)."
      - "Chauffer une grande casserole d’huile. Ne pas trop remplir. Huile chaude : plonger les escalopes une à une à la pince, retourner pour cuisson et couleur uniformes. Débarrasser sur papier absorbant."
      - "Dresser riz blanc, curry. Trancher seitan ou tempeh, poser sur le riz. Arroser de sauce Tonkatsu (ketchup ou sauce tomate, sauce soja, un peu de sucre). Option : ciboulette, autres légumes, salade de choux. 頂きます !"
      cavernes:
      - "Oignons, couper. Casserole, huile végétale, chauffer. Chaude, oignons, ajouter. Revenus, réserver."
      - "Cuisson. Carottes, pommes de terre, éplucher, couper grossièrement. Casserole, eau froide ou température ambiante, départ froid. Cuisson, vérifier. Lame couteau, zéro résistance : cuit. Égoutter, peu eau rester casserole. Lier curry."
      - "Mélange. Oignons, curry, si possible japonais, ajouter. Mélanger. Texture plus épaisse : fleur maïs, option. Feu doux, mijoter. Mélanger de temps à autre."
      - "Cuisson. Tranches seitan ou tempeh. Chaque côté, assaisonner."
      - "Cuisson. Panure classique. Seitan, farine, plonger. Tapoter, excédent dehors. Œuf lin, ou tofu soyeux battu, tremper. Escalope, plat chapelure. Panko, chapelure japonaise, ou chapelure classique."
      - "Cuisson. Grande casserole, huile, chauffer. Frire escalopes. Huile dangereuse. Casserole, pas trop remplir. Huile chaude, pince, escalopes 1 par 1, plonger. Retourner. Cuisson, couleur, uniformes. Cuit, plat papier absorbant, débarrasser. Excédent huile, retirer."
      - "Finition. Riz blanc, curry, dresser. Seitan ou tempeh, tranches fines, dessus riz. Escalope, sauce Tonkatsu, arroser. Ketchup ou sauce tomate, sauce soja, peu sucre. Ciboulette, hacher, option. Autres légumes, salade choux, option. 頂きます !"
    kcal_per_serving: 520
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
  pesco:
    label: Pesco
    inherit:
    servings_base: 4
    servings_unit: personnes
    diets:
    - pesco
    allergens:
    - gluten
    - oeuf
    - poisson
    difficulty: 2
    time: *id001
    equipment: *id002
    substitutions: []
    scale_note:
    ingredients:
    - qty: 4
      unit: piece
      item: cabillaud
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 1
      unit: piece
      item: oignon
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: carotte
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: pomme de terre
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 100
      unit: g
      item: farine
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 2
      unit: piece
      item: œuf
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 120
      unit: g
      item: chapelure (panko)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 40
      unit: g
      item: curry (japonais)
      group:
      scale: true
      optional: false
      to_taste: false
    - qty: 200
      unit: g
      item: riz
      group:
      scale: true
      optional: false
      to_taste: false
    - qty:
      unit:
      item: huile végétale pour la cuisson
      group:
      scale: false
      optional: false
      to_taste: true
    steps:
    - Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois
      cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les.
    - Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans
      une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ
      à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes
      et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame
      d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez
      tout en laissant un peu d’eau dans casserole, cela servira à lier le curry.
    - Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout.
      Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter
      de la fleur de maïs. Laissez mijoter à feu doux en mélangeant de temps à autre.
    - Cuisson. Prenez vos escalopes de porc et commencez à faire quelques entailles régulières sur
      les bords de chaque escalope. Puis, avec le dos du couteau, venez attendrir chaque côté
      de la viande en tapant régulièrement dans le sens de découpe des entailles. Enfin, assaisonnez
      de chaque côté.
    - Cuisson. Pour réaliser une panure classique, commencez par plonger la viande dans de la farine
      (pensez à taper légèrement la viande pour enlever l’excédent de farine). Dans un récipient
      où vous avez au préalable cassé et fouetté plusieurs jaunes d’œufs, trempez-y ensuite
      l’escalope. Enfin, placez votre escalope dans un plat à chapelure. Pour cette recette,
      nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser
      de la chapelure classique si vous n’en avez pas.
    - Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à faire frire les escalopes.
      Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif
      pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle
      ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos escalopes
      une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur
      uniformisées. Dès que vos escalopes sont cuites, débarrassez-les dans un plat recouverts
      de papier absorbant pour retirer tout excédent d’huile.
    - Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez
      votre cabillaud en tranches fines et placez-les au dessus du riz. Enfin, arrosez votre
      escalope de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il s’agit
      de ketchup ou de sauce tomate mélange à de la sauce soja, de la sauce huître et un peu
      de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu de couleurs
      à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes et à accompagner
      avec une petite salade de choux. 頂きます !
    steps_niveaux:
      amateur:
      - "Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les."
      - "Cuisson. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez tout en laissant un peu d’eau dans casserole, cela servira à lier le curry."
      - "Mélange. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout. Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter de la fleur de maïs. [[mijoter|Laissez mijoter]] à feu doux en mélangeant de temps à autre."
      - "Cuisson. Prenez vos escalopes de porc et commencez à faire quelques entailles régulières sur les bords de chaque escalope. Puis, avec le dos du couteau, venez attendrir chaque côté de la viande en tapant régulièrement dans le sens de découpe des entailles. Enfin, assaisonnez de chaque côté."
      - "Cuisson. Pour réaliser une panure classique, commencez par plonger la viande dans de la farine (pensez à taper légèrement la viande pour enlever l’excédent de farine). Dans un récipient où vous avez au préalable cassé et fouetté plusieurs jaunes d’œufs, trempez-y ensuite l’escalope. Enfin, placez votre escalope dans un plat à chapelure. Pour cette recette, nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser de la chapelure classique si vous n’en avez pas."
      - "Cuisson. Faites chauffer une grande casserole remplie d’huile qui servira à [[frire|faire frire]] les escalopes. Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos escalopes une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur uniformisées. Dès que vos escalopes sont cuites, débarrassez-les dans un plat recouverts de papier absorbant pour retirer tout excédent d’huile."
      - "Finition. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez votre cabillaud en tranches fines et placez-les au dessus du riz. Enfin, arrosez votre escalope de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il s’agit de ketchup ou de sauce tomate mélange à de la sauce soja, de la sauce huître et un peu de sucre. Vous pouvez hacher finement de la ciboulette pour donner un peu de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes et à accompagner avec une petite salade de choux. 頂きます !"
      pro:
      - "Couper les oignons. Chauffer une casserole d’huile végétale. Ajouter les oignons. Revenir. Réserver."
      - "Éplucher et couper grossièrement carottes et pommes de terre. Départ à froid : casserole d’eau froide ou à température ambiante. Cuire jusqu’à lame de couteau sans résistance. Égoutter en laissant un peu d’eau dans la casserole, pour lier le curry."
      - "Ajouter les oignons et le curry (japonais si possible). Mélanger. Option : fleur de maïs pour épaissir. Mijoter à feu doux, mélanger de temps à autre."
      - "Entailler régulièrement les bords des escalopes de porc. Attendrir au dos du couteau, dans le sens des entailles. Assaisonner chaque côté."
      - "Panure : farine, tapoter l’excédent ; jaunes d’œufs fouettés ; chapelure (Panko, ou chapelure classique)."
      - "Chauffer une grande casserole d’huile. Ne pas trop remplir. Huile chaude : plonger les escalopes une à une à la pince, retourner pour cuisson et couleur uniformes. Débarrasser sur papier absorbant."
      - "Dresser riz blanc, curry. Trancher le cabillaud, poser sur le riz. Arroser l’escalope de sauce Tonkatsu (ketchup ou sauce tomate, sauce soja, sauce huître, un peu de sucre). Option : ciboulette, autres légumes, salade de choux. 頂きます !"
      cavernes:
      - "Oignons, couper. Casserole, huile végétale, chauffer. Chaude, oignons, ajouter. Revenus, réserver."
      - "Cuisson. Carottes, pommes de terre, éplucher, couper grossièrement. Casserole, eau froide ou température ambiante, départ froid. Cuisson, vérifier. Lame couteau, zéro résistance : cuit. Égoutter, peu eau rester casserole. Lier curry."
      - "Mélange. Oignons, curry, si possible japonais, ajouter. Mélanger. Texture plus épaisse : fleur maïs, option. Feu doux, mijoter. Mélanger de temps à autre."
      - "Cuisson. Escalopes porc, bords, entailles régulières. Dos couteau, attendrir, sens découpe entailles. Chaque côté, assaisonner."
      - "Cuisson. Panure classique. Viande, farine, plonger. Tapoter, excédent farine dehors. Jaunes œufs, casser, fouetter. Escalope, tremper. Plat chapelure. Panko, chapelure japonaise, ou chapelure classique."
      - "Cuisson. Grande casserole, huile, chauffer. Frire escalopes. Huile dangereuse. Casserole, pas trop remplir. Huile chaude, pince, escalopes 1 par 1, plonger. Retourner. Cuisson, couleur, uniformes. Cuit, plat papier absorbant, débarrasser. Excédent huile, retirer."
      - "Finition. Riz blanc, curry, dresser. Cabillaud, tranches fines, dessus riz. Escalope, sauce Tonkatsu, arroser. Ketchup ou sauce tomate, sauce soja, sauce huître, peu sucre. Ciboulette, hacher, option. Autres légumes, salade choux, option. 頂きます !"
    kcal_per_serving: 452
    kcal_source: ciqual_2020_estime
    kcal_note: Estimation Table Ciqual 2020 (Anses), kcal pour 100 g de partie comestible.
      Par personne (servings_base). Cuisson et huile absorbée non mesurées.
lexique_local:
  traditionnelle:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegetarienne:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  vegan:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
  pesco:
    mijoter:
      terme: "mijoter"
      explication: "Vous baissez le feu. Le liquide frémit à peine : quelques bulles, pas une ébullition vive. Souvent vous couvrez. Les aliments cuisent dans ce liquide chaud ; le but n’est pas de faire baisser le niveau. C’est réussi quand c’est cuit ou bien chaud, selon la recette, et que ça n’attache pas."
      ref: Cuisine/Lexique/mijoter.md
    frire:
      terme: "frire"
      explication: "Vous plongez l’aliment dans la matière grasse chaude, ou vous le faites dorer dans une poêle avec assez de gras. Vous le retournez pour une couleur uniforme. C’est réussi quand c’est doré et croustillant, selon la recette."
      ref: Cuisine/Lexique/frire.md
nutrition_display:
  kcal_per_serving: true
  per: personne
  never_total_platter: true
  source: ciqual_2020_estime
conservation:
  frigo: {duree: "24 h", contenant: "boîte hermétique", note: "Refroidir vite, ne pas laisser tiédir longtemps."}
  congelation: {possible: true, duree: "1 mois", decongelation: "une nuit au frigo", note: ""}
  temperature_ambiante: {duree: "", note: ""}
  rechauffage: "Réchauffer à cœur (au moins 70 °C)."
  restes: []
  anti_gaspi: []
  a_verifier: true
  note_verif: "riz cuit (Bacillus cereus si refroidissement lent)"
---

# Porc tonkatsu curry riz

![[porc-tonkatsu-curry-riz.webp]]
Fiche **Web** (Grok Bot). Source de vérité = YAML ci-dessus. Ci-dessous : version **traditionnelle** lisible, 4 personnes.

**Catégorie :** salé
**Photo :** `aucune`
**Archive brute :** [[Cuisine/Recettes/Archives/porc-tonkatsu-curry-riz]]

## Ingrédients (4 personnes)

- 4 escalope de porc
- 1 oignon
- 2 carotte
- 2 pomme de terre
- 100 g de farine
- 2 œuf
- 120 g de chapelure (panko)
- 40 g de curry (japonais)
- 200 g de riz
-  huile végétale pour la cuisson

## Préparation

1. Coupez les oignons. Faites chauffer une casserole avec de l’huile végétale. Une fois cette dernière chaude, ajoutez-y les oignons. Une fois les oignons revenus, réservez-les.
2. Épluchez et coupez grossièrement les carottes et les pommes de terre. Mettez les dans une casserole d’eau froide ou à température ambiante et démarrer la cuisson. Un « départ à froid » est mieux pour ce type de légumes. Pensez à vérifiez la cuisson de vos carottes et de vos pommes de terre. Si vous ne ressentez aucune résistance en plantant la lame d’un couteau, c’est que vos ingrédients sont cuits. Dès qu’ils sont cuits, égouttez tout en laissant un peu d’eau dans casserole, cela servira à lier le curry.
3. Ajoutez-y ensuite vos oignons et le curry (si possible japonais). Mélangez le tout. Si vous souhaitez une texture plus épaisse pour votre sauce, n’hésitez pas à rajouter de la fleur de maïs. Laissez mijoter à feu doux en mélangeant de temps à autre.
4. Prenez vos escalopes de porc et commencez à faire quelques entailles régulières sur les bords de chaque escalope. Puis, avec le dos du couteau, venez attendrir chaque côté de la viande en tapant régulièrement dans le sens de découpe des entailles. Enfin, assaisonnez de chaque côté.
5. Pour réaliser une panure classique, commencez par plonger la viande dans de la farine (pensez à taper légèrement la viande pour enlever l’excédent de farine). Dans un récipient où vous avez au préalable cassé et fouetté plusieurs jaunes d’œufs, trempez-y ensuite l’escalope. Enfin, placez votre escalope dans un plat à chapelure. Pour cette recette, nous utilisons du Panko qui est de la chapelure japonaise. Mais vous pouvez utiliser de la chapelure classique si vous n’en avez pas.
6. Faites chauffer une grande casserole remplie d’huile qui servira à faire frire les escalopes. Pensez à faire attention, l’huile est dangereuse en cuisine, veillez à rester attentif pour éviter toute brûlure et à ne pas trop remplir la casserole afin d’éviter qu’elle ne déborde. Dès que l’huile est chaude, à l’aide d’une pince, plongez vos escalopes une par une en les retournant bien dans l’huile afin d’obtenir une cuisson et couleur uniformisées. Dès que vos escalopes sont cuites, débarrassez-les dans un plat recouverts de papier absorbant pour retirer tout excédent d’huile.
7. Commencez à dresser en mettant du riz blanc, puis votre préparation au curry. Coupez votre escalope de porc en tranches fines et placez-les au dessus du riz. Enfin, arrosez votre escalope de sauce Tonkatsu. C’est une sauce que vous pouvez faire vous même, il s’agit de ketchup ou de sauce tomate mélange à de la sauce soja, de la sauce huître et un peu de sucre.

 
 

 
 Vous pouvez hacher finement de la ciboulette pour donner un peu de couleurs à votre plat. N’hésitez pas à tenter avec un curry avec d’autres légumes et à accompagner avec une petite salade de choux. 頂きます !
