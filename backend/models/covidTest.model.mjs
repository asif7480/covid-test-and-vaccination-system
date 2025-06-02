import mongoose from "mongoose";

const covidTestSchema = mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "positive", "negative"],
      lowercase: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CovidTest = mongoose.model("CovidTest", covidTestSchema);
