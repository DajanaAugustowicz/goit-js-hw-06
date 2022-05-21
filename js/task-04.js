"use strict";

let counterValue = document.querySelector("#value");

let buttonDecrement = document.querySelector(`button[data-action="decrement"]`);

let buttonIncrement = document.querySelector(`button[data-action="increment"]`);

let counter = 0;

updateCounter();

buttonIncrement.addEventListener("click", () => {
  counter++;
  updateCounter();
});

buttonDecrement.addEventListener("click", () => {
  counter--;
  updateCounter();
});

function updateCounter() {
  counterValue.innerHTML = counter;
}
