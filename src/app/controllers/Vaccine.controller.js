const Vaccine = require("../models/Vaccine");
class VaccineController {
  get(req, res, next) {
    var item = {};
    if (req.query["q"]) {
      item = {
        $or: [
          { name: { $regex: req.query.q, $options: "i" } },
          { origin: { $regex: req.query.q, $options: "i" } },
        ],
      };
    }
    Vaccine.find(item)
      .sort({ _id: -1 })
      .then((vaccines) => {
        res.send(vaccines);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }
  Search(req, res, next) {
    console.log("--------------------------------");
    console.log(`hihi req: ` + req.query["q"]);

    Vaccine.find({
      $text: {
        $search: req.params.q,
      },
    })
      .then((vaccines) => {
        res.send(vaccines);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  GetSlug(req, res, next) {
    Vaccine.findById(req.params.id)
      // console.log(req.params.id)
      .then((vaccines) => {
        res.send(vaccines);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  post(req, res, next) {
    console.log(req.body);
    const vaccine = new Vaccine(req.body);
    vaccine
      .save()
      .then((data) => {
        Vaccine.findById(data._id)
          .then((vaccines) => {
            res.send(vaccines);
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
    Vaccine.updateOne({ _id: req.params.id }, req.body)
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
    Vaccine.deleteOne({ _id: req.params.id })
      .then((Vaccine) => {
        res.send(Vaccine);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }
}
module.exports = new VaccineController();
