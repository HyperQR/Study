// first thing we learned

let people = [];
let person = {
    "name": "Bob",
    "surname": "goob",
    "age": 99,
    "address" : {
        "Postcode": "HA9 JKS"
    }
}
console.log(`person age is ${person.age}`)
console.log(`Person name is ${person["name"]}`)
person.name = prompt("Enter new name: ")
person.surname = prompt("Enter new surname: ")
person.age = prompt("Enter new age: ")
console.log(person)


person.job = prompt("Enter a job: ")
console.log(person)

console.log(person.address.Postcode)


//second thing

function createPerson(){
    let person = [];
    person.name = prompt("Enter new name: ");
    person.surname = prompt("Enter new surname: ");
    person.age = parseInt(prompt("Enter new age: "));
    
    return person;
}

let people = [];

while(prompt("Add a person: ") == "y"){
    let newPerson = createPerson();
    people.push(newPerson)
}

console.log(people)


//second thing updated - with another loop

function createPerson(){
    let person = [];
    person.name = prompt("Enter new name: ");
    person.surname = prompt("Enter new surname: ");
    person.age = parseInt(prompt("Enter new age: "));
    
    return person;
}

function DisplayPerson(person){
    console.log(`${person.name}, ${person.surname} (${person.age})`)
}


let people = [];

while(prompt("Add a person: ") == "y"){
    let newPerson = createPerson();
    people.push(newPerson)
}

for(let person of people){
    DisplayPerson(person)
}
