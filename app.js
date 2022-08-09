// Modules

const express = require('express');
const app = express();

// App Settings

app.set('views', './views');
app.set('view engine', 'ejs');

// Routing
const home = require('./routes/home');


app.use('/', home);

module.exports = app;