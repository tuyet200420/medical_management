const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Object_quarantine = new Schema({
  name: String,
},{timestamps:true});

module.exports=mongoose.model('Object_quarantine', Object_quarantine);