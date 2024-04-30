const genCookie =  (token) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);
  
  return (req, res) => {
     res.cookie("auth_token", token, {
      path: "/",
      domain: "localhost",
      expires: expires,
      httpOnly: true,
      signed: true,
    });
  };
};

module.exports=genCookie;
