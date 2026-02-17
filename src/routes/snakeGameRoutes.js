import { Router } from "express";
import wrapAsync from "../common/utils/wrapAsync.js";
import {
  newGameScore,
  topTenScorers,
} from "../controllers/snakeGameControllers.js";
import { verifyAccessJWT } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post("/score/:u_id", verifyAccessJWT, wrapAsync(newGameScore));
router.get("/top-ten", wrapAsync(topTenScorers));

export default router;
