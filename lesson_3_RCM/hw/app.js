const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const apiRoutes = require('./routes/apiRoutes')

// SETTING APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// SETTING HANDLEBARS
app.set('view engine', '.hbs');
app.engine('.hbs', engine({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

app.listen(8080, () => {
  console.log('Connected to port 8080, WOOHOO!');
});