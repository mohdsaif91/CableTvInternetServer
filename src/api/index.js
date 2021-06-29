const express = require('express');

const customer = require('./customer');
const admin = require('./Admin');

const router = express.Router();

router.use('/customer', customer);
router.use('/admin', admin);

module.exports = router;
