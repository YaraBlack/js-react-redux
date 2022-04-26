//JS is prototype-based programming
const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

const john = {
  health: 100,
};

//Deprecated
// john.__proto__ = soldier;

// console.log(john.armor);
// john.sayHello();

//Set prototype of
Object.setPrototypeOf(john, soldier);
john.sayHello();

//Create
const jim = Object.create(soldier);
jim.sayHello();
