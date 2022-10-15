import { Router } from "express";
import { MovieController } from "../controllers";
const router: Router = Router();

router.get("/", MovieController.getMovie);

export default router;
