let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);
let x = 1;
function main() {
  try {
    console.log("The sum is ", sum * x);
    return true;
  } catch (error) {
    console.log("Error aagya bhai");
    return false;
  } finally {
    console.log("Files are being closed and db connection is being closed");
  }
}
main();
//try statement checks the code and if any any error occurs catch code runs and displays error aagya bhai...so whats the use of dinally?..if in a function we write return i.e. to stop the further execution of code and to return finally still works unlike if it was written simply without being in finally
