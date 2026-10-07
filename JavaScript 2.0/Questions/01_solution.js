/* The Magical Sorting Hat:
   Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.*/

let names = ["Shubham", "Shradha", "Aman", "Shreya"];
let houses = [];
function sortingHat(arr) {
  //   console.log(...arr);
  for (const element of arr) {
    if (element.length <= 6) {
      console.log(`${element} is assigned to Gryffindor`);
      houses.push("Gryffindor");
    } else if (element.length <= 8) {
      console.log(`${element} is assigned to Hufflepuff`);
      houses.push("Hufflepuff");
    } else if (element.length <= 12) {
      console.log(`${element} is assigned to Ravelclaw`);
      houses.push("Ravenclaw");
    } else if (element.length >= 12) {
      console.log(`${element} is assigned to Slytherin`);
      houses.push("Slytherin");
    }
  }
}

sortingHat(names);
console.log(houses);
