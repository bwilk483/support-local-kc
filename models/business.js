const { Model, DataTypes } = require ('sequelize');
const { model } = require('../config/connection');

const sequelize = require('../config/connection');

class Business extends Model {}

Business.init(
    {
      businessName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      URL: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
    },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'business',
      });

    module.exports = Business;
