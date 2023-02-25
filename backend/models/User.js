import mongoose from "mongoose";

// Defining Schema
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true
    },
    referralID: {
      type: String,
      required: true, unique: true
    },
    referredBy: {
      type: String
    },
    earnings: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true,
  }
)

// Model 
const User = mongoose.model("user", userSchema)

export default User