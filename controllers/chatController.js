const db = require("../models");

// defining methods for the chatController
module.exports = {
  findAll: function (req, res) {
    db.Chat.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Chat.find(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Chat.create(req.body)
      .then(({ _id }) =>
        db.Project.findOneAndUpdate({}, { $push: { chat: _id } }, { new: true })
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
