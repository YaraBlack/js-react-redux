const btn = document.querySelector("button"),
  overlay = document.querySelector(".overlay"),
  btns = document.querySelectorAll("button");

//1) Using onlick method. Cons: can be rewritten and the first use would be lost
// btn.onclick = () => alert("Click");

//2) Using addEventListener
// btn.addEventListener("click", () => alert("Click"));
// btn.addEventListener("click", () => alert("Click-click"));

//(eventType, callback)
// btn.addEventListener("click", (event) => {
//   console.log(event);
//   event.target.remove();

//   //   console.log("Hover");
// });

// let i = 0;
const deleteElement = (event) => {
  console.log(event.currentTarget);
  console.log(event.type);
  //   i++;
  //   if (i == 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
};

//Event queue goes from the inner element to the outer.
// overlay.addEventListener("click", deleteElement);
// btn.addEventListener("click", deleteElement);

const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});

//eventType, callback, options
btns.forEach((button) => {
  button.addEventListener("click", deleteElement, { once: true });
});
