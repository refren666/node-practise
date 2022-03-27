import { Router } from "express";

import { authController } from "../controllers/authController";
import { authMiddleware, userMiddleware } from "./../middlewares";

const router = Router();

router.post(
  "/registration",
  authMiddleware.isRegistrationValid,
  authController.registration
);
router.post(
  "/login",
  authMiddleware.isLoginValid,
  userMiddleware.checkIfUserExists,
  authController.login
);
router.post("/logout", authMiddleware.checkAccessToken, authController.logout);
router.post(
  "/refresh",
  authMiddleware.checkRefreshToken,
  authController.refresh
); // used to refresh token

export const authRouter = router;
