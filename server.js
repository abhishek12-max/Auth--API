require("dotenv").config();
const express= require("express");
 const app= express();
 app.use(express.json());
 require("./config/db");
const userroutes= require("./routes/userRoutes");
app.use("/user",userroutes);
 app.listen(3000);