let firstNumber;
let secondNumber;
let operator;
let currentOperator;

const anyNumber = /[0-9]/; 
const anyNumberButZero = /[1-9]/
const anyOperator = /[-x÷\+]/;
const anyOperatorButNegative = /[x÷\+]/;

const numbers = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const reset = document.querySelector("#reset");

let display = document.querySelector("#display");

const add = (firstNumber,secondNumber) => firstNumber+secondNumber;
const subtract = (firstNumber,secondNumber) => firstNumber-secondNumber;
const multiply = (firstNumber,secondNumber) => firstNumber*secondNumber;
const divide = (firstNumber,secondNumber) => firstNumber/secondNumber;

const operate = function(){
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    if (currentOperator ===" + "){return add(firstNumber,secondNumber)}
    else if (currentOperator ===" - "){return subtract(firstNumber,secondNumber)}
    else if (currentOperator ===" x "){return multiply(firstNumber,secondNumber)}
    else return divide(firstNumber, secondNumber);
};

numbers.forEach((button) => button.addEventListener("click", function(e){
    let buttonPressed = e.target.textContent
    if (display.textContent==="0"){
        display.textContent = buttonPressed;
    }
    else {
        display.textContent += buttonPressed;
        if(currentOperator && !secondNumber){secondNumber = buttonPressed}
        else if(currentOperator){secondNumber += buttonPressed}
    }
}));

operators.forEach((button) => button.addEventListener("click", (e) => {
    let buttonPressed = e.target.textContent
    if (buttonPressed === " - "){
        if (display.textContent == "0"){
            display.textContent = "-";
            return;
        }
        else if (currentOperator && !secondNumber){
            secondNumber = "-";
            display.textContent = display.textContent+"-";
            return;
        }
    }
    if (!currentOperator){
        currentOperator = buttonPressed;
        firstNumber = display.textContent;
        display.textContent += currentOperator;
    } 
    else if (secondNumber){
        firstNumber = operate();
        if (!Number.isInteger(firstNumber)){firstNumber = firstNumber.toFixed(2)};
        secondNumber = 0;
        display.textContent = firstNumber + buttonPressed;
        currentOperator = buttonPressed;  
    }
    else if (currentOperator && !secondNumber){
        currentOperator = buttonPressed;
        display.textContent = display.textContent.slice(0,-3)+buttonPressed;
    }
}))

decimal.addEventListener("click", (e) => {
    if(!currentOperator && display.textContent.slice(-1).match(anyNumber) && !display.textContent.match(/\./)){
        display.textContent += ".";
    }
    else if (currentOperator && secondNumber.slice(-1).match(/[0-9]/) && !secondNumber.match(/\./)){
        display.textContent += ".";
        secondNumber += ".";
    }
})

reset.addEventListener("click", (e) => {
    display.textContent = 0;
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
})


// si textContent es igual (=):

//

//1. y se presiona luego de solo un negativo al principio o luego 
//del operator  (sin secondNumber), regresar ERROR

//2. y se presiona luego de solo firstNumber, regresar el mismo número al
//display

//3. y se presiona luego de un número que va luego del operator (secondNumber), 
//regresar resultado

// si textContent es cero (0):

//1. si hay solo números, un negativo o un operator, añadir a display