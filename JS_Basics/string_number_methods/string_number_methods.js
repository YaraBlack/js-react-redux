const str = "teSt";
const arr = [1, 2, 4];

//Return length
console.log(str.length);
console.log(arr.length);
console.log(str[2]);

//Change of string's case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

//Slice supports negative numbers, whereas substring isn't.
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));

//substr takes n chars after x position in a string someString.substr(x,n) - deprecated
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
