//To String

//1) String()
console.log(typeof String(null));
console.log(typeof String(4));

//2) Concatenation
console.log(typeof (5 + ""));

const fontSize = 26 + "px";
console.log(fontSize);

//To Number
// 1) Number()
console.log(typeof Number("4"));

// 2) Unary +
console.log(typeof +"5");

// 3) parseInt()
console.log(typeof parseInt("15px", 10));

// To boolean

// 1) 0, "", null, undefined, NaN - false

// 2) Boolean()
console.log(typeof Boolean("4"));

// 3) !!
console.log(typeof !!"4");
console.log(!!"4");
