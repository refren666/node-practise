"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController = require('../controllers/postController');
const postRouter = (0, express_1.Router)();
postRouter.get('/:userId', postController.getPostsByUserId);
postRouter.patch('/:userId', postController.updatePostTextById);
module.exports = postRouter;
//# sourceMappingURL=postRouter.js.map