import { Router } from "express";
import UserRouter from "./UserRouter";
import MovieRouter from "./MovieRouter";
import BlogRouter from "./BlogRouter";
import CommentRouter from "./CommentRouter";

const router: Router = Router();

router.use("/user", UserRouter);
router.use("/movie", MovieRouter);
router.use("/blog", BlogRouter);
router.use("/comment", CommentRouter);
export default router;
