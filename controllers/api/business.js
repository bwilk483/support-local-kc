const router = require("express").Router();
const { User, Business } = require("../../models");

// CREATE new Business
router.post("/", async (req, res) => {
  try {
    const dbBusinessData = await Business.create({
      title: req.body.title,
      description: req.body.post_about,
      address: req.body.address,
    });
    res.json(dbBusinessData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get all Businesses
router.get("/", (req, res) => {
  Business.findAll({})
    .then((dbBusinessData) => res.json(dbBusinessData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get business by business name
router.get("/:businessName", (req, res) => {
  Business.findOne({
    where: {
      businessName: req.params.businessName,
    },
  })
    .then((dbBusinessData) => {
      if (!dbBusinessData) {
        res.status(404).json({ message: "No Business found with this id" });
        return;
      }
      res.json(dbBusinessData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete business by business name
router.delete("/:businessName", (req, res) => {
  Business.destroy({
    where: {
      businessName: req.params.businessName,
    },
  })
    .then((dbBusinessData) => {
      if (!dbBusinessData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbBusinessData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
