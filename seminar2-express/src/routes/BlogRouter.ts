import { Router } from "express";
import {BlogController} from "../controllers";
const router: Router = Router();

router.get("/", BlogController.getBlog);

export default router;
