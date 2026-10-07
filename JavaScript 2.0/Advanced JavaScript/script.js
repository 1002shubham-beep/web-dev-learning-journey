(async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 1000);
  });
})();

// let a = await sleep();

//!Destructuring

let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
console.log(x, y, rest);

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, b } = obj;
console.log(a, b);
let { c } = obj; //pulled out c from object obj
console.log(c);

function sum(a, b, c) {
  return a + b + c;
}

let arr = [1, 4, 9];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr)); //*...=spread operator used for opening like here ...arr means arr ko khol do

var helloy = function hello() {
  console.log("Howdy...");
};
console.log(helloy);
//works when function made with var and if console statement is written before the function declaration it would pring undefined but if the same function is made with const keyword then putting the console statement before will throw an error
