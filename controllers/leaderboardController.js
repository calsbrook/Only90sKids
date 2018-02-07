var request =require('request');
var Leaderboard = require('../models/leaderboard')

function leaderboardDetails(req, res) {
    res.render('leaderboard', {title: 'Leaderboard'})
}

module.exports = leaderboardDetails;