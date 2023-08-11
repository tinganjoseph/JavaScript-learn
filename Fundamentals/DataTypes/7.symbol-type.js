/**
 * ?The symbol type
 * *Javascript added a primitive type in ES6: the symbol. Different from other primitive types, the symbol type does not have a literal form. 
 */
let s1 =Symbol();
console.log(s1)

/**
 * !Not that Symbol is a function, not an object constructor, therefore, you cannot use the new operator.
 * *You can use symbols for many purposes. One of them is to create a string-like a constant that can't clash with any other values.
 * 
 */
//!this creates a symboll that represnets the click event.
const click = Symbol('click');