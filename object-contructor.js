// OBJECTS IN LITERAL NOTATION ARE NOT REUSABLE, WE HAVE TO REPEAT OBJECTS
var johnSmith = {
  name: "John",
  surname: "Smith",
  address: {
    street: "13 Duncannon Street",
    city: "London",
    country: "United Kingdom"
  },
  displayFullName: function() {
    return this.name + " " + this.surname;
  }
};

var marioRossi = {
  name: "Mario",
  surname: "Rossi",
  address: {
    street: "Piazza Colonna 370",
    city: "Roma",
    country: "Italy"
  },
  displayFullName: function() {
    return this.name + " " + this.surname;
  }
};

// WE CAN CREATE OBJECTS WITH A constructor
function Person() {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function() {
    return this.name + " " + this.surname;
  }
}

// TO CREATE AN OBJECT WITH A CONSTRUCTOR WE HAVE TO USE new KEYWORD
let ryanRay = new Person();
ryanRay.name = "Ryan";
ryanRay.surname = "Ray";
ryanRay.displayFullName();

let johnCarter = new Person();
johnCarter.name = "John";
johnCarter.surname = "Carter";
johnCarter.displayFullName();

// AND WE CAN INITIALIZE PARAMETERS
function PersonWithInitialization(name, surname) {
    this.name = name;
    this.surname = surname;
    this.address = "";
    this.email = "";
    this.displayFullName = function () {
      return this.name + " " + this.surname;
    };
};
let jamesWilson = new PersonWithInitialization("James", "Wilson");
let gregoryHouse = new PersonWithInitialization("Gregory", "House");

// without new. is just an execution of a function
// but this keyword takes context in the function, and assign global variables
// in strict mode this have undefined value, and gives an error
//try to access to a non existed property

function PersonStrict() {
  "use strict";
}

// WE CAN USE THE OBJECT CONSTRUCTOR TO CREATE GENERIC OBJECTS
let personA = new Object();
personA.name = "Ryan";
personA.surname = "Ray";

// it is the same than create with object literal
// every object using literal notation have an object contructor
let person = {};
console.log(person.constructor == Object); // true

// object contructor can generate object from any javascript expression
let number = new Object(12);
let anotherNumber = new Object(3*2);
let string = new Object("test");
let person = new Object({name: "John", surname: "Smith"});

console.log(number);
