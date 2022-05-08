/*
1) Simple function
2) Object method
3) Function constructor - this in constructors and classes is new instance of an object
4) Set context manually (call, apply, bind)

*/

"use strict";
// While in strict mode 'this' returns undefiend
// Returns global object (Window in the browser, Object [global] in node.js) if used without strict mode
// function showThis() {
//   console.log(this); // undefined ("use strict"), Window, Object [global]
// }
// showThis();

//---------------------------------------------------------------------------------------------------------------------

// While in strict mode 'this' returns undefiend
// To solve the problem delete this before a and b - it'll conduct in using function closure
// function someFunc(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//     // return this.a + this.b;
//   }

//   console.log(sum());
// }

// someFunc(4, 5);

//---------------------------------------------------------------------------------------------------------------------

// If 'this' is used in the object, then context will refer to this object

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this); // { a: 20, b: 15, sum: [Function: sum] }
//     function shout() {
//       console.log(this); // undefined ("use strict"), Window, Object [global]
//     }
//     shout();
//   },
// };

// obj.sum();

//---------------------------------------------------------------------------------------------------------------------

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}!`);
//   };
// }
// let ivan = new User("Ivan", 23);
// ivan.hello();

//---------------------------------------------------------------------------------------------------------------------

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: "John",
// };

// //sets context
// sayName.call(user, "Smith"); // get arguments after obj call
// sayName.apply(user, ["Smith"]); // uses array to get arguments

// // creates new function with context
// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

//---------------------------------------------------------------------------------------------------------------------

const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this); // returns the element (this = e.target)
//   this.style.backgroundColor = "red";
// });

// Can't use arrow function (have to replace this to event.target)

// btn.addEventListener("click", () => {
//   console.log(this); // undefined
//   this.style.backgroundColor = "red"; // Error
// });

// Arrow function doesn't have it's own context, it takes the context of it's parent
const obj1 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num); // 5
    };
    say();
  },
};

obj1.sayNumber();

const obj2 = {
  num: 5,
  sayNumber: () => {
    console.log(this.num); // undefined
  },
};

obj2.sayNumber();
