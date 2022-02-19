let users = require('../db/users');

class UserController {
  renderUsers(req, res) {
    // let filteredUsers;
    //
    // if (Object.keys(req.query).length) {
    //   if (req.query.age && req.query.city) {
    //     filteredUsers = users.filter(user => {
    //       return (req.query.age && user.age === +req.query.age)
    //           && (req.query.city && user.city === req.query.city);
    //     });
    //   } else {
    //     filteredUsers = users.filter(user => {
    //       return (req.query.age && user.age === +req.query.age)
    //           || (req.query.city && user.city === req.query.city);
    //     });
    //   }
    //
    //   res.render('users', { users: filteredUsers });
    //   return;
    // }

    if (Object.keys(req.query).length) {
      let usersArray = [...users];

      if (req.query.city) {
        usersArray = usersArray.filter(user => user.city === req.query.city);
      }

      if (req.query.age) {
        usersArray = usersArray.filter(user => user.age === +req.query.age);
      }

      res.render('users', {users: usersArray});
      return;
    }

    res.render('users', {users});
  }

  getUserById(req, res) {
    const {userId} = req.params;
    const user = users[userId - 1];

    res.render('user', {user});
  }

  deleteUserById(req, res) {
    const {userId} = req.params;
    users = users.filter(user => user.email !== userId);

    res.redirect('/users');
  }
}

module.exports = new UserController();