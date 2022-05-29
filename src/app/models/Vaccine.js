const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vaccine = new Schema({
  name: String,
  min_age: Number,
  max_age:  Number,
  dosage: String,// liều lượng
  origin: String, // nguồn gốc
  image: String,
  note: { type: String, default:null },
  description:String
},{timestamps:true});
module.exports=mongoose.model('Vaccine', Vaccine);