import express from "express"
import authRoutes from "./auth.route.mjs"
import patientRoutes from "./patient.route.mjs"
import bookingRoutes from "./booking.route.mjs"
import vaccineRoutes from "./vaccine.route.mjs"
import vaccinatedPatientsRoutes from "./vaccinatedPatient.route.mjs"
import covidTestRoutes from "./covidTest.route.mjs"
import reportRoutes from "./report.route.mjs"
import vaccinationApprovalRoutes from "./vaccinationApproval.route.mjs"
import testApprovalRoutes from "./testApproval.route.mjs"

const router = express.Router()

router.use("/api/v1/auth", authRoutes)
router.use("/api/v1/patients", patientRoutes)
router.use("/api/v1/vaccines", vaccineRoutes)
router.use("/api/v1/vaccinatedPatients", vaccinatedPatientsRoutes)
router.use('/api/v1/covidTests', covidTestRoutes)
router.use("/api/v1/bookings", bookingRoutes)
router.use("/api/v1/reports", reportRoutes)
router.use("/api/v1/vaccinationApprovals", vaccinationApprovalRoutes)
router.use("/api/v1/testApprovals", testApprovalRoutes)


export default router