const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  auth_id: {
    type: String,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
