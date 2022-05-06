const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// clientWidth, clientHeight include padding, exclude margins, borders and scroll bars
const widthClient = box.clientWidth;
const heightClient = box.clientHeight;

console.log(widthClient, heightClient); // width - scrollWidth

// offsetWidth, offsetHeight include padding, margins, borders and scroll bars
const widthOffset = box.offsetWidth;
const heightOffset = box.offsetHeight;

console.log(widthOffset, heightOffset); // returns CSS value

//scrollWidth,scrollHeight include padding, exclude margins, borders and scroll bars
const widthScroll = box.scrollWidth;
const heightScroll = box.scrollHeight;

console.log(widthScroll, heightScroll); // returns full height of the element

// scrollTop, scrollLeft - hidden content
btn.addEventListener("click", () => {
  //   box.style.height = box.scrollHeight + "px";

  console.log(box.scrollTop);
});

// return pos of the elemn
console.log(box.getBoundingClientRect());

// return computed styles
const style = window.getComputedStyle(box);
console.log(style.display);

// To use root element - document.documentElement
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// window.scrollBy(x, y) - scroll from current position to (pos + x, pos + y)
// window.scrollTo(x, y) - scroll from the beginning of a page to (x, y)
