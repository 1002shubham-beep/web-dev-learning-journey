// //Callbacks
// // function sum(a, b) {
// //   console.log(a + b);
// // }
// // function calculator(a, b, sumcallback) {
// //   sumcallback(a, b);
// // }

// // calculator(4, 5, (a, b) => {
// //   console.log(a - b);
// // });

// function hello() {
//   console.log("Hello");
// }
// setTimeout(hello, 2000); //calback,time

// //nesting
// let age = 19;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("Teen");
//   } else {
//     console.log("Middle");
//   }
// } else {
//   console.log("Child");
// }
// //loop ke andar loop ->nesting
// //nested if-else

// //Callback Hell: Nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom).This style of programming becomes difficult to understand & manage.

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// // //Callback Hell (Pyramid of Doom)
// getData(1, () => {
//   // console.log("Getting data2");
//   getData(2, () => {
//     // console.log("Getting data3");
//     getData(3, () => {
//       // console.log("Getting data4");
//       getData(4);
//     });
//   });
// });

// //Callback Hell = when callback functions are nested and stacked over each other the code becomes complex
// function checkName(name, funct) {
//   setTimeout(() => {
//     console.log("Name: ", name);
//     if (funct) {
//       funct();
//     }
//   }, 2000);
// }
// //function takes two parameters name and func
// //whole code inside function is in a settimeout while will ececute after 2000ms
// //it will execute what is written inside it here its a arrow function which console.log("Name: ",name);
// //after that the if condition just checks wether another parameter exists or not and if it does execute that
// //the next parameter must be a function for execution

// checkName("Justin Bieber", () => {
//   console.log("Running Code2");
//   checkName("Michael Jackson", () => {
//     console.log("Running Code3");
//     checkName("Charlie Puth", () => {
//       console.log("Running Code4");
//       checkName("Bruno Mars");
//     });
//   });
// });

// function print(name, func) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Name: ", name);
//       if (func) {
//         func();
//       }
//     }, 5000);
//   });
// }
//the print function is being executed when we give some paramater in it
//but it returns a promise that the given function will be executed which is here a timeout fucntion which console.log("Name: ",name);
//if this executes successfult then the promise is resolved and show the given message successful
//if we write reject("error") the promise wont execute and will be in rejected state and show error message

// print("Keanu", () => {
//   print("Brad", () => {
//     print("Mathew");
//   });
// });

//Promises
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve("Successful");
//   //   reject("Error 404");
// });

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("Successful");
//     reject("Error");
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("Promise fulfilled", res);
// });
// promise.catch((err) => {
//   console.log("Some error occured", err);
// });
//here getPromise function is being executed and returning a promise which is console.log("I am a promise");
//if we code resolve("Successfull") the code is successfully executed and then automatically .then code runs
//if we code reject("Error")the code is not executed and then automatically .catch code runs

function async1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("Successful");
    }, 4000);
  });
}
function async2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("Successful");
    }, 4000);
  });
}

console.log("fetching data1...");
async1().then((res) => {
  console.log(res);
  console.log("fetching data2...");
  async2().then((res) => {
    console.log(res);
  });
});
//we have made two functions here async1() and async2()
//both of them return promises and resolve
//when async1 is resolved .then function for async1 starts executing and prints consolde.log(res); only after this async2() and prints data2 if reolved its .then function executes

//Promise chain
let p1 = checkName("Shubh");
p1.then((res) => {
  console.log(res);
});
