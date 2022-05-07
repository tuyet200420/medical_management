const NationalProduction = require('../models/NationalProduction');
class NationalProductionController {
 
  get(req,res,next) {
    NationalProduction.find()
    .then(NationalProductions => {
      res.send(NationalProductions);
  })
    .catch((next) => {res.status(500).send(next)})
   
  }
   
  GetSlug(req,res,next) {
    NationalProduction.findById(req.params.id)
    .then(NationalProductions=>{
      res.send(NationalProductions);
    })
    .catch(next=>{res.status(500).send(next)});
  }

  post(req,res,next) {
    console.log(req.body);
    const NationalProduction =  new NationalProduction(req.body);
    NationalProduction.save()
    .then((NationalProductions)=>{
      res.send(NationalProductions);
    })
    .catch(next=>{res.status(500).send(next)})
  };

  put(req,res,next) {
    console.log(req.body);
    console.log(req.params.id);
    NationalProduction.updateOne({_id: req.params.id},req.body)
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
    NationalProduction.deleteOne({_id: req.params.id})
    .then((NationalProduction)=>{
      res.send(
        NationalProduction
       );
    })
    .catch(next=>{res.status(500).send(next)})
  };

}
module.exports = new NationalProductionController