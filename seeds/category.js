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

<<<<<<< HEAD
module.exports = seedCategory;
=======
module.exports = seedCategory;
>>>>>>> origin/develop
