"use strict"; 

const button = document.querySelector(".change-color"); 
const span = document.querySelector(".color"); 
const body = document.body; 

button.addEventListener("click", (event) => { 
  const buttonValue = getRandomHexColor();
  body.style.backgroundColor = buttonValue; 
  span.textContent = buttonValue; 
}); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
} 
