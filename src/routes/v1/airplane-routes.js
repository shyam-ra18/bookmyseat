import { Router } from "express";
import { createAirplaneController, deleteAirplaneController, getAirplaneByIdController, getAirplaneController, updateAirplaneController } from "../../controllers/airplane-controller.js";
import { validateCreateRequest } from "../../middlewares/airplane-middlewares.js";

const router = Router();

router.post('/', createAirplaneController);
router.get('/', getAirplaneController);
router.get('/:airplaneId', getAirplaneByIdController);
router.delete('/:airplaneId', deleteAirplaneController);
router.patch('/:airplaneId', updateAirplaneController);

export const airplaneRoutes = router;