var mongoose = require('mongoose');

var leaderboardSchema = new mongoose.Schema({
    player: String,
    score: Number
},
{
    timestamps: true
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);