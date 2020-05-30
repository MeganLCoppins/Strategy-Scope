const db = require("../models");

// defining methods for the taskController
module.exports = {
    // findAll set to sort based on due date in ascending order
    findAll: function(req, res){
        db.Project
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
            console.log(req.body)
    },
    findById: function(req, res){
        db.Project
            .find({})
            .populate("tasks")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Project
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Project
            .findByIdAndUpdate(req.params.id, { tasks: req.body })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};