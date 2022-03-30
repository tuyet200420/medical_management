const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const health_monitoring = new Schema({
  quarantine_id: String,
  date_monitor: String,
  temperature: String,
  breathing:String,
  blood_pressure:String,
  fever:String,
  cough: String,
  sore_throat: String,
  difficulty_of_breathing: String,
  diarrhea: String,
  tired:String,
  chills:String,
  suspicious:String,
  note:String

},{timestamps:true});

module.exports=mongoose.model('health_monitoring', health_monitoring);