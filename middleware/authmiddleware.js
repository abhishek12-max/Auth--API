const jwt= require("jsonwebtoken");
const authmiddleware= (req,res,next)=>{
   const token = req.headers.authorization.split(" ")[1];
    console.log("TOKEN =>", token);
    if(!token){
        return res.status(401).send("unauthroized");
    }
try{
   jwt.verify(token,process.env.JWT_SECRET);

   next();

}catch(err){
   return res.status(401).send("invalid token");
}
}

module.exports = authmiddleware;