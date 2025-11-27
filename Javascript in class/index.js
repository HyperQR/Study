// Alert the websit
// alert("Hello World")


// Local storage

// calling the local storage to get the item called "username"
// let username = localStorage.getItem("username")

// alert the user with username
// alert(username)


// ask the user for the username
// username = prompt("Enter Name: ")

// Seting the username as item
// localStorage.setItem("username", username)



let savefile = {
    "health": 100,
    "energy": 50
};

let health = document.getElementById("health");
let energy = document.getElementById("energy");


// document.getElementById("health").innerHTML`Health: ${energy}`;

function saveGame(){
localStorage.setItem("save_game", JSON.stringify(savefile));



}


function gameloop() {
    console.log("game loop is running")
    console.log("save data is: ", savefile) 


    
    if(savefile.energy > 0){
        savefile.energy -= 1;
    }else if (savefile.energy == 0 && savefile.health > 0){
        setInterval(2000) {
        savefile.health -= 1;
        };  

    }
    
    if(savefile.health == 0){
        clearInterval(gameloopinterval)
        console.log("Your are out of engery and health")
    }

    saveGame();
}

  
let gameloopinterval = setInterval(gameloop, 100)


