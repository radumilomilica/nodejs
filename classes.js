"use strict";

const User = require('./classes/User');

let klijent = new User("Petar");
let klijent2 = new User("Jovan");

klijent.printName();
klijent.login();
klijent2.printName();

class Kalkulator {
    add(num1, num2) {
        return num1 + num2;
    }
}

let Kalk = new Kalkulator();
console.log(Kalk.add(2, 2));
