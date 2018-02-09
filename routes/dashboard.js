var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

var dashboardController = require('../controllers/dashboardController');
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
/* GET leaderboard stats. */
router.get('/dashboard', isLoggedIn, dashboardController.dashboardDetails)

module.exports = router;