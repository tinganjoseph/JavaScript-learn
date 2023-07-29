/**
 * !To format a number with a specified number of decimal points, you use the toFixed() method.
 */

var distance = 19.0433;
// Round the number to 2 decimal points
//100= 2dp, 1000=3dp 
var roundedDistance = Math.round(distance * 100) / 100; 
// Print the result
console.log(roundedDistance); //19.04

//or
console.log(distance.toFixed(2));


/**
 * ?To get a string representation of a number object to the specified precision, you use the toPrecision() method.
 */

x =9.1244435;
console.log(x.toPrecision(2)); //9.1
console.log(x.toPrecision(3)); //9.2



/**
 * !JavaScript Number object vs. primitive number. 
 * * operator       number object    number value
 *   !typeof        object            number
 *   !instanceof      true              false
 *   !Number
 */


let numberObject = new Number(10);
let number = 10;
console.log(typeof numberObject); //object
console.log(typeof number); //number
console.log(numberObject instanceof Number); //true
console.log(number instanceof Number); //false


