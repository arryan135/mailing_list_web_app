const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser")
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passw00rd",
  database: "join_us"
});

app.get("/", (req, res) => {
  const query = 'SELECT COUNT(*) AS count FROM users'
  connection.query(query, (error, results) => {
    if (error) throw error;
    var count = results[0].count;
    res.render("home", {count})
  });
});

app.post("/register", (req, res) => {
  // prepare data to be inserted
  var person = {
    email: req.body.email
  };

  connection.query("INSERT INTO users SET ?", person, (error, result) => {
    if (error) throw error;
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000")
});