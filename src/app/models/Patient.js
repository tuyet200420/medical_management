const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const Patient = new Schema({
  code_number:String,
  name: String,
  address: String,
  birthday: Date,
  gender:String,
  guardian:String,//ng dám hộ
  phoneNumber: String

},{timestamps:true});

module.exports=mongoose.model('Patient', Patient);

// { birthday: {$gt: new Date('2021-01-31')}}