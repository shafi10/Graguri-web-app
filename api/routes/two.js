const express = require('express');
const router = express.Router();

const twoController = require('../controllers/two');



router.post('/two', twoController.posttwo);
router.get('/', twoController.gettwo);



module.exports=router;
