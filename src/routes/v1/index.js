import { Router } from "express"
import { Controllers } from "../../controllers/index.js";
import { airplaneRoutes } from "./airplane-routes.js";
import { cityRoutes } from "./city-routes.js";

const router = Router();

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.get('/info', Controllers.infoController);

export const v1Routes = router;