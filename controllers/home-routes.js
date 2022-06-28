const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Business } = require("../models");

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

router.get("/dashboard/edit/:id", async (req, res) => {
  try {
    const businesses = await  Business.findOne({id:req.params.id})
    console.log(businesses.dataValues, req.params.id)
    res.render("edit-business", {business: businesses.dataValues});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/dashboard/", async (req, res) => {
  
  
  try {
    const businesses = await  Business.findAll({})
    console.log(businesses);
    const posts= businesses.map(business => business.dataValues)
    res.render("dashboard",  { loggedIn: req.session.loggedIn, posts});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
