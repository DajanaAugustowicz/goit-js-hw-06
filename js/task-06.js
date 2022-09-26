"use strict"; 

const input = document.querySelector("#validation-input"); 





const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", (event) => { 
    if (event.currentTarget.value < document.querySelector(`input[data-length="6"]`)) {nameOutput.textContent = "Anonymous"} 
    else {nameOutput.textContent = event.currentTarget.value}; 
}); 





//html: 
//<input
//      type="text"
//      id="validation-input"
//      data-length="6"
//      placeholder="Please enter 6 symbols"
//    /> 
//<style>
//#validation-input {
//    border: 2px solid #bdbdbd;}

//  #validation-input.valid {
//    border-color: #4caf50;}

//  #validation-input.invalid {
//    border-color: #f44336;}
//</style>