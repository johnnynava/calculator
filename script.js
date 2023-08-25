let firstNumber;
let secondNumber;
let operator;
let currentOperator;

const anyNumber = /[0-9]/;
const anyOperator = /[-\/*\+]/;
const minusOrPlus = /[-\+]/;

const numbers = document.querySelectorAll(".number");
const equals = document.querySelector("#equals");
const operators = document.querySelectorAll(".operator");
const zero = document.querySelector("#zero");
const decimal = document.querySelector("#decimal");
const reset = document.querySelector("#reset");
const display = document.querySelector("#display");
const prevOperation = document.querySelector("#prevOperation");

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

const handleNumberPressed = (input) =>{
    let buttonPressed = input;
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
};

const handleOperatorsPressed = (input) => {
    let buttonPressed = input;
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
    };
    if (!currentOperator){
        currentOperator = buttonPressed;
        firstNumber = display.textContent;
        display.textContent += currentOperator;
    } 
    else if (secondNumber){
        prevOperation.textContent = display.textContent+" =";
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
};

const handleDecimalPressed = () => {
    if(!currentOperator && display.textContent.slice(-1).match(anyNumber) && !display.textContent.match(/\./)){
        display.textContent += ".";
    }
    else if (currentOperator && secondNumber.slice(-1).match(anyNumber) && !secondNumber.match(/\./)){
        display.textContent += ".";
        secondNumber += ".";
    }
};

const handleResetPressed = () => {
    display.textContent = 0;
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
    prevOperation.textContent = "";
};

const handleEqualPressed = () => {
    if (secondNumber){
        prevOperation.textContent = display.textContent+" =";;
        firstNumber = operate();
        if (!Number.isInteger(firstNumber)){firstNumber = firstNumber.toFixed(2)};
        secondNumber = 0;
        display.textContent = firstNumber;
        currentOperator = "";
    }
}

numbers.forEach((button) => button.addEventListener("click", (e) => handleNumberPressed(e.target.textContent)));
operators.forEach((button) => button.addEventListener("click", (e) => {handleOperatorsPressed(e.target.textContent)}));
decimal.addEventListener("click", handleDecimalPressed);
reset.addEventListener("click", handleResetPressed);
equals.addEventListener("click", handleEqualPressed);

window.addEventListener("keydown", (e) => {
    if (e.key.match(anyNumber)){
        handleNumberPressed(e.key);
    }
    else if (e.key === "r" || e.key === "R"){
        handleResetPressed();
    }
    else if (e.key.match("=")){
        handleEqualPressed();
    }
    else if (e.key === "."){
        handleDecimalPressed();
    }
    else if (e.key.match(anyOperator)){
        if (e.key === "*"){buttonPressed = " x "}
        else if (e.key === "/"){buttonPressed = " ÷ "}
        else if (e.key.match(minusOrPlus)){buttonPressed = " " + e.key + " "};
        handleOperatorsPressed(buttonPressed);
    }
});