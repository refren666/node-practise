"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const commentRouter = (0, express_1.Router)();
const commentController = require('../controllers/commentController');
commentRouter.get('/:userId', commentController.getCommentsAndPostsOfUserById);
commentRouter.patch('/action', commentController.addLikeOrDislike);
module.exports = commentRouter;
//# sourceMappingURL=commentRouter.js.map