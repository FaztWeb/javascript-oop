// while properties represent data, methods represent actions

function showFullName() {
  return "John Smith";
};

let personSix = {};
personSix.fullName = showFullName;

// we can assign a metjod inside its literal representation

let personSeven = {
  name: "John",
  surname: "Carter",
  showFullName: function() {
    return "John Carter";
  }
};

// and in ECMASCRIPT 2015, we can assign a method in more diect form 
let personEight = {
  name: "John",
  surname: "Carter",
  showFullName() {
    return "John Carter";
  }
};

// the last method alway display the same name, to avoid it, we can use this keyword
personEight.showFullName = function () {
  return this.name + " " + this.surname;
};

console.log(personEight.showFullName());
