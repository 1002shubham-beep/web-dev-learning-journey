//Async-Await

// function printName(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Name: ", name);
//       resolve(200);
//     }, 2000);
//   });
// }

// (async () => {
//   await printName("Shubham");
//   await printName("Shradha");
// })();

// function getData(dataId) {}
// function data1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Loading MOdules...");
//       resolve(200);
//     }, 2000);
//   });
// }
// function data2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Loading Data...");
//       resolve(200);
//     }, 2000);
//   });
// }
// function data3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Processing Data..");
//       resolve(200);
//     }, 2000);
//   });
// }

// data1().then((res) => {
//   console.log(res);
//   data2().then((res) => {
//     console.log(res);
//     data3().then((res) => {
//       console.log(res);
//     });
//   });
// });

//Fetch API => Application Programming Interface

// const factpara = document.querySelector("#facts");
// const URL = "https://dogapi.dog/api/v2/facts";

// let getData = async () => {
//   console.log("Getting data...");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   factpara.innerText = data[0].text;
// };

// function printName(name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(name);
//       resolve(200);
//     }, 2000);
//   });
// }

// (async () => {
//   await printName("Shubham");
//   await printName("Shradha");
// })();

(async () => {
  console.log("Loading Data...");
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // let data = await x.text();
  let data = await x.json();
  console.log(data);
})();
