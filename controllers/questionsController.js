var Question = require('../models/question');
var User = require('../models/user');
var session = require('express-session');

function getRandomQuestion(req, res) {
    var keys = Object.keys(Question)
    Question.find({}, function(err, questions) {
        let question = questions[Math.floor(Math.random() * questions.length)];
        console.log(question._id)
        req.user.completedQuestions.push(question);
        req.user.save(function(err) {
            console.log(req.user.completedQuestions)
            res.render('question', {question});  
        })
    })
    // console.log(`completed questions: ${req.user.completedQuestions}`)
}

module.exports = {
    getRandomQuestion
}