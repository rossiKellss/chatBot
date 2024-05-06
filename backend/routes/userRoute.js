const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const signUpSchema=require('../validationSchema/userValidaton');
const validator=require('../middleware/userValidator');
const authorizeUser=require('../middleware/authorizeUser');


router.get('/getUsers',UserController.getUsers);
router.post("/user/signup",validator(signUpSchema) ,UserController.signUp);
router.post("/user/login",UserController.login);
router.get('/user/authorize',authorizeUser,(req,res)=>{res.send('hello')});

module.exports = router;
