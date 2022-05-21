"use strict";

const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

const firstItemName = categories[0].firstElementChild.textContent;
const firstItemCount = categories[0].lastElementChild.childElementCount;

console.log(`Category: ${firstItemName}`, `Elements: ${firstItemCount}`);

const secondItemName = categories[1].firstElementChild.textContent;
const secondItemCount = categories[1].lastElementChild.childElementCount;

console.log(`Category: ${secondItemName}`, `Elements: ${secondItemCount}`);

const thirdItemName = categories[2].firstElementChild.textContent;
const thirdItemCount = categories[2].lastElementChild.childElementCount;

console.log(`Category: ${thirdItemName}`, `Elements: ${thirdItemCount}`);
