const Product = require('../models/Product');


const getevent = function(req,res,next){
  Product.find(function(err,product){
      if(err)
      res.send(err);
      res.json(product);
    });
};


module.exports={
  getevent
}
