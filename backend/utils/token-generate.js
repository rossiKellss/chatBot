const jwt=require('jsonwebtoken');
const { token } = require('morgan');

const createToken=(id)=>{
    const payload={
        id:id,
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    return token;

}

const verifyToken=(token)=>{
    const result=jwt.verify(token,process.env.JWT_SECRET);
    return result;


}

module.exports={createToken,verifyToken}