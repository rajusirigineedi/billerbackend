const express = require('express');
const adminController = require('./../controllers/adminController');
const authController = require('./../controllers/authController');



const router = express.Router();

// Should be logged In
router.use(authController.protect);

// Should be an Admin
router.use(authController.restrictTo('admin'));



router.post('/company', adminController.createCompany);



module.exports = router;