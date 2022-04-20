function strictFunc() {
  //   "use strict";
  //won't work with strict mode
  f = 15;
  console.log(f);
}
strictFunc();

//vars can't start with numbers, can't use reserved words, use camelCase
var qwe; //has pecularities with scope (hoisting - can be used before declaration)
let number = 5;
const leftBorderWidth = 1; //can't be changed if the type isn't array or object.

//Primitive data types
//Boolean
let bolleanVar = true;
//Null
let nullVar = null;
//Undefined
let undefinedVar;

//Numeric
//Number
let numberVar = 3;
//BigInt - ES11
let bigIntVar = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntVar);
//NaN (Not a number)
console.log(2 * "q");

//String
let stringVar = "qwerty";
//Symbol - unique and immutable
let symVar = Symbol("qwe");
console.log(symVar);
console.log(symVar.description);
//Objects - collections of properties
