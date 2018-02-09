var request =require('request');
var Leaderboard = require('../models/leaderboard');
var User = require('../models/user');


function leaderboardDetails(req, res) {
    User.find({}, function(err, users) {
        res.render('leaderboard', {title: 'Leaderboard', users})
    });
};
    

module.exports = leaderboardDetails;