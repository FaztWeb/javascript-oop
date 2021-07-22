// is the hability to handle multuple data types uniformly

// it allow us to create more compact code

// common ways to support polymorphism in languages
// methods that take parameters with different types (overloading)
// management of generic type, not known in advance (parametric polymorphism)
// expressions whose type can be represented by a class and clases derived from it (subtype polymorphism) and inclusion polymorphism)

// x could be an string or a numeric value
function countItems(x) {
  return x.toString().length;
}

countItems(3);
countItems("hello world");

function sum(x, y, z) {
  x = x ? x : 0;
  y = y ? y : 0;
  z = z ? z : 0;
  return x + y + z;
}

sum(1, 3, 6);
sum(10, 20);
sum(3);

function sum2(x = 0, y = 0, z = 0) {
  return x + y + z;
}

const sum3 = (x = 0, y = 0, z = 0) => x + y + z;

// javasrcipt support polymorphism in a more direct way than strong type languages

/// Parametric Polimorphism
// Parametric polymorphism allow us to work with parameters of any type

function Person(name, surname) {
  this.name = name
  this.surname = surname 
}

function Programmer(language) {
  this.language = language 
}

Programmer.prototype = new Person()

function writeFullName(p) {
  return p.name + " " + p.surname
}

const john = new Person("John", "Cartar")

const ryan = new Programmer("Python")
ryan.name ="Ryan"
ryan.surname="Ray"


writeFullName(john) //?
writeFullName(ryan) //?