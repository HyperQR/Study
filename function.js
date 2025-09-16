function Greet(name){
    console.log(`Hello ${name}`)
}

function Productinfo(){
    let name = "shirt";
    let price = 50.99
    console.log(`- ${name} - ${price}`)
}


Greet("bob");
Greet("mark")
Productinfo()


function add(num1, num2){
    let result = num1 + num2
    console.log(`Answer is ${result}`)
}
add(45,10);

function fullName(firstName, lastName){
 let full = firstName + " " + lastName
 return full
}

fullName()

let somename1 = fullName("Darpan", "Soma")
console.log(fullName("Darpan", "Soma"))




