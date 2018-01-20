// OBJECT PROPERTIES REPRESENT DATA

// OBJECT LITERAL
let emptyObject = {};
let person = {
  "name": "Ryan",
  "surname": "Ray"
};

// DOUBLE QUOTES ARE OPTIONAL, EXCEP IN THIS CASES
let personTwo = {
  "first-name": "Ryan",
  "last-name": "Ray"
};

// NESTED OBJECTS
let personWithStreet = {
  name: "joe",
  lastName: "Harper",
  address: {
    street: "13 Duncannon street",
    city: "London",
    country: "United Kingdom"
  }
};

// ACCESS TO A PROPERTY OR METHOD WITH DOT NOTATION
let name = person.name; // Ryan

// ACCESS TO A PROPERTY OR METHOD WITH SQUARE BRACKETS
// personTwo.first-name // ERROR
let nameOfPerson = personTwo["first-name"]; // Ryan
let unknowProp = personTwo.age; // undefined

// TO ASSIGN A NEW VALUE
person.age = 30; // { name: 'Ryan', surname: 'Ray', age: 30 }

// OBJECTS HAVE DYNAMIC NATURE, WE CAN CHANGE IT
let personDynamic = {};
personDynamic.name = "John";
personDynamic.surname = "Smith";
personDynamic.address = {
  address: {
    street: "13 Duncannon street",
    city: "London",
    country: "United Kingdom"
  }
};

// TO DELETE A PROPERTY
delete person.age; // { name: 'Ryan', surname: 'Ray' }

// DELETE AN NOT EXISTING PROPERTY RETURN UNDEFINED
delete person.age; // undefined
