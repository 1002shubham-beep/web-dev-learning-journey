//Get element by class
let boxes = document.getElementsByClassName("box");
boxes[1].style.backgroundColor = "red";

//Get element by id
let box3 = document.getElementById("box3");
box3.style.backgroundColor = "purple";

//Query Selector
let box1 = document.querySelector(".box");
box1.style.backgroundColor = "green";

let allbox = document.querySelectorAll(".box"); //node list
// allbox.style.backgroundColor = "yellow";//wont work

// for (element of allbox) {
//   element.style.backgroundColor = "yellow";
// }-->works
box3.matches("#box3"); //true
box3.matches("#box3"); //false

box3.closest(".container"); //container div

document.body.querySelector(".container").contains(box3); //true
