const Message = require("../models/Message");
class MessageController {
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
    Message.find(item)
      .sort({ updatedAt: -1 })
      .populate("user_id")
      .then((messages) => {
        res.send(messages);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }

  GetSlug(req, res, next) {
    if (req.query["q"]) {
      Message.findOne({ "user_id": req.query["q"] })
        .populate("user_id")
        .then((messages) => {
          res.send(messages);
        })
        .catch((next) => {
          res.status(500).send(next);
        });
    } else {
      Message.findById(req.params.id)
        .populate("user_id")
        .then((messages) => {
          res.send(messages);
        })
        .catch((next) => {
          res.status(500).send(next);
        });
    }
  }

  post(req, res, next) {
    console.log(req.body);
    const message = new Message(req.body);
    message
      .save()
      .then((data) => {
        Message.findById(data._id)
          .populate("user_id")
          .then((messages) => {
            res.send(messages);
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
    Message.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        Message.findById(req.params.id)
          .populate("user_id")
          .then((messages) => {
            res.send(messages);
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
    Message.deleteOne({ _id: req.params.id })
      .then((Message) => {
        res.send(Message);
      })
      .catch((next) => {
        res.status(500).send(next);
      });
  }
}
module.exports = new MessageController();
