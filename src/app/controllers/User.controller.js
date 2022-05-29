const User = require("../models/User");
class UserController {
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
    User.find(item)
      .sort({ _id: -1 })
      .then((users) => {
        res.send(users);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  login(req, res, next) {
    User.findOne(req.body)
      .then((users) => {
        res.send(users);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  GetSlug(req, res, next) {
    User.findById(req.params.id)
      .then((users) => {
        res.send(users);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  post(req, res, next) {
    console.log(req.body);
    const user = new User(req.body);
    user
      .save()
      .then((users) => {
        res.send(users);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  put(req, res, next) {
    User.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        User.findById(req.params.id)
          .then((users) => {
            res.send(users);
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
    User.deleteOne({ _id: req.params.id })
      .then((users) => {
        res.send(users);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }
}
module.exports = new UserController();
