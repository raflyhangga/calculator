// Constant
let prevValue = "";
let afterValue = "";
let currentOperation = ""

// Screen DOM
let prevScreenValue = document.querySelector(".Calculator .first-row .screen .previousValue"); 
let afterScreenValue = document.querySelector(".Calculator .first-row .screen .afterValue"); 

// Button's DOM
let numbers = document.querySelectorAll(".Calculator .other-row .number");
let operators = document.querySelectorAll(".Calculator .other-row .operator");
let equal = document.querySelector(".Calculator .other-row .equal");
let clear = document.querySelector(".Calculator .first-row button");
let decimal = document.querySelector(".Calculator .other-row .decimal");


// Event Listener
numbers.forEach((number) => number.addEventListener('click', (e) =>{
    numberHandle(e.target.textContent);
    afterScreenValue.textContent = afterValue;
}))

operators.forEach((operator)=>operator.addEventListener('click',(e) => {
    operatorHandle(e.target.textContent);
    afterScreenValue.textContent += ` ${currentOperation} `;
    prevScreenValue.textContent +=  afterScreenValue.textContent;
    afterScreenValue.textContent = "";
}))


clear.addEventListener('click',() => {
    prevScreenValue.textContent = "";
    afterScreenValue.textContent = "";
    prevValue = "";
    afterValue = "";
    currentOperation = "";
})

equal.addEventListener('click',() => {
    calculate();
    prevScreenValue.textContent =  "";
    afterValue=afterValue.toString()
    if(afterValue.length <= 5){
        afterScreenValue.textContent = afterValue;
    } else {
        afterScreenValue.textContent = afterValue.slice(0,6);
    }
})

decimal.addEventListener('click',() => {
    afterValue += ".";
    afterScreenValue.textContent = afterValue;
})

// Function
function numberHandle(number) {
    afterValue += number;
}

function operatorHandle(operator) {
    currentOperation = operator;
    prevValue = afterValue;
    afterValue = ''
}


function calculate() {
    prevValue = Number(prevValue);
    afterValue = Number(afterValue);

    if (currentOperation === "+") {
        afterValue = prevValue + afterValue;
    } 
    else if (currentOperation === "-") {
        afterValue = prevValue - afterValue;
    }
    else if (currentOperation === "x") {
        afterValue = prevValue * afterValue;
    }
    else if (currentOperation === "/") {
        if (afterValue != 0 ) {
            afterValue = prevValue / afterValue;
        } else {
            alert("Really?")
            afterValue = "";
        }
    }
}