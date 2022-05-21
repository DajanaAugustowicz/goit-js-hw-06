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

const markup = ingredients
  .map((ingredient) => `<li class="list-item new">${ingredient}</li>`)
  .join("");

list.insertAdjacentHTML("afterbegin", markup);

//ingredients.forEach(function (ingredient, index) {
// console.log(ingredient, index)
//});

//const item = document.createElement("li");
//item.textContent = [...ingredients];
//item.classList.add("item");
//list.after(item);

//console.log(item);