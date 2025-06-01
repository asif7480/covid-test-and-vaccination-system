import mongoose from "mongoose";

const vaccineSchema = mongoose.Schema(
    {
        vaccineName: {
            type: String,
            required: true,
            trim: true
        },
        isAvailable: {
            type: Boolean,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Vaccine = mongoose.model("Vaccine", vaccineSchema)