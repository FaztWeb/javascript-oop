// WE CAN USE THE OBJECT CONSTRUCTOR TO CREATE GENERIC OBJECTS
let personA = new Object();
personA.name = "Ryan";
personA.surname = "Ray";

// it is the same than create with object literal
// every object using literal notation have an object contructor
const person = {};
console.log(person.constructor == Object); // true

// object contructor can generate object from any javascript expression
let number = new Object(12);
let anotherNumber = new Object(3 * 2);
let string = new Object("test");
let jhon = new Object({ name: "John", surname: "Smith" });

console.log(number);
