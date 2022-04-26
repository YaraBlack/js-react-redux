//Function without arguments
function showFirstMessage() {
  console.log("Hello World!");
}

showFirstMessage();

//Function with an argument
function showText(text) {
  console.log(text);
}

showText("Some text");

//Function declaration - can be called before it's declared
function foo() {}

//Function expression - can be called only after it's declared
const qwe = function () {};

//Arrow function
const a = (a, b) => a + b;
console.log(a(2, 3));

//Callback functions - calls a function inside another function and in the right order
function learnJS(lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

learnJS("JavaScript", () => console.log("Done"));
