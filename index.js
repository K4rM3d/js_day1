const example = require("./1_Example.js");

console.log(example());

const inputsArgs = require("./2_InputsArgs.js");
console.log(inputsArgs(42, 84));

const name = require("./3_myName.js");
console.log(name());

const getNbr = require("./4_myGetNbr.js");
console.log(getNbr(0));

const myAge = require("./5_myAge.js");
console.log(myAge(18));

const myEvilAge = require("./6_myEvilAge");
console.log(myEvilAge("15"));

const myAdd = require("./7_myAdd");
console.log(myAdd(5, 5));

const myEvilGetNbr = require("./8_myEvilGetNbr");
console.log(myEvilGetNbr("-6"));

const myAbs = require("./9_myAbs");
console.log(myAbs(-9));
