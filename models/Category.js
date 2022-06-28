const { Model, DataTypes } = require ('sequelize')

const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
    {
        businessName: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: 'Business Type',
        allowNull: false,
    });
