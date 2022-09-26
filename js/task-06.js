"use strict"; 

const input = document.querySelector("#validation-input");  

input.addEventListener("blur", () => {
    if (input.value.length < 6) { 
        input.style.borderColor = "#f44336"; 
    } else {input.style.borderColor = "#4caf50";}
  });
