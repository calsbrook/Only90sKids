var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

var leaderboardController = require('../controllers/leaderboardController');
router.get('/', leaderboardController)

/* GET leaderboard stats. */
router.get('/leaderboard', function(req, res, next) {
  res.render('./leaderboard', { title: 'Leaderboard' });
});

module.exports = router;