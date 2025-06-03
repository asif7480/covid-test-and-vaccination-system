import mongoose from "mongoose";

const vaccinatedPatientSchema = mongoose.Schema(
    {
        patient: {
            type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"
        },
        vaccine: {
            type: mongoose.Schema.Types.ObjectId, required: true, ref: "Vaccine"
        },
        date: {
            type: Date, required: true
        }

    },
    {
        timestamps: true
    }
)

export const VaccinatedPatient = mongoose.model("VaccinatedPatient", vaccinatedPatientSchema)