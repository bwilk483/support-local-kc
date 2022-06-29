const { Model, DataTypes } = require("sequelize");
const { model } = require("../config/connection");

const sequelize = require("../config/connection");

class Business extends Model {}

Business.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: "user",
=======
    modelName: "business",
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
  }
);

module.exports = Business;
