/**
 * ?The unary minus operator is a simple minus(--) sign 
 * 
 * 
 * !example: 
 * * let a = 10;
 * * a = -a; // -10;
 * 
 * todo: if the value is a number, the unary minus negates the value..
 * 
 * todo: Note: In case you apply the unary minus on a non-numeric value, it performs the same conversion as the Number() function.
 * 
 * !example:
 */
let s ="10";
console.log(-s)//-10

/**
 * *In this example, s is a string. However, when we placed the unary plus operator in front of it, the string s is converted to a number.
 * 
 * 
 * ?This example shows how the unary operator converts boolean values into numbers, false to 0 and true to 1
 */
let f =false;
t = true;

console.log(+f);//0
console.log(+t);//1