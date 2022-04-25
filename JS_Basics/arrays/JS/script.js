const arr = [1, 2, 3, 6, 8];

//Returns and deletes the last element from an array
console.log(arr.pop());

//Adds an element to the end of an array
arr.push(10);
console.log(arr);

//Removes the first element from an array
arr.shift();
console.log(arr);

//Adds an element as the first in an array
arr.unshift(1);
console.log(arr);

//Array interation
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("\n");

//"for of" advantage is use of "break" and "continue"
for (let value of arr) {
  console.log(value);
}
//returns the last element's index +1
console.log(arr.length);

//forEach
//item - element in the array;
//i - index of the element
//arr - pointer to the array which is used in the function
arr.forEach((item, i, arr) => {
  console.log(`${i}: ${item} of the array ${arr}`);
});

const str = prompt("", "");
//Returns an array with elements splitted by a separator
const products = str.split(", ");

//Returns a string of elements separated with "; "
console.log(products.join("; "));

//Sorts elements of an array as a string
products.sort();
console.log(products);

const newArr = [1, 15, 12, 100, 4];

//sort uses the Quicksort algorithm
newArr.sort(compareNum);
console.log(newArr);

function compareNum(a, b) {
  return a - b;
}

//Pseudoarray doesn't have any methods
