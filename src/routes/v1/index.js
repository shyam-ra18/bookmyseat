import { Router } from "express"
import { Controllers } from "../../controllers/index.js";

const router = Router();

router.get('/info', Controllers.infoController);

export const v1Routes = router;