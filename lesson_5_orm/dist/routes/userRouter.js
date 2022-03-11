"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController = require('../controllers/userController');
const userRouter = (0, express_1.Router)();
userRouter.get('/', userController.getUsersWithSpecificText);
userRouter.post('/', userController.createUser);
userRouter.patch('/:userId', userController.updateUserEmailAndPasswordById);
// userRouter.delete('/:userId', async (req:Request, res:Response) => {
//   const { userId } = req.params;
//   console.log(req.body)
//   const deletedUser = await getManager().getRepository(User).delete({ id: Number(userId) })
//   res.json(deletedUser);
// })
userRouter.delete('/:userId', userController.deleteUserById);
module.exports = userRouter;
//# sourceMappingURL=userRouter.js.map