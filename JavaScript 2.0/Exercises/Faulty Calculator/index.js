//Faulty Calculator
let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};
if (random > 0.1) {
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} else {
  alert(`Faulty Calculator activated`);
  b = obj[b];
  alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
