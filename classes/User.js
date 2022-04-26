'use strict';

const Person = require('./Person');

module.exports = class User extends Person {
    login() {
        console.log(`Login ${this.name}`);
        super.printName();
    }

    printName() {
        console.log(`Moje ime je ${this.name}. Ja sam korisnik.`);
    }

}