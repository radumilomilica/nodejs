"use strict";

console.log("Logical operation: OR ||");
console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("false || true:", false || true);
console.log("false || false:", false || false);

let hour = 17;
if(hour < 0 || hour > 23){
    console.log("Vreme nije validno!");
    process.exit(0);
}

if (hour < 8 || hour > 16) {
    console.log("Kancelarija je zatvorena!");
}

console.log("Logical operation: AND &&");
console.log("true && true:", true && true);
console.log("true && false:", true && false);
console.log("false && true:", false && true);
console.log("false && false:", false && false);

if(!(hour >= 8 && hour <= 16)){
    console.log("Kancelarija je otvorena!");
}

if((hour >= 16 && hour <= 23) || ( hour >= 0 && hour <= 8)) {
    console.log("Kancelarija je otvorena u 3. smeni!");
}

console.log("Logical operator: NOT !");
console.log("!true", !true);
console.log("!false", !false);

console.log("Logical operator precedence: NOT(!), AND (&&), OR (||)");