const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NationalProduction = new Schema({
  name: String
},{timestamps:true});

module.exports=mongoose.model('NationalProduction', NationalProduction);