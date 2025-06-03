import express from "express";
const router = express.Router();
import {
  getAllVaccinatedPatients,
  addVaccinatedPatient,
  updateVaccinatedPatient,
  deleteVaccinatedPatient,
} from "../controllers/vaccinatedPatient.controller.mjs";
import { auth } from "../middlewares/auth.middleware.mjs";
import { checkRole } from "../middlewares/role.middlemare.mjs";

router.use(auth);

router
  .route("/")
  .get(checkRole("admin", "hospital"), getAllVaccinatedPatients)
  .post(checkRole("admin", "hospital"), addVaccinatedPatient);

router
  .route("/:id")
  .put(checkRole("admin", "hospital"), updateVaccinatedPatient)
  .delete(checkRole("admin", "hospital"), deleteVaccinatedPatient);

export default router;
