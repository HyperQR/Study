/*
IF YOU ARE GOING TO COPY IT INTO COMPILER, COPY ENTIRE FILE INCLUDING THE SYMBOLS AT THE TOP

START
  INITIALIZE variable "a" to 0
  INITIALIZE variable "b" to 0
  
  INPUT a number and SET variable "a" to it
  INPUT a number and SET variable "b" to it
  
  IF a is bigger than b
    OUTPUT "a is bigger than b"
  ELSE
    OUTPUT "b is bigger than a"
  END IF

  WHILE a is 0 or above
    OUTPUT a
    DECREMENT a  (decrement means lower by 1)
  END WHILE

  OUTPUT "program end"
END


*/

let a = 0;
let b = 0;

a = prompt("Enter 1st Number: ")
b= prompt("Enter 2nd Number: ")

if(a > b){
    console.log("a is bigger than b")
}else{
    console.log("b is bigger than a")
}

while(a >= 0){
    console.log(a)
    a--;
}

console.log("program end")
