const mongoose = require('mongoose');
const Category = require('./Category');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  price: String,
  description: String,
  category_id: { type: Schema.Types.ObjectId, ref: Category },
  Image: String
},{timestamps:true});

module.exports=mongoose.model('Course', Course);