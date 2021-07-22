// all properties and methods are public accesible
// so there are some approach to try to solve this issue

// convetion base approach

// we can use underscore symbol for internal members
// this is just a convetion, technicaly we can access to properties anyway

function TheatreSeats() {
  this._seats = [];
}

TheatreSeats.prototype.placePerson = function (person) {
  this._seats.push(person);
};

const theatreSeats = new TheatreSeats();
theatreSeats.placePerson({ name: "Ryan", surname: "Ray" });

theatreSeats;