const express = require("express");
const mysql = require("mysql");

require("dotenv").config();

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

db.connect();

app.get("/", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.listen(5000, () => console.log("Server started"));
