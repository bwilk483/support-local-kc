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

router.get("/:id", (req, res) => {
  Category.findOne({
    include: [{ model: SubCategory }],
    where: { id: req.params.id },
  })
    .then((categoryData) => {
      res.status(200).json(categoryData);
    })
    .catch((error) => res.status(404).json(error));
});

// CREATE new Category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete business by business name
router.delete("/:category_name", (req, res) => {
  Category.destroy({
    where: {
      category_name: req.params.category_name,
    },
  })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
