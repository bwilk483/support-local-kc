const router = require("express").Router();
const { Category, SubCategory, Business } = require("../../models");

router.get("/", (req, res) => {
  SubCategory.findAll({
    include: [{ model: Business }],
  })
    .then((subcategoryData) => {
      res.status(200).json(subcategoryData);
    })
    .catch((error) => res.status(404).json(error));
});

router.get("/:id", (req, res) => {
  SubCategory.findOne({
    include: [{ model: Business }],
    where: { id: req.params.id },
  })
    .then((subcategoryData) => {
      res.status(200).json(subcategoryData);
    })
    .catch((error) => res.status(404).json(error));
});

// CREATE new Category
router.post("/", async (req, res) => {
  try {
    const subcategoryData = await SubCategory.create({
      subcategory_name: req.body.subcategory_name,
      category_id: req.body.category_id,
    });
    res.json(subcategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete business by business name
router.delete("/:subcategory_name", (req, res) => {
  SubCategory.destroy({
    where: {
      subcategory_name: req.params.subcategory_name,
    },
  })
    .then((subcategoryData) => {
      if (!subcategoryData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(subcategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
