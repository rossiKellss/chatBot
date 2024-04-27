const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const signUpSchema=require('../utils/validationSchema');
const validator=require('../middleware/schemaValidator');


router.get('/getUsers',UserController.getUsers);
router.post("/user/signup",validator(signUpSchema) ,UserController.signUp);
// router.post("/user/login",passport.authenticate());
// router.get("/signInWithGoogle", passport.authenticate("google", {scope:['profile']}));
module.exports = router;
