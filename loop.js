let count = 0;

while( count < 10){
    console.log(`Count is currently ${count}`)
    count = count + 1;
    
}

console.log("Program end")

 
let people = [];
console.log(people);
let choice = prompt("Add a person? y/n: ");
while(choice == "y"){ //loop starts essentiall an if statement but rapoate
    people.push(prompt("Enter new person name:"));
    choice = prompt("Add a person? y/n");
} //block ends, code will go hack to Line s
console.log(people);
console.log("program end")

let count = 0;
let num = Number(prompt("enter the number: "))

while( count < num){
    console.log("Hi")
    count = count + 1;
}


