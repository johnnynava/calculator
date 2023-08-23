let firstNumber;
let secondNumber;
let operator;
const button = document.querySelectorAll("button");
const equals = document.querySelector("#equals");
const reset = document.querySelector("#reset");
let display = document.querySelector("#display");

const add = (firstNumber,secondNumber) => firstNumber+secondNumber;
const subtract = (firstNumber,secondNumber) => firstNumber-secondNumber;
const multiply = (firstNumber,secondNumber) => firstNumber*secondNumber;
const divide = (firstNumber,secondNumber) => firstNumber/secondNumber;

const operate = function(firstNumber,operator,secondNumber){
    if (operator===" + "){return add(firstNumber,secondNumber)}
    else if (operator===" - "){return subtract(firstNumber,secondNumber)}
    else if (operator===" x "){return multiply(firstNumber,secondNumber)}
    else return divide(firstNumber, secondNumber);
};

const inputToDisplay = (input) =>
input.addEventListener("click", function(e){
    display.textContent += e.target.textContent;

});
button.forEach(inputToDisplay);




// hacer que display sea 0

// si textContent es reset, resetear a 0

// si no hay nada en display (0) y el e.target.textContent 
//es un número o "-", reemplazar 0 por el textContent

// si hay solo números o un negativo al principio y el e.target.textContent es
// un número, añadir a display

// si el display es solo negativo y el e.target.textContent es un operador,
// no hacer nada.

//si el display es 0 y el textContent es un operador que no sea negativo,
//usar 0 como firstNumber y el operador como operator

//si el display es un número (puede tener negativo), y el textContent es
//un operador, usar el display como firstNumber y el operador como operator

//si se presiona igual luego de solo un negativo al principio o luego 
//del operator (sin secondNumber), regresar ERROR

//si no hay nada luego del operator, y el textContent es - o un número, añadir a
//display

//si se presiona un operator luego del operator o un solo negativo, no hacer nada

//si se presiona igual luego de solo firstNumber, regresar el mismo número al
//display

//si se presiona igual luego de un número que va luego del operator, regresar
//resultado

//si se presiona un operator luego de un número que va luego del operator,
//regresar resultado + operator de textContent 

