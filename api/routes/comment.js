const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment');



router.post('/comment', commentController.postcomment);
router.get('/', commentController.getcomment);



module.exports=router;
