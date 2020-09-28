const path =require('path');
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app=express();
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());
const db=require("./config/keys").mongoURI;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("DataBase Connected")).catch(err=>console.log(err));
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);
if(process.env.NODE_ENV)
{
    app.use(express.static('client/build'));;

    app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}
const port=process.env.PORT|| 5000;
app.listen(port,()=>{
    console.log("Server is Running");
});