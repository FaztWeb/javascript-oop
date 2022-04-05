// while properties represent data, methods represent actions
function showFullName() {
  return "John Smith";
}

const john = {};
john.showFullName = showFullName;

// we can assign a method inside its literal representation

const joe = {
  name: "Joe",
  surname: "Carter",
  showFullName: function () {
    return "Joe Carter";
  },
};

// and in ECMASCRIPT 2015, we can assign a method this way as well
const ryan = {
  name: "Ryan",
  surname: "Ray",
  showFullName() {
    return "Ryan Ray";
  },
};

// the last method always display the same name, to avoid it, we can use this keyword
ryan.name = "Braian"
ryan.showFullName = function () {
  return this.name + " " + this.surname;
};

