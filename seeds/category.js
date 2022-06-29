const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Restaurant",
    description: "Restaurant description",
  },
  {
    category_name: "Retail",
    description: "Retail description",
  },
  {
    category_name: "entertainment",
    description: "Entertainment description",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
