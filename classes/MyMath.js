"use strict";

module.exports = class MyMath {
    static random(max) {
        return Math.floor(Math.random() * max);

        //8.8 => Math.floor(8.8) => 8
        //8.5 => Math.ceil(8.8) => 9
    }
}