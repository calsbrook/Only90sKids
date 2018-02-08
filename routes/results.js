var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

var resultsController = require('../controllers/resultsController');
router.get('/', resultsController)

/* GET leaderboard stats. */
router.get('/result', function(req, res, next) {
  res.render('./result', { title: 'Your Results' });
});

module.exports = router;