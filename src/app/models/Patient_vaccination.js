const mongoose = require('mongoose');
const Vaccination_plan = require('./Vaccination_plan');
const Patient = require('./Patient');
const Schema = mongoose.Schema;

const Patient_vaccination = new Schema({
  vaccination_plan_id: { type: Schema.Types.ObjectId, ref: Vaccination_plan },
  patient_id: { type: Schema.Types.ObjectId, ref: Patient },
  status: {type:String, default: "Chưa tiêm"},
},{timestamps:true});
module.exports=mongoose.model('Patient_vaccination', Patient_vaccination);