// STEP 1. -> Send a requet to the server for data 
// STEP 2. -> We need to handle the response (is it correct or errr)
// STEP 3. -> Decide on what to do with the data
// STEP 4. -> Decide on what to do with the server

//Handle the response
function handleRespone(response){
if(response.ok() == false){
    throw new Error("Server response failed")
}
}
//Handle the response
function handleError(error){
console.log("Error: ")
console.log(error)
}

function handleaData(data){

}


let url = "https://raw.githubusercontent.com/Maciej-Clanet/Debugging-Tasks/refs/heads/main/Endpoints/todobasic";

fetch(url)
.then(handleRespone)
.then(handleaData)
.catch(handleError);
