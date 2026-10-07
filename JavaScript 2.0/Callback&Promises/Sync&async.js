//Synchronous Programming
// console.log("one");
// console.log("two");
// console.log("three");

//Asynchronous Programming
function print() {
  console.log("To infinity and beyond");
}
// setTimeout(() => {
//   console.log("I am Batman");
// }, 3000);

setTimeout(print, 2000); //2 seconds = 2000 miliseconds
