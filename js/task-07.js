"use strict"; 

const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

input.addEventListener("input", (event) => {
  output.style.fontSize = `${event.target.value}px`;
}); 
