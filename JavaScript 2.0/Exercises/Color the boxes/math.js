//Round-off
let x = 64.89;
x = Math.round(x);
console.log(x);

//floor->round off down
//ceil->round off up
let r = 34.08;
let s = 34.99;
console.log(Math.ceil(r)); //35
console.log(Math.floor(s)); //34

//exponent
let t = 2;
console.log(Math.pow(t, 4)); //16

//sqroot
let u = 64;
console.log(Math.sqrt(u)); //8

//absolute value->distance away from zero
let v = -5.87;
console.log(Math.abs(v)); //5.87

//max
//min
console.log(Math.max(u, v)); //64
console.log(Math.min(u, v)); //-5.87

//PI

console.log(Math.PI); //3.141592653589793

//Random
let r1 = Math.random();
console.log(r1);

//Rolling a dice

let dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);

let dice20sided = Math.floor(Math.random() * 20 + 1);
console.log(dice20sided);

// console.log(`Dice 1 : ${dice1}, Dice 2 : ${dice2}, Dice 3 : ${dice3}`);

//rolling three dices together
let dice1;
let dice2;
let dice3;
document.getElementById("roll").onclick = function () {
  dice1 = Math.floor(Math.random() * 6 + 1);
  dice2 = Math.floor(Math.random() * 6 + 1);
  dice3 = Math.floor(Math.random() * 6 + 1);
  document.getElementById("label1").innerHTML = dice1;
  document.getElementById("label2").innerHTML = dice2;
  document.getElementById("label3").innerHTML = dice3;
};
