<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
=======
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
>>>>>>> origin/develop

// create our Post model
class Post extends Model {
  static upvote(body, models) {
    return models.Post.create({
      user_id: body.user_id,
<<<<<<< HEAD
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'post_url',
          'title',
          'created_at',
          [sequelize.literal('(SELECT COUNT(*) FROM review WHERE post.id = review.post_id)'), 'review_count']
=======
      post_id: body.post_id,
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id,
        },
        attributes: [
          "id",
          "post_url",
          "title",
          "created_at",
          [
            sequelize.literal(
              "(SELECT COUNT(*) FROM review WHERE post.id = review.post_id)"
            ),
            "review_count",
          ],
>>>>>>> origin/develop
        ],
        include: [
          {
            model: models.Comment,
<<<<<<< HEAD
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
=======
            attributes: [
              "id",
              "comment_text",
              "post_id",
              "user_id",
              "created_at",
            ],
            include: {
              model: models.User,
              attributes: ["username"],
            },
          },
        ],
>>>>>>> origin/develop
      });
    });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
<<<<<<< HEAD
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
=======
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> origin/develop
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        isURL: true
      }
=======
        isURL: true,
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
    }
=======
        model: "user",
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
    modelName: 'post'
  }
);

module.exports = Post;
=======
    modelName: "post",
  }
);

module.exports = Post;
>>>>>>> origin/develop
