'use strict';

class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Moje ime je ${this.name}`);
    }
}

module.exports = Person;