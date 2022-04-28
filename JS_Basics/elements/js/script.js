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

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});

const div = document.createElement("div");
const text = document.createTextNode("Some text");

div.classList.add("black");

//-------------------------------------------------------------------
const wrapper = document.querySelector(".wrapper");
//-------------------------------------------------------------------
//can be found by using wrapper parent instead of document
// const hearts = wrapper.querySelectorAll(".heart");
// const oneHeart = wrapper.querySelector(".heart");

//-------------------------------------------------------------------

//append - adds an element to the end
// document.body.append(div);
// document.querySelector(".wrapper").append(div);

wrapper.append(div);

//prepend - adds an element to the beginning
// wrapper.prepend(div);

//before - adds an element before the specified element
// hearts[0].before(div);

//after - adds an element after the specified element
// hearts[0].after(div);

//remove - removes an element from the DOM
// circles[0].remove();

//replaceWith - replaces an element with another
// hearts[0].replaceWith(circles[0]);

//Deprecated - uses parent
//Same as append
// wrapper.appendChild(div);

//inserts element before another element inside of a parent element, takes 2 vars: (element_to_insert, target_element)
// wrapper.insertBefore(div, hearts[0]);

//removes child node of a parent
// wrapper.removeChild(hearts[1]);

//replace
// wrapper.replaceChild(circles[0], hearts[0]);

//-----------------------------------------------------

// div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";

div.innerHTML = "<h1>Hello World</h1>";
//insert html:
//beforebegin - insert before the element
//afterbegin - insert at the start of the element (inside)
//beforeend - insert at the end of the element (inside)
//afterend - insert after the element
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
