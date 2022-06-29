const router = require("express").Router();

const userRoutes = require("./user-routes");
const reviews = require("./reviews");
const createBusiness = require("./business");

router.use("/users", userRoutes);
router.use("/business", createBusiness);
router.use("/reviews", reviews);

module.exports = router;