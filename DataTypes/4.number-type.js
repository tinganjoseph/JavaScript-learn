/**
 * *JavaScript uses the IEEE-754 format to represent both integer and floating-point numbers.
 */

//?Integer numbers
/**
 * !The following statement declares a variable that holds an integer.
 */
let number = 299;


//?Octal (base 8) literals
//*you put the first digit as zero(0) followed by octal
//*digit numbers (0 to 7)

let oct8 = 0o10; //8
let oct16 = 0o20;//16
let oct24 = 0o30; //24
let oct32 = 0o40;//32
let oct40 = 0o50;//40
let oct48 = 0o60;//48
let oct56 = 0o70;//56
console.log(oct8, oct16, oct24, oct32, oct40, oct48,oct56)


//?hexadecimal (base 16)
let h = 0xf;
console.log(h)

//?Floating point number
/**
 * *To represent a floating-point number, you include a decimal point fllowed by at least one number. For example
 * 
 */

let f =12.4;

/**
 * todo: Javascript converts a floating poing number into an integer numbe rif the number appears to be the whole number. the reason is that Javascript always wants to use less memory since a floating point value uses twice as much memory as an integer value.
 */

let f1 = 220.00 //output is 220, it interprete as integer



//? E-notation
/**
 * * Javascript allows yo uto use the e-notation to represent very large or small numbers as in the following example
 */

let f4 = 2.17e5;//217000



//?Minimum and Maximum values
/**
 * *JavaScript provides the minimum and maximum values of a number that you can access using 
 * todo: Number.MIN_VALUE and Number.MAX_VALUE
 */
let min = Number.MIN_VALUE ; //5e-324
let max =Number.MAX_VALUE //1.7976931348623157e+308
console.log(min , max )

//?Infinity and -Infinity
/**
 * *JavaScript uses Infinity and -infinity to represent the finite numbers, both positive and engative.
 */

let ninf = Number.MAX_VALUE - Number.MAX_VALUE; //0
let pinf = Number.MAX_VALUE + Number.MAX_VALUE ;//Infinity


//?NaN
/**
 * * JavaScript has a special numeric value called NaN, which stands for Not a Number. in fact, it means an invalid number.
 */

 console.log('a'/2);//NaN

 /**
  * todo: The NaN has two special characteristics: 1. Any operation with NaN returns NaN. 2. The NaN does not equal any value, including itself.
  */

 console.log(NaN/2); //NaN
 console.log(NaN==NaN);//false


 //?String type
 /**
  * * In JavaScript, a string is a sequence of zero or more characters. A literal string begins and ends with either a single quote(') or double qoute("). A string that starts with a double quote must end with a double quote and a string that begins with a single quote must end with a single quote. 
  */

 let greeting ='Hey joe';
 let morning =" it's a valid string";
 let afternoon = 'I also a string';

 /**
  * todo: JavaScript strings are immutable. it means that you cannot modify a string once it is created. However, you can create a new string based on an operation on the original string
  */

 let str = 'Java';
 str = str+'Script';

 /**
  * !First, declare the str variable and initialize it to a strign of 'Java'.  Second, use the + operator to combine 'Java' with 'Script' to make its value as JavaScript
  */