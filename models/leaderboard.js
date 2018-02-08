var mongoose = require('mongoose');

var leaderboardSchema = new mongoose.Schema({
    player: String,
    rank: String,
    Score: Number
},
{
    timestamps: true
});

module.exports = mongoose.model('Leaderboard', leaderboardSchema);