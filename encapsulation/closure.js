// convention-base approach allows to access the property anyway
// so to fix this approach is not using properties for internal members
// but variables in the constructor

function TheatreSeats() {
  const seats = [];

  this.placePerson = function (person) {
    seats.push(person);
  };
}

// Scope and closure
// const greeting = "Hello world";

// function greets(person) {
//   const fullName = person.name + " " + person.surname;

//   function displayGreeting() {
//     console.log(greeting + " " + fullName);
//   }

//   displayGreeting();
// }

// greets({ name: "Ryan", surname: "Ray" });

// In javascript we can acces the outer scope even when the function that created
// has terminated
const greeting = "Good Morning";
let displayGreeting;

function greets(person) {
  const fullName = person.name + " " + person.surname;

  return function () {
    console.log(greeting + " " + fullName);
  };
}

displayGreeting = greets({ name: "Ryan", surname: "Ray" });
displayGreeting();
