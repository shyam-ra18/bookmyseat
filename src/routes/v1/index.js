import { Router } from "express"
import { Controllers } from "../../controllers/index.js";
import { airplaneRoutes } from "./airplane-routes.js";

const router = Router();

router.use('/airplanes', airplaneRoutes);
router.get('/info', Controllers.infoController);

export const v1Routes = router;