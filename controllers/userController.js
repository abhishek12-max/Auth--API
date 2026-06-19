const user = require("../models/user");
const jwt= require("jsonwebtoken");
const bycrpt= require("bcrypt");
 const signup = async (req,res) => {
    try{
        const password = req.body.password;
      const hashedpassword= await bycrpt.hash(password,10);
          req.body.password=hashedpassword;
        await user.create(req.body);
         res.send("signup ")
    }catch(err){
       res.send("something went wrong");
    }   
 }

 const login = async (req,res) => {
    try{
         const existinguser = await user.findOne({
           email:req.body.email
         });
        
         if(existinguser){
            const isMatch = await bycrpt.compare(req.body.password,existinguser.password);
             if(isMatch){
                 const token = jwt.sign({ id: existinguser._id },process.env.JWT_SECRET);
                  res.status(200).json({
                    message:"login success",
                    token: token
                     });
             }else{
               return res.status(404).send("invalid")
             }
         } else{
              res.send("not found");
         }

    }catch(err){
       res.status(500).send("something went wrong");
    }
 }

 const getProfile = (req,res)=>{
    res.status(200).send("Profile Access Granted");
}

 module.exports={
     signup,
     login,
     getProfile
 }