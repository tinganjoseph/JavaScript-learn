/**
 * ?The object type
 * *In JavaScript, an object is a collection of properties, where each property is defined as a key-value pair.
 * 
 */
let emObj = {};

//!this defines the person object with two properties:
let person={
    firstName:'Joe',
    lastName:'Smith'
};

/**
 * todo: A property name of an object can by any string. You can use quotes around the property name if it isn't a valid JavaScript identifier. 
 * *If you have a proerty first-name, you must use the quotes such as "first-name" but firstName is a valid JavaScript identifier so the quotes are optional.
 * ?If you have more than one property, you use a comma, to separate the pairs.
 * !JavaScript allows you to nest object as shown in the following example
 */
let contact={
    firstName:'John',
    lastName: 'Smith',
    email: 'joe33@gmail.com',
    phone: '04444232',
    address:{
        street: "Accra",
        city: "Accra",
        country:"Ghana"
    }
}

//?Access the properties of an object
console.log(contact.firstName);
console.log(contact.email)

//*get property of a nested object

console.log(contact.address.city)

//!array like notation to access properties
console.log(contact['phone']);

/**
 * todo: Besides the object literal form, you can use the new keyword to create a new object 
 */

let customer = new Object();
customer.name='Joe Smith';