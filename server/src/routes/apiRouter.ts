import { Router } from "express";
import { apiController } from "../controllers/apiController.js";
const router = Router();
router.route("/self").get(apiController);
export default router;
