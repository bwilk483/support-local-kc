const router = require("express").Router();
const { Category, SubCategory } = require("../models");
const { getAttributes } = require("../models/business");

//Import Middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: SubCategory,
          attributes: ["id", "subcategory_name", "category_id"],
        },
      ],
    });

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render("home", {
      categories,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard/create", async (req, res) => {
  try {
    res.render("addBusiness");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/categories", async (req, res) => {
  try {
    res.render("categories");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/retail", async (req, res) => {
  try {
    res.render("retail");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/restaurant", async (req, res) => {
  try {
    res.render("restaurant");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/entertainment", async (req, res) => {
  try {
    res.render("entertainment");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard/", async (req, res) => {
  try {
    res.render("dashboard", { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/subcategory/:id", async (req, res) => {
  try {
    console.log(id);
    const subcategoryData = await SubCategory.findAll({
      where: {
        categories_id: req.params.category_id,
      },
    });
    console.log(subcategoryData);

    const subcategory = subcategoryData.get({ plain: true });
    res.render("subcategory", { subcategory, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
