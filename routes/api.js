const questionsController = require('../controllers/api/questionsController')
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/questions', questionsController.getAllQuestions);
router.get('/questions/:id', questionsController.getOneQuestion);

module.exports = router;