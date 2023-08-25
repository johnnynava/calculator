let firstNumber;
let secondNumber;
let operator;
let currentOperator;
let display = document.querySelector("#display");

const anyNumber = /[0-9]/; 
const numbers = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const reset = document.querySelector("#reset");

const add = (firstNumber,secondNumber) => firstNumber+secondNumber;
const subtract = (firstNumber,secondNumber) => firstNumber-secondNumber;
const multiply = (firstNumber,secondNumber) => firstNumber*secondNumber;
const divide = (firstNumber,secondNumber) => firstNumber/secondNumber;

const operate = function(){
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    switch (currentOperator){
        case " + ":
            return add(firstNumber,secondNumber);
            break;
        case " - ":
            return subtract(firstNumber,secondNumber);
            break;
        case " x ":
            return multiply(firstNumber,secondNumber);
            break;
        case " ÷ ":
            return divide(firstNumber, secondNumber);
            break;
    }
}

numbers.forEach((button) => button.addEventListener("click", function(e){
    let buttonPressed = e.target.textContent
    if (display.textContent==="0"){
        display.textContent = buttonPressed;
    }
    else if (secondNumber === "0"){
        return;
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
    else if (currentOperator && secondNumber.slice(-1).match(anyNumber) && !secondNumber.match(/\./)){
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

equals.addEventListener("click", (e) => {
    if (secondNumber){
        firstNumber = operate();
        if (!Number.isInteger(firstNumber)){firstNumber = firstNumber.toFixed(2)};
        secondNumber = 0;
        display.textContent = firstNumber;
    }
})