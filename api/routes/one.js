const express = require('express');
const router = express.Router();

const oneController = require('../controllers/one');



router.post('/one', oneController.postone);
router.get('/', oneController.getone);



module.exports=router;
