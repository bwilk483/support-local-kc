const router = require("express").Router();
const { Category, SubCategory, Business } = require("../../models");

router.get("/", (req, res) => {
  Category.findAll({
    include: [{ model: SubCategory }],
  })
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch((error) => res.status(404).json(error));
});

module.exports = router;
