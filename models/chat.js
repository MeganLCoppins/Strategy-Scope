const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  message: String,
  from: String,
  project: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
