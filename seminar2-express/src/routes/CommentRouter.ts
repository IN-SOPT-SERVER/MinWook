import { Router } from "express";
import { CommentController } from "../controllers";
const router: Router = Router();

router.get("/", CommentController.getComment);

export default router;
