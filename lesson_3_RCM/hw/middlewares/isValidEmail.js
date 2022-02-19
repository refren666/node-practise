const users = require('../db/users')

const isValidEmail = (req, res, next) => {
  try {
    const {email, password} = req.body;

    if (users.filter(user => user.email === email && user.password === password).length === 0) {
      throw new Error('Email or password was incorrect, try again');
    }

    next();

  } catch (error) {
    res.redirect(`/error?error=${error.message}`)
  }
}

module.exports = isValidEmail;

