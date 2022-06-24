const sequelize = require("../config/connection");
const seedCategory = require("./category");
const seedReview = require("./reviews");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedReview();

  await seedCategory();

  process.exit(0);
};

seedAll();