const { Business } = require("../models");

const seedBusiness = () => Business.bulkCreate(dbBusinessData);

const dbBusinessData = [
  {
    title: "Sushi R US",
    description: "All your sushi needs",
    address: "111 First St",
    subCategory_id: 1,
  },
  {
    title: "Coffee Masters",
    description: "Best coffee in the world",
    address: "222 Second St",
    subCategory_id: 3,
  },
  {
    title: "taco world",
    description: "Taco Shop",
    address: "333 Third St",
    subCategory_id: 2,
  },
  {
    title: "burger hut",
    description: "burgers and much more",
    address: "444 Biz St",
    subCategory_id: 4,
  },
  {
    title: "Chicken TSO for life ",
    description: "best chinese ever",
    address: "555 Biz St",
    subCategory_id: 5,
  },
  {
    title: "MOM Shop",
    description: "All you MOM Clothing Needs",
    address: "666 Biz St",
    subCategory_id: 6,
  },
  {
    title: "Old Stuff Here",
    description: "Antiques",
    address: "777 Biz St",
    subCategory_id: 7,
  },
  {
    title: "Hand Me Downs",
    description: "All the clothing your cuz brother used to have",
    address: "888 Biz St",
    subCategory_id: 8,
  },
  {
    title: "Bobs Butcher",
    description: "Meat Meat and More Meat",
    address: "999 Biz St",
    subCategory_id: 9,
  },
  {
    title: "KC Drive In",
    description: "Dirve in movie theater",
    address: "1010 Biz St",
    subCategory_id: 10,
  },
  {
    title: "Skate Park KC",
    description: "All Your Skating Needs",
    address: "1111 Biz St",
    subCategory_id: 11,
  },
  {
    title: "Futball",
    description: "Best sport in town",
    address: "1212 Biz St",
    subCategory_id: 12,
  },
];

module.exports = seedBusiness;
