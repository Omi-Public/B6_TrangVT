var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin@123",
  database: "b6_trangvt"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {
  connection
}