const { SubCategory } = require("../models");

const subcategoryData = [
<<<<<<< HEAD
    {
      business_type: 'Mexican',
      category_name: 'Resturant'
    },
    {
      business_type: 'Coffee',
      category_name: 'Resturant'
    },
    {
      business_type: 'American',
      category_name: 'Resturant'
    },
    {
        business_type: 'Boutiques',
        category_name: 'Retail'
    },
    {
        business_type: 'Antiques',
        category_name: 'Retail'
    },
    {
        business_type: 'Thrift',
        category_name: 'Retail'
    },
    {
        business_type: 'Cinema',
        category_name: 'Entertainment'
    },
    {
        business_type: 'Hobby',
        category_name: 'Entertainment'
    },
    {
        business_type: 'Sport',
        category_name: 'Entertainment'
    }
  ];
  
  const seedSubCategory = () => SubCategory.bulkCreate(subcategoryData);
  
  module.exports = seedSubCategory;
=======
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
>>>>>>> 050cce1a866c70d2802af38ff815eae9e23e9ef3
