const User = require('../model/user');
const generateChatCompetion=(req,res,next)=>{
    const {prompt}=req.body;
    const user=User.findById(req.user.id);
    
    if (!user) return res.status(404).json({msg:"Token validation failed or invalid token"});

    console.log(user);



   

}