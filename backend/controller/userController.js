const bcrypt = require("bcrypt");
const User = require("../model/user");
const { createToken } = require("../utils/token-generate");
const genCookie=require('../utils/cookie');

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
      const userExists = await User.findOne({$or:[{userName},{email}] });
      if (userExists) {
        res.status(404).json({ msg: "User already exists" });
      } else {
        
        const result = await User.create({
          userName,
          email,
          password,
        });
        
       const token = createToken(result._id);
       const setAuthTokenCookie = genCookie(token);
       setAuthTokenCookie(req, res);
       return res.status(200).json({msg:token})
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
      const setAuthTokenCookie= genCookie(token);
      setAuthTokenCookie(req,res);
      res.json({msg:token});
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = UserController;
