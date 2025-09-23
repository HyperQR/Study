let name = prompt("Enter your name: ")

if(name != "bob"){
    // != - inequality, == - equality
    console.log("Hello Bob hater")
}



console.log("Program Ended")


let a = 34;

if(a < 20){
    console.log("Less than 20")
}else if(a < 50){
     console.log("Less than 50")
}else if(a < 100){
     console.log("Less than 100")
}


let choice = prompt("1. Enter, 2.Exit. Choose: ")

if(choice == 1){
    console.log("Welcome In")
} else if(choice == 2){
    console.log("Goodbye")
}else{
    console.log("This option Doesnt exist")
}

console.log("Program Ended")
