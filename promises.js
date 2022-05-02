"use strict";

const MyMath = require(`./classes/MyMath`);

const prms = new Promise(promiseFunction);

prms.then(resolvedPromise).catch(rejectedPromise);

console.log(`Ovo nema veze sa promises`);

function resolvedPromise(value) {
    console.log(`Promise resolved with value ${value}`);
}

function rejectedPromise(value) {
    console.log(`Promise rejected with value ${value}`);
}

function promiseFunction(resolution, rejection) {
    setTimeout(function() {
        if (MyMath.random(10) > 3) {
            resolution(123);
        } else {
            rejection(`Rejected 123!`);
        }
    }, 3000);
}