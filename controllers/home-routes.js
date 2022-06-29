const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

//Import Middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("dashboard", {
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

<<<<<<< HEAD
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
=======
router.get("/entertainment", async (req, res) => {
  try {
    res.render("entertainment");
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
=======
router.get("/dashboard/", async (req, res) => {
  try {
    res.render("dashboard", { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
>>>>>>> d6ca28f4fe2f84fbc5c1109cf217bcf46eeba825
module.exports = router;
