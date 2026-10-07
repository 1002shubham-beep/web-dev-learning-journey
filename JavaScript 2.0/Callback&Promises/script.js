console.log("Shubham"); //1
console.log("Shradha"); //2

setTimeout(() => {
  console.log("I am inside settimout");
}, 0); //4
setTimeout(() => {
  console.log("I am inside settimout2");
}, 0); //5

console.log("The End"); //3
const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("Shubh");
  document.head.append(sc);
};
loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback,
);
