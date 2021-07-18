
// association is the relationship between two objects
// each object is independent of each other
// son an object can exists withouth the other

class Person {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;
    this.parent = null;
  }
}

const johnSmith = new Person('John', 'Smith') //?
const fredSmith = new Person('Fred', 'Smith') //?
fredSmith.parent = johnSmith