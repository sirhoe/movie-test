const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const validator = require('./helpers/validators');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Error handling for JSON syntax error
app.use(validator.checkJSON);

// routes
const movieRoute = require('./routes/movies');
// hooking it to the root of the url
app.use('/', movieRoute);

module.exports = app;
