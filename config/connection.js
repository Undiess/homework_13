// Set up MySQL connection.
var mysql = require("mysql");
var util = require("util");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1908",
  database: "hamburgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Promises forever!
connection.query = util.promisify(connection.query);

// Export connection for our ORM to use.
module.exports = connection;
