const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};

//Calling options' method
options.makeTest();

//Destructuring
const { border, bg } = options.colors;
console.log(border, bg);

//Remove a property from an object
delete options.name;
console.log(options);

//One way of counting the amount of keys
let counter = 0;

//Iteration of an object's properties
//!!!for (let someKey in someObject)
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`Property ${i} has a value ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Property ${key} has a value ${options[key]}`);
    counter++;
  }
}

console.log(counter);

//!!!Another way of counting the amount of keys
console.log(Object.keys(options).length);
