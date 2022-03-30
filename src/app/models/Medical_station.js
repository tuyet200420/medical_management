const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Medical_station = new Schema({
  name: String,
  email : String,
  phone_number: String,
  address: String,
  province_id: String,
  role: String,
  password: String
},{timestamps:true});

module.exports=mongoose.model('Medical_station', Medical_station);