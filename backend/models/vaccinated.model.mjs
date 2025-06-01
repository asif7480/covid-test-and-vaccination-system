import mongoose from "mongoose";

const vaccinatedSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"
        },
        vaccine: {
            type: mongoose.Schema.Types.ObjectId, required: true, ref: "Vaccine"
        },
        vaccinatedDate: {
            type: Date, required: true
        },

    },
    {
        timestamps: true
    }
)

export const Vaccinated = mongoose.model("Vaccinated", vaccinatedSchema)