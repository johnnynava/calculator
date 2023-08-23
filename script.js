let firstNumber;
let secondNumber;
let operator;

const add = (firstNumber,secondNumber) => firstNumber+secondNumber;
const subtract = (firstNumber,secondNumber) => firstNumber-secondNumber;
const multiply = (firstNumber,secondNumber) => firstNumber*secondNumber;
const divide = (firstNumber,secondNumber) => firstNumber/secondNumber;
const inputToDisplay = (input) =>
input.addEventListener("click", function(e){
    display.textContent += e.target.textContent;

});

const operate = function(firstNumber,operator,secondNumber){

}

const numbersAndOperators = document.querySelectorAll(".numberOrOperator");
const equals = document.querySelector("#equals");
const reset = document.querySelector("#reset");
let display = document.querySelector("#display");

numberOrOperator.forEach(inputToDisplay);

// hacer que display sea 0
// si no hay nada en display (0) y el e.target.textContent 
// es un número o "-", reemplazar 0 por el textContent

// si hay solo números o un negativo al principio y el e.target.textContent es
// un número, añadir a display

// si el display es solo negativo y el e.target.textContent es un operador,
// no hacer nada.

//si el display es 0 y el textContent es un operador que no sea negativo,
//usar 0 como firstNumber y el operador como operator

//si el display es un número (puede tener negativo), y el textContent es
//un operador, usar el display como firstNumber y el operador como operator


