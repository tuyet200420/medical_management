const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  phone_number: String,
  gender: String,
  birthday: String,
  password: String,
  address: String,
  role:{type:String, default:"User"}
},{timestamps:true});

module.exports=mongoose.model('User', User);