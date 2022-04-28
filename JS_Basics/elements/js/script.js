//Returns pseudo arrays - they don't have methods
const box = document.getElementById("box");
console.log(box);

const btns = document.getElementsByTagName("button");
console.log(btns);

const btn2 = document.getElementsByTagName("button")[1];
console.log(btn2);
console.log(btns[1]);

const circles = document.getElementsByClassName("circle");
console.log(circles);

//Returns pseudo array with one method - forEach
const hearts = document.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach((item) => {
  console.log(item);
});

//Retruns the first element that fits
const oneHeart = document.querySelector(".heart");
console.log(oneHeart);
