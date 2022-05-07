const Patient_vaccination = require('../models/Patient_vaccination');
class Patient_vaccinationController {
 
  get(req,res,next) {
    Patient_vaccination.find().populate("vaccination_plan_id").populate("patient_id").sort({_id: -1 })
    .then(patient_vaccinations => {
      res.send(patient_vaccinations);
  })
    .catch((next) => {res.status(500).send(next)})
   
  }
   
  GetSlug(req,res,next) {
    Patient_vaccination.findById(req.params.id).populate("vaccination_plan_id,patient_id")
    .then(patient_vaccinations=>{
      res.send(patient_vaccinations);
    })
    .catch(next=>{res.status(500).send(next)});
  }

  post(req,res,next) {
    console.log(req.body);
    const patient_vaccination =  new Patient_vaccination(req.body);
    patient_vaccination.save()
    .then((patient_vaccinations)=>{
      res.send(patient_vaccinations);
    })
    .catch(next=>{res.status(500).send(next)})
  };

  put(req,res,next) {
    console.log(req.body);
    console.log(req.params.id);
    Patient_vaccination.updateOne({_id: req.params.id},req.body)
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
    Patient_vaccination.deleteOne({_id: req.params.id})
    .then((Patient_vaccination)=>{
      res.send(
        Patient_vaccination
       );
    })
    .catch(next=>{res.status(500).send(next)})
  };

}
module.exports = new Patient_vaccinationController