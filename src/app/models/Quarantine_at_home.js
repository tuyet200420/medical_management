const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quarantine_at_home = new Schema({
  user_id: String,
  object_id: String,
  medical_staff_id: String,
  guardian: String,
  relationship: String,
  injection: String,
  date_quarantine:String,
  update_status:String,
  object_quarantine_id:String,
  phone_number: String,
  phone_number: String,
},{timestamps:true});

module.exports=mongoose.model('Quarantine_at_home', Quarantine_at_home);