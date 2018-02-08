var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

var instructionsController = require('../controllers/instructionsController');
router.get('/', instructionsController)

/* GET leaderboard stats. */
router.get('/instruction', function(req, res, next) {
  res.render('./instruction', { title: 'Instructions' });
});

module.exports = router;