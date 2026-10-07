console.log("Arrays Tutorial");
let arr = [1, 2, 4, 5, 7];
// Index:  0, 1, 2, 3, 4
console.log(arr);
console.log(arr.length);
//Arrays are mutable
arr[1] = 64;
console.log(arr[0]);
console.log(arr[1]);

// let a = "Shubham";
// a[0] = "k";
// console.log(a[0]);

console.log(typeof arr); //object

//Array Methods

//1.toString
console.log(arr.toString());
//2.join
console.log(arr.join(" and "));
//3.pop
arr.pop();
console.log(arr);
console.log(arr.pop());
//4.push
arr.push(100);
console.log(arr);
//5.shift
arr.shift();
console.log(arr);
//6.unshift
arr.unshift(16);
console.log(arr);
//7.delete
delete arr[1];
console.log(arr);
console.log(arr.length);
//8.concat - >returns new array doesnt changes original
let arr2 = ["Shubham", "Shradha"];
console.log(arr.concat(arr2));
//9.sort
arr.sort();
console.log(arr);
//10.splice
arr.splice(0, 1, 101);
console.log(arr);
//11.slice
console.log(arr.slice(0, 2));
//12.reverse
arr2.reverse();
console.log(arr2);

let a = [89, 12, 56, 9];
// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element);
// }

//forEach loop
// a.forEach((value, index, arr) => {
//   console.log(value, index, array);
// });

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  if (!Object.hasOwn(obj, key)) continue;

  const element = obj[key];
  console.log(key, element);
}

for (const element of a) {
  console.log(element, a);
}
