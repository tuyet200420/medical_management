const mongoose = require('mongoose');
const Vaccine = require('./Vaccine');
const Schema = mongoose.Schema;

const Vaccination_plan = new Schema({
  date:String,
  time: String,
  vaccine_id: { type: Schema.Types.ObjectId, ref: Vaccine }
},{timestamps:true});
module.exports=mongoose.model('Vaccination_plan', Vaccination_plan);