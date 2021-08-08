const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passw00rd",
  database: "join_us"
});

const sql_query = "SELECT CURTIME() AS time, CURDATE() AS date, NOW() as now";

connection.query(sql_query, (error, results, fields) => {
  if (error){
    throw error;
  }
  console.log(results[0].time);
  console.log(results[0].date.toString());
  console.log(results[0].now.toString());
});

connection.end();


const generateAddress = () => {
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
};

