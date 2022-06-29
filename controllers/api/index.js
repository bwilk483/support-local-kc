const router = require("express").Router();

const userRoutes = require("./user-routes");
const reviews = require("./reviews");
const createBusiness = require("./business");
const subCategory = require("./subCategory");

router.use("/users", userRoutes);
router.use("/business", createBusiness);
router.use("/reviews", reviews);
router.use("/category", subCategory);

module.exports = router;
