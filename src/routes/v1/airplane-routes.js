import { Router } from "express";
import { createAirplaneController, getAirplaneByIdController, getAirplaneController } from "../../controllers/airplane-controller.js";
import { validateCreateRequest } from "../../middlewares/airplane-middlewares.js";

const router = Router();

router.post('/', createAirplaneController);
router.get('/', getAirplaneController);
router.get('/:airplaneId', getAirplaneByIdController);

export const airplaneRoutes = router;