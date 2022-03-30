const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Register_vaccination = new Schema({
  user_id: String,
  name: String,
  user_id: String,
  medical_staff_id:String,
  relationship:String,
  date_register:String,
  injection: String,
  date_quarantine: String,
  guardian: String,
  relationship_guardian: String,
  phone_number:String,
  object_quarantine: String,
  update_status:String

},{timestamps:true});

module.exports=mongoose.model('Register_vaccination', Register_vaccination);