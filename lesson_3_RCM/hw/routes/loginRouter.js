const {Router} = require('express');

const loginController = require('../controllers/loginController');
const isValidEmail = require('../middlewares/isValidEmail');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLoginForm);

loginRouter.post('/', isValidEmail, loginController.login);

module.exports = loginRouter;