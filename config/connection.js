const Sequelize = require('sequelize');
const mysql2 = require("mysql2");
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    user: 'root',
    //password: 'password',
    dialect: 'mysql',
    port: 3306,
  }
);

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "support_local_kc_db",
  //dialect: 'mysql',
   // port: 3306,
});
db.connect((err) => {
  if (err) { throw err; }
  console.log("DB connection OK");
});

module.exports = sequelize;