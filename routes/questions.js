var express = require('express');
var router = express.Router();
var questionsController = require('../controllers/questionsController');

router.get('/question', isLoggedIn, questionsController.getRandomQuestion);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;