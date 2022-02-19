let users = require("../db/users");

class LoginController {
  renderLoginForm(req, res) {
    res.render('login');
  }

  login(req, res) {
    const userId = users.findIndex(user => user.email === req.body.email && user.password === req.body.password);

    res.redirect(`/users/${userId + 1}`);
  }
}

module.exports = new LoginController();