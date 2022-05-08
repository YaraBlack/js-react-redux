function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

const ivan = new User("Ivan", 28);
const alex = new User("Alex", 20);

console.log(ivan, alex);
ivan.hello();
alex.hello();

// To modify the prototype use *.prototype.name_of_function_or_prop
User.prototype.exit = function (name) {
  console.log(`User ${this.name} has left`);
};

ivan.exit();
alex.exit();
