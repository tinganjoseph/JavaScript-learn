//assigning values using the =
var message;
message ="hello world"
//console.log(message)

//undefined 
/**when a javascript variable are declared. they have an initial value of undefined */

let myNum;

//different bet var, let and const

/**
 * var: can be override 
 * let: can be reassign
 * const: is for read-only
 */

//1. Global and local variable
/**
 * local variable: declare variable within the function
 * global variable: declare variable outside the function
 */

var msg ="hello"; //global variable
function say(){
    var msg ="world"; //local variable 
    console.log(msg);
}
say(); //console the local variable 
console.log(msg) //console the global variable


//accessing global variable inside the function 

var msg1 = "hello 2";
function say1(){
  msg1 = "hi 3" //access the global variable and change it
  console.log(msg1)
}
say1();
console.log(msg1)
