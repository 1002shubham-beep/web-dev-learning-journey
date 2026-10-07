//Array Methods
//1.map()
// let superheroes = ["Batman", "Spiderman", "Thor", "Hulk"];
// superheroes.map((val) => {
//   console.log(val.toUpperCase());
// }); // let arr = [1, 13, 5, 7, 11];
// let newarr = [];
// for (let element of arr) {
//   element *= element;
//   newarr.push(element);
// }
// console.log(newarr);

//from map() method
// let newarr = a.map((val, index, array) => {
//   return val * val;
// });
// console.log(newarr);

//2.filter()
// const a = [1, 2, 3, 4, 5];
// let newa = a.filter((val) => {
//   return true ? val > 2 : false;
// });
// console.log(newa);

//3.reduce()
let nums = [1, 2, 3, 4];
// console.log(
//   nums.reduce((prev, curr) => {
//     return prev + curr;
//   }),
// );

console.log(
  nums.reduce((prev, curr) => {
    return curr ? curr > prev : prev;
  }),
);
