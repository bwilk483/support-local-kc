const router = require("express").router();
const sequelize = require("../config/connection");
const { User } = require("../models");

// Import Middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("home route called");
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Category,
          attributes: ["name", "description"],
        },
      ],
    });
    const displayCategory = categoryData.map((category) =>
      category.get({ plain: true })
    );
    res.render("homepage", {
      displayCategory,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
