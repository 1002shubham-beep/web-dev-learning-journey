// let obj = {
//   a: 1,
//   b: "Shubham",
// };
// console.log(obj);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; //i have added animal as a prototype in rabbit object
// console.log(rabbit);

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object is created...");
  }
  eats() {
    console.log("Kha raha hoon");
  }
  jumps() {
    console.log("Kud raha hoon");
  }
}

let a = new Animal("Bunny");
console.log(a);
