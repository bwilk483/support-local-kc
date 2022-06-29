const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Restaurant",
  },
  {
    category_name: "Retail",
  },
  {
    category_name: "entertainment",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
