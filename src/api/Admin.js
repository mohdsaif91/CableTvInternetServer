const express = require('express');

const router = express.Router();

const AdminController = require('../controllers/adminController');

router.post('/login', AdminController.logIn);
router.post('/createUser', AdminController.createUser);
router.get('/customerData/:startDate/:endDate', AdminController.getDataWithDates);

module.exports = router;
