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

let testList = [ "item1", "item2", "item3", "item4", "item5",]

let index = testList.indexOf("new item")
console.log(`item 4 is at index ${index}`)

testList.splice(2,2,"new item")
console.log(testList)


// All the list function
listname.push() // Add to end of list 
listname.pop() // remove from the end list 
listname.unshift() //add to front of list 
listname.shift() //remove from the front of list 
Listname.splice() remove a item from the list  
