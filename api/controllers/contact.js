const Contact = require('../models/Contact');

const getAllUser = function(req,res,next){
  Contact.find(function(err, contacts){
		if(err)
			res.send(err);
		res.json(contacts);
	});
};


const postUser = function(req,res,next){
  const contact = new Contact({
    address:req.body.address,
    location:req.body.location,
    opened:req.body.opened,
    dfmc:req.body.dfmc,
    description:req.body.description,
    hours:req.body.hours,
    phone:req.body.phone,
    email:req.body.email
  });

  contact.save()
        .then(function(data){
          res.status(201).json({
            message:'contact added',
            contact:data
          })
        })
        .catch(function(error){
          res.json({
            error
          })
        })
};

const getSingleUser=function(req,res,next){

  Contact.findOne({_id:req.params.id}, function(err, contact){
		if(err)
			res.send(err);
		res.json(contact);
	});
};

const deleteUser =function(req,res,next){
  var id=req.params.id;

  Contact.findByIdAndRemove(id)
          .then(function(result){
            res.json({
              message:'contact remove',
              result
            })
          })
          .catch(function(error){
            res.json({
              error
            })
          })
};

const updateUser=function(req,res,next){
  var id=req.params.id;
  var upUser ={
    address:req.body.address,
    location:req.body.location,
    opened:req.body.opened,
    dfmc:req.body.dfmc,
    description:req.body.description,
    hours:req.body.hours,
    phone:req.body.phone,
    email:req.body.email
  };

  Contact.findByIdAndUpdate(id, {$set: upUser})
          .then(function(contact){
            Contact.findById(contact._id)
                  .then(function(newContact){
                    res.json({
                      message:'update successful',
                      contact
                    })
                  })
          })
          .catch(function(error){
            res.json({
              error
            })
          })
};

module.exports={
  getAllUser,
  postUser,
  getSingleUser,
  deleteUser,updateUser
}
