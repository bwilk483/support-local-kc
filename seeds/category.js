const { Category } = require("../models");

const categoryData = [
  {
    name: "Restaurant",
    description: "Restaurant description",
  },
  {
    name: "Retail",
    description: "Retail description",
  },
  {
    name: "entertainment",
    description: "Entertainment description",
  },
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;