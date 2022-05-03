"use strict";

class Animal
{
    name;

    constructor(name) {
        this.name = name;
    }

    move()
    {
        console.log(`Animal ${this.name} moved!`);
    }

    eat()
    {
        console.log(`Animal ${this.name} ate!`);
    }

    sound()
    {
        console.log(`Animal ${this.name} made a sound!`);
    }
}

module.exports = Animal;