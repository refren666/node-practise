"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
router.post('/registration', authController_1.authController.registration);
// router.post('/login', authController.login);
router.post('/logout', authController_1.authController.logout);
// router.post('/refresh', authController.refresh); // used to refresh token
exports.authRouter = router;
//# sourceMappingURL=authRouter.js.map