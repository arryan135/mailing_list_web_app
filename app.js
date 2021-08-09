const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passw00rd",
  database: "join_us"
});

let data = [];

for (let i = 0; i < 500; i++){
  data.push([
    faker.internet.email(),
    faker.date.past()
  ]);
}

let query = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(query, [data], (error, results) => {
  if (error) throw error;
  console.log(results);
});

connection.end();

const generateAddress = () => {
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
};

