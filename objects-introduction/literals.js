// This is an object literal representation: { } 
console.log( { } )

// an object is a container of values combined to form a single data structured

// Objects has properties and methods

// Properties are data
const person = {
  name: "John", // property
  surname: "Carter",
};

// methods are just properties with function as value

const person2 = {
  name: "Ryan",
  lastname: "Ray",
  sayHello: function () {
    return "Hello I'am Ryan"
  }
}

// an object is a *list* of key value pairs
const user =  {
  username: "fazt", // key: value
  email: "fazt@gmail.com",
  password: "somepassword",
  age: 100,
  hobbies: ["read", "programming", "run"]
}

console.log(user)

// and like any list it could be empty
const emptyObject = {}
