const express = require("express");

// const login = require("./login");
// const category = require("./category");
// const product = require("./product");

const customer = require('./customer');

const router = express.Router();

router.use('/customer', customer);
// router.use("/", login);
// router.use("/category", category);
// router.use("/product", product);

module.exports = router;