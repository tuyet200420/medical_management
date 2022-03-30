const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Medical_station = new Schema({
  name: String,
  phone_number: String,
  medical_station_id: String,
},{timestamps:true});

module.exports=mongoose.model('Medical_station', Medical_station);