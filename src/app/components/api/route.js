import { NextResponse } from "next/server";

const data = [
  {
    "ingredient": "green leaf lettuce",
    "category": "vegetable",
    "image": "/img/GreenLeafLettuce.png",
    "calories": 8
  },
  {
    "ingredient": "Bok choy",
    "category": "vegetable",
    "image": "/img/BokChoy.png",
    "calories": 7
  },
  {
    "ingredient": "Kale",
    "category": "vegetable",
    "image": "/img/Kale.png",
    "calories": 10
  },
  {
    "ingredient": "red cabbage",
    "category": "vegetable",
    "image": "/img/RedCabbage.png",
    "calories": 10
  },
  {
    "ingredient": "carrots",
    "category": "vegetable",
    "image": "/img/Carrots.png",
    "calories": 12
  },
  {
    "ingredient": "avocado",
    "category": "fruit",
    "image": "/img/Avocado.png",
    "calories": 120
  },
  {
    "ingredient": "Tomato",
    "category": "vegetable",
    "image": "/img/Tomato.png",
    "calories": 18
  },
  {
    "ingredient": "pineapple",
    "category": "fruit",
    "image": "/img/Pineapple.png",
    "calories": 25
  },
  {
    "ingredient": "mix berries",
    "category": "fruit",
    "image": "/img/MixBerries.png",
    "calories": 28
  },
  {
    "ingredient": "Corn",
    "category": "fruit",
    "image": "/img/Corn.png",
    "calories": 43
  },
  {
    "ingredient": "Grilled Shrimp",
    "category": "protein",
    "image": "/img/GrilledShrimp.png",
    "calories": 98
  },
  {
    "ingredient": "Grilled Chicken Breast",
    "category": "protein",
    "image": "/img/GrilledChickenBreast.png",
    "calories": 165
  },
  {
    "ingredient": "Bacon",
    "category": "protein",
    "image": "/img/Bacon.png",
    "calories": 108
  },
  {
    "ingredient": "Smoked Salmon",
    "category": "protein",
    "image": "/img/SmockedSalmon.png",
    "calories": 58
  },
  {
    "ingredient": "Grilled Beef",
    "category": "protein",
    "image": "/img/GrilledBeef.png",
    "calories": 250
  },
  {
    "ingredient": "Crouton",
    "category": "toppings",
    "image": "/img/Crouton.png",
    "calories": 81
  },
  {
    "ingredient": "Barley",
    "category": "toppings",
    "image": "/img/Barley.png",
    "calories": 100
  },
  {
    "ingredient": "Cashew Nut",
    "category": "toppings",
    "image": "/img/CashewNut.png",
    "calories": 110
  },
  {
    "ingredient": "Cream Dressing",
    "category": "dressing",
    "image": "/img/CreamDressing.png",
    "calories": 60
  },
  {
    "ingredient": "Balsamic Dressing",
    "category": "dressing",
    "image": "/img/BalsamicDressing.png",
    "calories": 26
  },
  {
    "ingredient": "Japanese Shoyu",
    "category": "dressing",
    "image": "/img/JapaneseShoyu.png",
    "calories": 15
  },
  {
    "ingredient": "Seafood Cream Dressing",
    "category": "dressing",
    "image": "/img/SeafoodCreamDressing.png",
    "calories": 75
  },
  {
    "ingredient": "Roast Sesame Dressing",
    "category": "dressing",
    "image": "/img/RoastSesameDressing.png",
    "calories": 60
  }
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryParam = searchParams.get('category');

  if (categoryParam) {
    const categories = categoryParam.split(',');
    const filteredData = data.filter(item => categories.includes(item.category));
    return NextResponse.json(filteredData);
  }

  return NextResponse.json(data);
}
