const validate = (schema) => {
  return async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body=parseBody;
      next();
    } catch (err) {
      
      console.log(err);
      res.status(404).json({message: err.message});
    
    }
  };
};

module.exports=validate;
