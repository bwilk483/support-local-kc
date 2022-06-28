const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Category extends Model {}

Category.init(
  {

    businessName: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

  
  
    catName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
    title: "Business Type",
    type: "Resturant Type",
    allowNull: false,
  }


);

module.exports = Category;
