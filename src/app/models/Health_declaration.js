const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Health_declaration = new Schema({
  user_id: String,//người khai
  user_id: String,//ng được khai
  fever: {type: String, default :"No"},
  cough: {type: String, default :"No"},
  sore_throat: {type: String, default :"No"},
  difficulty_of_breathing: {type: String, default :"No"},
  diarrhea: {type: String, default :"No"},
  tired: {type: String, default :"No"},
  loss_taste: {type: String, default :"No"},
  got_covid: {type: String, default :"No"},
  exposure_covid: {type: String, default :"No"},
  quarantined: {type: String, default :"No"},
  note: String,
  rate_level: String
},{timestamps:true});

module.exports=mongoose.model('Health_declaration', Health_declaration);