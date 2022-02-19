const {Router} = require('express');

const registerController = require('../controllers/registerController');
const registrationValidation = require('../middlewares/registerMiddleware');

const registerRouter = Router();

registerRouter.get('/', registerController.renderRegisterForm);

registerRouter.post('/',
  registrationValidation.isDataFilledCorrectly,
  registrationValidation.doesUserAlreadyExist,
  registerController.signUp);

module.exports = registerRouter;