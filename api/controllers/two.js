const Two = require('../models/Two');


const posttwo = function(req,res,next){
  const two = new Two({
    places:req.body.places,
    budget:req.body.budget,
    travell:req.body.travell,
    start:req.body.start,
    description:req.body.description
  });

  two.save()
        .then(function(data){
          res.status(201).json({
            message:'places added',
            two:data
          })
        })
        .catch(function(error){
          res.json({
            error
          })
        })
};


const gettwo = function(req,res,next){
  Two.find(function(err, twos){
		if(err)
			res.send(err);
		res.json(twos);
	});
};


module.exports={
  gettwo,
  posttwo
}
