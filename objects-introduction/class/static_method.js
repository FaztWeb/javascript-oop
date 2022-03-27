class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

class Programmer extends User {
  constructor(language, name, lastname) {
    super();
    this.language = language;
    this.name = name;
    this.lastname = lastname;
  }
}

const joe = new Programmer("Javascript", "Joe", "Doe");
joe; //
