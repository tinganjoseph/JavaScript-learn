/**
 * ?The null type is the second primitive data type that also has only one value: null. 
 * !Javascript defines that null is an empty object pointer.
 */

let obj= null;

if(obj!=null){
    console.log("this is not null object")
} else{
    console.log(typeof(obj)); //output is object
}

/**
 * todo: It is a good practice to assign a variable that later holds an object to null so that you can check whether the object is null or not by using the if statement 
 */

/**
 * ? JavaScript defines that null is equal to undefined as shown in this code
 * 
 */

console.log(null==undefined)