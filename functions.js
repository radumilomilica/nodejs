"use strict";

let additionResult = addNumber(2, 2);
console.log("addNumber(2, 2) = ", additionResult);
additionResult = addNumber(3, 3);
console.log("addNumber(3, 3) = ", additionResult);
console.log("addNumber(4, 4) = ", addNumber(4, 4));

let callResult = callFunction();
callFunction();

console.log("callResult =", callResult);

function callFunction() {
    console.log("addNumber(5, 5) =", addNumber(5, 5));
    console.log("Punoletan 18? =", checkAge(18));
    console.log("Punoletan 12? =", checkAge(12));
}

function checkAge(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
    

function addNumber(number1, number2) {
    let result = number1 + number2;

    return result;
}

let factorial = function(x) {
    if (x == 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

console.log("2! =", factorial(2));