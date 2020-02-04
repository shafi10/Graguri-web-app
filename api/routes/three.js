const express = require('express');
const router = express.Router();

const threeController = require('../controllers/three');



router.post('/three', threeController.postthree);
router.get('/', threeController.getthree);



module.exports=router;
