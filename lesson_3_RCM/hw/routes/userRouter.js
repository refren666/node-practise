const {Router} = require('express');

const userController = require('../controllers/userController');
const isValidUserId = require('../middlewares/isValidUserId')

const userRouter = Router();

userRouter.get('/', userController.renderUsers);

userRouter.get('/:userId', isValidUserId, userController.getUserById);

userRouter.post('/:userId', userController.deleteUserById);

module.exports = userRouter;