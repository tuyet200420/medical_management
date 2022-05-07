const Storage = require('../models/Storage');
class StorageController {
 
  get(req,res,next) {
    Storage.find().populate("vaccine_id").sort({_id: -1 })
    .then(storages => {
      res.send(storages);
  })
    .catch((next) => {res.status(500).send(next)})
   
  }
   
  GetSlug(req,res,next) {
    Storage.findById(req.params.id).populate("vaccine_id")
    .then(storages=>{
      res.send(storages);
    })
    .catch(next=>{res.status(500).send(next)});
  }

  post(req,res,next) {
    console.log(req.body);
    const storage =  new Storage(req.body);
    storage.save()
    .then((storages)=>{
      res.send(storages);
    })
    .catch(next=>{res.status(500).send(next)})
  };

  put(req,res,next) {
    console.log(req.body);
    console.log(req.params.id);
    Storage.updateOne({_id: req.params.id},req.body)
    .then(()=>{
      const data = req.body;
      data._id = req.params.id;
      res.send(
        data
       );
    })
    .catch(next=>{res.status(500).send(next)})
  };

  delete(req,res,next) {
    console.log(req.body);
    Storage.deleteOne({_id: req.params.id})
    .then((Storage)=>{
      res.send(
        Storage
       );
    })
    .catch(next=>{res.status(500).send(next)})
  };

}
module.exports = new StorageController