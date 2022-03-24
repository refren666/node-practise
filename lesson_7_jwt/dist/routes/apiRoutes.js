"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authRouter_1 = require("./authRouter");
const { Router } = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const commentRouter = require('./commentRouter');
const routes = Router();
routes.use('/users', userRouter);
routes.use('/posts', postRouter);
routes.use('/comments', commentRouter);
routes.use('/auth', authRouter_1.authRouter);
module.exports = routes;
//# sourceMappingURL=apiRoutes.js.map