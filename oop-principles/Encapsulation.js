// encapsulation consist in hide complexity and group functionality and properties

const company = {
  name: "Fazt Tech",
  employees: [],
  sortEmployees: function () {},
};

// when internal behavior depens on publick properties, we frustrate the the effor tho hide internal details

company.employees = "some random string";

// company.sortEmployees() // error

// we could prevent direct access to relevant properties, replacing them with methods

function Company() {
  let employees = [];

  this.name = name;

  this.getEmployees = function () {
    return employees;
  };

  this.addEmployee = function (employee) {
    employees.push(employee);
  };

  this.sortEmployees = function () {};
}

class Company2 {
  constructor(name) {
    this.name = name;
    this.employees= []
  }

  getEmployees() {
    return this.employees;
  }

  addemployee(employee) {
    this.employees.push(employee);
  }

  sortEmployees() {}
}

// with this approach we need to use methods to obtain and add employees to the list
const person = {
  name: "ryan",
  surname: "Ray",
  location: "London"
}

const company2 = new Company2("Fazt Web")
company2.addemployee(person)
company2.getEmployees() //?
company2
