const mongoose = require('mongoose');

const Schema=mongoose.Schema;


const oneSchema = new Schema({
  places:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  budget:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  travell:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  start:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  description:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  }

});

const One=mongoose.model('One',oneSchema);
module.exports=One;
