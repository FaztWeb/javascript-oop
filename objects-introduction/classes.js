// syntic sugar to create an object

// class is a collection of methods grouped by a name
// one of the method of a class is the constructor
class myClass {
  // you cannot have more than one construtor
  constructor(value1, value2) {
    this.property1 = value1;
    this.property2 = value2;
    this.property3 = "";
  }

  method1() {}
  method2() {}
}

myClass.prototype //?

// but is possible to override the default construtor behavior
class MyClassTwo {
  constructor(value1, value2) {
    return {
      property1: value1,
      property2: value2,
      location: "London",
    };
  }
}

let myClassTwo = new MyClassTwo("foo", "bar");

// example
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

const ryanRay = new Person("Ryan", "Ray");

// we cannot invoke with a class like a function
// const person = Person('personName', 'personSurname'); // error

// this is equivalent to create the following
function PersonOldDefinition() {
  "use strict";
  this.name = name;
  this.surname = surname;
}

// to check that is just syntactic sugar
typeof Person; // function

let PersonTwo = class {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
};

let johnCarter = new PersonTwo("John", "Carter");

// unlike function class are not "hoisted"
// it means, that we cannot use before its declaration

// const car = new Car(); // error

class Car {
  constructor() {}
}
