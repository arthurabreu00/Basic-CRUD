const mysql = require('mysql');

let = conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 'crud' 
});

conn.connect((err)=> {
  if (err) throw err;
  console.log("Banco de dados MYSQL conectado!");
});

module.exports = conn;