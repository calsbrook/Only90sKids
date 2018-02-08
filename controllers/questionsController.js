var Question = require('../models/question');
var User = require('../models/user');
var session = require('express-session');

function getRandomQuestion(req, res) {
    // TODO:
    // add a question to the user's model
    var keys = Object.keys(Question)
    Question.find({}, function(err, questions) {
        let question = questions[Math.floor(Math.random() * questions.length)]
        // if (req.user.completedQuestions.find()) {

        // }
        req.user.completedQuestions.push(question)
        res.render('question', {question});
    })
    console.log(`completed questions: ${req.user.completedQuestions}`)
}

function addQuestion(req, res) {
    
}

module.exports = {
    getRandomQuestion,
    addQuestion
}