"use strict";

let year = 2022;

if (year === 2022){
    console.log("It`s 2022!");
}

if(year === 2021){
    console.log("It`s year 2021!");
} else {
    console.log("It`s NOT year 2021!");
}

if(year > 2022) {
    console.log("It`s after 2022!");
} else if (year < 2022) {
    console.log("It`s before 2022!");
} else {
    console.log("It`s 2022!");
}

let canDrive;
let age = 16;

if (age >= 16) {
    canDrive = true;
} else {
    canDrive = false;
}
console.log("canDrive =", canDrive);

// promenljiva = uslov ? vrednost ako je uslov tacan : vrednost ako je uslov netacan;
let canDrive2 = (age >= 18) ? "Moze da vozi" : "Ne moze da vozi";
console.log("canDrive2=", canDrive2);