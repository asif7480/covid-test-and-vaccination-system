import express from "express";
const router = express.Router();
import {
  getAllVaccines,
  addVaccine,
  updateVaccine,
  deleteVaccine,
} from "../controllers/vaccine.controller.mjs";
import { auth } from "../middlewares/auth.middleware.mjs";
import { checkRole } from "../middlewares/role.middlemare.mjs";

router.use(auth);

router
  .route("/")
  .get(getAllVaccines)
  .post(checkRole("admin", "hospital"), addVaccine);
router
  .route("/:id")
  .put(checkRole("admin", "hospital"), updateVaccine)
  .delete(checkRole("admin", "hospital"), deleteVaccine);

export default router;