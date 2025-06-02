import express from "express";
const router = express.Router();
import {
  getAllHospitals,
  getSingleHospital,
  addHospital,
  updateHospital,
  deleteHospital,
} from "../controllers/hospital.controller.mjs";
import { auth } from "../middlewares/auth.middleware.mjs";
import { checkRole } from "../middlewares/role.middlemare.mjs";

router.use(auth)

router.route("/").get(getAllHospitals).post(checkRole("admin"), addHospital);
router
  .route("/:id")
  .get(getSingleHospital)
  .put(checkRole("admin"), updateHospital)
  .delete(checkRole("admin"), deleteHospital);

export default router;
