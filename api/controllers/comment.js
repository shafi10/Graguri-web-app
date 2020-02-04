const Comment = require('../models/Comment');


const postcomment = function(req,res,next){
  const comment = new Comment({
    text:req.body.text,
  });

  comment.save()
        .then(function(data){
          res.status(201).json({
            message:'contact added',
            comment:data
          })
        })
        .catch(function(error){
          res.json({
            error
          })
        })
};


const getcomment = function(req,res,next){
  Comment.find(function(err, comments){
		if(err)
			res.send(err);
		res.json(comments);
	});
};


module.exports={
  getcomment,
  postcomment
}
