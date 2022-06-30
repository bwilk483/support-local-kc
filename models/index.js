//import all models
const Business = require("./business");
const Category = require("./Category");
const Review = require("./review");
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


//Category.hasMany(SubCategory, {});

//Subcategory.belongsTo(Category, {});

Category.hasMany(SubCategory, {
  foreignKey: "category_id",
});

SubCategory.belongsTo(Category, {
  foreignKey: "category_id",
});

Business.belongsTo(SubCategory, {
  foreignKey: "subCategory_id",
});

SubCategory.hasMany(Business, {
  foreignKey: "subCategory_id",
});


module.exports = {
  Post,
  User,
  Review,
  Comment,
  Business,
  Category,
  SubCategory,
};
