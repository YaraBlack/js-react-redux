// const timerID = setTimeout(
//   function (text) {
//     console.log(text);
//   },
//   2000,
//   "Hello"
// );
// time is counted in ms
const btn = document.querySelector(".btn");
let timerID,
  i = 0;

function myAnimation() {
  const elem = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

// btn.addEventListener("click", () => {
//   //   const timerID = setTimeout(logger, 2000);
//   // setInterval doesn't count in function's time of execution
//   timerID = setInterval(logger, 500);
// });

// function logger() {
//   if (i === 3) {
//     // Stops setTimeout
//     clearInterval(timerID);
//   }
//   console.log("text");
//   i++;
// }

// Recursive setTimeout will wait untill function's completed
// let id = setTimeout(function log() {
//   console.log("Hello");
//   id = setTimeout(log, 500);
// }, 500);
