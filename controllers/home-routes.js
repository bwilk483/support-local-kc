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

router.get("/businesses", async (req, res) => {
  try {
    res.render("Businesses");
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
module.exports = router;
