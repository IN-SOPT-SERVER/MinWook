import {Router} from "express";
import { ContentController } from "../controllers";

const router: Router = Router();

router.get('/:contentId', ContentController.getContent);

export default router;