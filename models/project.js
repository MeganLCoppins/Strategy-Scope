const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task"
    }
  ],
  chat: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chat"
    }
  ]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
