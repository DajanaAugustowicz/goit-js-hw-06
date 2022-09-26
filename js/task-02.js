"use strict";

const list = document.querySelector("#ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map((ingredient) => { 
  const item = document.createElement("li"); 
  item.textContent = ingredient;
  item.classList.add("item");
  list.append(item);
}); 
