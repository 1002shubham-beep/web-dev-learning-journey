document.body.querySelector(".child").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Child was clicked");
});

document.body.querySelector(".container").addEventListener("click", (e) => {
  e.stopPropagation();
  alert("Container was clicked");
});

document.body
  .querySelector(".childcontainer")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    alert("Child container was clicked");
  });
function getRandomColor() {
  let val1 = Math.floor(Math.random() * 256);
  let val2 = Math.floor(Math.random() * 256);
  let val3 = Math.floor(Math.random() * 256);
  return `rgb(${val1},${val2},${val3})`;
}
// let a = setInterval(() => {
//   document.body.querySelector(".childcontainer").style.backgroundColor =
//     getRandomColor();
// }, 1000);

// console.log(a);
//clearInterval()->to stop the interval function

let b = setTimeout(() => {
  document.body.querySelector(".childcontainer").style.backgroundColor =
    getRandomColor();
}, 5000);

console.log(b);
//clearTimeout()->to stop the timeout function
