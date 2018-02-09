const Question = require('../models/question');
const User = require('../models/user');
const session = require('express-session');
const request = require('request');

function getRandomQuestion(req, res) {
    var keys = Object.keys(Question)
    Question.find({}, function(err, questions, user) {
        if (req.user.completedQuestions.length === questions.length) {
            res.redirect('/leaderboard')
        }
        let question = questions[Math.floor(Math.random() * questions.length)];
        var newQ = newQuestion(req.user.completedQuestions, question._id);
        while ( !newQ && req.user.completedQuestions.length != questions.length) {
            question = questions[Math.floor(Math.random() * questions.length)];
            newQ = newQuestion(req.user.completedQuestions, question._id)
        }

        req.user.completedQuestions.push(question);
        req.user.save(function(err) {
            if (question.spotifySong) {
                getSong(question.spotifySong, question, res)
            } else {
                res.render('question', {question, song: null});  
            }
        });
    });
}

function newQuestion(arr, id) {
    for (var index=0; index<arr.length; index++) {
        if (arr[index].equals(id)) {
            return false;
        }
    }
    return true;
};

function getSong(songID, question, res, user) {
    request({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
            'Authorization': 'Basic NTVkOWQxOWViZjI3NDQ3ZmEzMTI0N2MwNTc0ZmY4YTI6ODYwOThmZGY3NmFkNDM5N2EwOGE2YWQ2ZTM5YjliYTg='
        },
        form: 'grant_type=client_credentials'
    },
    function (err, response, body) {
        let token = JSON.parse(response.body).access_token
        request({
            url: `https://api.spotify.com/v1/tracks/${songID}`,
            headers: {'Authorization': 'Bearer ' + token}
        }, 
        function (err, response, body){
            res.render('question', { question, song: response.body});
        });
    });
}

function checkSubmission(req, res) {
    // req.body = choice
    // req.params = question id
    Question.findById(req.params.id, function(error, question) {
        if (question.correctAnswer === parseInt(req.body.choice)) {
            req.user.score += 1000;
            req.user.save();
        }
    })
    res.redirect('/question');
}

module.exports = {
    getRandomQuestion,
    checkSubmission
}