const { SubCategory } = require("../models");

const subcategoryData = [
  {
    subcategory_name: "Sushi",
    category_id: 1,
  },
  {
    subcategory_name: "Mexican",
    category_name: 1,
  },
  {
    subcategory_name: "Coffee",
    category_id: 1,
  },
  {
    subcategory_name: "American",
    category_id: 1,
  },
  {
    subcategory_name: "Chinese",
    category_id: 1,
  },
  {
    subcategory_name: "Boutiques",
    category_id: 2,
  },
  {
    subcategory_name: "Antiques",
    category_id: 2,
  },
  {
    subcategory_name: "Thrift",
    category_id: 2,
  },
  {
    subcategory_name: "Grocery",
    category_id: 2,
  },
  {
    subcategory_name: "Cinema",
    category_id: 3,
  },
  {
    subcategory_name: "Hobby",
    category_id: 3,
  },
  {
    subcategory_name: "Sport",
    category_id: 3,
  },
];

const seedSubCategory = () => SubCategory.bulkCreate(subcategoryData);

module.exports = seedSubCategory;
