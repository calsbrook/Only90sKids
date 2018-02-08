var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

var dashboardController = require('../controllers/dashboardController');
router.get('/', dashboardController)

/* GET leaderboard stats. */
router.get('/dashboard', function(req, res, next) {
  res.render('./dashboard', { title: 'Dashboard' });
});

module.exports = router;