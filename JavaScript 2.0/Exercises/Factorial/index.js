let num = prompt("Enter the number");
let newArr = [];
for (let i = 1; i <= num; i++) {
  newArr.push(i);
}
console.log(newArr);

console.log(
  `The factorial of ${num} is ${newArr.reduce((prev, curr) => {
    return prev * curr;
  })}`,
);

let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(`The factorial of ${num} is ${fact}`);
