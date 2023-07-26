//accessing global variable inside the function 
// global variable: declare variable outside the function
var msg ="hello"; //global variable
function say(){
    var msg ="world"; //local variable 
    console.log(msg);
}
say(); //console the local variable 
console.log(msg) //console the global variable

