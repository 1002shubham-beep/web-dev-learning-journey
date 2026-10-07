console.log("script.js initializing");
let boxes = document.querySelector(".container").children;
let randomColor = Math.random();
function getRandomColor() {
  let val1 = Math.floor(Math.random() * 256);
  let val2 = Math.floor(Math.random() * 256);
  let val3 = Math.floor(Math.random() * 256);
  return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
});
