var Question = require('../models/question');

function getRandomQuestion(req, res) {
    // TODO:
    // select random question
    // add a question to the user's model
    Question.findOne({}, function(err, question) {
        res.render('question', {question})
    });
}

module.exports = {
    getRandomQuestion
}