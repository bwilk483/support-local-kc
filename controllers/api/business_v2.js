const router = require("express").Router();
const { User, Business } = require("../../models");

router.post("/", async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.post_about,
    address: req.body.address,
  };
  const dbBusinessData = await Business.create(data);
  console.log(data);

  res.status(200).json({ message: "business added" });
  return;
});
router.get("/", (req, res) => {
  res.send("get business");
});

module.exports = router;
