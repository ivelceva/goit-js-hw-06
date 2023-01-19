const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");
let ingredientsElements = [];

ingredients.forEach(function (ingredient) {
  let ingredientElement = document.createElement("li");
  ingredientElement.textContent = ingredient;
  ingredientElement.classList.add("item");
  ingredientsElements.push(ingredientElement);
});

ingredientsList.append(...ingredientsElements);