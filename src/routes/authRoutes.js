import { Router } from "express";
import wrapAsync from "../common/utils/wrapAsync.js";
import {
  userLogin,
  userLogout,
  userSignup,
} from "../controllers/authControllers.js";
import { validateRequest } from "../middlewares/validationMiddlewares.js";
import {
  joiLoginSchema,
  joiUserSignUpSchema,
} from "../common/utils/joiValidationSchema.js";
import { verifyAccessJWT } from "../middlewares/authMiddlewares.js";

const router = Router();

router.post(
  "/signup",
  validateRequest(joiUserSignUpSchema),
  wrapAsync(userSignup),
);

router.post("/login", validateRequest(joiLoginSchema), wrapAsync(userLogin));

router.post("/logout", verifyAccessJWT, wrapAsync(userLogout));

export default router;
