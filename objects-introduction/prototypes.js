// we can change structure after the creation of an object
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

const johnSmith = new Person("John", "Smith");
const marioRossi = new Person("Mario", "Rossi");

johnSmith.greets = function () {
  return `Hello ${this.name} ${this.surname}!`;
};

// But, to change the structure of all Objects
// created by a construtor

Person.prototype.greets = function () {
  return `Hello I'am ${this.name} ${this.surname}!`;
};

// the prototype is a reference to another Object
// if a object dont have a method, it will find in the construtor
// and if not, it will find in the basic Object methods

// We can extend built-in object functionality
String.prototype.padLeft = function (width, char = " ") {
  let result = this;

  if (this.length < width) {
    result = new Array(width - this.length + 1).join(char) + this;
  }

  return result;
};

"Hello".padLeft(10, "x");

// but in javasrcipt you can use padstart and padEnd
"hello".padEnd(12, "x"); //?
