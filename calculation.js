let number = "";
let result = 0;
const numbers = [];
let numberIndex = 0;
let operator;
let addend1 = 0;
let addend2 = 1;


function screen(nextNumber){
const calcScreen = document.querySelector(".result");
    if (calcScreen.textContent.length == 12){
        return;
    }

    if (calcScreen.textContent == 0){
        calcScreen.textContent = "";
    }
    number = number + nextNumber;

 calcScreen.textContent = calcScreen.textContent + nextNumber;

}

function clearScreen(){
    number = "";
    const p = document.querySelector(".result");
    p.textContent = 0;
    result = 0;
    numberIndex = 0;
    addend1 = 0;
    addend2 = 1;
}


function calc(operator){
    const calcScreen = document.querySelector(".result");
    if(number != ""){
    numbers[numberIndex] = number;
    number = "";
    numberIndex++;
    }
    this.operator = operator;
    calcScreen.textContent = calcScreen.textContent + operator;

}

function equals(){
    const calcScreen = document.querySelector(".result");
    numbers[numberIndex] = number;
    number = "";
    numberIndex++
    switch(this.operator){
        case "+":
            result = +numbers[addend1] + +numbers[addend2];
            calcScreen.textContent = result;
            break;
        case "/":
            result = +numbers[addend1] / +numbers[addend2];
            calcScreen.textContent = result;
            break;
        case "x":
            result = +numbers[addend1] * +numbers[addend2];
            calcScreen.textContent = result;
            break;
        case "-":
            result = +numbers[addend1] - +numbers[addend2];
            calcScreen.textContent = result;
            break;
                
    }

    numbers[numberIndex] = result;
    numberIndex++;
    addend1+=2;
    addend2+=2;

}