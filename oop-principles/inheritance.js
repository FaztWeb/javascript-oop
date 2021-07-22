// inheritance enables new objects to acquire properties of existen objects

// this allows to us to avoid repeat code, for example if we have a programmer and person class

// we could avoid to repeat the name and the surname

// function Person () {
//   this.name = ""
//   this.surname = ""
// }

// function Programmer() {
//   this.language = ""
// }

// inherit properties from Person like name an surname
// Programmer.prototype = new Person()

// // create a new programmer
// const programmer = new Programmer()

// programmer.name = "Ryan"
// programmer.surname = "Ray"
// programmer.language = "Python"
// programmer

// and with classes

class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname;
  }
}

const person = new Person("Ryan", "Ray");

class Programmer extends Person {
  constructor(language) {
    super()
    this.language = language;
  }
}

const programmer = new Programmer()
programmer.name = "Ryan"
programmer.surname = "Ray"
programmer.language = "Python"
programmer

// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Inheritance