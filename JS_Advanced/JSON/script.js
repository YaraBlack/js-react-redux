const person = {
  name: "Alex",
  tel: "+380111111111",
  parents: {
    mom: "Olga",
    dad: "Mike",
  },
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

// deep clone
const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = "Ann";
console.log(person);
console.log(clone);
