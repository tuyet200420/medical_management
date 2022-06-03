const RegisterVaccination = require("../models/Register_vaccination");
class Register_vaccinationController {
  get(req, res, next) {
   
    var item = {};

    if (req.query["q"]) {
      item = {
        $or: [
          { name: { $regex: req.query.q, $options: "i" } },
          { phone_number: { $regex: req.query.q, $options: "i" } },
        ],
      };
    }
    if (req.query.userId) {
      item.user_id = req.query.userId
    }
    RegisterVaccination.find(item)
      .populate("vaccine_id")
      .sort({ _id: -1 })
      .then((registerVaccinations) => {
        res.send(registerVaccinations);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  GetSlug(req, res, next) {
    RegisterVaccination.findById(req.params.id)
      .populate("vaccine_id")
      .then((registerVaccinations) => {
        res.send(registerVaccinations);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  post(req, res, next) {
    const registerVaccination = new RegisterVaccination(req.body);
    registerVaccination
      .save()
      .then((data) => {
        RegisterVaccination.findById(data._id)
          .populate("vaccine_id")
          .then((registerVaccinations) => {
            res.send(registerVaccinations);
          })
          .catch((next) => {
            res.status(500).send(next);
          });
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  put(req, res, next) {
    console.log(req);
    RegisterVaccination.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        RegisterVaccination.findById(req.params.id)
          .populate("vaccine_id")
          .then((registerVaccinations) => {
            res.send(registerVaccinations);
          })
          .catch((next) => {
            res.status(500).send(next);
          });
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  delete(req, res, next) {
    console.log(req.body);
    RegisterVaccination.deleteOne({ _id: req.params.id })
      .then((registerVaccinations) => {
        res.send(registerVaccinations);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }
}
module.exports = new Register_vaccinationController();
