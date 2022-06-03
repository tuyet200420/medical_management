const mongoose = require('mongoose');
const Vaccine = require('./Vaccine');
const User = require('./User');
const Schema = mongoose.Schema;


const Register_vaccination = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  relationship_guardian: String,
  status: {type:String, default: "Chờ duyệt"},
  vaccine_id: { type: Schema.Types.ObjectId, ref: Vaccine },
  code_number:String,
  name: String,
  address: String,
  birthday: String,
  gender:String,
  guardian:String,//ng dám hộ
  phone_number: String,
  target_date:String
},{timestamps:true});

module.exports=mongoose.model('Register_vaccination', Register_vaccination);