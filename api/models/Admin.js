const mongoose=require('mongoose');
const valid=require('validator');

const Schema=mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type:String,
    unique:true,
    required:true
  },
  name:{
    type:String
  },
  password:{
    type:String,
    required:true
  }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports=Admin;
