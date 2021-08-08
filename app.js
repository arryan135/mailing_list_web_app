const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passw00rd",
  database: "join_us"
});

// Selecting Data
// const sql_query = "SELECT COUNT(*) AS total FROM users";

// connection.query(sql_query, (error, results, fields) => {
//   if (error){
//     throw error;
//   }
//   console.log(results[0].total);
// });

// Inserting Data - Take 1
// const sql_query = 'INSERT INTO users (email) VALUES ("wyatt@gmail.com")';

// connection.query(sql_query, (error, results, fields) => {
//   if (error){
//     throw error;
//   }
//   console.log(results);
// });

// Inserting Data - Take 2
const person = {email: faker.internet.email()};

connection.query("INSERT INTO users SET ?", person, (error, results) => {
  if (error) throw error;
  console.log(results);
})

connection.end();

const generateAddress = () => {
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
};

