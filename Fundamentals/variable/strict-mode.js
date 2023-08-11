
//Strict mode
/**
 * To avoid creating a global variable accidentally inside a function because of omitting the var keyword, you use the strict mode by adding the "use strict"; at the beginning of the Javascript file
 */
"use strict";
function strict(){
    msg="hi 4";
    console.log(msg);
}
strict();
console.log(msg)

