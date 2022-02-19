const {Router} = require('express');

const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const registerRouter = require("./registerRoute");

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/users', userRouter);
routes.use('/register', registerRouter);

routes.get('/error', (req, res) => {
  res.render('error', {error: req.query.error});
})

routes.use((req, res) => {
  res.render('notFound');
});

module.exports = routes;