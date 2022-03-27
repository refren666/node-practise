import { celebrate } from "celebrate";
import {Router} from "express";

import { authController } from "../controllers/authController";
import { authValidator } from "../validators";
import { authMiddleware, userMiddleware } from './../middlewares';

const router = Router();

router.post('/registration', authController.registration);
router.post('/login', celebrate(authValidator.login), userMiddleware.checkIfUserExists, authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefreshToken, authController.refresh); // used to refresh token

export const authRouter = router;
