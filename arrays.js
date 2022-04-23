"use strict";

let niz1 = new Array();
let niz2 = [];

let mixedArray = ["String", "String2", 25, false, { id:1, name: "objekat"}];
console.log(mixedArray);

let fruits = ["Apple", "Orange", "Plum", "Watermelon"];
console.log(fruits);

fruits[2] = "Pear";
fruits[4] = "Lemon";
console.log(fruits);

for(let i = 0; i < fruits.length; i++) {
    if (fruits[i] !== undefined) {
        console.log(fruits[i]);
    }
}

fruits.push("Plum");

console.log(fruits.length);
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.length);
console.log(fruits.shift());
console.log(fruits);
fruits.unshift("Apple");
console.log(fruits.length);
console.log(fruits);

delete fruits[3]; // ostavlja rupu u nizu nakon brisanja
console.log(fruits.length);
console.log(fruits);

fruits.splice(2, 1); // preferirani nacin brisanja elemenata niza
console.log(fruits.length);
console.log(fruits);

console.log(fruits.slice(1, 4));

let vegetables = ["Carrot", "Potato"];

let newArray = fruits.concat(vegetables);
console.log(newArray);

console.log(newArray.indexOf("Carrot"));
newArray.splice(newArray.indexOf("Lemon"), 1);
console.log(newArray);