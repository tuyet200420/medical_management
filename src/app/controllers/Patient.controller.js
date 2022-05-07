const Patient = require("../models/Patient");
class PatientController {
  get(req, res, next) {
    var item = {};
    if (req.query["gt"] && req.query["lt"]) {
      item = {
        birthday: {
          $gte: new Date(req.query["gt"]),
          $lt: new Date(req.query["lt"]),
        },
      };
    } else {
      if (req.query["gt"]) {
        item = {
          birthday: { $gte: new Date(req.query["gt"]) },
        };
      }
      if (req.query["lt"]) {
        item = {
          birthday: { $lt: new Date(req.query["lt"]) },
        };
      }
    }
    Patient.find(item)
      .sort({ _id: -1 })
      .then((patients) => {
        res.send(patients);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  GetSlug(req, res, next) {
    Patient.findById(req.params.id)
      .then((patients) => {
        res.send(patients);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  post(req, res, next) {
    console.log(req.body);
    const patient = new Patient(req.body);
    patient
      .save()
      .then((patients) => {
        res.send(patients);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  put(req, res, next) {
    console.log(req.body);
    console.log(req.params.id);
    Patient.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        const data = req.body;
        data._id = req.params.id;
        res.send(data);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  delete(req, res, next) {
    console.log(req.body);
    Patient.deleteOne({ _id: req.params.id })
      .then((Patient) => {
        res.send(Patient);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }
}
module.exports = new PatientController();
