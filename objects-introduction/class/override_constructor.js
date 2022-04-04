// but is possible to override the default construtor behavior
class MyClassTwo {
  constructor(value1, value2) {
    return {
      property1: value1,
      property2: value2,
      location: "London",
    };
  }
}

let myClassTwo = new MyClassTwo("foo", "bar");