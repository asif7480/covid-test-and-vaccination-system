import mongoose from "mongoose";

const reportSchema = mongoose.Schema(
  {
    reportTitle: {
      type: String,
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    covidStatus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CovidTest",
    },
    vaccinationStatus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vaccine",
    },
  },
  {
    timestamps: true,
  }
);

export const Report = mongoose.model("Report", reportSchema);
