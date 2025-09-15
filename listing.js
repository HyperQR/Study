//listing
const Students = ["Darpan", "Khushal", "Dev"];
console.log(Students);
console.log(`first students is: ${Students[1]}`);

// List amount
let amount = Students.length;
console.log(`There are ${amount} Students`)

// loging last students
console.log(`Last students is ${Students[amount-1]}`)

// Adding item to list
const Cars = [];
console.log(`The amount of items: ${Cars.length}`)
Cars.push("BMW")
console.log(`The amount of items: ${Cars.length}`)
console.log(Cars)

let newCars = prompt("Add a car: ")
Cars.push(newCars)
console.log(Cars)
