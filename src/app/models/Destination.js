const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Destination = new Schema({
  user_id: String,
  name: String,
  address: String,
  from_date:String,
  to_date:String,
  province_id: String,
  note: String
},{timestamps:true});

module.exports=mongoose.model('Destination', Destination);