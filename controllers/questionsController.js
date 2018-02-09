var Question = require('../models/question');
var User = require('../models/user');
var Leaderboard = require('../models/leaderboard');
var session = require('express-session');
var request = require('request');

function getRandomQuestion(req, res) {
    var keys = Object.keys(Question)
    Question.find({}, function(err, questions) {
        let question = questions[Math.floor(Math.random() * questions.length)];
        req.user.completedQuestions.push(question);
        req.user.save(function(err) {
            if (question.spotifySong) {
                console.log('Song Question')
                getSong(question.spotifySong, question, res)
            } else {
                // console.log(req.user.completedQuestions)
                console.log('Non Song Question')
                res.render('question', {question, song: null});  
            }
        })
    })
    // console.log(`completed questions: ${req.user.completedQuestions}`)
}

function getSong(songID, question, res) {
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
        console.log(songID)
        request({
            url: `https://api.spotify.com/v1/tracks/${songID}`,
            headers: {'Authorization': 'Bearer ' + token}
        }, 
        function (err, response, body){
            res.render('question', { question, song: response.body});
        });
    });
}

module.exports = {
    getRandomQuestion
}