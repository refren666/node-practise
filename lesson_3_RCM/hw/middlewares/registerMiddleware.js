const users = require("../db/users");

const isDataFilledCorrectly = (req, res, next) => {
  try {
    const {firstName, lastName, password, age, email, city} = req.body;

    if (!firstName.match(/^[a-zA-Z]{2,30}$/) || !lastName.match(/^[a-zA-Z]{2,30}$/)) {
      throw new Error('First/Last name must be at least 2 characters and contain only latin letters');
    }

    if (!password.match(/^[a-zA-Z0-9]{6,14}$/)) {
      throw new Error('Invalid password. It should be at least of 6 latin characters and digits');
    }

    if (!age || age < 18) {
      throw new Error('Age was not specified or you are less than 18 y.o.');
    }

    if (email.length < 3) {
      throw new Error('Email is too short');
    }

    if (!city.match(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/)) {
      throw new Error('Invalid city name');
    }

    next();

  } catch (error) {
    res.redirect(`/error?error=${error.message}`);
  }
}

const doesUserAlreadyExist = (req, res, next) => {
  try {
    if (users.find(user => user.email === req.body.email)) {
      throw new Error('User with such email already exist');
    }

    next();

  } catch (error) {
    res.redirect(`/error?error=${error.message}`);
  }
}

module.exports = {
  isDataFilledCorrectly,
  doesUserAlreadyExist
};