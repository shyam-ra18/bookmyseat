import { Router } from "express";
import { createCityController, deleteCityController, getCitiesController, getCityByIdController, updateCityController } from "../../controllers/city-controller.js";


const router = Router();

router.post('/', createCityController);        // Create a new city
router.get('/', getCitiesController);          // Get list of all cities
router.get('/:cityId', getCityByIdController); // Get details of a specific city
router.patch('/:cityId', updateCityController); // Update a city by ID
router.delete('/:cityId', deleteCityController); // Delete a city by ID


export const cityRoutes = router;