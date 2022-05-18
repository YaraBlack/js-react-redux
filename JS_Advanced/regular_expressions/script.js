// new RexExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt("Enter you name");
// const reg = /n/gi;

// const ans = prompt("Enter a number");
// const reg = /\w/g;

/* flags
- i - case insensitive
- g - returns all results
- m - multistring mode
*/

/* metacharacters
\d - digits
\w -  metacharacter matches word characters (wchar) a-z, A-Z, 0-9, including _
\s - spaces
*/

/* negative metacharacters
\D - not digits
\W - not word charachters
*/

// console.log(ans.search(reg)); // -1 - no result, i - index in a string; returns only first encounter
// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/./g, "*")); // . = *
// console.log(pass.replace(/\./g, "*")); // . = .

// console.log("12-34-56".replace(/-/g, ":"));

// RegExp.test() - returns boolean
// console.log(reg.test(ans));

const str = "My name is R2D2";
console.log(str.match(/\w\d\w\d/i)); // wchar+digit+wchar+digit
console.log(str.match(/\D/gi)); // not a word character
