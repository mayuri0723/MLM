// make user schema as per need.
// it is working now from backend...
// we were outside backend that was the problem.
import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  uname:{type:String, required:true, trim:true},
  email:{type:String, required:true, trim:true},
})

// Model 
const User = mongoose.model("user", userSchema)

export default User