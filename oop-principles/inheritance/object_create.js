const userProtos = {
  getAge: function () {
    return this.age;
  },
  displayName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const john = Object.create(userProtos, {
  firstName: { value: "John" },
  lastName: { value: "Doe" },
  age: { value: 30 },
});

john.displayName(); //?
john.getAge(); //?
