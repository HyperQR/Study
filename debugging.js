//Debugging Exercise 08
//topic: If Statements
//Instructions: The code below has errors in it. Copy and paste the code below into javascript compiler and fix it.
//Compiler Link: https://www.programiz.com/javascript/online-compiler/ 

function userAccountMenu(){
    console.log("Welcome admin");
    prompt("Press enter to continue");
}

let cUsername = "admin";
let cPassword = "1234";

let username = prompt("LOGIN|Enter username: ");
let password = prompt("LOGIN|Enter password: ");



if(username == cUsername){
    
    if(password == cPassword){
        userAccountMenu();
    }else{
        console.log("invalid password");
    }
    
}else{
    console.log("invalid username");
}
