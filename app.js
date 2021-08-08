const faker = require("faker");

const generateAddress = () => {
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
};

generateAddress();
