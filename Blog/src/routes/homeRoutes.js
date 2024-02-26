const express = require('express');

const homeRouter = express.Router();
const controller = require('../controllers/homeController');

homeRouter.route('/')
.get(controller.home);

homeRouter.route('/login')
.post(controller.auth);

module.exports = homeRouter;