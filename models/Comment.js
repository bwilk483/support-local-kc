<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
=======
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
>>>>>>> origin/develop

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
<<<<<<< HEAD
      autoIncrement: true
=======
      autoIncrement: true,
>>>>>>> origin/develop
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        len: [1]
      }
=======
        len: [1],
      },
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
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'comment'
  }
);

module.exports = Comment;
=======
    modelName: "comment",
  }
);

module.exports = Comment;
>>>>>>> origin/develop
