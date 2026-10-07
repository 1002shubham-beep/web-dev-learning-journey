// async function hello() {
//   console.log("Hello");
// }

function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather Data");
      resolve(200); //200 represents successful
    }, 2000);
  });
}
async function getWeatherData() {
  await api(); //1st call
  await api(); //2nd call
}

function printName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Name: ", name);
      resolve(200);
    }, 2000);
  });
}

// async function printNameasync() {
//   await printName("Shubham");
//   await printName("Shradha");
// }

(async () => {
  await printName("Shubham");
  await printName("Shradha");
})();

//IIFE : Immediately Invoked Function Expression
