const express = require('express');
const router = express.Router();
const multer=require('multer');

var fs=require('fs');

const eventController = require('../controllers/product');
const Product = require('../models/Product');

var upload=multer({dest:'uploads/'});

router.post('/', upload.any(),function(req,res,next){
  if(req.files){
    req.files.forEach(function(file){
      var filename=(new Date).valueOf()+"-"+file.originalname
      fs.rename(file.path, 'uploads/'+filename, function(err){
        if(err)throw err;

        var product=new Product({
          title:req.body.title,
          description:req.body.description,
          image:filename
        });

        product.save(function(err,result){
          if(err){

          }
          res.json(result);
        });
      });
    });
  }
});
router.get('/', eventController.getevent);



module.exports=router;
