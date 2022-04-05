// the double quotes are optional in keys
const john = {
  name: "John",
  surname: "Smith",
};

// but if the name is not valid variable name, you have to use double quotes
const joe = {
  "first-name": "joe", // double quotes are needed in "first-name"
  "second-name": "Carter",
};

// nested object, you can assign an object to another object
let ryan = {
  name: "Ryan",
  surname: "Ray",
  address: {
    // a nested object
    street: "13 duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
};

// to access to values stored in properties you can use
// dot notation
let name = john.name;

// or string in square brackets
// this is required is the name is not a valid variable name
let firstname = joe["first-name"];

// if we access to a non-existin property, we get undefined
let age = joe.age; // undefined

// if we assign a value to a not yet defined property, we actually create this property
joe.age = 28;

// we can start with a basic definition and gradually add more propertie
let newUser = {};

newUser.name = "Greg";
newUser.surname = "House";
newUser.address = {
  street: "123 dunncannon street",
  city: "London",
  country: "United Kingdom",
};
newUser.age = 28;

// besides being able to create properties dinamically, we can destroy it
delete newUser.age;
