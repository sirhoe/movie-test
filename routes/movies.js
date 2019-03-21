const routes = require('express').Router();
const controller = require('../controllers/movies');

routes.post('/', controller.filterMovie);

module.exports = routes;
