let prevScreenValue = document.querySelector(".Calculator .first-row .screen .previousValue"); 
let afterScreenValue = document.querySelector(".Calculator .first-row .screen .afterValue"); 

let numbers = document.querySelectorAll(".Calculator .other-row .number");
// let currentValue = "";
let prevValue = "";
let afterValue = "";

let operators = document.querySelectorAll(".Calculator .other-row .operator");
let currentOperation = ""

let equal = document.querySelector(".Calculator .other-row .equal");

let clear = document.querySelector(".Calculator .first-row button");

let decimal = document.querySelector(".Calculator .other-row .decimal");


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


function numberHandle(number) {
    afterValue += number;
}

function operatorHandle(operator) {
    currentOperation = operator;
    prevValue = afterValue;
    afterValue = ''
}

function addDecimal(){
    return;
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
        afterValue = prevValue / afterValue;
    }
    console.log(afterValue);
}