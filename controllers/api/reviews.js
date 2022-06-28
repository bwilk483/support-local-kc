const router = require("express").Router();
const { User, Review } = require("../../models");

// get all Reviews """"""needs updated
router.get("/", (req, res) => {
  Review.findAll({})
    .then((dbReviewData) => res.json(dbReviewData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Review.findOne({
    attributes: {},
    where: {
      id: req.params.id,
    },
  })
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "No Review found with this id" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const dbReviewData = await Review.create({
      id: req.body.id,
      user_Id: req.body.user_Id,
      post_Id: req.body.post_Id,
    });
    res.json(dbReviewData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", (req, res) => {
  Review.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbReviewData) => {
      if (!dbReviewData) {
        res.status(404).json({ message: "No Review found with this id" });
        return;
      }
      res.json(dbReviewData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> origin/develop
