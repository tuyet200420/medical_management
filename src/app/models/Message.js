const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const Message = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: User },
    countUserSee:{type:Number, default:0},
    countAdminSee:{type:Number, default:0},
    messenger: [
      {
        content_user: { type: String, default: "" },
        content_admin: { type: String, default: "" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", Message);
