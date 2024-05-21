console.log('works'); 


let numOne;
let numTwo;
let operand;
let result;
let userInput = [];

// Clear array of user input 

function clearUserInput() {
    userInput = [];
}

// clear everything I guess - clear display etc.

const clear = document.querySelector('.clear')
clear.addEventListener('click', function () {
    userInput = [];
    // display clear
})

// EQUALLLL function which assigns numone and two, runs operation and clears array for next.

const equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    assignNumbers(userInput);
    operate(numOne, numTwo, operand);
    clearUserInput();
    console.log(result);
}
)

// assigns numbers from array to variables. 

function assignNumbers(arr) {
    console.log(arr);
    let op;

// find operand value and index
    if (arr.includes('add')) {
        op = arr.indexOf('add');
        console.log('here')
    }
    
    else if (arr.includes('subtract')) {
        op = arr.indexOf('subtract');
        console.log('oder')
    }

    else if (arr.includes('multiply')) {
        op = arr.indexOf('multiply');
    }

    else if (arr.includes('divide')) {
        op = arr.indexOf('divide');
    }

    else {
        op = -1;
    }

    // User clicks equals without selcting second number.  
    if (op === -1) {
        console.log('choose an operand');
        return;
    }
    console.log(op);
    operand = arr[op];
    numOneString = arr
        .slice(0, op)
        .join('');
    console.log(numOneString);
    numOne = parseInt(numOneString);
    console.log(numOne);
    console.log(arr);
    numTwoString = arr
        .slice(op + 1)
        .join('');
    numTwo = parseInt(numTwoString);
    console.log(`first${numOne}, sec${numTwo} and operand ${operand}`);
}
// console.log(equal);




// console.log(numOne);

function operate (numOne, numTwo, operand) {
    console.log(`${numOne} and ${numTwo} and op is ${operand}`);
    
    if (operand === 'add') {
        result = add(numOne, numTwo);
    }

    else if (operand === 'subtract') {
        result = subtract(numOne, numTwo);
    }

    else if (operand === 'multiply') {
        result = multiply(numOne, numTwo);
    }

    else if (operand === 'divide') {
        result = divide(numOne, numTwo);
    }

    else {
        console.log('invalid');
    }
    
}

console.log(result);

function add(a, b) { 
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) { 
    return a * b;
}

function divide(a, b) { 
    return a / b;
}

// OPERAND BUTTONS
const addBtn = document.querySelector('.add'); 
addBtn.addEventListener('click', function () {
    // operand = 'add';
    userInput.push('add');
    console.log(userInput);

})

const subtractBtn = document.querySelector(".subtract");
subtractBtn.addEventListener('click', function () {
    // operand = 'subtract';
    userInput.push('subtract');
    console.log(userInput);
})

const multiplyBtn = document.querySelector(".multiply"); 
multiplyBtn.addEventListener('click', function () {
    userInput.push('multiply');
    console.log(userInput);
})

const divideBtn = document.querySelector(".divide");
multiplyBtn.addEventListener('click', function () {
    userInput.push('divide');
    console.log(userInput);
})

// NUMBER BUTTONS 
const one = document.querySelector('.one'); 
// console.log(one);
one.addEventListener('click', chooseOne); 
function chooseOne () {
   userInput.push('1'); 
   console.log(userInput);
}

const two = document.querySelector('.two');
two.addEventListener('click', chooseTwo);
function chooseTwo() {
    userInput.push('2')
    console.log(userInput);
}

const three = document.querySelector('.three');
three.addEventListener('click', chooseThree);
function chooseThree() {
    userInput.push('3')
    console.log(userInput);
}

const four = document.querySelector('.four');
four.addEventListener('click', chooseFour);
function chooseFour() {
    userInput.push('4')
    console.log(userInput);
}

const five = document.querySelector('.five');
five.addEventListener('click', chooseFive);
function chooseFive() {
    userInput.push('5')
    console.log(userInput);
}

const six = document.querySelector('.six');
six.addEventListener('click', chooseSix);
function chooseSix() {
    userInput.push('6')
    console.log(userInput);
}
const seven = document.querySelector('.seven');
seven.addEventListener('click', chooseSeven);
function chooseSeven() {
    userInput.push('7')
    console.log(userInput);
}


// console.log(add(numOne, numTwo))
// console.log(multiply(20, 15))
// console.log(subtract(20, 15))
// console.log(divide(20, 15)) 