const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

router.post('/login', adminController.loginController);

router.post('/register',adminController.registerController);



module.exports=router;
