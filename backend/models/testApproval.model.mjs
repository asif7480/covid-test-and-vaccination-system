import mongoose from "mongoose";

const testApprovalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    covidTestApprovalStatus: {
      type: String,
      enum: ["pending", "approve", "reject"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const TestApproval = mongoose.model("TestApproval", testApprovalSchema);
