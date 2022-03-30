const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News = new Schema({
  medical_station_id: String,
  title: String,
  content: String,
  view:String,
  image:String
},{timestamps:true});

module.exports=mongoose.model('News', News);