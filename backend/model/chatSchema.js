const { Schema, model } = require("mongoose");
const { randomUUID } = require("crypto");
const chatSchema = new Schema({
  id: {
    type: String,
    default: randomUUID(),
  },
  role: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = new model("Chats", chatSchema);
