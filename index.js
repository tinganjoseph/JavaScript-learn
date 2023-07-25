//assigning values using the =
//var message;
//message ="hello world"
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

var msg ="hello";
function say(){
    var msg ="world";
    console.log(msg);
}
say();
console.log(msg)

