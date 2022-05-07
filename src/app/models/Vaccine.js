const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vaccine = new Schema({
  name: String,
  age:{
    min_age: Number,
    max_age:  Number
  },
  dosage: String,// liều lượng
  origin: String, // nguồn gốc
  image: String,
  specify: String, // chỉ định,
  note: { type: String, default:null },
  description:String
},{timestamps:true});
Vaccine.index({ "$**": "text" });
module.exports=mongoose.model('Vaccine', Vaccine);