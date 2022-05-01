// //returns head
// console.group(document.head);
// //returns body
// console.group(document.body);
// //returns all elements included inside HTML tag
// console.group(document.documentElement);

//Nodes ------------------------------------------------------------------------------------

//returns all element's children
// console.log(document.body.childNodes);

// //returns first node child
// console.log(document.body.firstChild);
// //returns last node child
// console.log(document.body.lastChild);

//returns parent node
// console.log(document.querySelector("#current").parentNode.parentNode);

//returns element's sibling node
// console.log(document.querySelector("[data-current='3']").nextSibling);
// console.log(document.querySelector("[data-current='3']").previousSibling);

//Elemenets --------------------------------------------------------------------------------

//returns element's next or previous element
// console.log(document.querySelector("[data-current='3']").nextElementSibling);
// console.log(
//   document.querySelector("[data-current='3']").previousElementSibling
// );

// //returns parent element
// console.log(document.querySelector("#current").parentElement);

//returns first element child
// console.log(document.body.firstElementChild);
//returns last element child
// console.log(document.body.lastElementChild);

//create an analogue of childNodes that returns children as elements excluding text nodes
for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue;
  }
  console.log(node);
}
