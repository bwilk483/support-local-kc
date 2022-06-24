//import all models
const Business = require('./Business')
const Category = require('./Category')
const Review = require ('./Review')
const SubCategory = require ('./SubCategory')
const User = require ('./User')
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

Post.belongsTo(User, {
foreignKey: 'user_id',
onDelete: 'SET NULL'
});

User.belongsToMany(Post, {
    through: Review,
    as: 'review_posts',
  
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

Post.belongsToMany(User, {
    through: Review,
    as: 'review_posts',
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
Review.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });

User.hasMany(Review, {
    foreignKey: 'user_id'
  });
  
Post.hasMany(Review, {
    foreignKey: 'post_id'
  });
  
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
  });
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
  });
  
Post.hasMany(Comment, {
    foreignKey: 'post_id'
  });

Category.hasMany(SubCategory, {

  });

Subcategory.belongsTo(Category,{

}); 


module.exports = {Post, User, Review, Comment, Business, Category, SubCategory };
