module.exports={
  mutipleMongooToObject: function (mongooses){
    return mongooses.map(mongoose=>mongoose.toObject());
  },
  mongooToObject: function(mongoose){
    return mongoose?  mongoose.toObject() : mongoose;
  }
}