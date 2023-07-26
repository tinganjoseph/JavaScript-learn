//Non-strict mode
/**
 * Because the javascript engine couldn't find any of global variable named msg2 so it creates a new variable with that name and adds it to the global scope
 */
function say3(){
    msg2="hi 3";
    console.log(msg2);
}
say3();
console.log(msg2)
