const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
<<<<<<< HEAD
        model: "post",
        key: "id",
      },
    },
=======
        model: 'post',
        key: 'id'
      }
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    }
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: "Review",
=======
    modelName: 'review'
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
  }
);

module.exports = Review;