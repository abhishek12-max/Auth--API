const express= require("express");
 const router= express.Router();
 const authmiddleware = require("../middleware/authmiddleware");
const{signup,login,getProfile}= require("../controllers/userController");
router.post("/signup",signup);
router.post("/login",login);
router.get("/profile",authmiddleware, getProfile);
module.exports= router;


