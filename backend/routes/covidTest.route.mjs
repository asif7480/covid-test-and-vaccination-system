import express from "express";
const router = express.Router();
import { auth } from "../middlewares/auth.middleware.mjs";
import {
  getAllTests,
  addTest,
  getSingleTest,
  updateTest,
  deleteTest,
} from "../controllers/covidTest.controller.mjs";
import { checkRole } from "../middlewares/role.middlemare.mjs";

router.use(auth);

router
  .route("/")
  .get(checkRole("admin", "hospital"), getAllTests)
  .post(checkRole("patient"), addTest);
router
  .route("/:id")
  .get(getSingleTest)
  .put(checkRole("admin", "hospital"), updateTest)
  .delete(checkRole("admin", "hospital"), deleteTest);

export default router;
