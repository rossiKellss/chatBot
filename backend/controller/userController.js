const bcrypt = require("bcrypt");
const User = require("../model/user");
const { createToken } = require("../utils/token-generate");


const UserController = {
  getUsers: async (req, res) => {
    try {
      const result = await User.find();
      if (!result) return res.status(404).json({ msg: "User not found" });
      res.status(200).json({ msg: "OK", result });
    } catch (err) {
      console.log(err.message);
    }
  },

  signUp: async (req, res) => {
    try {
      const { userName, email, password } = req.body;
      const userExists = await User.findOne({ userName });
      if (userExists) {
        res.status(404).json({ msg: "User already exists" });
      } else {
        const result = await User.create({
          userName,
          email,
          password,
        });
        const token = createToken(result._id);

        res.cookie("auth_token",token);
      }
    } catch (err) {
      console.log(err.message);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExists = await User.findOne({ email });
      if (!userExists) return res.status(404).json({ msg: "User not found" });

      const validatePassword = await bcrypt.compare(
        password,
        userExists.password
      );
      if (!validatePassword) {
        return res.status(404).json({ msg: "Invalid credentials" });
      }
      res.clearCookie("auth_token");
      const token = createToken(userExists._id);
      
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      res.json({auth_token:token})
      // res.cookie("auth_token", token, {
      //   path: "/",
      //   domain: "localhost",
      //   expires: expires,
      //   httpOnly: true,
      //   signed: true,
      // });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = UserController;
