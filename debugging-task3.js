//Not Fixed version
//Debugging Exercise 03
//topic: Data types
//Instructions: The code below has errors in it. Copy and paste the code below into javascript compiler and fix it.
//Compiler Link: https://www.programiz.com/javascript/online-compiler/ 


//Part 1
let a = "20";
let b = "25";
let first_result = a + b;
console.log(`result of ${a} + ${b} was: ${first_result}, | should bee 45`);

//part 2;
//Hint: Some bugs are logic bugs. Think about what data types are currently used. Do you remember how to change a data type?
a = prompt("Enter a number:");
b = prompt("Enter a number:")
let second_result =  a + b
console.log(`result of ${a} + ${b} was ${second_result}`)

//Fixed version
//Debugging Exercise 03
//topic: Data types
//Instructions: The code below has errors in it. Copy and paste the code below into javascript compiler and fix it.
//Compiler Link: https://www.programiz.com/javascript/online-compiler/ 
//Part 1 

let a = 20; 
let b = 25; 
let first_result = a + b; 
console.log(`result of ${a} + ${b} was: ${first_result}, | should bee 45`); 
 
//part 2;
//Hint: Some bugs are logic bugs. Think about what data types are currently used. Do you remember how to change a data type?
let c = parseInt(prompt("Enter a number: "));
let d = parseInt(prompt("Enter a number: "));
let second_result =  c + d;
console.log(`result of ${c} + ${d} was ${second_result}`)
