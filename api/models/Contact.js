const mongoose = require('mongoose');
const valid= require('validator');

const Schema=mongoose.Schema;


const contactSchema = new Schema({
  address:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  location:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  opened:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  dfmc:{
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
  },
  hours:{
    type:String,
    trim:true,
    required:true,
    minlength:3
  },
  phone:{
    type:String,
    trim:true,
    required:true,
    unique:true
  },
  email:{
    type:String,
    trim:true,
    validate:{
      validator: function(v){
        return valid.isEmail(v);
      },
      message:`{VALUE} is not an email`
    }
  }
});

const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;
