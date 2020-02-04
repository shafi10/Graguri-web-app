const Three = require('../models/Three');


const postthree = function(req,res,next){
  const three = new Three({
    places:req.body.places,
    budget:req.body.budget,
    travell:req.body.travell,
    start:req.body.start,
    description:req.body.description
  });

  three.save()
        .then(function(data){
          res.status(201).json({
            message:'places added',
            three:data
          })
        })
        .catch(function(error){
          res.json({
            error
          })
        })
};


const getthree = function(req,res,next){
  Three.find(function(err, threes){
		if(err)
			res.send(err);
		res.json(threes);
	});
};


module.exports={
  getthree,
  postthree
}
