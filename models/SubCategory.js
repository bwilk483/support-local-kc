const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class SubCategory extends Model {}

SubCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          subcategory_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id'
            }
          }
    },
<<<<<<< HEAD
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "subcategory",
  }
);
=======
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'subcategory',
    });
  

    module.exports= SubCategory;
>>>>>>> 85dd13dccc4c36fa28a3b779e85dbc554a99fb91
