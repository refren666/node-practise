import {Router} from "express";

import { authController } from "../controllers/authController";
import { authMiddleware } from './../middlewares';

const router = Router();

router.post('/registration', authController.registration);
// router.post('/login', authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
// router.post('/refresh', authController.refresh); // used to refresh token

export const authRouter = router;
