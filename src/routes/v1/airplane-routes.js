import { Router } from "express";
import { createAirplaneController } from "../../controllers/airplane-controller.js";

const router = Router();

router.post('/', createAirplaneController);

export const airplaneRoutes = router;