//Callback Hell

// function printName(name, func) {
//   setTimeout(() => {
//     console.log("Name: ", name);
//     if (func) {
//       func();
//     }
//   }, 2000);
// }

// printName("Shubham", () => {
//   console.log("Getting second name");
//   printName("Shradha", () => {
//     console.log("Getting third name");
//     printName("Shreya", () => {
//       console.log("Getting fourth name");
//       printName("Wolverine");
//     });
//   });
// });

//Promises
//First State = pending
//Second State = Resolved
//Third State = Rejected

// const getPromise = (name) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Name: ", name);
//       resolve(200);
//     }, 2000);
//   });
// };

// getPromise("Shubham").then((res) => {
//   getPromise("Shradha");
// });

//Async-Await

// function printName(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Name:", name);
//       resolve(200);
//     }, 2000);
//   });
// }

// (async () => {
//   await printName("Shubham");
//   await printName("Shradha");
//   await printName("Shreya");
// })();

// const studentInfo = {
//   name: "Shubham Prasad",
//   number: 8962051002,
// };

// console.log(studentInfo);

// let str;
// typeof str == String;

// str = "shubham";
// console.log(str);
// console.log(typeof str);

// const obj = {
//   name: "Shubham",
//   rollNum: 12,
// };

// obj.name = 78;
// console.log(obj);
// console.log(typeof obj.name);
// obj.year = "Second";
// console.log(obj);

// const word = {
//   endeavour: "try hard to do or achieve something",
//   inception:
//     "the establishment or starting point of an institution or activity",
//   folly: "lack of good sense; foolishness",
// };

// console.log(word.endeavour);

// let age = prompt("Enter your age");

// if (parseInt(age) >= 10 && parseInt(age) <= 20) {
//   console.log("Age lies between 10 and 20");
// } else {
//   console.log("Age doesn't lies between 10 and 20");
// }

// let fruitName = prompt("Enter fruit name");

// switch (fruitName) {
//   case "orange":
//     console.log("Oranges are 50 rupees/kg ");
//     break;
//   case "mango":
//     console.log("Mangoes are 100 rupees/kg");
//     break;
//   default:
//     console.log(`Sorry we are out of ${fruitName}`);
//     break;
// }

// let num = prompt("ENter your number");

// if (num % 2 == 0 && num % 3 == 0) {
//   console.log(`${num} is divisible by 2 and 3`);
// } else if (num % 2 == 0 && num % 3 != 0) {
//   console.log(`${num} is divisible by 2 but not 3`);
// } else if (num % 3 == 0 && num % 2 != 0) {
//   console.log(`${num} is divisible by 3 but not 2`);
// }

// let age = prompt("Enter your age");
// age >= 18 ? console.log("You can drive") : console.log("You cannot drive");

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// const Product = {
//   name: "Parker pen",
//   price: 60,
//   ratings: 5,
// };
// for (const key in Product) {
//   console.log(key); //prints the key
//   console.log(Product[key]); //prints the value
// }

// let str = "Shubham";
// for (const element of str) {
//   console.log(element);
// }
// //str must be iterable

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// const obj = {
//   harry: 98,
//   rohan: 70,
//   aakash: 7,
// };

// for (const key in obj) {
//   console.log(`The marks of ${key} is ${obj[key]}`);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(obj[i]);
// }

// for (let i = 0; i < 3; i++) {
//   let key = obj[i];
// }

// let gameNum = 45;
// let userNum = 12;

// while (userNum != gameNum) {
//   console.log("Try again");
// }
// console.log("You won");

let sentence = `My name "is" shubha'm`;
console.log(sentence);

let name = "shuBHam";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.toCapitalize());
