import express from "express";
import {
  addPatient,
  deletePatient,
  getAllPatients,
  getSinglePatient,
  updatePatient,
} from "../controllers/patient.controller.mjs";
const router = express.Router();

router.route("/").get(getAllPatients).post(addPatient);
router
  .route("/:id")
  .get(getSinglePatient)
  .put(updatePatient)
  .delete(deletePatient);

export default router;
