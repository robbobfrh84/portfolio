const foodObj = [
  {
    id: 1,
    name: "Banana",
    url: "/food/banana_1f34c.png",
    units: 1,
    price: 0.25
  },
  {
    id: 2,
    name: "Blueberries",
    url: "/food/blueberries_1fad0.png",
    units: 3,
    price: 0.10
  },
  {
    id: 3,
    name: "A Piece of broccoli",
    url: "/food/broccoli_1f966.png",
    units: 1,
    price: 0.50
  },
  {
    id: 4,
    name: "Cherries",
    url: "/food/cherries_1f352.png",
    units: 2,
    price: 0.15
  },
  {
    id: 5,
    name: "Empty Nest",
    url: "/food/empty-nest_1fab9.png",
    unit: 1,
    price: "Free",
    note: "Must scavenge. Potentially no nutritional value.",
  },
  {
    id: 6,
    name: "You know, corn tortilla",
    url: "/food/flatbread_1fad3.png",
    units: 1,
    price: 0.70
  },
  {
    id: 7,
    name: "Green Apple",
    url: "/food/green-apple_1f34f.png",
    units: 1,
    price: 1.20
  },
  {
    id: 8,
    name: "Kiwi Fruit",
    url: "/food/kiwi-fruit_1f95d.png",
    units: 1,
    price: 1.00
  },
  {
    id: 9,
    name: "Lemon",
    url: "/food/lemon_1f34b.png",
    units: 1,
    price: 0.80
  },
  {
    id: 10,
    name: "Lime",
    url: "/food/lime_1f34b-200d-1f7e9.png",
    units: 1,
    price: 0.70
  },
  {
    id: 11,
    name: "Mango",
    url: "/food/mango_1f96d.png",
    units: 1,
    price: 2.00
  },
  {
    id: 12,
    name: "Melon",
    url: "/food/melon_1f348.png",
    units: 1,
    price: 4.00
  },
  {
    id: 13,
    name: "Robin Eggs",
    url: "/food/nest-with-eggs_1faba.png",
    units: 2,
    price: "Free",
    note: "Must scavenge.",
  },
  {
    id: 14,
    name: "Olive",
    url: "/food/olive_1fad2.png",
    units: 1,
    price: 0.50
  },
  {
    id: 15,
    name: "Peach",
    url: "/food/peach_1f351.png",
    units: 1,
    price: 1.50
  },
  {
    id: 16,
    name: "Pear",
    url: "/food/pear_1f350.png",
    units: 1,
    price: 1.50
  },
  {
    id: 17,
    name: "Pineapple",
    url: "/food/pineapple_1f34d.png",
    units: 1,
    price: 4.00
  },
  {
    id: 18,
    name: "A piece of chicken",
    url: "/food/poultry-leg_1f357.png",
    units: 1,
    price: 1.50
  },
  {
    id: 19,
    name: "Red Apple",
    url: "/food/red-apple_1f34e.png",
    units: 1,
    price: 1.20
  },
  {
    id: 20,
    name: "Sake",
    url: "/food/sake_1f376.png",
    units: 1,
    price: 6.00
  },
  {
    id: 21,
    name: "Sprout",
    url: "/food/seedling_1f331.png",
    units: 1,
    price: 0.05
  },
  {
    id: 22,
    name: "Strawberry",
    url: "/food/strawberry_1f353.png",
    units: 1,
    price: 0.50
  },
  {
    id: 23,
    name: "Tangerine",
    url: "/food/tangerine_1f34a.png",
    units: 1,
    price: 1.00
  },
  {
    id: 24,
    name: "Tomato",
    url: "/food/tomato_1f345.png",
    units: 1,
    price: 1.00
  },
  {
    id: 25,
    name: "Avocado",
    url: "/food/avocado_1f951.png",
    units: 1,
    price: 2.00
  },
  {
    id: 26,
    name: "Milk",
    url: "/food/baby-bottle_1f37c.png",
    units: 1,
    price: 3.00
  },
  {
    id: 27,
    name: "Bacon",
    url: "/food/bacon_1f953.png",
    units: 2,
    price: 0.75
  },
  {
    id: 28,
    name: "Bagel",
    url: "/food/bagel_1f96f.png",
    units: 1,
    price: 8.00
  },
  {
    id: 29,
    name: "Baguette Bread",
    url: "/food/baguette-bread_1f956.png",
    units: 1,
    price: 3.00
  },
  {
    id: 30,
    name: "Bell Pepper",
    url: "/food/bell-pepper_1fad1.png",
    units: 1,
    price: 1.50
  },
  {
    id: 31,
    name: "Bento Box",
    url: "/food/bento-box_1f371.png",
    units: 1,
    price: 8.00
  },
  {
    id: 32,
    name: "Beverage Box",
    url: "/food/beverage-box_1f9c3.png",
    units: 1,
    price: 1.00
  },
  {
    id: 33,
    name: "Blowfish",
    url: "/food/blowfish_1f421.png",
    units: 1,
    price: 12.00
  },
  {
    id: 34,
    name: "Bread",
    url: "/food/bread_1f35e.png",
    units: 1,
    price: 3.00
  },
  {
    id: 35,
    name: "Brown Mushroom",
    url: "/food/brown-mushroom_1f344-200d-1f7eb.png",
    units: 1,
    price: 0.30
  },
  {
    id: 36,
    name: "Bubble Tea",
    url: "/food/bubble-tea_1f9cb.png",
    units: 1,
    price: 7.00
  },
  {
    id: 37,
    name: "Burrito",
    url: "/food/burrito_1f32f.png",
    units: 1,
    price: 7.00
  },
  {
    id: 38,
    name: "Butter",
    url: "/food/butter_1f9c8.png",
    units: 1,
    price: 1.50
  },
  {
    id: 39,
    name: "Candy",
    url: "/food/candy_1f36c.png",
    units: 1,
    price: 1.00
  },
  {
    id: 40,
    name: "Canned Food",
    url: "/food/canned-food_1f96b.png",
    units: 1,
    price: 2.50
  },
  {
    id: 41,
    name: "Carrot",
    url: "/food/carrot_1f955.png",
    units: 1,
    price: 0.40
  },
  {
    id: 42,
    name: "Cheese Wedge",
    url: "/food/cheese-wedge_1f9c0.png",
    units: 1,
    price: 4.00
  },
  {
    id: 43,
    name: "Chestnut",
    url: "/food/chestnut_1f330.png",
    units: 1,
    price: 0.25
  },
  {
    id: 44,
    name: "Chocolate Bar",
    url: "/food/chocolate-bar_1f36b.png",
    units: 1,
    price: 3.00
  },
  {
    id: 45,
    name: "Coconut",
    url: "/food/coconut_1f965.png",
    units: 1,
    price: 2.00
  },
  {
    id: 46,
    name: "Cooked Rice",
    url: "/food/cooked-rice_1f35a.png",
    units: 1,
    price: 2.00
  },
  {
    id: 47,
    name: "Cookie",
    url: "/food/cookie_1f36a.png",
    units: 1,
    price: 1.00
  },
  {
    id: 48,
    name: "Crab",
    url: "/food/crab_1f980.png",
    units: 1,
    price: 10.00
  },
  {
    id: 49,
    name: "Beans",
    url: "/food/beans_1fad8.png",
    units: 3,
    price: 0.05
  },
  {
    id: 50,
    name: "Croissant",
    url: "/food/croissant_1f950.png",
    units: 1,
    price: 4.00
  },
  {
    id: 51,
    name: "Cucumber",
    url: "/food/cucumber_1f952.png",
    units: 1,
    price: 1.00
  },
  {
    id: 52,
    name: "Sell Kidney",
    url: "/food/kidney.svg",
    unit: 1,
    price: -100
  },
  {
    id: 53,
    name: "Cupcake",
    url: "/food/cupcake_1f9c1.png",
    units: 1,
    price: 3.00
  },
  {
    id: 54,
    name: "Curry Rice",
    url: "/food/curry-rice_1f35b.png",
    units: 1,
    price: 6.00
  },
  {
    id: 55,
    name: "Cut of Meat",
    url: "/food/cut-of-meat_1f969.png",
    units: 1,
    price: 8.00
  },
  {
    id: 56,
    name: "Dodo",
    url: "/food/dodo_1f9a4.png",
    unit: 1,
    price: "?",
    note: "Out of stock.",
    unAvailable: true,
  },
  {
    id: 57,
    name: "Water",
    url: "/food/droplet_1f4a7.png",
    units: 1,
    price: 1.00
  },
  {
    id: 58,
    name: "Dumpling",
    url: "/food/dumpling_1f95f.png",
    units: 1,
    price: 4.00
  },
  {
    id: 59,
    name: "Ear of Corn",
    url: "/food/ear-of-corn_1f33d.png",
    units: 1,
    price: 2.00
  },
  {
    id: 60,
    name: "Egg",
    url: "/food/egg_1f95a.png",
    units: 1,
    price: 0.75
  },
  {
    id: 61,
    name: "Eggplant",
    url: "/food/eggplant_1f346.png",
    units: 1,
    price: 2.00
  },
  {
    id: 62,
    name: "Falafel",
    url: "/food/falafel_1f9c6.png",
    units: 1,
    price: 5.00
  },
  {
    id: 63,
    name: "Fish Cake With Swirl",
    url: "/food/fish-cake-with-swirl_1f365.png",
    units: 1,
    price: 4.00
  },
  {
    id: 64,
    name: "Fish",
    url: "/food/fish_1f41f.png",
    units: 1,
    price: 8.00
  },
  {
    id: 66,
    name: "Fortune Cookie",
    url: "/food/fortune-cookie_1f960.png",
    units: 1,
    price: "Free"
  },
  {
    id: 67,
    name: "French Fries",
    url: "/food/french-fries_1f35f.png",
    units: 1,
    price: 4.00
  },
  {
    id: 68,
    name: "Fried Shrimp",
    url: "/food/fried-shrimp_1f364.png",
    units: 1,
    price: 1.00
  },
  {
    id: 69,
    name: "Garlic",
    url: "/food/garlic_1f9c4.png",
    units: 1,
    price: 1.00
  },
  {
    id: 70,
    name: "Ginger Root",
    url: "/food/ginger-root_1fada.png",
    units: 1,
    price: 1.00
  },
  {
    id: 71,
    name: "Lamb 1 lb",
    url: "/food/goat_1f410.png",
    units: 1,
    price: 5.00
  },
  {
    id: 72,
    name: "Goose Meat 1 lb",
    url: "/food/goose_1fabf.png",
    units: 1,
    price: 12.00
  },
  {
    id: 73,
    name: "Green Salad",
    url: "/food/green-salad_1f957.png",
    units: 1,
    price: 5.00
  },
  {
    id: 74,
    name: "Hamburger",
    url: "/food/hamburger_1f354.png",
    units: 1,
    price: 7.00
  },
  {
    id: 75,
    name: "Honey 1 teaspoon",
    url: "/food/honey-pot_1f36f.png",
    units: 1,
    price: 0.50
  },
  {
    id: 76,
    name: "Hot Dog",
    url: "/food/hot-dog_1f32d.png",
    units: 1,
    price: 4.00
  },
  {
    id: 77,
    name: "Hot Pepper",
    url: "/food/hot-pepper_1f336-fe0f.png",
    units: 1,
    price: 1.00
  },
  {
    id: 78,
    name: "Ice 1 lb",
    url: "/food/ice_1f9ca.png",
    units: 1,
    price: 1.00
  },
  {
    id: 79,
    name: "Leafy Green",
    url: "/food/leafy-green_1f96c.png",
    units: 1,
    price: 3.00
  },
  {
    id: 80,
    name: "Lobster",
    url: "/food/lobster_1f99e.png",
    units: 1,
    price: 18.00
  },
  {
    id: 81,
    name: "Lollipop",
    url: "/food/lollipop_1f36d.png",
    units: 1,
    price: 2.00
  },
  {
    id: 82,
    name: "Meat On Bone",
    url: "/food/meat-on-bone_1f356.png",
    units: 1,
    price: 8.00
  },
  {
    id: 83,
    name: "Octopus",
    url: "/food/octopus_1f419.png",
    units: 1,
    price: 15.00
  },
  {
    id: 84,
    name: "Oden",
    url: "/food/oden_1f362.png",
    units: 1,
    price: 7.00
  },
  {
    id: 85,
    name: "Onion",
    url: "/food/onion_1f9c5.png",
    units: 1,
    price: 1.00
  },
  {
    id: 86,
    name: "Beef 1 lb",
    url: "/food/ox_1f402.png",
    units: 1,
    price: 10.00
  },
  {
    id: 87,
    name: "Oyster",
    url: "/food/oyster_1f9aa.png",
    units: 1,
    price: 2.00
  },
  {
    id: 88,
    name: "Pancakes",
    url: "/food/pancakes_1f95e.png",
    units: 1,
    price: 5.00
  },
  {
    id: 89,
    name: "Pea Pod",
    url: "/food/pea-pod_1fadb.png",
    units: 1,
    price: 0.75
  },
  {
    id: 90,
    name: "Sell Family Heirloom",
    url: "/food/gem-stone_1f48e.png",
    unit: 1,
    price: -50
  },
  {
    id: 91,
    name: "Peanuts",
    url: "/food/peanuts_1f95c.png",
    units: 2,
    price: 0.20
  },
  {
    id: 92,
    name: "Pie",
    url: "/food/pie_1f967.png",
    units: 1,
    price: 7.00
  },
  {
    id: 93,
    name: "Pork 1 lb",
    url: "/food/pig_1f416.png",
    units: 1,
    price: 8.00
  },
  {
    id: 94,
    name: "Pizza",
    url: "/food/pizza_1f355.png",
    units: 1,
    price: 8.00
  },
  {
    id: 95,
    name: "Popcorn",
    url: "/food/popcorn_1f37f.png",
    units: 1,
    price: 2.50
  },
  {
    id: 96,
    name: "Hearty Soup",
    url: "/food/pot-of-food_1f372.png",
    units: 1,
    price: 10.00
  },
  {
    id: 97,
    name: "Potato",
    url: "/food/potato_1f954.png",
    units: 1,
    price: 1.75
  },
  {
    id: 98,
    name: "Rabbit 1 lb",
    url: "/food/rabbit_1f407.png",
    units: 1,
    price: 5.00
  },
  {
    id: 99,
    name: "Rice Ball",
    url: "/food/rice-ball_1f359.png",
    units: 1,
    price: 3.00
  },
  {
    id: 100,
    name: "Rice Cracker",
    url: "/food/rice-cracker_1f358.png",
    units: 1,
    price: 2.00
  },
  {
    id: 101,
    name: "Sweet Potato",
    url: "/food/roasted-sweet-potato_1f360.png",
    units: 1,
    price: 2.00
  },
  {
    id: 102,
    name: "Rooster",
    url: "/food/rooster_1f413.png",
    units: 1,
    price: 12.00
  },
  {
    id: 103,
    name: "Salt 4 oz",
    url: "/food/salt_1f9c2.png",
    units: 1,
    price: 1.00
  },
  {
    id: 104,
    name: "Sandwich",
    url: "/food/sandwich_1f96a.png",
    units: 1,
    price: 6.00
  },
  {
    id: 105,
    name: "Shallow Pan Of Food",
    url: "/food/shallow-pan-of-food_1f958.png",
    units: 1,
    price: 8.00
  },
  {
    id: 106,
    name: "Shark 1 lb",
    url: "/food/shark_1f988.png",
    units: 1,
    price: 20.00
  },
  {
    id: 107,
    name: "Shrimp",
    url: "/food/shrimp_1f990.png",
    units: 1,
    price: 1.00
  },
  {
    id: 108,
    name: "Snail",
    url: "/food/snail_1f40c.png",
    units: 1,
    price: 2.00
  },
  {
    id: 109,
    name: "Soft Ice Cream",
    url: "/food/soft-ice-cream_1f366.png",
    units: 1,
    price: 4.00
  },
  {
    id: 110,
    name: "Spaghetti",
    url: "/food/spaghetti_1f35d.png",
    units: 1,
    price: 7.00
  },
  {
    id: 111,
    name: "Squid",
    url: "/food/squid_1f991.png",
    units: 1,
    price: 10.00
  },
  {
    id: 112,
    name: "Ramin",
    url: "/food/steaming-bowl_1f35c.png",
    units: 1,
    price: 2.00
  },
  {
    id: 113,
    name: "Sushi",
    url: "/food/sushi_1f363.png",
    units: 1,
    price: 12.00
  },
  {
    id: 114,
    name: "Taco",
    url: "/food/taco_1f32e.png",
    units: 1,
    price: 3.00
  },
  {
    id: 115,
    name: "Takeout",
    url: "/food/takeout-box_1f961.png",
    units: 1,
    price: 20.00
  },
  {
    id: 116,
    name: "Tamale",
    url: "/food/tamale_1fad4.png",
    units: 1,
    price: 3.00
  },
  {
    id: 117,
    name: "Waffle",
    url: "/food/waffle_1f9c7.png",
    units: 1,
    price: 5.00
  },
  {
    id: 118,
    name: "Oxygen",
    url: "/food/wind-face_1f32c-fe0f.png",
    units: 1,
    price: "Free"
  },
  {
    id: 119,
    name: "Worm",
    url: "/food/worm_1fab1.png",
    units: 1,
    price: "Free",
    note: "Must scavenge.",
  },
  {
    id: 120,
    name: "And one other thing",
    url: "/food/question-mark_2753.png",
    unit: 1,
    price: "?"
  },
]