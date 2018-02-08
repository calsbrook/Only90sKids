var express = require('express');
var router = express.Router();

var questionsController = require('../controllers/questionsController');
router.get('/question', questionsController.getRandomQuestion);

module.exports = router;