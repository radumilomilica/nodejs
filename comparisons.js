"use strict";

console.log("2 > 1:", 2 > 1);
console.log("2 < 1:", 2 < 1);
console.log("2 >= 1:", 2 >= 1);
console.log("2 <= 1:", 2 <= 1);
console.log("2 == 1:", 2 == 1);
console.log("2 != 1", 2 != 1);

let result = 5 > 3;
console.log("5 > 3:", result);

console.log("2 > a", "2" > "a");
console.log("Bee > Be", "Bee" > "Be");

console.log(`"2" > 1`, "2" > 1);
console.log(`"01" == 1`, "01" == 1);

console.log("false == 0", false == 0);
console.log("false === 0", false === 0);
console.log(`"01" === 1`, "01" === 1); // strogo poredi string i broj i zato je false
console.log("false !== 0", false !== 0); // strogo poredi boolean i broj i zato je true
console.log("false != 0", false != 0); 
console.log("2a" > 1);
console.log(Number("2a"));
console.log(NaN > 1);