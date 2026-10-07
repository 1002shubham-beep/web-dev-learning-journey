/*  You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.*/

let password = "qwertyrtyui";

function PasswordChecker(pass) {}

// function passwordCheck(pass) {
//   for (const alphabet in pass) {
//     function capitalCheck(alphabet) {
//       if (alphabet.charCodeAt(0) <= 90 && 65 <= alphabet.charCodeAt(0)) {
//         console.log("Capital");
//       }
//     }
//   }
// }
// let alphabet = "S";
// function capitalCheck(alphabet) {
//   if (alphabet.charCodeAt(0) <= 90 && 65 <= alphabet.charCodeAt(0)) {
//     console.log("Capital");
//   }
// }
// // passwordCheck();
// capitalCheck("T");

let str = "Shubham";
function PasswordChecker1(str) {
  for (const key in str) {
    if (key.charCodeAt[0] <= 90 && 65 <= key.charCodeAt[0]) {
      console.log("Capital");
    }
  }
}

PasswordChecker1("Shreya");
