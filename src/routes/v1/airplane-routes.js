import { Router } from "express";
import { createAirplaneController } from "../../controllers/airplane-controller.js";
import { validateCreateRequest } from "../../middlewares/airplane-middlewares.js";

const router = Router();

router.post('/', validateCreateRequest, createAirplaneController);

export const airplaneRoutes = router;