class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

const ryanRay = new Person("Ryan", "Ray");

// we cannot invoke with a class like a function
// const person = Person('personName', 'personSurname'); // error

// this is equivalent to create the following:
// function Person() {
//   "use strict";
//   this.name = name;
//   this.surname = surname;
// }

// to check that is just syntactic sugar
typeof Person; // function

let PersonTwo = class {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
};

let john = new PersonTwo("John", "Carter");
