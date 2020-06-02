const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  message: String,
  from: String,
  project: String
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
