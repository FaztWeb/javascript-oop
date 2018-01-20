// OBJECT METHODS REPRESENT ACTIONS
function showFullName() {
  return "John Smith";
}

let person = {};
person.fullName = showFullName;

// METHOD WITH A LITERAL REPRESENTATION
let personLiteral = {
  name: "Ryan",
  surname: "Ray",
  showFullName: function () {
    return "Ryan Ray"
  }
};

// METHOD WITH A LITERAL REPRESENTATION IN ES6
let personLiteralES6 = {
  name: "Ryan",
  surname: "Ray",
  showFullName () {
    return "Ryan Ray"
  }
}

// DISPLAY THE CURRENT DATA OF AN OBJECT

let personThree = {
  name: "Joe",
  surname: "McMillan"
};
personThree.fullName = function() {
  return this.name + " " + this.surname;
}
