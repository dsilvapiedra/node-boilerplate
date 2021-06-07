const mysql = require("mysql2/promise");
const dotenv = require('dotenv');
dotenv.config();

const ejecturaQuery = async function(query) {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });
  
  await connection.connect(err => {
    if (err) throw err;
  });
  
  const [results, fields] = await connection.execute(query);

  connection.end();

  return ([results, fields]);
}

module.exports = ejecturaQuery();