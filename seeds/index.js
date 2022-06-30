const sequelize = require("../config/connection");
const seedCategory = require("./category");
const seedReview = require("./reviews");
const seedSubCategory = require("./subcategory");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedReview();
  console.log('\n----- REVIEWS SEEDED -----\n');
  await seedCategory();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedSubCategory();
  console.log('\n----- SUBCATEGORIES SEEDED -----\n');
  
  process.exit(0);
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
seedAll();
=======
seedAll();
>>>>>>> origin/develop
=======
seedAll();
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
=======
seedAll();
=======
seedAll();
>>>>>>> origin/develop
>>>>>>> 8ce68f9 (edit fixed)
