const model = require('../models/post');
const debug = require('debug')('app');
const passport = require('passport');
const nav = require('../menus/main');
const user = require('../models/user');

exports.about = (req, res) => {
  res.render(
    'about',
    {
      title: 'About',
      nav: getNavs(req),
      excerpt: 'A Blog created using express.js'
    }
  );
};