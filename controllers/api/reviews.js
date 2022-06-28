const router = require("express").Router();
const { User, Review } = require("../../models");

// get all Reviews """"""needs updated
router.get("/", (req, res) => {
  User.findAll({})
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

// CREATE new review """"""needs Updates
router.post("/", async (req, res) => {
  try {
    const dbReviewData = await Review.create({
      user_id: req.body.user_id,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.review_id = dbReviewData.id;
      req.session.user_id = dbReviewData.userId;
      req.session.post_id = dbReviewData.postId;
      req.session.loggedIn = true;

      res.json(dbReviewData);
    });
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

module.exports = router;
