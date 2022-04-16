"use strict";

let age = 12;

if (age < 16) {
    console.log("Ne moze da polaze niti da vozi")
    process.exit(0);
}

switch (age) {
    case 16:
        console.log("Moze da polaze za voznju, ali ne sme da vozi");
        break;
    case 17:
        console.log("Moze da vozi preko dana uz prisustvo iskusnog vozaca");
        break;
    case 18:
        console.log("Moze da vozi samo preko dana");
        break;
    default:
        console.log("Nema ogranicenja");                     
}