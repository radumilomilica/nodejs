"use strict";

let user1 = new Object();
let user2 = {};

let userAddress = {
    city: "Novi Sad",
    zip: 21000,
}

let userName = {
    firstName: "Skola",
    lastName: "Rajak",
    middleName: "X",
    initials: "SR",
    fullName: "Skola Rajak"
}

let user = {
    name: userName,
    email: "skolarajak.qa@gmail.com",
    address: userAddress,
    active: true
}

console.log(user1);
console.log(user2);
console.log(user);
console.log(user.name.lastName);
console.log(user.address.city);

user.nema = false;
user.address.zip = 21101;
console.log(user.nema);
delete user.nema;
console.log(user.nema);

if(user.nema === undefined) {
    console.log("Objekat ne sadrzi svojstvo `nema`");
}

if("pak" in user.address) {
    console.log("PAK korisnika je,", user.address.pak);
}
console.log("Objects: for... in loop");
for (let property in user) {
    console.log(property, user[property]);
}

console.log(user["active"]);
console.log(user.active);

console.log("Objects: soting");
let pozivniBrojevi = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "381": "Serbia",
    "1": "USA"
}

for(let key in pozivniBrojevi) {
    console.log(pozivniBrojevi[key], key);
}

let pozivni = pozivniBrojevi;
pozivni["381"] = "Srbija";

for (let key in pozivni) {
    console.log("pozivniBrojevi:", pozivniBrojevi[key]);
    console.log("pozivni", pozivni[key]);
}

console.log("Objects: comparison");

let objA = {};
let objB = objA;

console.log("objA == objB", objA == objB);
console.log("objA === objB", objA === objB);

let objC = {};
let objD = {};

console.log("objC == objD", objC == objD);
console.log("onjC === objD", objC === objD);

console.log("Objects: cloning");
let clone = {};

//Kloniranje objekta, nacin 1
for(let key in pozivniBrojevi) {
    clone[key] = pozivniBrojevi[key];
}
clone["381"] = "Serbia";
for(let key in clone) {
    console.log("Key=", key, "pozivniBrojevi=", pozivniBrojevi[key],"<->", clone[key], "= clone");
}
console.log("pozivniBrojevi == clone", pozivniBrojevi == clone);
console.log("pozivniBrojevi === clone", pozivniBrojevi === clone);


// Kloniranje objekta, nacin 2
let clone2 = Object.assign({}, pozivniBrojevi);
for(let key in clone2) {
    console.log("Key=", key, "pozivniBrojevi =", pozivniBrojevi[key],"<->", clone2[key], "= clone2");
}