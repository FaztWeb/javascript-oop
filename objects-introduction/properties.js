// the double quotes are optional in keys
const personTwo = {
  name: "John",
  surname: "Smith",
};

// but in this situation, you have to use double quotes
let personThree = {
  "first-name": "John",
  "second-name": "Carter",
};

// nested object, you can assign an object to another object
let personFour = {
  name: "John",
  surname: "Carter",
  address: {
    // a nested object
    street: "13 duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
};

// to access to values stored in properties you can use
// dot notation
let name = personFour.name;

// or string in square brackets
let firstname = personThree["first-name"];

// if we access to a non-existin property, we get undefined
let age = personFour.age; // undefined

// if we assign a value to a not yet defined property, we actually create this property
personFour.age = 28;

// we can start with a basic definition and gradually enrich it

let personFive = {};
personFive.name = "John";
personFive.surname = "Carter";
personFive.address = {
  street: "123 dunncannon street",
  city: "London",
  country: "United Kingdom",
};
personFive.age = 28;

// besides being able to create properties dinamically, we can destroy it
delete personFive.age;
