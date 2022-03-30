const mongoose = require('mongoose');

async function connect(){
  try {
    await mongoose.connect('mongodb://localhost:27017/medical');
    console.log("ok");
  } catch (error) {
    console.log("no");
  }

}
module.exports={connect}