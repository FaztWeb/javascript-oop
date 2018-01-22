// we can change structure after the creation of an object
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

let johnSmith = new Person('John', 'Smith');
let marioRossi = new Person('Mario', 'Rossi');

johnSmith.greets = function () {
  console.log(`Hello ${this.name} ${this.surname}!`);
}

// But, to change the structure of all Objects
// created by a construtor

Person.prototype.greets = function () {
  console.log(`Hello ${this.name} ${this.surname}!`);
}
// the prototype is a reference to another Object
// if a object dont have a method, it will find in the construtor
// and if not, it will find in the basic Object methods

// We can extend built-in object functionality
String.prototype.padLeft = function (width, char) {
  let result = this;
  char = char || " ";

  if (this.length < width) {
    result = new Array(width - this.length + 1).join(char) + this;
  }

  return result;
};
console.log("abc".padLeft(10, "x"));
