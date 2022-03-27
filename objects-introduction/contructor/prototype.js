// this constructor accetps parameters
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.address = "";
  this.email = "";
}

Person.prototype.displayFullName = function () {
  return this.name + " " + this.surname;
};

const jamesWilson = new Person("James", "Wilson");
const gregoryHouse = new Person("Gregory", "House");

jamesWilson.displayFullName();
gregoryHouse.displayFullName();

Person.prototype; //?
