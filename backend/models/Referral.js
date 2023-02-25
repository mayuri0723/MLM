import mongoose from "mongoose";


const referralSchema = new mongoose.Schema({
    referringUser: { type: String, required: true },
    referredUser: { type: String, required: true },
    referralLevel: { type: Number, required: true },
    commissionAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  });