// var v1 = "Shubham";
// var v2 = "Shradha";
// console.log(v1);
// console.log(v1 + v2);
// var _a = "Shubham";

var a = "Shubham";
var b = 6;
b = b + 1;
console.log(b);
console.log(typeof a + typeof b);
// const a1 = 90;
// a1 = a1 + 10; //Not Allowed where a1 is constant
let a1 = 16;
{
  let a1 = 18;
  console.log(a1);
}
console.log(a1);

var b1 = 16;
{
  var b1 = 18;
  console.log(b1);
}
console.log(b1);

let z;
console.log(z); //undefined

//Primitive Data Types
let p = "Shubham";
let q = 64;
let r = 8.88;
const s = true;
let t = undefined;
let u = null;

console.log(p, q, r, s, t, u);
console.log(typeof p, typeof q, typeof r, typeof s, typeof t, typeof u);

//Object
let o = {
  name: "Shubham",
  age: 20,
  "duty role": "Batman",
};
console.log(o);
o.salary = "100crores";
console.log(o);
o.ishandsome = true;
console.log(o);
