var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

var songsController = require('../controllers/songsController');
// router.post('/songs', isLoggedIn, songsController.index);

router.get('/', songsController.songDetails);
router.get('/song', songsController.renderSongQuiz)

module.exports = router;