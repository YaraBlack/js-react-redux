//Data pass by value (primitive types of data)
let a = 5,
  b = a;

b = b + 5;

console.log(b);
console.log(a);

//Data pass by reference
const obj = {
  a: 5,
  b: 1,
};

const copy = obj; //Reference

copy.a = 10;

console.log(copy);
console.log(obj);

//Shallow clone - work with the first level of the obj
function copyObj(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copyObj(numbers);

newNumbers.a = 10;
newNumbers.c.x = 3; // changes newNumbers and numbers

console.log(newNumbers);
console.log(numbers);

//Object.assign - merge one obj with another
const add = {
  d: 17,
  e: 20,
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "x";

console.log(newArray);
console.log(oldArray);

//Use of spread operator (...)
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

log(...num);

//In ES9 spread operator can be used for objects.
const array = ["a", "b"];

const someArray = [...array];

const q = {
  one: 1,
  two: 2,
};

const newQ = { ...q };

//(deep clone)
