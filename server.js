const express= require("express");
 const app= express();
 app.use(express.json());
 require("./config/db");
const userroutes= require("./routes/userRoutes");
app.use("/users",userroutes);
 app.listen(3000);