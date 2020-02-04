const One = require('../models/One');


const postone = function(req,res,next){
  const one = new One({
    places:req.body.places,
    budget:req.body.budget,
    travell:req.body.travell,
    start:req.body.start,
    description:req.body.description
  });

  one.save()
        .then(function(data){
          res.status(201).json({
            message:'places added',
            one:data
          })
        })
        .catch(function(error){
          res.json({
            error
          })
        })
};


const getone = function(req,res,next){
  One.find(function(err, ones){
		if(err)
			res.send(err);
		res.json(ones);
	});
};


module.exports={
  getone,
  postone
}
