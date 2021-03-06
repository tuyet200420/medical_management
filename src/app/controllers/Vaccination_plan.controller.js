const Vaccination_plan = require("../models/Vaccination_plan");
class Vaccination_planController {
  get(req, res, next) {
    var item = {};
    if (req.query.q) {
      item.vaccine_id = req.query.q
    }
    if (req.query.status) {
      item.status = req.query.status
    }
    Vaccination_plan.find(item)
      .populate("vaccine_id")
      .sort({ _id: -1 })
      .then((vaccination_plans) => {
        res.send(vaccination_plans);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  GetSlug(req, res, next) {
    Vaccination_plan.findById(req.params.id)
      .populate("vaccine_id")
      .then((vaccination_plans) => {
        res.send(vaccination_plans);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  post(req, res, next) {
    console.log(req.body);
    const vaccination_plan = new Vaccination_plan(req.body);
    vaccination_plan
      .save()
      .then((vaccination_plans) => {
        Vaccination_plan.findById(vaccination_plans._id)
          .populate("vaccine_id")
          .then((vaccination_plans) => {
            res.send(vaccination_plans);
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
    console.log(req.body);
    console.log(req.params.id);
    Vaccination_plan.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        Vaccination_plan.findById(req.params.id)
          .populate("vaccine_id")
          .then((vaccination_plans) => {
            res.send(vaccination_plans);
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
    Vaccination_plan.deleteOne({ _id: req.params.id })
      .then((Vaccination_plan) => {
        res.send(Vaccination_plan);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }
}
module.exports = new Vaccination_planController();
