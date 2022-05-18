// // Sets an item to the local storage
// localStorage.setItem("number", 5);

// // Returns an item from the local storage
// console.log(localStorage.getItem("number"));

// // Removes an item from the local storage
// localStorage.removeItem("number");

// // Clears the local storage
// localStorage.clear();

//--------------------------------------------------------------

const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
  checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isChecked", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg")) {
    form.style.backgroundColor = "white";
    localStorage.removeItem("bg");
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});

const person = {
  name: "Alex",
  age: 25,
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem("alex", serializedPerson);

console.log(JSON.parse(localStorage.getItem("alex")));
