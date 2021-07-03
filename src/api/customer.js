const express = require('express');

const CustomerController = require('../controllers/customerController');

const router = express.Router();

router.post('/add', CustomerController.createCustomer);
router.get('/', CustomerController.getCustomer);

module.exports = router;
