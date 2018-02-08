var Question = require('../models/question');

function getRandomQuestion(req, res) {
    // TODO:
    // add a question to the user's model
    var keys = Object.keys(Question)
    Question.find({}, function(err, questions) {
        let question = questions[Math.floor(Math.random() * questions.length)]
        res.render('question', {question});
    })
}

module.exports = {
    getRandomQuestion
}