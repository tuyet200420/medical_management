const mongoose = require('mongoose');
const User = require('./User');
const Schema = mongoose.Schema;

const Message = new Schema({
  contentUser: String,
  contentAdmin: String,
  user_id: { type: Schema.Types.ObjectId, ref: User },
},{timestamps:true});

module.exports=mongoose.model('Message', Message);