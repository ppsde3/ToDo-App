const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports=user=mongoose.model("users",UserSchema);