// without new. is just an execution of a function
// but this keyword takes context in the function, and assign global variables
// in strict mode this have undefined value, and gives an error
//try to access to a non existed property

function Person() {
  "use strict";
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// without new
// const person = Person();
const person = new Person();
person; //?

const mankind = {
  Person: function (name, lastname) {
    "use strict"
    this.name = name;
    this.lastname = lastname;
  },
};

const joe = mankind.Person("Joe", "Smith"); //?
mankind