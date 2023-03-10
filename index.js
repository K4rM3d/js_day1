const example = require("./1_Example.js");
console.log(example());

const inputsArgs = require("./2_InputArgs.js");
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

const myStrCat = require("./11_myStrCat.js");
console.log(myStrCat("karim", "medar"));

const myPow = require("./12_myPow.js");
console.log(myPow(5, 6));

const myStrnCpy = require("./14_myStrnCpy.js");
console.log(myStrnCpy("hello world", 25));

const myEvilPow = require("./13_myEvilPow");
console.log(myEvilPow(4, 3));

const myCountItems = require("./15_myCountItems");
console.log(myCountItems(["test", "rat", "ok"]));

const myPushItem = require("./16_myPushItem");
console.log(myPushItem([14, 15, 16, 15], 17));

const myStrToWordArray = require("./17_myStrToWordArray");
console.log(myStrToWordArray(""));

const mySortWordArray = require("./18_mySortWordArray");
console.log(mySortWordArray(""));

const myRemoveTail = require("./19_myRemoveTail");
console.log(myRemoveTail([15, 16]));

const myRemoveN = require("./20_myRemoveN");
console.log(myRemoveN([4, 5, 6, 7, 8], 12));

const myAgeFilter = require("./21_myAgeFilter");
console.log(myAgeFilter([1, 15, 19]));

const mySum = require("./22_mySum");
console.log(mySum([]));

const myRemoveDuplicate = require("./23_myRemoveDuplicate");
console.log(myRemoveDuplicate(["AZ", "AZ", "Z"]));

const myConcat = require("./24_myConcat");
console.log(myConcat([], [12, 45]));

const myCreateObject = require("./25_myCreateObject");
console.log(myCreateObject("karim", "medar", 30));

const myUserDescription = require("./26_myUserDescription");
console.log(myUserDescription({ surname: "a", name: "A", age: 23 }));

const myObjectFilter = require("./27_myObjectFilter");
console.log(
  myObjectFilter([
    { name: "A", surname: "a", age: 25 },
    { name: "B", surname: "b", age: 30 },
    { name: "C", surname: "c", age: 17 },
    { name: "D", surname: "d", age: 18 },
  ])
);

const User = require("./28_myUserClass");
let mee = new User("Guilian", "Ganster", 22);
console.log(mee.presentation()); //"Je m'apelle Guilian Ganster, j'ai 22 ans"

const Admin = require("./29_myAdminClass");

let me = new Admin("Guilian", "Ganster", 22);
console.log(me.presentation()); //"Je m'apelle Guilian Ganster, j'ai 22 ans"
console.log(me.role); //"administrateur"

const myObjectValues = require("./30_myObjectValues");
console.log(
  myObjectValues({
    name: "Ganster",
    surname: "Guilian",
    age: 24,
    presentation: () => {},
  })
);
// "name: Ganster, surname: Guilian, age: 24"
