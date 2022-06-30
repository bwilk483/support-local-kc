const router = require("express").Router();
const { User, Business } = require("../../models");

// CREATE new Business
router.post("/", async (req, res) => {
  try {
    const data = {
      id: null,
      title: req.body.title,
      description: req.body.post_about,
      address: req.body.address,
      subCategory_id: 1,
      category_id: 1,
    };
    const dbBusinessData = await Business.create(data);
    console.log(data);

    res.status(200).json({ message: "business added" });
  } catch (ex) {
    res.status(404).json({ message: "error adding company" });
  }
  return;
});
router.put("/", async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.post_about,
    address: req.body.address,
    subCategory_id: 1,
  };
  const id = req.body.id;
  console.log("update business: ", id, data);
  const result = await Business.update(data, { where: { id: id } });

  console.log(data);

  res.status(202).json({ status: 202, message: "business updated" });
  return;
});
router.get("/", (req, res) => {
  res.send("get business");
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
