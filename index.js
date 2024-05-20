console.log('works'); 


let numOne = 20;
let numTwo = 15;
let operand = "subtract"
let result;

function operate (numOne, numTwo, operand) {
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
operate(numOne, numTwo, operand);
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

// console.log(add(numOne, numTwo))
// console.log(multiply(20, 15))
// console.log(subtract(20, 15))
// console.log(divide(20, 15)) 