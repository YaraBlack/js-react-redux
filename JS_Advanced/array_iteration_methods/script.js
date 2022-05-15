// Filter - returns new array
const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter((name) => {
  return name.length < 5;
});

console.log(shortNames);

//------------------------------------------------------

// Map - returns new array
const answers = ["IvAn", "AnnA", "Hello"];
const result = answers.map((item) => item.toLowerCase());

console.log(result);

//------------------------------------------------------

// every/some - returns boolean
const someArr = [4, "qwq", "zxeasdqwe"];

console.log(someArr.some((item) => typeof item === "number"));
console.log(someArr.every((item) => typeof item === "number"));

//------------------------------------------------------

// Reduce

const arr = [4, 5, 1, 3, 2, 6];
// 3 - starting value
const res = arr.reduce((sum, current) => sum + current, 3);

console.log(res);

const arrStr = ["apple", "pear", "plum"];

const resStr = arrStr.reduce((sum, current) => `${sum}, ${current}`);

console.log(resStr);

//------------------------------------------------------

// entries - transform object into matrix
const obj = {
  ivan: "person",
  ann: "person",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] === "person")
  .map((item) => item[0]);
console.log(newArr);
