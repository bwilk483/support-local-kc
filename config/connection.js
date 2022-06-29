const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
<<<<<<< HEAD
    host: "192.168.64.2",

=======
    host: "localhost",
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
