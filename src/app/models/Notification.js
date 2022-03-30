const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notification = new Schema({
  medical_station_id: String,
  title: String,
  content: String,
},{timestamps:true});

module.exports=mongoose.model('Notification', Notification);