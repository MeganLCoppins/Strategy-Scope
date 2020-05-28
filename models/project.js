const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  description: String,
  tasks: [
    {
        title: {
          type: String,
          unique: true
        },
        description: {
          type: String
        },
        due_date: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          default: "to-do",
        },
    }
]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
