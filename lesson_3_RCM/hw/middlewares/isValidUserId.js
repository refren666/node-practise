const users = require("../db/users");

const isValidUserId = (req, res, next) => {
  try {
    const {userId} = req.params;
    const user = users[userId - 1];

    if (!user) {
      throw new Error(`User with id ${userId} doesn't exist`)
    }

    next();

  } catch (err) {
    res.redirect(`/error?error=${err.message}`)
  }
}

module.exports = isValidUserId;