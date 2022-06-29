//import all models
const Business = require("./Business");
const Category = require("./Category");
const Review = require("./Review");
const SubCategory = require("./SubCategory");
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.belongsToMany(Post, {
  through: Review,
  as: "review_posts",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsToMany(User, {
  through: Review,
  as: "review_posts",
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Review.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

Post.hasMany(Review, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

<<<<<<< HEAD
//Category.hasMany(SubCategory, {});

//Subcategory.belongsTo(Category, {});
=======
Category.hasMany(SubCategory, {
<<<<<<< HEAD
  foreignKey: "category_id",
});

Subcategory.belongsTo(Category, {
  foreignKey: "category_id",
=======
foreignKey: "category_id"
});

SubCategory.belongsTo(Category, {
foreignKey: 'category_id'
>>>>>>> 85dd13dccc4c36fa28a3b779e85dbc554a99fb91
});
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825

module.exports = {
  Post,
  User,
  Review,
  Comment,
  Business,
  Category,
  SubCategory,
};
