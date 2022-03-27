function User(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

User.prototype.displayName = function () {
  return this.name + " " + this.lastname;
};

function Programmer(language, name, lastname, age) {
  // User.call(this, "Ryan", "Ray", "Python");
  User.call(this, name, lastname, age);
  this.language = language;
}


Programmer.prototype = Object.create(User.prototype);

Programmer.prototype.constructor // User
Programmer.prototype.constructor = Programmer;
Programmer.prototype.constructor 

const joe = new User("Joe", "Doe", 30);

const ryanProgrammer = new Programmer("Python"); //?
ryanProgrammer.name = "Ryan";
ryanProgrammer.lastname = "Ray";
ryanProgrammer.age = "30";

ryanProgrammer.displayName(); //?
