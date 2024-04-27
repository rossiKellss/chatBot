const User = require("../model/user");
const UserController = {
  getUsers:async(req,res)=>{
    try{
      const result=await User.find();
      if(!result) return res.status(404).json({msg:"User not found"});
      res.status(200).json({msg:"OK",result});
    }catch(err){
      console.log(err.message);

    }
  },
  signUp: async (req, res,next) => {
    try {
    
      const { userName, email, password } = req.body;
      const userExists = await User.findOne({ userName });
      if (userExists) {
        res.status(404).json({ msg: "User already exists"});
        
      }
      const result =await User.create({
        userName,
        email,
        password,
      });
      console.log("the result is",result);

      res.status(200).json({ msg: "User created successfully" });
    } catch (err) {
      console.log(err.message);
    }
    
  },
};

module.exports = UserController;
