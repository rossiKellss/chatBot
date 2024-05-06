
const validateChat=(schema)=>{
    return async(req,res,next)=>{
        try{
            const parseBody=await schema.parseAsync(req.body);
            req.body=parseBody;
            next();
        }catch(err){
            console.log(err.message)
            res.status(404).json({message:err.message})

        }

    }
}

module.exports=validateChat;