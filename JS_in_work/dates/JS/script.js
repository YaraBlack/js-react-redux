// const now = new Date();
// const now = new Date("2020-05-01");
// const now = new Date(2020, 5, 1, 20); //2020-06-01T17:00:00.000Z     months start from 0, use Greenwhich timezone (GMT+3 current)
// const now = new Date(0); // 1970-01-01T00:00:00.000Z    0ms
// const now = new Date(-200000); // 1969-12-31T23:56:40.000Z      200000ms back from 0ms
const now = new Date();
// new Date.parse("2020-05-01"); // the same as above
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate()); //getHours, getMinutes, getSecond, getMilliseconds
// console.log(now.getDay()); // 0 - Sunday
// console.log(now.getUTCHours()); //UTC+0

// console.log(now.getTimezoneOffset()); // difference between local timezone and UTC+0 in minutes
// console.log(now.getTime()); // returns timestamp - amount of ms spent from 1970y

// console.log(now.setHours(18)); // works in browser but not in VSCode output
// console.log(now.setHours(18, 40)); // set Hours, Minutes
console.log(now.setHours(40)); // set the Day to the next day
console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3; // pow(i ,3)
}

let end = new Date();

alert(`Cycle finished in ${end - start} ms`);
