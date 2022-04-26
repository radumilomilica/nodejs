"use strict";

class Person {
     constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Moje ime je ${this.name}`)
    }
}

class User extends Person {
   login() {
    console.log(`Login ${this.name}`);
    super.printName();
   }

   printName() {
       console.log(`Moje ime je ${this.name}. Ja sam korisnik.`) 
   }
}

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

