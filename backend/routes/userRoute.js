const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const signUpSchema=require('../utils/validationSchema');
const validator=require('../middleware/schemaValidator');
const authorizeUser=require('../middleware/authorizeUser');


router.get('/getUsers',UserController.getUsers);
router.post("/user/signup",validator(signUpSchema) ,UserController.signUp);
router.post("/user/login",UserController.login);
router.get('/user/authorize',authorizeUser,(req,res)=>{res.send('hello')});

module.exports = router;
