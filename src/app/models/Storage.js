const mongoose = require('mongoose');
const Vaccine = require('./Vaccine');
const Schema = mongoose.Schema;

const Storage = new Schema({
  quantity: {type:String, default:"0"},
  quantity_sold: {type:String, default:"0"},
  quantity_import: {type:String, default:"0"},
  vaccine_id: { type: Schema.Types.ObjectId, ref: Vaccine },
},{timestamps:true});

module.exports=mongoose.model('Storage', Storage);