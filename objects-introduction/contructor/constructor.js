// OBJECTS IN LITERAL NOTATION ARE NOT REUSABLE, WE HAVE TO REPEAT OBJECTS

const johnSmith = {
  name: "John",
  surname: "Smith",
  address: {
    street: "13 Duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

const marioRossi = {
  name: "Mario",
  surname: "Rossi",
  address: {
    street: "Piazza Colonna 370",
    city: "Roma",
    country: "Italy",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

// We can create objects with a constructor
function Person() {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// TO CREATE AN OBJECT WITH A CONSTRUCTOR. and we have TO USE new KEYWORD
let ryanRay = new Person();
ryanRay.name = "Ryan";
ryanRay.surname = "Ray";
ryanRay.displayFullName();

let johnCarter = new Person();
johnCarter.name = "John";
johnCarter.surname = "Carter";
johnCarter.displayFullName();
