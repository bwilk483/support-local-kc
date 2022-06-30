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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8ce68f9 (edit fixed)
module.exports = seedCategory;
=======
module.exports = seedCategory;
>>>>>>> origin/develop
<<<<<<< HEAD
=======
module.exports = seedCategory;
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
=======
>>>>>>> 8ce68f9 (edit fixed)
