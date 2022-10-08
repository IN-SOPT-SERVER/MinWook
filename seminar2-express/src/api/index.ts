import express, {Router} from "express";

const router: Router = express.Router();

router.use("/user", require("./user"));
router.use("/blog", require("./blog"));
router.use("/movie", require("./movie"));
router.use("/comment", require("./comment"));

module.exports = router;