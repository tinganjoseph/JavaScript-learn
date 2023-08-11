/**
 * !From ES6, you can use the let keyword to declare one or more variables. The let keyword is similar to the var keyword. However, a variable is declared using the let keyword is block-scoped, not function or global-scoped like the var keyword. 
 * ?A block in JavaScript is denoted by curly braces ({}). For instance, the if....else, do...while, or for loop statement creates a block.
 * 
 * *The following example declares the tmp variable within a block surrounding by curly braces {}. The tmp variable only exists inside the block. Therefore, if you reference it outside the block, you will get a ReferenceError.
 */

var a=23, b=90;
{
    let tmp =a;
    a=b;
    b=tmp;
}
console.log(tmp);//Reference Error

//!The const keyword works like the let keyword, but the variable that you declare must be initialized immediately with a value, and that value can't be changed afterward.

const pi=3.14;
