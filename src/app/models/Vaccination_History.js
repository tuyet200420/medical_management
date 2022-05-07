const mongoose = require('mongoose');
const Vaccine = require('./Vaccine');
const Patient = require('./Patient');
const Schema = mongoose.Schema;

const Vaccination_History = new Schema({
  preStatus: String,
  after: String,
  dosage: String,
  guardian:String,//ng dám hộ
  phoneNumber: String,
  vaccine_Id: { type: Schema.Types.ObjectId, ref: Vaccine },
  Patient_id: { type: Schema.Types.ObjectId, ref: Patient },
  date: String
},{timestamps:true});

module.exports=mongoose.model('Vaccination_History', Vaccination_History);