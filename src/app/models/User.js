const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  medical_station_id: String,
  name: String,
  phone_number: String,
  gender: String,
  id_card: String,
  email: String,
  birthday: String,
  password: String,
  address: String,
  province_id: String,
  role:String
},{timestamps:true});

module.exports=mongoose.model('User', User);