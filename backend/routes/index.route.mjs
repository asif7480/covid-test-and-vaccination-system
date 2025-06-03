import express from "express"
import authRoutes from "./auth.route.mjs"
import patientRoutes from "./patient.route.mjs"
import hospitalRoutes from "./hospitals.route.mjs"
import bookingRoutes from "./booking.route.mjs"
import vaccineRoutes from "./vaccine.route.mjs"
import vaccinatedPatientsRoutes from "./vaccinatedPatient.route.mjs"
import covidTestRoutes from "./covidTest.route.mjs"
import reportRoutes from "./report.route.mjs"

const router = express.Router()

router.use("/api/v1/auth", authRoutes)  //done
router.use("/api/v1/patients", patientRoutes)   //done
router.use("/api/v1/hospitals", hospitalRoutes) //done
router.use("/api/v1/vaccines", vaccineRoutes)   //done
router.use('/api/v1/covidTests', covidTestRoutes)   //done
router.use("/api/v1/vaccinatedPatients", vaccinatedPatientsRoutes)  //done
router.use("/api/v1/reports", reportRoutes)
router.use("/api/v1/bookings", bookingRoutes)


export default router