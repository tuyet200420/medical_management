const mongoose = require('mongoose');
const Patient = require('./Patient');
const Schema = mongoose.Schema;

const Message = new Schema({
  content: String,
  isUser:String,
  Patient_id:{ type: Schema.Types.ObjectId, ref: Patient },

},{timestamps:true});

module.exports=mongoose.model('Message', Message);