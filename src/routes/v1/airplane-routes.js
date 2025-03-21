import { Router } from "express";
import { createAirplaneController, deleteAirplaneController, getAirplaneByIdController, getAirplaneController, updateAirplaneController } from "../../controllers/airplane-controller.js";

const router = Router();

router.post('/', createAirplaneController);          // Create a new airplane
router.get('/', getAirplaneController);              // Get list of all airplanes
router.get('/:airplaneId', getAirplaneByIdController); // Get details of a specific airplane
router.patch('/:airplaneId', updateAirplaneController); // Update an airplane by ID
router.delete('/:airplaneId', deleteAirplaneController); // Delete an airplane by ID

export const airplaneRoutes = router;