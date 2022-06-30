const { Business } = require("../models");

const seedBusiness = () => Business.bulkCreate(businessData);

module.exports = seedBusiness;
