import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        vaccine: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Vaccine"
        },
        bookingDate: {
            type: Date,
            default: Date.now()
        },
        status: {
            type: String,
            enum: ["pending", "completed"],
            lowercase: true
        }
    },
    {
        timestamps: true
    }
)

export const Booking = mongoose.model("Booking", bookingSchema)