const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const eventSchema = new Schema({
  title:{
    type:String
  },
  description:{
    type:String
  },
  image:String
});

const Product = mongoose.model('Product', eventSchema);
module.exports=Product;
