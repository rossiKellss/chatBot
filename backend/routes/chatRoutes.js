const { Router } = require("express");
const configGemini = require("../config/configGemini");
const chatRoutes = Router();
const model = configGemini();
const validateChat = require("../middleware/chatValidator");
const chatSchema = require("../validationSchema/chatValidation");
const authorizeUser = require("../middleware/authorizeUser");
const User = require("../model/user");

chatRoutes.post(
  "/text",
  validateChat(chatSchema),
  authorizeUser,
  async (req, res) => {
    try {
      const { prompt } = req.body;
      const result = await model.generateContent(prompt);
      const text = await result.response.text();
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ msg: "User not found" });
      user.chats.push({text:user});
      console.log(user);
      // console.log(req.user);
      console.log(text);
      res.send(text);
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = chatRoutes;
