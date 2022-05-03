"use strict";

const Animal = require("./Animal");

class Dog extends Animal {
  run()
  {
      console.log(`Dog ${this.name} ran!`);
  }  

  play() 
  {
      console.log(`Dog ${this.name} played!`);
  }

  sound()
  {
      console.log(`Dog ${this.name} barked!`);
  }

  bark()
  {
      this.sound();
  }
}

module.exports = Dog;