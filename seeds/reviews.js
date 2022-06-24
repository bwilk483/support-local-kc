const { Review } = require("../models");

const reviewData = [
  {
    userId: "1",
    userName: "Bryan",
    businessId: "1",
    description: "Bryan Review",
  },
  {
    UserId: "2",
    userName: "Jake",
    businessId: "2",
    description: "Jake Review",
  },
  {
    userId: "3",
    userName: "Alaina",
    businessId: "2",
    description: "Alaina Review",
  },
  {
    userId: "4",
    userName: "Jazelle",
    businessId: "1",
    description: "Jazelle Review",
  },
];

const seedReview = () => Category.bulkCreate(reviewData);

module.exports = seedReview;
