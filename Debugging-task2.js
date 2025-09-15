// Not Fixed version

//Debugging Exercise 02
//topic: Variables
//Instructions: The code below has errors in it. Copy and paste the code below into javascript compiler and fix it.
//Compiler Link: https://www.programiz.com/javascript/online-compiler/ 

console.log("Please complete the registration form");
let firstName = console.log("First Name: ");
let last Name = prompt("Last Name: ");
let age = prompt("Age: ");

//make sure correct brackets are being used.
console.log("Form complete, thak you");
console.log("-----------------------");
console.log("${firstName} ${lastName}, age ${age}");





// Fixed Version
//Debugging Exercise 02
//topic: Variables
//Instructions: The code below has errors in it. Copy and paste the code below into javascript compiler and fix it.
//Compiler Link: https://www.programiz.com/javascript/online-compiler/ 

console.log("Please complete the registration form");
let firstName = prompt("First Name: ");
let lastName = prompt("Last Name: ");
let age = prompt("Age: ");

//make sure correct brackets are being used.
console.log("Form complete, thak you");
console.log("-----------------------");
console.log(`${firstName} ${lastName}, age ${age}`);
