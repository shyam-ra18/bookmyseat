import { Router } from "express";
import { createAirplaneController, getAirplaneController } from "../../controllers/airplane-controller.js";
import { validateCreateRequest } from "../../middlewares/airplane-middlewares.js";

const router = Router();

router.post('/', createAirplaneController);
router.get('/', getAirplaneController);

export const airplaneRoutes = router;