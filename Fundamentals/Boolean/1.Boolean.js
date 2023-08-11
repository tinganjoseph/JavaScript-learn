/**
 * !JavaScript Boolean object and the differences between the Boolean object and the boolean primitive type
 * 
 * *Boolean primitive type has two values of true and false.
 */

let isPending = false;
let isDone = true;
console.log(isPending); //false
console.log(isDone); //true

console.log(typeof(isPending));//boolean
console.log(typeof(isDone)); //boolean


/**
 * !JavaScript Boolean object
 * ?JavaScript also provides you with the global Boolean() function, with the letter B in uppercase, to cast a value of another type to boolean.
 */

let a = Boolean("Hello");
let b = Boolean(1);
let c = Boolean(0);
let d = Boolean(NaN);
let e = Boolean(null);
let f = Boolean(undefined);
let g = Boolean(true);
let h = Boolean(false);
console.log(a); //true
console.log(b); //true
console.log(c); //false
console.log(d); //false
console.log(e); //false
console.log(f); //false
console.log(g); //true
console.log(h); //false



/**
 * todo: The Boolean is also a wrapper object of the boolean primitve type. it means that when you use the Boolean constructor and pass in either true of false, you create a Boolean object
 */

let b1 = new Boolean(false);
let b2 = new Boolean(true);
console.log(b1); //Boolean { false }
console.log(b2); //Boolean { true }
console.log(typeof(b1)); //object
console.log(typeof(b2)); //object
console.log(b1.valueOf()); //false
console.log(b2.valueOf()); //true


//*toString method of a Boolean object, you get a string value "true" or "false".
console.log(b1.toString()); //"false"
console.log(b2.toString()); //"true"




