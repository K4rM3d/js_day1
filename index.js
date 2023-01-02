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

const myEvilAge = require("./6_myEvilAge.js");
console.log(myEvilAge("15"));

const myAdd = require("./7_myAdd.js");
console.log(myAdd(5, 5));

const myEvilGetNbr = require("./8_myEvilGetNbr.js");
console.log(myEvilGetNbr("-6"));

const myAbs = require("./9_myAbs.js");
console.log(myAbs(-9));

const myEvilStr = require("./10_myEvilStr.js");
console.log(myEvilStr("karim medar"));
