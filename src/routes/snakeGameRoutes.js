import { Router } from "express";
import wrapAsync from "../common/utils/wrapAsync.js";
import {
  newGameScore,
  topThreeScorers,
} from "../controllers/snakeGameControllers.js";
import { verifyAccessJWT } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/score/:u_id", verifyAccessJWT, wrapAsync(newGameScore));
router.get("/top-three", wrapAsync(topThreeScorers));

export default router;
