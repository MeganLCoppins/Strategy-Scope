const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  code: {
    type: String,
    trim: true,
    validate: [({ length }) => length >= 6, "Password should be longer."]
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
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
