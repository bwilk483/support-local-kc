<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
=======
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
>>>>>>> origin/develop

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
<<<<<<< HEAD
      autoIncrement: true
=======
      autoIncrement: true,
>>>>>>> origin/develop
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
<<<<<<< HEAD
        model: 'user',
        key: 'id'
      }
=======
        model: "user",
        key: "id",
      },
>>>>>>> origin/develop
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
<<<<<<< HEAD
        model: 'post',
        key: 'id'
      }
    }
=======
        model: "post",
        key: "id",
      },
    },
>>>>>>> origin/develop
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'Review'
  }
);

module.exports = Review;
=======
    modelName: "Review",
  }
);

module.exports = Review;
>>>>>>> origin/develop
