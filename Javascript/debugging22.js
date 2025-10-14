
//unfixed version
//Debugging Exercise 11
//topic: Objects, functions, loops
//Instructions: The code below has errors in it. Copy and paste the code below into javascript compiler and fix it.
//Compiler Link: https://www.programiz.com/javascript/online-compiler/ 

//Shop products and their prices, 1 mistake here
let products = [
    (
        "name" : "playstation 5",
        "price" : 450.00
    ),
    {
        "name" : "nintendo switch 2",
        "price" : 395.00
    },
    {
        "name" : "lambo",
        "price" : 150000.00
    },
    {
        "name" : "kitkat 4 pack",
        "price" : 2.00 //inflation hit hard :(
    }
]
let chekoutBasket = [] //user checkout basket defined here

// 1 mistake in this function
function displayProducts(){
    for(let productIndex in products){
        let currentProduct = products[product]
        console.log(` ${productIndex} - ${currentProduct.name} (£${currentProduct.price})`)
    }
}

// 1 mistake in this function
function calculateTotal(){
    let total = 0;
    for(let product in chekoutBasket){
        total = total + product.price;
    }
    return total;
}

// 1 mistake in this function
function shopMenu(){
    //display the products an exit option, as well as the current basket
    console.log("Current basket: ", chekoutBasket);
    console.log("---------------------------")
    displayProducts(products)
    console.log(" 4 - go to checkout")
    
    //get user choice and return it out of the function
    let choice = parseInt(prompt("Select Option: "))
    choice
}

// 0 mistakes in this while loop, keep as is (read the code though and try to figure out how it works)
while(true){ //infinite loop, will stop the loop by breaking out of it if user selects option 4
    console.log("\n")
    let option = shopMenu() //display the menu and get user selection
    
    //check for wrong user input, and for exit option
    if(isNaN(option)){
        continue; //not a valid number, restart loop
    }
    if(option < 0 || option > 4){
        continue; //we don't have options  below 0 or above 4, restart loop if selected
    }
    if(option == 4){
        break; //stop the loop early, user selected exit option
    }
    
    chekoutBasket.push(products[option]); //add the selected product to basket
}

let totalPrice = calculateTotal();
console.log("Your total to pay is: £" + totalPrice)




//fixed
//Debugging Exercise 11
//topic: Objects, functions, loops
//Instructions: The code below has errors in it. Copy and paste the code below into javascript compiler and fix it.
//Compiler Link: https://www.programiz.com/javascript/online-compiler/ 

//Shop products and their prices, 1 mistake here
let products = [
    {
        "name": "playstation 5",
        "price" : 450.00
    },
    {
        "name" : "nintendo switch 2",
        "price" : 395.00
    },
    {
        "name" : "lambo",
        "price" : 150000.00
    },
    {
        "name" : "kitkat 4 pack",
        "price" : 2.00 //inflation hit hard :(
    }
]
let chekoutBasket = [] //user checkout basket defined here

// 1 mistake in this function
function displayProducts(){
    for(let productIndex in products){
        let currentProduct = products[productIndex];
        console.log(` ${productIndex} - ${currentProduct.name} (£${currentProduct.price})`)
    }
}

// 1 mistake in this function
function calculateTotal(){
    let total = 0;
    for(let product of chekoutBasket){
        total = total + product.price;
    }
   
    return total;
}

// 1 mistake in this function
function shopMenu(){
    //display the products an exit option, as well as the current basket
    console.log("Current basket: ", chekoutBasket);
    console.log("---------------------------")
    displayProducts(products)
    console.log(" 4 - go to checkout")
    
    //get user choice and return it out of the function
    let choice = parseInt(prompt("Select Option: "));
    return choice
}



// 0 mistakes in this while loop, keep as is (read the code though and try to figure out how it works)
while(true){ //infinite loop, will stop the loop by breaking out of it if user selects option 4
    console.log("\n")
    let option = shopMenu() //display the menu and get user selection
    
    //check for wrong user input, and for exit option
    if(isNaN(option)){
        continue; //not a valid number, restart loop
    }
    if(option < 0 || option > 4){
        continue; //we don't have options  below 0 or above 4, restart loop if selected
    }
    if(option == 4){
        break; //stop the loop early, user selected exit option
    }
    
    chekoutBasket.push(products[option]); //add the selected product to basket
}

let totalPrice = calculateTotal();
console.log("Your total to pay is: £" + totalPrice)

