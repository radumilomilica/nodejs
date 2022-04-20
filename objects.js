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

for (let property in user) {
    console.log(property, user[property]);
}

console.log(user["active"]); // nastaviti od 28:06