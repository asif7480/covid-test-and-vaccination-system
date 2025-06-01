import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "hospital", "patient"],
      lowercase: true,
      default: "patient",
    },
    isApproved: {
      type: String,
      enum: ["pending", "approved", "reject"],
      lowercase: true,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
