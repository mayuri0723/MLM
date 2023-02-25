import User from '../models/User.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

const addUserDetails = asyncHandler(async(req,res)=>{
  const {
    username,
    email,
    password,
    referralID, 
    referredBy,
    earnings,
     
  } = req.body

  const userData = new User({
    username,
    email,
    password,
    referralID, 
    referredBy,
    earnings,

  })
  const createdUser = await userData.save();
  // console.log("success  Inquiry Data");
  res.status(201).json(createdUser)

})


export  {addUserDetails}