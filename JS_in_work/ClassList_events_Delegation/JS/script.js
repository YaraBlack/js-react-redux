//classList
const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length);

// Returns a name of a class by it's index
// console.log(btns[0].classList.item(1));

// Adds a new class
// btns[0].classList.add("red", "qweqwe");

// Removes aclass
// btns[0].classList.remove("blue");

// If class is present in the element - removes it, if isn't present - adds
// btns[0].classList.toggle("blue");

// contains() - check if an elements contains a class
// btns[1].classList.add("red");
// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }

// btns[0].addEventListener("click", () => {
//   //   if (!btns[1].classList.contains("red")) {
//   //     btns[1].classList.add("red");
//   //   } else {
//   //     btns[1].classList.remove("red");
//   //   }

//   btns[1].classList.toggle("red");
// });

// console.log(btns[0].className);

//Events delegation -------------------------------------------------------------------------------
const wrapper = document.querySelector(".btn-block");

wrapper.addEventListener("click", (event) => {
  //   console.dir(event.target);
  //   if (event.target && event.target.tagName == "BUTTON") {
  //     console.log("Hello");
  //   }

  if (event.target && event.target.matches("button.red")) {
    console.log("Hello");
  }
  //   if (event.target && event.target.classList.contains("blue")) {
  //     console.log("Hello");
  //   }
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
