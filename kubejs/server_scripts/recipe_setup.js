// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes((event) => {
  event.remove({ output: "quark:crafter" });
  event.remove({ output: "tetranichematerials:lapis_powder" });
  event.remove({ output: "tetranichematerials:culuminum_powder" });
  event.remove({ output: "tetranichematerials:white_gold_powder" });
  event.remove({ output: "tetranichematerials:marel_powder" });
  event.remove({ output: "tetranichematerials:pulverized_coal" });

  crushingXPRecipe(
    event,
    "create:crushed_raw_copper",
    "tetranichematerials:copper_powder",
    300,
  );
  crushingXPRecipe(
    event,
    "create:crushed_raw_iron",
    "tetranichematerials:iron_powder",
    300,
  );
  crushingXPRecipe(
    event,
    "create:crushed_raw_gold",
    "tetranichematerials:gold_powder",
    300,
  );
  crushingXPRecipe(
    event,
    "minecraft:lapis_lazuli",
    "tetranichematerials:lapis_powder",
    150,
  );
  crushingXPRecipe(
    event,
    "minecraft:coal",
    "tetranichematerials:pulverized_coal",
    300,
  );

  crushingRecipe(
    event,
    "minecraft:copper_ingot",
    "tetranichematerials:copper_powder",
    500,
  );
  crushingRecipe(
    event,
    "minecraft:iron_ingot",
    "tetranichematerials:iron_powder",
    500,
  );
  crushingRecipe(
    event,
    "minecraft:gold_ingot",
    "tetranichematerials:gold_powder",
    500,
  );

  event.custom({
    type: "create:milling",
    ingredients: [
      {
        item: "immersive_weathering:earthen_clay",
      },
    ],
    processingTime: 250,
    results: [
      {
        item: "minecraft:clay_ball",
      },
      {
        chance: 0.75,
        item: "minecraft:dirt",
      },
    ],
  });

  event.custom({
    type: "create:splashing",
    ingredients: [
      {
        item: "immersive_weathering:earthen_clay",
      },
    ],
    results: [
      {
        count: 2,
        item: "minecraft:clay_ball",
      },
    ],
  });
});

function crushingRecipe(event, ingredient, result, time) {
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: ingredient,
      },
    ],
    results: [
      {
        item: result,
        count: 1,
      },
    ],
    processingTime: time,
  });
}

function crushingXPRecipe(event, ingredient, result, time) {
  event.custom({
    type: "create:crushing",
    ingredients: [
      {
        item: ingredient,
      },
    ],
    results: [
      {
        item: result,
        count: 1,
      },
      {
        item: "create:experience_nugget",
        count: 1,
        chance: 0.1,
      },
    ],
    processingTime: time,
  });
}
