const bcrypt = require("bcrypt");
const { Schema, model,mongoose} = require("mongoose");
const chatSchema = require("./chatSchema");
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  chats: [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Chats"
  }],
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  next();
});

module.exports = new model("User", userSchema);
