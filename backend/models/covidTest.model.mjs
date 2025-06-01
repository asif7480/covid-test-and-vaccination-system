import mongoose from "mongoose";

const covidTestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["No-result", "positive", "negative"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CovidTest = mongoose.model("CovidTest", covidTestSchema);
