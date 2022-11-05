import express, {Router} from "express";

const router: Router = express.Router();

router.use("/random", require("./random"));

module.exports = router;