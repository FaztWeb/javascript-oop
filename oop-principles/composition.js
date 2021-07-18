// composition is a strong type of aggregation.
// each component has no independent life withot his owner

const person = {
  name: "Ryan",
  surname: "Ray",
  address: { // this object depende on his owner, if the person is delted also this object
    street: "123 Baker Street",
    city: "London",
    country: "United Kingdom",
  },
};
