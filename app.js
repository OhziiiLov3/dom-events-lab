/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let num1 = null;
let num2 = null;
let operation = null;

/*------------------------ Cached Element References ------------------------*/
let numbers = document.querySelectorAll(".number");
let operationBtns = document.querySelectorAll(".operation");

let equalBtn = document.querySelector(".equals");
let clearBtn = document.querySelector(".clear");


let totalDisplay = document.querySelector('.display');
console.dir(clearBtn);
console.dir(equalBtn);
console.dir(numbers);
console.dir(operationBtns);


totalDisplay.innerText = 0;


/*-------------------------------- Functions --------------------------------*/



const add = () =>{
    return num1 + num2;
}

const subtract = () =>{
    return num1 - num2;
}

const multiply = () => {
  return num1 * num2;
};

const divide = () => {
  return num1 / num2;
};

const renderCalculation = () =>{
    let total;
    if(operation === "add"){
      total = add();
    }
    if (operation === "subtract") {
        total = subtract();
    }
    if (operation === "multiply") {
      total = multiply();
    }
    if (operation === "divide") {
        total = divide();
    }
    console.log(total);
    totalDisplay.innerHTML = total;
}


const handleEqualBtnClick = () =>{
    num2 = parseInt(totalDisplay.innerHTML);
    renderCalculation();
}


const handleNumberClick = (event) =>{
  totalDisplay.innerHTML = Number(totalDisplay.innerText + event.target.innerText);
}


const handleOperationBtn = (event) => {
  num1 = parseInt(totalDisplay.innerHTML);
  operation = event.target.id;
  totalDisplay.innerText = 0;
  console.log(operation);
};

const clear = () =>{
 totalDisplay.innerText = 0;
 num1 = null;
 num2 = null;
 operation = null;
 console.log("Clear");
}


/*----------------------------- Event Listeners -----------------------------*/

equalBtn.addEventListener('click', handleEqualBtnClick);
clearBtn.addEventListener('click', clear);


numbers.forEach((number)=>{
    number.addEventListener('click', handleNumberClick);
})


operationBtns.forEach((operation)=>{
    operation.addEventListener('click', handleOperationBtn);
})

