const { SubCategory } = require('../models');

const subcategoryData = [
    {
      business_type: 'Sushi',
      category_name: 'Resturant'
    },
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
      business_type: 'Chinese',
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
        business_type: 'Grocery',
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