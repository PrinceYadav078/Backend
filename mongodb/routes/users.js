const mongoose = require("mongoose");

// connect to mongodb which is running on port 27017  and create database mydb
mongoose.connect("mongodb://127.0.0.1:27017/mydb");  
// 127.0.0.1=> localhost

const userSchema= mongoose.Schema({
  username:String,
  name:String,
  age:Number
})

module.exports=mongoose.model("Users", userSchema)