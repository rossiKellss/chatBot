const jwt=require('jsonwebtoken');

const createToken=(id)=>{
    const payload={
        id:id,
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    return token;

}

module.exports={createToken}