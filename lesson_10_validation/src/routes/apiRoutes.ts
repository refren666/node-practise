import {authRouter} from "./authRouter";

const { Router } = require('express');

const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const commentRouter = require('./commentRouter');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/posts', postRouter);
routes.use('/comments', commentRouter);
routes.use('/auth', authRouter);
// @ts-ignore
routes.use('*', (err, req, res, next) => { // for errors
  res.status(err.code || 500).json({
    message: err.message,
    data: err.data,
  })
});

module.exports = routes;
