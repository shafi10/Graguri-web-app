const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

const contactController=require('../controllers/contact');

router.get('/', contactController.getAllUser);

router.post('/', contactController.postUser);

router.get('/:id', contactController.getSingleUser);

router.put('/:id', contactController.updateUser);

router.delete('/:id', contactController.deleteUser);


module.exports=router;
