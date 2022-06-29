
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Category extends Model {}

Category.init(
<<<<<<< HEAD
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
=======
    {   
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false,
            unique: true
        },
    },
    {
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: "category",
  }
);
=======
    modelName: 'category',
  });
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825

module.exports= Category;