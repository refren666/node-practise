const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

// SETTING APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SETTING HANDLEBARS
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));


let error = '';

let users = [
  {
    firstName: 'Petro',
    lastName: 'Doe',
    password: 'qwerty',
    age: 22,
    email: 'petya100500@email.com',
    city: 'Lviv'
  },
  {
    firstName: 'Lisa',
    lastName: 'Doe',
    password: 'qwery123',
    age: 25,
    email: 'lisalis222@email.com',
    city: 'Lviv'
  },
  {
    firstName: 'Maria',
    lastName: 'Pupkina',
    password: '789456',
    age: 21,
    email: 'masha999@email.com',
    city: 'Kharkiv'
  },
  {
    firstName: 'Mykola',
    lastName: 'Loremiv',
    password: 'qwertymerty',
    age: 18,
    email: 'kolyan777@email.com',
    city: 'Kyiv'
  }
];

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register');
})

app.get('/users', (req, res) => {
  let filteredUsers;

  if (Object.keys(req.query).length) {
    if (req.query.age && req.query.city) {
      filteredUsers = users.filter(user => {
        return (req.query.age && user.age === +req.query.age)
            && (req.query.city && user.city === req.query.city);
      })
    } else {
      filteredUsers = users.filter(user => {
        return (req.query.age && user.age === +req.query.age)
            || (req.query.city && user.city === req.query.city);
      })
    }

    res.render('users', { users: filteredUsers });
    return;
  }
  res.render('users', { users });
})

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users[userId - 1];

  if (!user) {
    error = `User with id ${userId} doesn't exist 😥`;

    res.redirect('/notFound');
    return;
  }

  res.render('user', { user });
})

app.post('/login', (req, res) => {
  const userId = users.findIndex(user => user.email === req.body.email && user.password === req.body.password);
  if (userId === -1) {
    error = 'Oof! Email or password was incorrect, try again.';

    res.redirect('/notFound');
    return;
  }
  res.redirect(`/users/${userId + 1}`);
})

app.post('/register', (req, res) => {
  users.push(req.body);

  if (users.find(user => user.email === req.body.email)) {
    error = 'User with such email already exist 😥';

    res.redirect('/notFound');
    return;
  }

  res.redirect('/users');
})

app.post('/users/:userId', (req, res) => {
  const { userId } = req.params;
  users = users.filter(user => user.email !== userId);

  res.redirect('/users');
})

app.use((req, res) => {
  res.render('notFound', { error });
})

app.listen(8080, () => {
  console.log('Connected to port 8080, WOOHOO!');
})