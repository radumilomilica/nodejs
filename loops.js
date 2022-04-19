"use strict";

console.log("Loops: while"); // prvo proverava uslov pa izvrsava petlju
let c = 0;
while(c < 5) {
    console.log(c);
    c++;
}
console.log("Gotovo!");

console.log("Loops: do .. while"); // izvrsava se garantovano bar jednom
c = 6;
do {
    console.log(c);
    c++;
} while (c < 5)
console.log("Gotovo!");

console.log("Loops: for"); // kada znamo koliko puta treba odredjeni kod da se izvrsi
let i;
for(i = 0; i > -5 ; i--) {  // for(inicijalizacija; uslov; inkrement/dekrement) {
    console.log(i);
}
console.log("Gotovo!", i);

console.log("Loops: break");

c = 0;
while (true) {
    if (c > 10) {
        break;
    }
    c++;
}
console.log("c = " + c);

console.log("Loops: continue");

for(let n = 0; n < 10; n++) {
    if(n % 2 === 0) { //  if(!n % 2 === 0) {   ukoliko hocemo da ispisemo parne brojeve, ili if(n % 2 !== 0) {
        continue;
    }

    console.log(n);
}
console.log("Gotovo!");

let loop = true;
let counter = 0;

console.log("Loops: while with flag");
while(loop) {
    counter++;

    if (counter > 100) {
        loop = false;
    }
}
console.log("Gotovo! counter = " + counter);
