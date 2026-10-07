//!Objects in JS
const student = {
  name: "Shubham",
  rollNo: 78,
  marks: 96.8,
  printMarks: function () {
    console.log("Marks= ", this.marks); //student.marks we cannot access marks property we need this keyword for accessing it
  },
};
//whatever object is created in javascript a special property is automatically created in it that is called as prototype which is itself is an object which also has some own properties and methods

//for example we have studied in array(object) methods like push() which is a method but this method is inside a special object created by javascript in any object we create

const employee = {
  //   calculateTax() {
  //     console.log("Tax rate is 10%");
  //   },
  calculateTax: function () {
    console.log("Tax rate is 10%");
    console.log(`Salary deducted as tax = ${this.salary / 10}`);
  },
};

const karanArjun = {
  salary: 50000,
};

karanArjun.__proto__ = employee; //this is used to set a prototype
//this way the methods and properties of employee object is stored as a prototype in karanArjun

const Shubham = {
  salary: 4000000,
};
const Shradha = {
  calculateTax: function () {
    console.log("Tax rate is 20%");
    console.log(`Salary deducted as tax = ${this.salary / 20}`);
  },
  salary: 3000000,
};

Shubham.__proto__ = employee;
Shradha.__proto__ = employee;
//*IMP: If object & prototype have same method. object's method will be used. like happening here in Shradha object

//!----------Classes in JS----------
//objects can be created directly as mentioned before and also can be created through classes
//Class is a program-code template or blueprint for creating objects.

class Toyota {
  constructor(brand, mileage) {
    this.brand = brand;
    this.mileage = mileage;
    // console.log("Constructor is invoked");
    // console.log("Brand: ", brand);
    // console.log("Mileage: ", mileage);
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  //   setBrand(brand) {
  //     this.brandName = brand;
  //   }
}

let Fortuner = new Toyota("Fortuner", 10);
// console.log(Fortuner);
// Fortuner.setBrand("Toyota");

let Lexus = new Toyota("Lexus", 12);
// console.log(Lexus);
// Lexus.setBrand("Toyota");

// Constructor() is a special function which is automatically invoked by new
//and if constructor is not created manually then the classes automatically makes a constructor by its own

//!----------Inheritance----------
//passing down properties & methods from parent class to child class

class Parent {
  hello() {
    console.log("Hello");
  }
}

class Child extends Parent {}

let obj = new Child();

class Person {
  constructor() {
    console.log("Entering Parent Constructor...");
    this.species = "Homo Sapiens";
  }
  sleep() {
    console.log("Sleeping...");
  }
  eat() {
    console.log("Eating...");
  }
  solve() {
    console.log("Solves nothing");
  }
}

class Engineer extends Person {
  constructor(branch) {
    console.log("Entering Child Constructor...");
    super(); //to invoke parent class constructor
    this.branch = branch;
    console.log("Exiting Child Constructor...");
  }
  solve() {
    console.log("Solving Problems");
  }
}

class Doctor extends Person {
  treats() {
    console.log("Treating Patients...");
  }
}

class Idle extends Person {}

let Shubh = new Engineer();
let Shreya = new Doctor();
let Aman = new Idle();

//!----------super Keyword----------
//the super keyword is used to call the constructor of its parent class to access the paren't properties and methods

let eng = new Engineer("Chemical");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Name: ", this.name);
    console.log("Email: ", this.email);
  }
}

let Shubham1 = new User("Shubham", "1002shubham@gmail.com");
Shubham1.viewData();

let Data = "Secret Information";

class Admin extends User {
  editData() {
    Data = "Open Information";
  }
}
let shradha1 = new Admin("Shradha", "shradha121@gmail.com");
shradha1.viewData();
shradha1.editData();
