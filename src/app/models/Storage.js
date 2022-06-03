const mongoose = require('mongoose');
const Vaccine = require('./Vaccine');
const Schema = mongoose.Schema;

const Storage = new Schema({
  quantity: {type:Number, default:0},
  quantity_sold: {type:Number, default:0},
  quantity_import:{type:Number, default:0},
  vaccine_id: { type: Schema.Types.ObjectId, ref: Vaccine },
},{timestamps:true});

module.exports=mongoose.model('Storage', Storage);