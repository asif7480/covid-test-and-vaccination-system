import mongoose from "mongoose";

const vaccinationApprovalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    vaccine: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vaccine"
    },
    vaccineApprovalStatus: {
      type: String,
      enum: ["pending", "approve", "reject"],
    },
  },
  {
    timestamps: true,
  }
);

export const VaccinationApproval = mongoose.model(
  "VaccinationApproval",
  vaccinationApprovalSchema
);
