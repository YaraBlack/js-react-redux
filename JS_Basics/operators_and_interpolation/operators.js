//Interpolation
let userName = "Qwe";
console.log(`Hello ${userName}!`); //Hello Qwe!

//String concotination
console.log("Qwe" + "rty"); //Qwerty

//Number changing to string
console.log(1 + "5"); // 15
console.log("5" + 1); // 51

//String changing to number with unary operator '+'
console.log(1 + +"5"); // 6

//Increment and decrement
let a = 10;
let b = 10;

// console.log(a++); //10 - returns original value then changes it
// console.log(b--); //10
console.log(++a); //11 - returns changed value
console.log(--b); //9

//Comparison
//Type comparison with "==" operator (but !=)
console.log(4 + 5 == "9"); // true

//Value comparison with "===" operator (but !==)
console.log(4 + 5 === "9"); // false
console.log(4 + 5 === 9); // true

//Remainder of division with "%" operator
console.log(10 % 3); // 1

//Logical operator "and" - "&&"
let firstVar = true,
  secondVar = false;
console.log(firstVar && secondVar); // false
firstVar = true;
secondVar = true;
console.log(firstVar && secondVar); // true
firstVar = false;
secondVar = false;
console.log(firstVar && secondVar); // false

//Logical operator "or" - "||"
let someVar = true;
let anotherVar = false;
console.log(someVar || anotherVar); //true
someVar = true;
anotherVar = true;
console.log(someVar || anotherVar); //true
someVar = false;
anotherVar = false;
console.log(someVar || anotherVar); //false

//Logical "not" - "!"

let q = true;
console.log(!q); // false

//Ternary operator
//(condition) ? exec if true : exec if false
let someNumber = 2;
someNumber === 2 ? console.log("Equal") : console.log("Not equal");

// Spread operator

const video = ["youtube", "vimeo", "rutube"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "vk", "facebook"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

// Rest operator

const log1 = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log1("basic", "rest", "operator", "usage");

// Arguments by default

function calcOrDouble(number, basis = 2) {
  // basis = basis || 2;
  console.log(number * basis);
}

calcOrDouble(3);
