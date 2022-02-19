let users = require("../db/users");

class RegisterController {
  renderRegisterForm(req, res) {
    res.render('register');
  }

  signUp(req, res) {
    users.push(req.body);

    res.redirect('/users');
  }
}

module.exports = new RegisterController();