const sequelize = require("../config/connection");
const seedCategory = require("./category");
const seedReview = require("./review");
const seedSubCategory = require("./subcategory");
const seedBusiness = require("./business");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  //  await seedReview();
  console.log("\n----- REVIEWS SEEDED -----\n");
  await seedCategory();
  console.log("\n----- CATEGORIES SEEDED -----\n");
  await seedSubCategory();
  console.log("\n----- SUBCATEGORIES SEEDED -----\n");
  await seedBusiness();
  console.log("\n----- Business SEEDED -----\n");

  process.exit(0);
};

seedAll();
