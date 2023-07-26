/**
 * ?when executing javascript code, the JavaScript engine goes through two phase: 1. Parsing and 2. Execution
 * ?In the Parsing phase, The JavaScript engine moves all variable declarations to the top of the file if the variables are global, or to the top of a function if the variables are declared in the function.
 * ?In the Execution phase, the JavaScript engine assigns values to bariables and execute the code.
 * 
 * 
 * !Hoisting is a mechanism that the JavaScript engine moves all the variable delcarations to the top of their scopes, either function or global scopes. 
 * 
 * ? If you declare a variable with the var keybword, the variable is hoisted to the top of its enclosing scope, either global or function scope.
 * 
 */

var counter ;
console.log(counter);
counter =100;
/**
 * *this give an output of undefined because the JavaScript engine moves only the declaration of the variables to the top. However, it keeps the initial assignment of the variable remains intact.
 */

//*to see this output the assigned value, re write in this format

var counter;
counter = 100;
console.log(counter)