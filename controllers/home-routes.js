const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

//Import Middleware
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;