// let marks = prompt("Enter your marks");
// parseInt(marks) >= 33 ? alert("Pass") : alert("Fail");

//!Switch Case
// let key = prompt("Which fruit would you like");
// switch (key) {
//   case "orange":
//     console.log("Oranges are of 3$ per kg");
//     break;
//   case "apple":
//     console.log("Apples are for 2$ per kg");
//     break;
//   case "mango":
//     console.log("Mangoes are for 5$ per kg");
//     break;
//   default:
//     console.log(`We ran out of ${key}`);
//     break;
// }

// let age = prompt("Enter your age");
// parseInt(age) >= 18
//   ? console.log("You can drive")
//   : console.log("You cannot drive");

//!Loops & Functions

let obj = {
  harry: 98,
  rohan: 70,
  aakash: 7,
};
for (const element in obj) {
  console.log(`The marks of ${element} is ${obj[element]}`);
}

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 100);
