"use strict";

// Data type: String
let stringVar = "Hello";
console.log('Data types: String:', stringVar);
console.log(`Backtick string: ${stringVar}`);
console.log("Standard string: ${stringVar}");

// Data type: Number
let integerNumberVar = 123;
let floatNumberVar = 1.23;

console.log("Data types: Number integer", integerNumberVar);
console.log(`Data types: Number float ${floatNumberVar}`);
floatNumberVar = 120;
console.log(`Data types: Number float ${floatNumberVar}`);

console.log("Data types: Infinity: ", 1 / 0);
console.log("Data types: NaN (not a number):", "ABC" / 2 + 5);

let bigintVar = 2348716534871623476n;
console.log("Data types: Bigint: ", bigintVar);
console.log("Maximum safe integer number", Number.MAX_SAFE_INTEGER);

console.log(`Power of backticks: ${2 + 2}`);

// Data types: Boolean
let booleanTrue = true;
let booleanFalse = false;

let booleanIsGreater = 4 > 10;
console.log("Data types: Boolean:", booleanIsGreater);

// Data types: null

let nullVar = null;
console.log('Data types: null:', nullVar);

// Data types: undefined

let undefinedVar;
console.log("Data types: undefined:", undefinedVar);

// Checking data type

console.log("Data type of stringVar:", typeof stringVar);
console.log("Data type of integerNumberVar:", typeof integerNumberVar);
console.log("Data type of floatNumberVar:", typeof floatNumberVar);
console.log('Data type of bigintVar', typeof bigintVar);
console.log('Data type of booleanIsGreater:', typeof booleanIsGreater);
console.log("Data type of nullVar:", typeof nullVar);
console.log("Data type of undefinedVar:", typeof undefinedVar);